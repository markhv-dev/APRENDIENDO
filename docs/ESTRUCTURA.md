# 📁 Estructura del Proyecto - Sistema de Aprendizaje Web

Este documento describe la organización profesional del proyecto de aprendizaje de desarrollo web.

## 🏗️ Arquitectura del Proyecto

```
APRENDIENDO/
│
├── index.html                          # Página principal de bienvenida
│
├── assets/                             # 🎨 Recursos centralizados
│   ├── css/                            # Hojas de estilo
│   │   ├── sidebar.css                 # Estilos del sidebar lateral fijo
│   │   └── toc.css                     # Estilos del índice de contenidos (TOC)
│   │
│   ├── js/                             # Scripts JavaScript
│   │   ├── sidebar-component.js        # Componente reutilizable del sidebar
│   │   └── toc-component.js            # Componente reutilizable del TOC
│   │
│   └── img/                            # Imágenes y recursos gráficos
│       └── (logos, iconos, etc.)
│
├── Fundamentos/                        # 📚 Conceptos fundamentales
│   ├── Diseño/
│   │   └── index.html                  # Principios de UI/UX y diseño
│   ├── Frontend/
│   │   └── index.html                  # HTML, CSS, JavaScript, React
│   ├── Backend/
│   │   └── index.html                  # Node.js, APIs, autenticación
│   └── Base-de-Datos/
│       └── index.html                  # SQL, NoSQL, ORMs
│
├── Lenguajes/                          # 💻 Lenguajes de programación
│   └── HTML/
│       ├── index.html                  # Introducción a HTML
│       ├── Glosario.html               # 62 términos y etiquetas HTML
│       └── Ejercicios.html             # 12 ejercicios progresivos
│
├── Comandos/                           # ⌨️ Herramientas y CLI
│   └── Git-GitHub/
│       ├── index.html                  # Introducción a Git y GitHub
│       ├── Glosario.html               # 45 comandos esenciales
│       └── Ejercicios.html             # 10 ejercicios prácticos
│
├── docs/                               # 📖 Documentación del proyecto
│   ├── GUIA_COMPLETA.md
│   └── README.md
│
├── ESTRUCTURA.md                       # Este archivo
└── README.md                           # README principal del proyecto
```

## 🎯 Principios de Organización

### 1. **Separación de Responsabilidades**
- **HTML**: Contenido y estructura
- **CSS**: Presentación y estilos (centralizado en `/assets/css/`)
- **JS**: Comportamiento y lógica (centralizado en `/assets/js/`)

### 2. **Componentes Reutilizables**
Los componentes globales están en `/assets/` para reutilización:
- `sidebar-component.js`: Inyecta sidebar en cualquier página
- `toc-component.js`: Genera índice automático de contenidos
- `sidebar.css`: Estilos del sidebar
- `toc.css`: Estilos del TOC

### 3. **Estructura Jerárquica Clara**
```
Raíz
 └── Categoría (Fundamentos/Lenguajes/Comandos)
      └── Tema específico (HTML/Git-GitHub/Diseño)
           └── Páginas de contenido
```

## 🔧 Uso de Componentes

### Sidebar Lateral Fijo
Para agregar el sidebar a cualquier página HTML:

```html
<head>
    <!-- Sidebar Styles -->
    <link rel="stylesheet" href="/assets/css/sidebar.css">
</head>

<body>
    <!-- Tu contenido aquí -->

    <!-- Sidebar Component -->
    <script src="/assets/js/sidebar-component.js"></script>
</body>
```

### Tabla de Contenidos (TOC)
Para páginas largas con muchas secciones:

```html
<head>
    <!-- TOC Styles -->
    <link rel="stylesheet" href="/assets/css/toc.css">
</head>

<body>
    <!-- Tu contenido aquí -->

    <!-- TOC Component -->
    <script src="/assets/js/toc-component.js"></script>
</body>
```

**Nota:** El TOC se genera automáticamente leyendo todos los `<h2>` y `<h3>` del contenido.

## 📊 Páginas por Categoría

### Fundamentos (4 páginas)
- ✅ Diseño UI/UX - Principios de diseño y experiencia de usuario
- ✅ Frontend - HTML, CSS, JavaScript, Frameworks
- ✅ Backend - Servidores, APIs, autenticación
- ✅ Base de Datos - SQL, NoSQL, ORMs

### Lenguajes
#### HTML (3 páginas)
- ✅ Index - Introducción y recursos
- ✅ Glosario - 62 términos documentados
- ✅ Ejercicios - 12 ejercicios progresivos (Básico → Experto)

### Comandos
#### Git & GitHub (3 páginas)
- ✅ Index - Introducción y flujo de trabajo
- ✅ Glosario - 45 comandos esenciales
- ✅ Ejercicios - 10 ejercicios prácticos

## 🎨 Características de Navegación

### Sidebar Lateral Izquierdo
- **Posición**: Fijo, siempre visible
- **Ancho**: 280px
- **Funcionalidad**:
  - Secciones desplegables/colapsables
  - Persistencia de estado con localStorage
  - Auto-resaltado de página actual
  - Responsive (oculto en móvil)

### Tabla de Contenidos (TOC) - Derecha
- **Posición**: Sticky, se mantiene visible al hacer scroll
- **Ancho**: 250px
- **Funcionalidad**:
  - Generación automática desde headings
  - Scroll Spy (resalta sección actual)
  - Barra de progreso de lectura
  - Smooth scroll con animaciones
  - Botón flotante en móvil (📑)

### Layout Responsive

**Desktop (> 1200px):**
```
┌──────────────────────────────────────────────┐
│ Sidebar │   Contenido Principal   │   TOC   │
│  280px  │                          │  250px  │
│  Fijo   │                          │ Sticky  │
└──────────────────────────────────────────────┘
```

**Móvil (< 1200px):**
```
┌────────────────────────────────┐
│     Contenido Principal        │
│                                │
│                          [📑]  │  ← Botón TOC flotante
└────────────────────────────────┘
```

## 🚀 Escalabilidad Futura

Esta estructura está preparada para crecer:

### Lenguajes futuros
```
Lenguajes/
├── HTML/       ✅ Completo
├── CSS/        🔜 Próximamente
├── JavaScript/ 🔜 Próximamente
└── Python/     🔜 Próximamente
```

### Frameworks futuros
```
Frameworks/
├── React/      🔜 Próximamente
├── Vue/        🔜 Próximamente
└── Node.js/    🔜 Próximamente
```

### Assets adicionales
```
assets/
├── css/
├── js/
├── img/        ✅ Preparado
├── fonts/      🔜 Si se necesita
└── icons/      🔜 Si se necesita
```

## 📝 Convenciones de Nombres

### Archivos
- **HTML**: `index.html`, `Glosario.html`, `Ejercicios.html`
- **CSS**: kebab-case → `sidebar.css`, `toc.css`
- **JS**: kebab-case → `sidebar-component.js`, `toc-component.js`

### Carpetas
- **PascalCase**: `Fundamentos/`, `Lenguajes/`, `Base-de-Datos/`
- **lowercase**: `assets/`, `css/`, `js/`, `img/`, `docs/`

### IDs y Clases CSS
- **IDs**: camelCase → `#globalSidebar`, `#tocList`
- **Clases**: kebab-case → `.sidebar-menu`, `.toc-link`, `.menu-item`

## 🔍 Búsqueda Rápida de Archivos

| Busco... | Ubicación |
|----------|-----------|
| Estilos del sidebar | `/assets/css/sidebar.css` |
| Estilos del TOC | `/assets/css/toc.css` |
| Lógica del sidebar | `/assets/js/sidebar-component.js` |
| Lógica del TOC | `/assets/js/toc-component.js` |
| Página principal | `/index.html` |
| Glosario HTML | `/Lenguajes/HTML/Glosario.html` |
| Ejercicios HTML | `/Lenguajes/HTML/Ejercicios.html` |
| Glosario Git | `/Comandos/Git-GitHub/Glosario.html` |
| Fundamentos Frontend | `/Fundamentos/Frontend/index.html` |

## ✅ Beneficios de esta Estructura

1. **Mantenimiento fácil**: Todo está donde debe estar
2. **Escalabilidad**: Agregar contenido es simple y claro
3. **Reutilización**: Componentes compartidos en `/assets/`
4. **Performance**: Browser cachea assets centralizados
5. **Profesionalidad**: Cumple estándares de la industria
6. **Colaboración**: Cualquier desarrollador entiende la organización
7. **Versionado**: Git ignores claros por tipo de archivo

## 📌 Notas Importantes

- **Rutas absolutas**: Todos los assets usan rutas absolutas desde la raíz (`/assets/...`)
- **No duplicar**: Nunca duplicar archivos CSS/JS, siempre referenciar desde `/assets/`
- **Componentes primero**: Usar componentes existentes antes de crear nuevos
- **Documentar cambios**: Actualizar este archivo al agregar nuevas secciones

---

**Última actualización**: 12 de Octubre, 2025
**Versión**: 2.0 (Reorganización profesional)
