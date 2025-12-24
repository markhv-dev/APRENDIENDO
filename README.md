# SISTEMA APRENDIENDO
### Plataforma Educativa de Desarrollo Web

---

## INFORMACIÓN DEL PROYECTO

**Trabajo Final Individual - Desarrollo Web**
**Estudiante:** Mark Harry Hancco Vargas
**Universidad:** Universidad Nacional de San Agustín
**Docente:** Prof. Marco Wilfredo Aedo Lopez
**Fecha de Presentación:** Diciembre 2024

---

## DATOS PARA DUTIC

### Nombre del Proyecto
Sistema APRENDIENDO - Plataforma Educativa de Desarrollo Web

### URL del Repositorio GitHub
```
https://github.com/markhv-dev/APRENDIENDO
```

### URL del Proyecto Hospedado
```
https://markhvdev.pythonanywhere.com
```

### Descripción del Sistema

Sistema web integral desarrollado como trabajo final del curso de Desarrollo Web, que implementa una plataforma educativa completa para el aprendizaje de tecnologías de desarrollo web. El proyecto integra un frontend moderno con diseño dark theme responsivo, backend desarrollado en Python puro sin frameworks externos, y base de datos MySQL con arquitectura relacional de 3 tablas.

El sistema incluye las siguientes funcionalidades principales:
- Sistema de autenticación de usuarios con gestión de sesiones seguras mediante tokens criptográficos
- Formulario de contacto con almacenamiento persistente en base de datos
- Panel de administración protegido para gestión de mensajes
- Navegación dinámica mediante sidebar colapsable
- Más de 100 páginas de contenido educativo organizado en módulos temáticos sobre HTML5, CSS3, JavaScript y Python

### Tecnologías Implementadas

El proyecto cumple con los requisitos técnicos establecidos, utilizando las siguientes tecnologías:

| Tecnología | Descripción de Uso |
|------------|-------------------|
| **HTML5** | Estructura semántica del documento, formularios con validación nativa |
| **CSS3** | Diseño responsive mediante Flexbox y CSS Grid, animaciones y transiciones |
| **JavaScript (ES6+)** | Fetch API para comunicación asíncrona, manipulación del DOM, validación de formularios |
| **Python 3.x** | Backend con módulo http.server, routing manual, autenticación de usuarios |
| **SQL (MySQL)** | Base de datos relacional con 3 tablas, operaciones CRUD completas |

---

## CUMPLIMIENTO DE REQUISITOS

### Requisitos del Frontend
- Mínimo 5 páginas HTML con estructura semántica
- CSS3 con layouts responsive (Flexbox y Grid)
- JavaScript para interactividad y validación
- Diseño profesional y consistente

### Requisitos del Backend
- Servidor Python sin frameworks externos (http.server)
- Manejo de rutas GET y POST
- Procesamiento de formularios
- Autenticación de usuarios

### Requisitos de Base de Datos
- MySQL con mínimo 3 tablas relacionadas
- Operaciones CRUD implementadas
- Integridad referencial mediante Foreign Keys
- Almacenamiento persistente de datos

---

## ARQUITECTURA DEL SISTEMA

### Estructura de Base de Datos

El sistema implementa una arquitectura relacional compuesta por tres tablas:

**1. Tabla `usuarios`**
- Almacena información de usuarios registrados
- Password hashing con SHA-256 para seguridad
- Campos: id, username, email, password_hash, nombre_completo, rol, fecha_creacion

**2. Tabla `mensajes`**
- Registra mensajes del formulario de contacto
- Almacena metadata (IP, User-Agent) para auditoría
- Campos: id, nombre, email, asunto, mensaje, ip_address, user_agent, fecha_envio, leido

**3. Tabla `sesiones`**
- Gestiona sesiones activas de usuarios autenticados
- Tokens generados con secrets.token_urlsafe() para seguridad
- Campos: id, usuario_id (FK), token, ip_address, user_agent, fecha_creacion, fecha_expiracion, activa
- Relación: Foreign Key a tabla usuarios con ON DELETE CASCADE

### Diagrama de Relaciones

```
usuarios (1) -----> (N) sesiones
    |
    | usuario_id (FK)
    v
```

---

## CARACTERÍSTICAS DE SEGURIDAD IMPLEMENTADAS

El sistema implementa múltiples capas de seguridad siguiendo las mejores prácticas de desarrollo web:

- **Autenticación segura**: Contraseñas hasheadas con SHA-256 antes de almacenamiento
- **Gestión de sesiones**: Tokens criptográficos generados con módulo secrets de Python
- **Cookies HTTP-only**: Prevención de ataques XSS mediante cookies no accesibles desde JavaScript
- **Validación dual**: Validación tanto en frontend (JavaScript) como backend (Python)
- **Sanitización de inputs**: Prevención de inyección SQL mediante consultas parametrizadas
- **Expiración de sesiones**: Tokens con validez de 24 horas para limitar ventana de exposición
- **Protección de rutas**: Middleware de autenticación para páginas administrativas

---

## ESTRUCTURA DEL PROYECTO

```
APRENDIENDO/
│
├── index.html                  # Landing page pública
├── login.html                  # Página de autenticación
├── register.html               # Registro de nuevos usuarios
├── home.html                   # Dashboard principal (protegido)
├── mensajes.html               # Panel de administración (protegido)
│
├── backend/                    # Capa de servidor
│   ├── server.py              # Servidor HTTP principal
│   ├── flask_app.py           # Aplicación Flask para WSGI (PythonAnywhere)
│   ├── db_config.py           # Gestor de base de datos
│   └── schema.sql             # Schema de base de datos
│
├── assets/                     # Recursos estáticos
│   ├── css/                   # Hojas de estilo
│   │   ├── sidebar.css
│   │   ├── glosario.css
│   │   └── keyboard-navigation.css
│   └── js/                    # Scripts JavaScript
│       ├── sidebar-component.js
│       └── keyboard-navigation.js
│
├── Lenguajes/                 # Contenido educativo
│   ├── HTML/                  # 10 módulos de HTML5
│   ├── CSS/                   # 10 módulos de CSS3
│   ├── JavaScript/            # 11 módulos de JavaScript
│   └── Python/                # 10 módulos de Python
│
├── Fundamentos/               # Fundamentos de desarrollo web
├── Comandos/                  # Git & GitHub
├── Frameworks/                # React, Vue, Angular
└── Herramientas/              # Docker, Nginx, etc.
```

---

## FUNCIONALIDADES PRINCIPALES

### 1. Sistema de Autenticación y Autorización

**Registro de Usuarios**
- Formulario con validación de campos en tiempo real
- Verificación de unicidad de username y email
- Hashing automático de contraseñas antes de almacenamiento
- Redirección automática a página de login tras registro exitoso

**Inicio de Sesión**
- Autenticación mediante email y contraseña
- Generación de token de sesión con validez de 24 horas
- Cookie HTTP-only para almacenamiento seguro del token
- Redirección a dashboard según rol del usuario

**Gestión de Sesiones**
- Verificación de token en cada request a rutas protegidas
- Invalidación automática de sesiones expiradas
- Logout con eliminación de token de base de datos
- Registro de IP y User-Agent para auditoría

### 2. Formulario de Contacto

**Características**
- Validación de campos requeridos en frontend y backend
- Almacenamiento persistente en tabla mensajes
- Captura de metadata (dirección IP, navegador) para análisis
- Feedback visual al usuario tras envío exitoso
- Prevención de spam mediante validación de formato de email

**Campos del Formulario**
- Nombre completo (requerido)
- Email (requerido, validación de formato)
- Asunto (opcional)
- Mensaje (requerido, textarea)

### 3. Panel de Administración de Mensajes

**Funcionalidades Administrativas**
- Acceso restringido mediante autenticación obligatoria
- Listado de todos los mensajes recibidos ordenados por fecha
- Marcado de mensajes como leídos/no leídos
- Visualización de metadata (IP, User-Agent, fecha de envío)
- Interfaz responsive para gestión desde cualquier dispositivo

### 4. Plataforma Educativa

**Contenido Organizado**
- Más de 100 páginas de contenido educativo
- 41 módulos temáticos distribuidos en 4 categorías
- Navegación mediante sidebar colapsable dinámico
- Glosarios interactivos de términos técnicos
- Ejemplos de código con sintaxis destacada

**Categorías de Contenido**
- **Lenguajes**: HTML5, CSS3, JavaScript, Python
- **Fundamentos**: Arquitectura web, protocolos HTTP/HTTPS
- **Comandos**: Git, GitHub, terminal
- **Frameworks**: React, Vue, Angular (introducción)
- **Herramientas**: Docker, Nginx, VS Code

---

## INSTALACIÓN Y EJECUCIÓN LOCAL

### Requisitos Previos

- Python 3.8 o superior
- MySQL/MariaDB 5.7 o superior
- Git (opcional, para clonar repositorio)
- Navegador web moderno (Chrome 90+, Firefox 88+, Edge 90+)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/markhv-dev/APRENDIENDO.git
cd APRENDIENDO
```

### Paso 2: Instalar Dependencias de Python

```bash
pip install mysql-connector-python
```

### Paso 3: Configurar Base de Datos

**A) Crear base de datos y usuario**

```bash
mysql -u root -p
```

```sql
CREATE DATABASE aprendiendo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'aprendiendo'@'localhost' IDENTIFIED BY 'aprendiendo123';
GRANT ALL PRIVILEGES ON aprendiendo_db.* TO 'aprendiendo'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**B) Importar schema**

```bash
mysql -u aprendiendo -p aprendiendo_db < backend/schema.sql
```

### Paso 4: Verificar Configuración

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

### Paso 5: Iniciar Servidor

```bash
cd backend
python3 server.py
```

El servidor estará disponible en: `http://localhost:8000`

### Paso 6: Acceder al Sistema

- **Página principal**: http://localhost:8000
- **Login**: http://localhost:8000/login.html
- **Registro**: http://localhost:8000/register.html

**Credenciales de prueba:**
- Email: `admin@aprendiendo.com`
- Contraseña: `test123`

---

## DESPLIEGUE EN PRODUCCIÓN

El proyecto se encuentra desplegado en PythonAnywhere, plataforma de hosting para aplicaciones Python.

**URL de Producción**: https://markhvdev.pythonanywhere.com

### Configuración de Producción

**Servidor Web**: uWSGI
**Base de Datos**: MySQL 5.7 (markhvdev.mysql.pythonanywhere-services.com)
**Python**: 3.10.12
**Framework WSGI**: Flask (wrapper para compatibilidad con PythonAnywhere)

### Diferencias entre Desarrollo y Producción

| Aspecto | Desarrollo (Local) | Producción (PythonAnywhere) |
|---------|-------------------|----------------------------|
| Servidor | http.server | uWSGI + Flask |
| Base de datos | localhost | markhvdev.mysql.pythonanywhere-services.com |
| Puerto | 8000 | 80/443 (HTTP/HTTPS) |
| SSL/TLS | No | Sí (certificado automático) |

---

## PRUEBAS DEL SISTEMA

### Casos de Prueba Implementados

**1. Autenticación**
- Registro de usuario con datos válidos
- Prevención de duplicados (username/email)
- Login con credenciales correctas
- Rechazo de credenciales incorrectas
- Persistencia de sesión mediante cookies
- Logout y eliminación de sesión

**2. Formulario de Contacto**
- Envío de mensaje con todos los campos
- Validación de email inválido
- Validación de campos requeridos
- Almacenamiento correcto en base de datos

**3. Panel de Administración**
- Acceso denegado sin autenticación
- Listado de mensajes para usuario autenticado
- Marcado de mensajes como leídos

**4. Responsive Design**
- Visualización correcta en desktop (1920x1080)
- Visualización correcta en tablet (768x1024)
- Visualización correcta en móvil (375x667)

---

## ESTADÍSTICAS DEL PROYECTO

- **Líneas de código HTML**: ~3,500
- **Líneas de código CSS**: ~2,000
- **Líneas de código JavaScript**: ~1,200
- **Líneas de código Python**: ~800
- **Líneas de código SQL**: ~150
- **Total de páginas**: 100+
- **Total de módulos educativos**: 41
- **Tiempo de desarrollo**: 4 semanas

---

## SOLUCIÓN DE PROBLEMAS

### Error: "Error al conectar a base de datos"

**Causa**: MySQL no está ejecutándose o credenciales incorrectas

**Solución**:
```bash
# Verificar estado de MySQL
sudo systemctl status mysql

# Verificar credenciales en backend/db_config.py
# Asegurar que la base de datos existe
mysql -u aprendiendo -p -e "SHOW DATABASES;"
```

### Error: "Address already in use"

**Causa**: Puerto 8000 ya está ocupado

**Solución**:
```bash
# Opción 1: Liberar puerto
lsof -ti:8000 | xargs kill -9

# Opción 2: Cambiar puerto en server.py
PORT = 8001
```

### Error: "No module named 'mysql.connector'"

**Causa**: Falta instalar conector de MySQL

**Solución**:
```bash
pip install mysql-connector-python
```

---

## TRABAJO FUTURO

Mejoras potenciales para versiones futuras del sistema:

- [ ] Implementación de recuperación de contraseña mediante email
- [ ] Sistema de roles avanzado (administrador, moderador, usuario estándar)
- [ ] Dashboard con estadísticas y gráficos analíticos
- [ ] API REST completa con documentación Swagger/OpenAPI
- [ ] Suite de tests automatizados (unittest, pytest, selenium)
- [ ] Integración con Redis para caché y sesiones
- [ ] Sistema de notificaciones en tiempo real con WebSockets
- [ ] Migración a framework Django o Flask completo
- [ ] Implementación de CI/CD con GitHub Actions
- [ ] Containerización con Docker para deployment simplificado

---

## REFERENCIAS BIBLIOGRÁFICAS

1. **Python Documentation** - https://docs.python.org/3/
2. **MySQL Documentation** - https://dev.mysql.com/doc/
3. **MDN Web Docs** - https://developer.mozilla.org/
4. **W3C HTML5 Specification** - https://www.w3.org/TR/html52/
5. **OWASP Security Guidelines** - https://owasp.org/
6. **PythonAnywhere Documentation** - https://help.pythonanywhere.com/

---

## LICENCIA

Este proyecto fue desarrollado exclusivamente como trabajo final para el curso de Desarrollo Web de la Universidad Nacional de San Agustín. El código se proporciona con fines educativos y de evaluación académica.

**Restricciones de Uso**:
- Uso educativo y académico permitido
- Prohibida la distribución comercial
- Se requiere atribución al autor original

---

## INFORMACIÓN DEL AUTOR

**Nombre**: Mark Harry Hancco Vargas
**Email**: markhv509@gmail.com
**GitHub**: https://github.com/markhv-dev
**Universidad**: Universidad Nacional de San Agustín
**Programa**: [Ingeniería de Sistemas / Ciencias de la Computación]
**Curso**: Desarrollo Web
**Docente**: Prof. Marco Wilfredo Aedo Lopez
**Período Académico**: 2024-II

---

## AGRADECIMIENTOS

- **Prof. Marco Wilfredo Aedo Lopez** - Docente del curso de Desarrollo Web, por la orientación y conocimientos compartidos durante el desarrollo del proyecto
- **Universidad Nacional de San Agustín** - Por proporcionar los recursos y el entorno académico necesario para el aprendizaje
- **Comunidad de Desarrolladores** - Por la documentación, tutoriales y recursos open-source que facilitaron el desarrollo

---

## CONTACTO

Para consultas, sugerencias o reportes de errores relacionados con este proyecto:

- **Email académico**: markhv509@gmail.com
- **GitHub Issues**: https://github.com/markhv-dev/APRENDIENDO/issues
- **LinkedIn**: [Perfil de LinkedIn]

---

**Nota**: Este documento constituye la documentación oficial del proyecto para efectos de evaluación académica. Para documentación técnica detallada, consultar los comentarios en el código fuente y el archivo `schema.sql` de la base de datos.

---

*Última actualización: Diciembre 2024*
*Versión: 1.0.0*
*Estado: Producción*
