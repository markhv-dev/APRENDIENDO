# 🚀 Backend - Sistema APRENDIENDO

Este directorio contiene todo el código del backend del Sistema APRENDIENDO, implementado con **Python puro** usando `http.server` (sin frameworks).

## 📁 Estructura

```
backend/
├── server.py       # Servidor HTTP con routing manual
├── db_config.py    # Conexión y operaciones MySQL
├── database.sql    # Script para crear base de datos
└── README.md       # Este archivo
```

---

## 🔧 Requisitos Previos

### 1. Python 3.x
```bash
python3 --version  # Debe ser 3.7 o superior
```

### 2. MySQL 8.x
```bash
mysql --version
```

### 3. Librería mysql-connector-python
```bash
pip3 install mysql-connector-python
```

---

## 📦 Instalación

### Paso 1: Instalar MySQL Connector

```bash
# Opción 1: usando pip
pip3 install mysql-connector-python

# Opción 2: usando apt (Ubuntu/Debian)
sudo apt-get install python3-mysql.connector

# Verificar instalación
python3 -c "import mysql.connector; print('OK')"
```

### Paso 2: Configurar MySQL

1. **Iniciar servicio MySQL:**
```bash
sudo systemctl start mysql
# o
sudo service mysql start
```

2. **Acceder a MySQL:**
```bash
mysql -u root -p
```

3. **Crear base de datos:**
```bash
# Desde MySQL shell
source /ruta/al/proyecto/backend/database.sql

# O desde terminal
mysql -u root -p < backend/database.sql
```

### Paso 3: Configurar credenciales

Editar `backend/db_config.py` líneas 24-30:

```python
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',          # ← Cambiar si usas otro usuario
    'password': '',          # ← Agregar tu contraseña de MySQL
    'database': 'aprendiendo_db',
    ...
}
```

### Paso 4: Probar conexión

```bash
cd backend/
python3 db_config.py
```

Deberías ver:
```
============================================================
Probando conexión a la base de datos...
============================================================
✅ Conexión exitosa a MySQL
   Versión del servidor: 8.0.xx
```

---

## 🚀 Ejecutar el Servidor

### Iniciar servidor:

```bash
# Desde la raíz del proyecto
python3 backend/server.py
```

Verás:
```
======================================================================
🚀 SERVIDOR HTTP - SISTEMA APRENDIENDO
======================================================================
📍 Dirección: http://localhost:8000
📁 Directorio base: /ruta/al/proyecto
🕐 Iniciado: 2025-12-23 20:45:00
======================================================================

✅ Servidor escuchando en http://localhost:8000

📄 Rutas disponibles:
   - http://localhost:8000/              → Página principal
   - http://localhost:8000/login.html    → Login
   - http://localhost:8000/contacto.html → Formulario contacto
   - http://localhost:8000/mensajes.html → Ver mensajes (protegido)
```

### Detener servidor:

Presionar `Ctrl + C`

---

## 🌐 Rutas del Servidor

### Páginas HTML (GET)

| Ruta | Descripción | Protegida |
|------|-------------|-----------|
| `/` o `/index.html` | Página principal | No |
| `/login.html` | Formulario de login | No |
| `/contacto.html` | Formulario de contacto | No |
| `/mensajes.html` | Ver mensajes recibidos | **Sí** |

### API Endpoints (POST)

| Endpoint | Descripción | Body |
|----------|-------------|------|
| `/api/login` | Autenticación de usuario | `username`, `password` |
| `/api/contacto` | Enviar mensaje de contacto | `nombre`, `email`, `asunto`, `mensaje` |
| `/api/mensaje/marcar-leido` | Marcar mensaje como leído | `id` |
| `/api/logout` | Cerrar sesión | - |

---

## 🔒 Autenticación

El sistema usa **sesiones basadas en cookies**:

1. Usuario hace login en `/login.html`
2. Servidor verifica credenciales en BD
3. Si son válidas, crea sesión con token único
4. Token se guarda en cookie `session_token`
5. Cookie es válida por 24 horas
6. Páginas protegidas verifican cookie antes de servir

### Usuarios de Prueba

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| `admin` | `admin123` | admin |
| `usuario` | `usuario123` | usuario |

---

## 🗄️ Base de Datos

### Tablas

#### 1. `usuarios`
```sql
- id (PK)
- username (UNIQUE)
- password
- email (UNIQUE)
- nombre_completo
- rol (admin/usuario)
- activo
- ultimo_acceso
- created_at
- updated_at
```

#### 2. `mensajes`
```sql
- id (PK)
- nombre
- email
- asunto
- mensaje
- ip_address
- user_agent
- leido (BOOLEAN)
- fecha
```

#### 3. `sesiones`
```sql
- id (PK)
- usuario_id (FK → usuarios.id)
- session_token (UNIQUE)
- ip_address
- user_agent
- expires_at
- created_at
```

---

## 📝 Funciones de db_config.py

### Usuarios
- `verificar_credenciales(username, password)` - Validar login
- `obtener_usuario_por_id(id)` - Obtener usuario
- `crear_usuario(...)` - Crear nuevo usuario

### Sesiones
- `crear_sesion(usuario_id, ...)` - Crear sesión de login
- `verificar_sesion(token)` - Verificar si sesión es válida
- `cerrar_sesion(token)` - Cerrar sesión (logout)

### Mensajes
- `guardar_mensaje(...)` - Guardar mensaje de contacto
- `obtener_mensajes(limit, solo_no_leidos)` - Obtener mensajes
- `marcar_mensaje_leido(id)` - Marcar como leído
- `obtener_estadisticas_mensajes()` - Estadísticas de mensajes

---

## 🧪 Pruebas

### 1. Probar conexión a BD:
```bash
python3 backend/db_config.py
```

### 2. Ver datos en MySQL:
```sql
-- Conectar a MySQL
mysql -u root -p aprendiendo_db

-- Ver usuarios
SELECT * FROM usuarios;

-- Ver mensajes
SELECT * FROM mensajes ORDER BY fecha DESC;

-- Ver sesiones activas
SELECT * FROM sesiones WHERE expires_at > NOW();
```

### 3. Probar formulario de contacto:
1. Abrir http://localhost:8000/contacto.html
2. Llenar formulario
3. Enviar
4. Verificar en MySQL: `SELECT * FROM mensajes;`

### 4. Probar login:
1. Abrir http://localhost:8000/login.html
2. Usuario: `admin` / Contraseña: `admin123`
3. Debe redirigir a `/mensajes.html`

---

## 🛠️ Solución de Problemas

### Error: "No module named 'mysql.connector'"
```bash
pip3 install mysql-connector-python
```

### Error: "Access denied for user"
- Verificar credenciales en `db_config.py`
- Verificar que MySQL esté corriendo: `sudo systemctl status mysql`

### Error: "Unknown database 'aprendiendo_db'"
```bash
mysql -u root -p < backend/database.sql
```

### Puerto 8000 ya en uso
Cambiar `PORT` en `server.py` línea 22:
```python
PORT = 8080  # o cualquier otro puerto disponible
```

---

## 📚 Recursos

- [Documentación http.server](https://docs.python.org/3/library/http.server.html)
- [MySQL Connector Python](https://dev.mysql.com/doc/connector-python/en/)
- [BaseHTTPRequestHandler](https://docs.python.org/3/library/http.server.html#http.server.BaseHTTPRequestHandler)

---

**Última actualización:** 2025-12-23
