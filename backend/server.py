#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Servidor HTTP para Sistema APRENDIENDO
Trabajo Final Individual - Desarrollo Web

Servidor implementado con http.server (Python puro)
Maneja rutas y formularios manualmente sin frameworks
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse
import json
import os
import sys
import mimetypes
from datetime import datetime

# Agregar el directorio backend al path para importar db_config
sys.path.append(os.path.dirname(__file__))
import db_config

# ============================================================================
# CONFIGURACIÓN DEL SERVIDOR
# ============================================================================

HOST = 'localhost'
PORT = 8000
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ============================================================================
# HANDLER HTTP PERSONALIZADO
# ============================================================================

class AprendiendoHandler(BaseHTTPRequestHandler):
    """
    Handler personalizado para manejar requests HTTP.
    Implementa routing manual y procesamiento de formularios.
    """

    # Rutas públicas (no requieren autenticación)
    PUBLIC_ROUTES = ['/', '/index.html', '/login.html', '/contacto.html', '/api/login', '/api/contacto']

    def do_GET(self):
        """Maneja requests GET."""
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        # Ruta raíz → index.html
        if path == '/':
            path = '/index.html'

        # Ruta de logout
        if path == '/api/logout':
            self.handle_logout()
            return

        # Rutas protegidas: home.html y mensajes.html requieren autenticación
        if path in ['/home.html', '/mensajes.html']:
            if not self.verificar_autenticacion():
                self.redirect_to_login()
                return

        # Servir archivo estático
        self.serve_file(path)

    def do_POST(self):
        """Maneja requests POST."""
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        # API de login
        if path == '/api/login':
            self.handle_login()
            return

        # API de registro
        if path == '/api/register':
            self.handle_register()
            return

        # API de contacto
        if path == '/api/contacto':
            self.handle_contacto()
            return

        # API de marcar mensaje como leído
        if path == '/api/mensaje/marcar-leido':
            self.handle_marcar_leido()
            return

        # Ruta no encontrada
        self.send_error_response(404, 'Endpoint no encontrado')

    # ========================================================================
    # FUNCIONES DE AUTENTICACIÓN
    # ========================================================================

    def verificar_autenticacion(self):
        """Verifica si el usuario está autenticado mediante cookie de sesión."""
        cookies = self.headers.get('Cookie')
        if not cookies:
            return False

        # Extraer token de sesión
        for cookie in cookies.split(';'):
            cookie = cookie.strip()
            if cookie.startswith('session_token='):
                token = cookie.split('=')[1]
                sesion = db_config.verificar_sesion(token)
                return sesion is not None

        return False

    def obtener_sesion_actual(self):
        """Obtiene los datos de la sesión actual."""
        cookies = self.headers.get('Cookie')
        if not cookies:
            return None

        for cookie in cookies.split(';'):
            cookie = cookie.strip()
            if cookie.startswith('session_token='):
                token = cookie.split('=')[1]
                return db_config.verificar_sesion(token)

        return None

    def redirect_to_login(self):
        """Redirige al usuario a la página de login."""
        self.send_response(302)
        self.send_header('Location', '/login.html?redirect=' + self.path)
        self.end_headers()

    # ========================================================================
    # HANDLERS DE API
    # ========================================================================

    def handle_login(self):
        """Procesa el formulario de login."""
        try:
            # Leer datos del formulario
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            params = parse_qs(post_data)

            email = params.get('email', [''])[0]
            password = params.get('password', [''])[0]

            # Validar que no estén vacíos
            if not email or not password:
                self.send_json_response({'success': False, 'error': 'Email y contraseña requeridos'})
                return

            # Verificar credenciales
            usuario = db_config.verificar_credenciales_por_email(email, password)

            if usuario:
                # Crear sesión
                ip_address = self.client_address[0]
                user_agent = self.headers.get('User-Agent', '')
                token = db_config.crear_sesion(usuario['id'], ip_address, user_agent)

                if token:
                    # Login exitoso - establecer cookie y redirigir
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    # Cookie de sesión válida por 24 horas
                    self.send_header('Set-Cookie', f'session_token={token}; Path=/; Max-Age=86400; HttpOnly')
                    self.end_headers()

                    response = {
                        'success': True,
                        'message': 'Login exitoso',
                        'user': {
                            'username': usuario['username'],
                            'email': usuario['email'],
                            'rol': usuario['rol']
                        },
                        'redirect': '/home.html'
                    }
                    self.wfile.write(json.dumps(response).encode('utf-8'))
                else:
                    self.send_json_response({'success': False, 'error': 'Error al crear sesión'})
            else:
                self.send_json_response({'success': False, 'error': 'Credenciales inválidas'})

        except Exception as e:
            print(f"Error en handle_login: {e}")
            self.send_json_response({'success': False, 'error': str(e)})

    def handle_logout(self):
        """Cierra la sesión del usuario."""
        cookies = self.headers.get('Cookie')
        if cookies:
            for cookie in cookies.split(';'):
                cookie = cookie.strip()
                if cookie.startswith('session_token='):
                    token = cookie.split('=')[1]
                    db_config.cerrar_sesion(token)

        # Redirigir a login
        self.send_response(302)
        self.send_header('Location', '/login.html')
        self.send_header('Set-Cookie', 'session_token=; Path=/; Max-Age=0')
        self.end_headers()

    def handle_register(self):
        """Procesa el formulario de registro."""
        try:
            # Leer datos del formulario
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            params = parse_qs(post_data)

            nombre_completo = params.get('nombre_completo', [''])[0]
            username = params.get('username', [''])[0]
            email = params.get('email', [''])[0]
            password = params.get('password', [''])[0]

            # Validación básica
            if not nombre_completo or not username or not email or not password:
                self.send_json_response({'success': False, 'error': 'Todos los campos son obligatorios'})
                return

            # Validar formato de username
            import re
            if not re.match(r'^[a-zA-Z0-9_]{3,20}$', username):
                self.send_json_response({'success': False, 'error': 'Usuario inválido. Usa 3-20 caracteres (letras, números, guión bajo)'})
                return

            # Validar longitud de contraseña
            if len(password) < 6:
                self.send_json_response({'success': False, 'error': 'La contraseña debe tener al menos 6 caracteres'})
                return

            # Crear usuario en la base de datos
            success = db_config.crear_usuario(username, password, email, nombre_completo)

            if success:
                self.send_json_response({
                    'success': True,
                    'message': '¡Cuenta creada exitosamente! Redirigiendo al login...'
                })
            else:
                self.send_json_response({
                    'success': False,
                    'error': 'El usuario o email ya existe. Intenta con otros datos.'
                })

        except Exception as e:
            print(f"Error en handle_register: {e}")
            self.send_json_response({'success': False, 'error': str(e)})

    def handle_contacto(self):
        """Procesa el formulario de contacto."""
        try:
            # Leer datos del formulario
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            params = parse_qs(post_data)

            nombre = params.get('nombre', [''])[0]
            email = params.get('email', [''])[0]
            asunto = params.get('asunto', [''])[0]
            mensaje = params.get('mensaje', [''])[0]

            # Validación básica
            if not nombre or not email or not mensaje:
                self.send_json_response({'success': False, 'error': 'Todos los campos son requeridos'})
                return

            # Guardar en base de datos
            ip_address = self.client_address[0]
            user_agent = self.headers.get('User-Agent', '')

            success = db_config.guardar_mensaje(nombre, email, asunto, mensaje, ip_address, user_agent)

            if success:
                self.send_json_response({
                    'success': True,
                    'message': 'Mensaje enviado correctamente. Gracias por contactarnos.'
                })
            else:
                self.send_json_response({'success': False, 'error': 'Error al guardar el mensaje'})

        except Exception as e:
            print(f"Error en handle_contacto: {e}")
            self.send_json_response({'success': False, 'error': str(e)})

    def handle_marcar_leido(self):
        """Marca un mensaje como leído."""
        if not self.verificar_autenticacion():
            self.send_json_response({'success': False, 'error': 'No autenticado'}, status_code=401)
            return

        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            params = parse_qs(post_data)

            mensaje_id = params.get('id', [''])[0]

            if not mensaje_id:
                self.send_json_response({'success': False, 'error': 'ID de mensaje requerido'})
                return

            success = db_config.marcar_mensaje_leido(int(mensaje_id))

            if success:
                self.send_json_response({'success': True, 'message': 'Mensaje marcado como leído'})
            else:
                self.send_json_response({'success': False, 'error': 'Error al marcar mensaje'})

        except Exception as e:
            print(f"Error en handle_marcar_leido: {e}")
            self.send_json_response({'success': False, 'error': str(e)})

    # ========================================================================
    # FUNCIONES AUXILIARES
    # ========================================================================

    def serve_file(self, path):
        """Sirve un archivo estático."""
        try:
            # Construir ruta absoluta
            file_path = os.path.join(BASE_DIR, path.lstrip('/'))

            # Verificar que el archivo existe
            if not os.path.exists(file_path) or not os.path.isfile(file_path):
                self.send_error(404, 'Archivo no encontrado')
                return

            # Obtener tipo MIME
            content_type, _ = mimetypes.guess_type(file_path)
            if content_type is None:
                content_type = 'application/octet-stream'

            # Leer y enviar archivo
            with open(file_path, 'rb') as f:
                content = f.read()

            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', len(content))
            self.end_headers()
            self.wfile.write(content)

        except Exception as e:
            print(f"Error sirviendo archivo {path}: {e}")
            self.send_error(500, 'Error interno del servidor')

    def send_json_response(self, data, status_code=200):
        """Envía una respuesta JSON."""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def send_error_response(self, status_code, message):
        """Envía una respuesta de error."""
        self.send_error(status_code, message)

    def log_message(self, format, *args):
        """Sobrescribir para logging personalizado."""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        print(f"[{timestamp}] {self.address_string()} - {format % args}")

# ============================================================================
# FUNCIÓN PRINCIPAL
# ============================================================================

def run_server():
    """Inicia el servidor HTTP."""
    print("=" * 70)
    print("🚀 SERVIDOR HTTP - SISTEMA APRENDIENDO")
    print("=" * 70)
    print(f"📍 Dirección: http://{HOST}:{PORT}")
    print(f"📁 Directorio base: {BASE_DIR}")
    print(f"🕐 Iniciado: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 70)
    print("\n⚠️  Asegúrate de que MySQL esté corriendo y la BD esté configurada")
    print("📖 Para detener el servidor: Ctrl+C")
    print("\n" + "=" * 70)

    # Probar conexión a BD
    print("\n🔍 Probando conexión a base de datos...")
    if db_config.test_connection():
        print("✅ Base de datos conectada correctamente\n")
    else:
        print("❌ Error al conectar a base de datos")
        print("⚠️  El servidor iniciará pero las funciones de BD no funcionarán\n")

    # Crear servidor
    server = HTTPServer((HOST, PORT), AprendiendoHandler)

    print(f"✅ Servidor escuchando en http://{HOST}:{PORT}\n")
    print("📄 Rutas disponibles:")
    print("   - http://localhost:8000/              → Página principal")
    print("   - http://localhost:8000/login.html    → Login")
    print("   - http://localhost:8000/contacto.html → Formulario contacto")
    print("   - http://localhost:8000/mensajes.html → Ver mensajes (protegido)")
    print("\n" + "=" * 70 + "\n")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\n" + "=" * 70)
        print("🛑 Servidor detenido por el usuario")
        print("=" * 70)
        server.shutdown()

# ============================================================================
# PUNTO DE ENTRADA
# ============================================================================

if __name__ == "__main__":
    run_server()
