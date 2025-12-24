#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Módulo de configuración y conexión a MySQL
Sistema APRENDIENDO - Trabajo Final Individual

Este módulo maneja:
- Conexión a la base de datos MySQL
- Operaciones CRUD para usuarios y mensajes
- Gestión de sesiones
- Validación de credenciales
"""

import mysql.connector
from mysql.connector import Error
import hashlib
import secrets
from datetime import datetime, timedelta
from typing import Optional, Dict, List, Tuple

# ============================================================================
# CONFIGURACIÓN DE LA BASE DE DATOS
# ============================================================================

DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'aprendiendo',
    'password': 'aprendiendo123',
    'database': 'aprendiendo_db',
    'charset': 'utf8mb4',
    'collation': 'utf8mb4_unicode_ci',
    'raise_on_warnings': True
}

# ============================================================================
# FUNCIONES DE CONEXIÓN
# ============================================================================

def get_connection():
    """
    Establece y retorna una conexión a la base de datos MySQL.

    Returns:
        mysql.connector.connection.MySQLConnection: Conexión activa
        None: Si hay error en la conexión
    """
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None

def close_connection(connection):
    """Cierra la conexión a la base de datos."""
    if connection and connection.is_connected():
        connection.close()

# ============================================================================
# FUNCIONES DE USUARIOS
# ============================================================================

def verificar_credenciales(username: str, password: str) -> Optional[Dict]:
    """
    Verifica las credenciales de un usuario por username.

    Args:
        username: Nombre de usuario
        password: Contraseña (sin hashear)

    Returns:
        Dict con datos del usuario si las credenciales son válidas
        None si las credenciales son inválidas
    """
    connection = get_connection()
    if not connection:
        return None

    try:
        cursor = connection.cursor(dictionary=True)

        # Consultar usuario
        query = """
            SELECT id, username, password, email, nombre_completo, rol
            FROM usuarios
            WHERE username = %s
        """
        cursor.execute(query, (username,))
        usuario = cursor.fetchone()

        if usuario and usuario['password'] == password:
            # Actualizar último acceso
            cursor.execute(update_query, (usuario['id'],))
            connection.commit()

            return usuario

        return None

    except Error as e:
        print(f"Error al verificar credenciales: {e}")
        return None
    finally:
        cursor.close()
        close_connection(connection)

def verificar_credenciales_por_email(email: str, password: str) -> Optional[Dict]:
    """
    Verifica las credenciales de un usuario por email.

    Args:
        email: Email del usuario
        password: Contraseña (sin hashear)

    Returns:
        Dict con datos del usuario si las credenciales son válidas
        None si las credenciales son inválidas
    """
    connection = get_connection()
    if not connection:
        return None

    try:
        cursor = connection.cursor(dictionary=True)

        # Consultar usuario por email
        query = """
            SELECT id, username, password, email, nombre_completo, rol
            FROM usuarios
            WHERE email = %s
        """
        cursor.execute(query, (email,))
        usuario = cursor.fetchone()

        if usuario and usuario['password'] == password:
            # Actualizar último acceso
            cursor.execute(update_query, (usuario['id'],))
            connection.commit()

            return usuario

        return None

    except Error as e:
        print(f"Error al verificar credenciales por email: {e}")
        return None
    finally:
        cursor.close()
        close_connection(connection)

def obtener_usuario_por_id(usuario_id: int) -> Optional[Dict]:
    """Obtiene un usuario por su ID."""
    connection = get_connection()
    if not connection:
        return None

    try:
        cursor = connection.cursor(dictionary=True)
        query = "SELECT * FROM usuarios WHERE id = %s"
        cursor.execute(query, (usuario_id,))
        return cursor.fetchone()
    except Error as e:
        print(f"Error al obtener usuario: {e}")
        return None
    finally:
        cursor.close()
        close_connection(connection)

def crear_usuario(username: str, password: str, email: str, nombre_completo: str = None) -> bool:
    """
    Crea un nuevo usuario en la base de datos.

    Returns:
        True si se creó exitosamente, False en caso contrario
    """
    connection = get_connection()
    if not connection:
        return False

    try:
        cursor = connection.cursor()
        query = """
            INSERT INTO usuarios (username, password, email, nombre_completo)
            VALUES (%s, %s, %s, %s)
        """
        cursor.execute(query, (username, password, email, nombre_completo))
        connection.commit()
        return True
    except Error as e:
        print(f"Error al crear usuario: {e}")
        return False
    finally:
        cursor.close()
        close_connection(connection)

# ============================================================================
# FUNCIONES DE SESIONES
# ============================================================================

def crear_sesion(usuario_id: int, ip_address: str = None, user_agent: str = None) -> Optional[str]:
    """
    Crea una nueva sesión para un usuario.

    Returns:
        Token de sesión si se creó exitosamente, None en caso contrario
    """
    connection = get_connection()
    if not connection:
        return None

    try:
        # Generar token único
        token = secrets.token_urlsafe(32)

        # Expiración: 24 horas
        expires_at = datetime.now() + timedelta(hours=24)

        cursor = connection.cursor()
        query = """
            INSERT INTO sesiones (usuario_id, session_token, ip_address, user_agent, expires_at)
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (usuario_id, token, ip_address, user_agent, expires_at))
        connection.commit()

        return token

    except Error as e:
        print(f"Error al crear sesión: {e}")
        return None
    finally:
        cursor.close()
        close_connection(connection)

def verificar_sesion(token: str) -> Optional[Dict]:
    """
    Verifica si una sesión es válida y no ha expirado.

    Returns:
        Dict con datos del usuario si la sesión es válida, None en caso contrario
    """
    connection = get_connection()
    if not connection:
        return None

    try:
        cursor = connection.cursor(dictionary=True)
        query = """
            SELECT s.*, u.username, u.email, u.rol
            FROM sesiones s
            JOIN usuarios u ON s.usuario_id = u.id
            WHERE s.session_token = %s AND s.expires_at > NOW()
        """
        cursor.execute(query, (token,))
        return cursor.fetchone()
    except Error as e:
        print(f"Error al verificar sesión: {e}")
        return None
    finally:
        cursor.close()
        close_connection(connection)

def cerrar_sesion(token: str) -> bool:
    """Cierra una sesión eliminándola de la base de datos."""
    connection = get_connection()
    if not connection:
        return False

    try:
        cursor = connection.cursor()
        query = "DELETE FROM sesiones WHERE session_token = %s"
        cursor.execute(query, (token,))
        connection.commit()
        return True
    except Error as e:
        print(f"Error al cerrar sesión: {e}")
        return False
    finally:
        cursor.close()
        close_connection(connection)

# ============================================================================
# FUNCIONES DE MENSAJES
# ============================================================================

def guardar_mensaje(nombre: str, email: str, asunto: str, mensaje: str,
                   ip_address: str = None, user_agent: str = None) -> bool:
    """
    Guarda un mensaje del formulario de contacto.

    Returns:
        True si se guardó exitosamente, False en caso contrario
    """
    connection = get_connection()
    if not connection:
        return False

    try:
        cursor = connection.cursor()
        query = """
            INSERT INTO mensajes (nombre, email, asunto, mensaje, ip_address, user_agent)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (nombre, email, asunto, mensaje, ip_address, user_agent))
        connection.commit()
        return True
    except Error as e:
        print(f"Error al guardar mensaje: {e}")
        return False
    finally:
        cursor.close()
        close_connection(connection)

def obtener_mensajes(limit: int = 100, solo_no_leidos: bool = False) -> List[Dict]:
    """
    Obtiene mensajes de la base de datos.

    Args:
        limit: Número máximo de mensajes a retornar
        solo_no_leidos: Si es True, solo retorna mensajes no leídos

    Returns:
        Lista de diccionarios con los mensajes
    """
    connection = get_connection()
    if not connection:
        return []

    try:
        cursor = connection.cursor(dictionary=True)

        if solo_no_leidos:
            query = """
                SELECT * FROM mensajes
                WHERE leido = FALSE
                ORDER BY fecha DESC
                LIMIT %s
            """
        else:
            query = "SELECT * FROM mensajes ORDER BY fecha DESC LIMIT %s"

        cursor.execute(query, (limit,))
        return cursor.fetchall()

    except Error as e:
        print(f"Error al obtener mensajes: {e}")
        return []
    finally:
        cursor.close()
        close_connection(connection)

def marcar_mensaje_leido(mensaje_id: int) -> bool:
    """Marca un mensaje como leído."""
    connection = get_connection()
    if not connection:
        return False

    try:
        cursor = connection.cursor()
        query = "UPDATE mensajes SET leido = TRUE WHERE id = %s"
        cursor.execute(query, (mensaje_id,))
        connection.commit()
        return True
    except Error as e:
        print(f"Error al marcar mensaje como leído: {e}")
        return False
    finally:
        cursor.close()
        close_connection(connection)

def obtener_estadisticas_mensajes() -> Dict:
    """
    Obtiene estadísticas de mensajes.

    Returns:
        Dict con estadísticas (total, leídos, no leídos)
    """
    connection = get_connection()
    if not connection:
        return {'total': 0, 'leidos': 0, 'no_leidos': 0}

    try:
        cursor = connection.cursor(dictionary=True)

        # Total de mensajes
        cursor.execute("SELECT COUNT(*) as total FROM mensajes")
        total = cursor.fetchone()['total']

        # Mensajes leídos
        cursor.execute("SELECT COUNT(*) as leidos FROM mensajes WHERE leido = TRUE")
        leidos = cursor.fetchone()['leidos']

        return {
            'total': total,
            'leidos': leidos,
            'no_leidos': total - leidos
        }

    except Error as e:
        print(f"Error al obtener estadísticas: {e}")
        return {'total': 0, 'leidos': 0, 'no_leidos': 0}
    finally:
        cursor.close()
        close_connection(connection)

# ============================================================================
# FUNCIÓN DE PRUEBA
# ============================================================================

def test_connection():
    """Prueba la conexión a la base de datos."""
    connection = get_connection()
    if connection:
        print("✅ Conexión exitosa a MySQL")
        db_info = connection.get_server_info()
        print(f"   Versión del servidor: {db_info}")
        close_connection(connection)
        return True
    else:
        print("❌ Error al conectar a MySQL")
        return False

# ============================================================================
# EJECUCIÓN DIRECTA
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("Probando conexión a la base de datos...")
    print("=" * 60)
    test_connection()
