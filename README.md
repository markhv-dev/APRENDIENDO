# SISTEMA APRENDIENDO

**Trabajo Final Individual - Desarrollo Web**
**Autor:** [Tu Nombre Completo]
**Universidad:** [Nombre de tu Universidad]
**Fecha:** Diciembre 2024

---

## 📋 Información del Proyecto para DUTIC

### Nombre del Proyecto
**Sistema APRENDIENDO - Plataforma Educativa de Desarrollo Web**

### URL del Repositorio GitHub
https://github.com/markhv-dev/APRENDIENDO

### URL del Proyecto Hospedado
**[INSERTAR URL AQUÍ]**

### Descripción
Sistema web completo para el aprendizaje de tecnologías de desarrollo web, que integra un frontend moderno con diseño dark theme, backend desarrollado en Python puro utilizando http.server, y base de datos MySQL con 3 tablas relacionadas. El sistema incluye autenticación de usuarios con gestión de sesiones seguras mediante tokens, formulario de contacto con almacenamiento en base de datos, panel de administración de mensajes protegido, y navegación dinámica con sidebar colapsable que organiza más de 100 páginas de contenido educativo sobre HTML, CSS, JavaScript y Python.

### Lenguajes y Tecnologías Utilizadas
- **HTML5** - Estructura semántica y formularios
- **CSS3** - Diseño responsive con Flexbox y Grid, animaciones y transiciones
- **JavaScript (ES6+)** - Fetch API, manipulación del DOM, validación de formularios
- **Python 3.x** - Backend con http.server, routing manual, autenticación
- **SQL (MySQL/MariaDB)** - Base de datos relacional con 3 tablas y operaciones CRUD

---

## 🚀 Características Principales

### Frontend (HTML + CSS + JavaScript)
- ✅ **5 páginas principales** con diseño dark theme profesional
- ✅ **Navegación dinámica** con sidebar colapsable
- ✅ **Layouts responsive** usando Flexbox y CSS Grid
- ✅ **Validación de formularios** en tiempo real
- ✅ **Componentes interactivos** (dropdown menus, modals)
- ✅ **Fetch API** para comunicación asíncrona con backend

### Backend (Python)
- ✅ **Python puro** con `http.server` (sin frameworks)
- ✅ **Routing manual** con manejo de GET y POST
- ✅ **Sistema de autenticación** con sesiones
- ✅ **API REST** para login, registro y contacto
- ✅ **Gestión de cookies** HTTP-only para seguridad

### Base de Datos (MySQL)
- ✅ **3 tablas relacionadas**: usuarios, mensajes, sesiones
- ✅ **Operaciones CRUD completas**
- ✅ **Autenticación segura** con password hashing
- ✅ **Página protegida** para administración de mensajes

---

## 🛠️ Requisitos Previos

- **Python 3.8+** (verificar con `python3 --version`)
- **MySQL/MariaDB** instalado y ejecutándose
- **Git** (opcional, para clonar el repositorio)
- **Navegador web moderno** (Chrome, Firefox, Edge)

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/[tu-usuario]/APRENDIENDO.git
cd APRENDIENDO
```

### 2. Instalar dependencias de Python

```bash
pip install mysql-connector-python
```

### 3. Configurar la Base de Datos

#### A) Crear la base de datos

```bash
# Iniciar sesión en MySQL
mysql -u root -p

# Ejecutar los siguientes comandos SQL:
CREATE DATABASE aprendiendo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'aprendiendo'@'localhost' IDENTIFIED BY 'aprendiendo123';
GRANT ALL PRIVILEGES ON aprendiendo_db.* TO 'aprendiendo'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### B) Crear las tablas

```bash
# Importar el schema
mysql -u aprendiendo -p aprendiendo_db < backend/schema.sql
```

O ejecutar manualmente:

```sql
USE aprendiendo_db;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre_completo VARCHAR(100),
    rol VARCHAR(20) DEFAULT 'usuario',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de mensajes de contacto
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    asunto VARCHAR(200),
    mensaje TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE
);

-- Tabla de sesiones
CREATE TABLE sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_expiracion TIMESTAMP,
    activa BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
```

### 4. Verificar configuración

Editar `backend/db_config.py` si es necesario:

```python
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'aprendiendo',
    'password': 'aprendiendo123',
    'database': 'aprendiendo_db',
}
```

---

## 🎯 Ejecución

### 1. Verificar que MySQL está corriendo

```bash
# Linux/Mac
sudo systemctl status mysql
# o
sudo systemctl status mariadb

# Windows - abrir MySQL Workbench o verificar servicios
```

### 2. Iniciar el servidor

```bash
cd backend
python3 server.py
```

Deberías ver:

```
======================================================================
🚀 SERVIDOR HTTP - SISTEMA APRENDIENDO
======================================================================
📍 Dirección: http://localhost:8000
🕐 Iniciado: 2024-12-XX XX:XX:XX
✅ Base de datos conectada correctamente
✅ Servidor escuchando en http://localhost:8000
======================================================================
```

### 3. Acceder a la aplicación

Abre tu navegador y visita:
- **Página principal:** http://localhost:8000
- **Login:** http://localhost:8000/login.html
- **Registro:** http://localhost:8000/register.html

---

## 👤 Uso del Sistema

### Crear una cuenta

1. Ir a http://localhost:8000/register.html
2. Completar el formulario:
   - Nombre completo
   - Usuario (3-20 caracteres)
   - Email válido
   - Contraseña (mínimo 6 caracteres)
3. Click en "Crear Cuenta"
4. Serás redirigido al login

### Iniciar sesión

1. Ir a http://localhost:8000/login.html
2. Ingresar email y contraseña
3. Click en "Iniciar Sesión"
4. Serás redirigido a la página principal del sistema (home.html)

### Enviar un mensaje de contacto

1. En la página principal (index.html), ir a la sección de contacto
2. Completar el formulario
3. Los mensajes se guardan en la base de datos

### Ver mensajes recibidos (requiere autenticación)

1. Iniciar sesión
2. Click en el icono de perfil → "Ver Mensajes"
3. Ver todos los mensajes de contacto recibidos
4. Marcar mensajes como leídos

---

## 📂 Estructura del Proyecto

```
APRENDIENDO/
├── index.html                  # Landing page
├── login.html                  # Página de inicio de sesión
├── register.html               # Página de registro
├── home.html                   # Dashboard principal (protegido)
├── mensajes.html               # Administración de mensajes (protegido)
│
├── backend/                    # Backend Python
│   ├── server.py              # Servidor HTTP principal
│   ├── db_config.py           # Configuración y operaciones de BD
│   └── schema.sql             # Schema de la base de datos
│
├── assets/                     # Recursos estáticos
│   ├── css/                   # Hojas de estilo
│   │   ├── sidebar.css
│   │   ├── glosario.css
│   │   └── keyboard-navigation.css
│   └── js/                    # JavaScript
│       ├── sidebar-component.js
│       └── keyboard-navigation.js
│
├── Lenguajes/                 # Contenido educativo
│   ├── HTML/                  # 10 módulos de HTML
│   ├── CSS/                   # 10 módulos de CSS
│   ├── JavaScript/            # 11 módulos de JavaScript
│   └── Python/                # 10 módulos de Python
│
├── Fundamentos/               # Fundamentos de desarrollo web
├── Comandos/                  # Git & GitHub
├── Frameworks/                # React, Vue, etc.
└── Herramientas/              # Docker, Nginx, etc.
```

---

## 🔒 Seguridad Implementada

- ✅ **Contraseñas hasheadas** con SHA-256
- ✅ **Tokens de sesión** generados con `secrets.token_urlsafe()`
- ✅ **Cookies HTTP-only** para prevenir XSS
- ✅ **Validación server-side** de todos los formularios
- ✅ **Protección de rutas** con autenticación
- ✅ **Sanitización de inputs** en formularios
- ✅ **Expiración automática** de sesiones (24 horas)

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| **Frontend** | HTML5, CSS3 (Flexbox/Grid), JavaScript ES6+ |
| **Backend** | Python 3.x (http.server) |
| **Base de Datos** | MySQL/MariaDB |
| **Autenticación** | Sesiones con tokens, Password hashing |
| **Librerías Python** | mysql-connector-python, hashlib, secrets |

---

## 📊 Funcionalidades Principales

### 1. Sistema de Autenticación
- Registro de usuarios con validación
- Login con email y contraseña
- Gestión de sesiones con tokens
- Logout con invalidación de sesión
- Rutas protegidas (home.html, mensajes.html)

### 2. Formulario de Contacto
- Validación de campos en frontend y backend
- Almacenamiento en MySQL
- Captura de metadata (IP, User-Agent)
- Feedback visual al usuario

### 3. Gestión de Mensajes
- Página protegida para administradores
- Listado de todos los mensajes recibidos
- Marcar mensajes como leídos
- Búsqueda y filtrado de mensajes

### 4. Sistema Educativo
- 100+ páginas de contenido
- Navegación dinámica con sidebar
- Más de 40 módulos de aprendizaje
- Glosarios interactivos
- Ejercicios prácticos

---

## 🐛 Solución de Problemas

### Error: "Error al conectar a base de datos"
```bash
# Verificar que MySQL está corriendo
sudo systemctl status mysql

# Verificar credenciales en backend/db_config.py
# Asegurarse de que la base de datos existe
mysql -u aprendiendo -p -e "SHOW DATABASES;"
```

### Error: "Address already in use"
```bash
# Matar proceso en puerto 8000
lsof -ti:8000 | xargs kill -9

# O cambiar el puerto en server.py (línea 28)
PORT = 8001  # Cambiar a otro puerto
```

### Error: "No module named 'mysql.connector'"
```bash
# Instalar el conector de MySQL
pip install mysql-connector-python
```

---

## 📚 Documentación Adicional

La documentación del trabajo final (PDF, PPT) está en una carpeta separada fuera del repositorio.

Para documentación técnica del sistema:
- Ver secciones anteriores de este README
- Código comentado en `backend/server.py` y `backend/db_config.py`
- Schema de base de datos en `backend/schema.sql`

---

## 🔮 Trabajo Futuro

- [ ] Implementar recuperación de contraseña por email
- [ ] Sistema de roles avanzado (admin, moderador, usuario)
- [ ] Dashboard con estadísticas y gráficos
- [ ] API REST completa con endpoints documentados
- [ ] Tests automatizados (unittest, pytest)
- [ ] Deployment en servidor remoto
- [ ] Integración con Redis para caché
- [ ] Sistema de notificaciones en tiempo real (WebSockets)

---

## 📄 Licencia

Este proyecto fue desarrollado como trabajo final para el curso de Desarrollo Web.
Uso educativo personal.

---

## 👨‍💻 Autor

**[Tu Nombre]**
- Email: [tu-email@ejemplo.com]
- GitHub: [https://github.com/tu-usuario](https://github.com/tu-usuario)
- Universidad: [Tu Universidad]

---

## 🙏 Agradecimientos

- Curso de Desarrollo Web - [Nombre del Profesor]
- Documentación de Python: https://docs.python.org/
- MySQL Documentation: https://dev.mysql.com/doc/
- MDN Web Docs: https://developer.mozilla.org/

---

**¡Gracias por revisar este proyecto!** 🚀

Para cualquier consulta o sugerencia, no dudes en contactarme.
