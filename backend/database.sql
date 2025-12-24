-- ============================================================================
-- Script SQL para Base de Datos del Sistema APRENDIENDO
-- Trabajo Final Individual - Desarrollo Web
-- ============================================================================

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS aprendiendo_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE aprendiendo_db;

-- ============================================================================
-- Tabla: usuarios
-- Descripción: Almacena usuarios del sistema para login/autenticación
-- ============================================================================

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    nombre_completo VARCHAR(100),
    rol ENUM('admin', 'usuario') DEFAULT 'usuario',
    activo BOOLEAN DEFAULT TRUE,
    ultimo_acceso TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Tabla: mensajes
-- Descripción: Almacena mensajes del formulario de contacto
-- ============================================================================

DROP TABLE IF EXISTS mensajes;

CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    asunto VARCHAR(200),
    mensaje TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent VARCHAR(255),
    leido BOOLEAN DEFAULT FALSE,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_fecha (fecha),
    INDEX idx_leido (leido)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Tabla: sesiones
-- Descripción: Gestión de sesiones de usuario (login)
-- ============================================================================

DROP TABLE IF EXISTS sesiones;

CREATE TABLE sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    ip_address VARCHAR(45),
    user_agent VARCHAR(255),
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    INDEX idx_token (session_token),
    INDEX idx_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Datos de prueba
-- ============================================================================

-- Insertar usuario administrador de prueba
-- Usuario: admin / Contraseña: admin123
INSERT INTO usuarios (username, password, email, nombre_completo, rol)
VALUES (
    'admin',
    'admin123',
    'admin@aprendiendo.com',
    'Administrador del Sistema',
    'admin'
);

-- Insertar usuario regular de prueba
-- Usuario: usuario / Contraseña: usuario123
INSERT INTO usuarios (username, password, email, nombre_completo, rol)
VALUES (
    'usuario',
    'usuario123',
    'usuario@aprendiendo.com',
    'Usuario de Prueba',
    'usuario'
);

-- Insertar mensajes de prueba
INSERT INTO mensajes (nombre, email, asunto, mensaje, ip_address) VALUES
('Juan Pérez', 'juan@example.com', 'Consulta sobre el curso', 'Hola, me gustaría saber más sobre el contenido del curso de JavaScript.', '127.0.0.1'),
('María García', 'maria@example.com', 'Problema con el login', 'No puedo acceder a mi cuenta, ¿pueden ayudarme?', '127.0.0.1'),
('Carlos López', 'carlos@example.com', 'Sugerencia', 'Sería genial agregar más ejercicios de Python.', '127.0.0.1');

-- ============================================================================
-- Consultas útiles
-- ============================================================================

-- Ver todos los usuarios
-- SELECT * FROM usuarios;

-- Ver todos los mensajes
-- SELECT * FROM mensajes ORDER BY fecha DESC;

-- Ver mensajes no leídos
-- SELECT * FROM mensajes WHERE leido = FALSE ORDER BY fecha DESC;

-- ============================================================================
-- Para ejecutar este script:
-- mysql -u root -p < backend/database.sql
-- ============================================================================
