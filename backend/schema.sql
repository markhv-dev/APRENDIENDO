-- ============================================================================
-- SCHEMA DE BASE DE DATOS - SISTEMA APRENDIENDO
-- Trabajo Final Individual - Desarrollo Web
-- ============================================================================

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS aprendiendo_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE aprendiendo_db;

-- ============================================================================
-- TABLA: usuarios
-- Almacena información de los usuarios registrados en el sistema
-- ============================================================================

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre_completo VARCHAR(100),
    rol VARCHAR(20) DEFAULT 'usuario',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- TABLA: mensajes
-- Almacena los mensajes enviados desde el formulario de contacto
-- ============================================================================

CREATE TABLE IF NOT EXISTS mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    asunto VARCHAR(200),
    mensaje TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE,
    INDEX idx_fecha (fecha_envio),
    INDEX idx_leido (leido),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- TABLA: sesiones
-- Gestiona las sesiones activas de los usuarios
-- ============================================================================

CREATE TABLE IF NOT EXISTS sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(255) UNIQUE NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_expiracion TIMESTAMP,
    activa BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    INDEX idx_token (token),
    INDEX idx_usuario_id (usuario_id),
    INDEX idx_activa (activa),
    INDEX idx_fecha_expiracion (fecha_expiracion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- DATOS DE PRUEBA (Opcional - Comentar si no se desea)
-- ============================================================================

-- Usuario de prueba (contraseña: "test123")
-- Password hash para "test123":
-- echo -n "test123" | sha256sum = ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae

INSERT INTO usuarios (username, email, password_hash, nombre_completo, rol)
VALUES (
    'admin',
    'admin@aprendiendo.com',
    'ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae',
    'Administrador del Sistema',
    'admin'
) ON DUPLICATE KEY UPDATE id=id;

-- Mensaje de prueba
INSERT INTO mensajes (nombre, email, asunto, mensaje, ip_address, user_agent, leido)
VALUES (
    'Usuario de Prueba',
    'prueba@ejemplo.com',
    'Mensaje de Prueba',
    'Este es un mensaje de prueba del sistema de contacto.',
    '127.0.0.1',
    'Test User Agent',
    FALSE
);

-- ============================================================================
-- VERIFICACIÓN
-- ============================================================================

-- Mostrar tablas creadas
SHOW TABLES;

-- Mostrar estructura de cada tabla
DESCRIBE usuarios;
DESCRIBE mensajes;
DESCRIBE sesiones;

-- Contar registros
SELECT 'Usuarios' as Tabla, COUNT(*) as Total FROM usuarios
UNION ALL
SELECT 'Mensajes', COUNT(*) FROM mensajes
UNION ALL
SELECT 'Sesiones', COUNT(*) FROM sesiones;

-- ============================================================================
-- NOTAS IMPORTANTES
-- ============================================================================

/*
CREDENCIALES DE PRUEBA:
- Usuario: admin@aprendiendo.com
- Contraseña: test123

PARA LIMPIAR LA BASE DE DATOS:
DROP TABLE IF EXISTS sesiones;
DROP TABLE IF EXISTS mensajes;
DROP TABLE IF EXISTS usuarios;

PARA CREAR UN NUEVO USUARIO:
1. Ir a http://localhost:8000/register.html
2. O insertar manualmente:
   INSERT INTO usuarios (username, email, password_hash, nombre_completo)
   VALUES ('usuario', 'usuario@ejemplo.com', SHA2('contraseña', 256), 'Nombre Completo');

ÍNDICES CREADOS:
- Los índices mejoran el rendimiento de las consultas
- idx_username, idx_email: Búsquedas rápidas por usuario/email
- idx_token: Verificación rápida de sesiones
- idx_fecha: Ordenamiento por fecha
- idx_leido: Filtrado de mensajes leídos/no leídos
*/
