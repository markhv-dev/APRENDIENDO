# 🏗️ ARQUITECTURA DEL SISTEMA

Documentación técnica completa de la arquitectura del sistema de aprendizaje.

---

## 📋 Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Estructura de Directorios](#estructura-de-directorios)
3. [Arquitectura de Páginas](#arquitectura-de-páginas)
4. [Sistema de Estilos](#sistema-de-estilos)
5. [JavaScript y Funcionalidad](#javascript-y-funcionalidad)
6. [Sistema de Búsqueda](#sistema-de-búsqueda)
7. [Navegación y Routing](#navegación-y-routing)
8. [Convenciones de Código](#convenciones-de-código)
9. [Patrones de Diseño](#patrones-de-diseño)
10. [Performance y Optimización](#performance-y-optimización)

---

## Visión General

### Arquitectura General

Este es un sistema **estático** (Static Site) construido con:
- **HTML5** - Estructura y contenido
- **CSS3** - Estilos (inline en cada archivo)
- **Vanilla JavaScript** - Funcionalidad (mínima)

**Características clave**:
- ✅ No requiere servidor
- ✅ No tiene base de datos
- ✅ No tiene dependencias externas
- ✅ 100% local y offline
- ✅ Sin build process
- ✅ Sin transpiling

### Principios Arquitectónicos

1. **KISS (Keep It Simple, Stupid)**
   - Sin frameworks
   - Sin bundlers
   - Sin compilación

2. **DRY (Don't Repeat Yourself)**
   - Estructura consistente
   - Estilos reutilizables
   - Patrones de código comunes

3. **Separation of Concerns**
   - HTML = Estructura
   - CSS = Presentación
   - JS = Comportamiento

4. **Progressive Enhancement**
   - Funciona sin JavaScript (parcialmente)
   - Mejora con JavaScript disponible

### Tech Stack

```
┌─────────────────────────────────┐
│         Usuario/Browser          │
└─────────────────────────────────┘
               │
               ├─ HTML5 (Estructura)
               ├─ CSS3 (Estilos inline)
               └─ Vanilla JS (Búsqueda, navegación)

              No Backend
              No Database
              No Build Process
```

---

## Estructura de Directorios

### Jerarquía Completa

```
APRENDIENDO/
│
├── index.html                          # Entry point principal
├── search.js                           # Sistema de búsqueda global
├── README.md                           # Documentación breve
│
├── docs/                               # Documentación completa
│   ├── GUIA_COMPLETA.md               # Guía de usuario
│   ├── INSTRUCCIONES_CLAUDE.md        # Para Claude Code
│   ├── ARQUITECTURA.md                # Este archivo
│   └── ROADMAP.md                     # Plan de desarrollo
│
├── Fundamentos/                        # Las 4 etapas del desarrollo
│   ├── index.html                     # Hub de fundamentos
│   ├── Diseño/
│   │   ├── index.html
│   │   └── ... contenido
│   ├── Frontend/
│   │   ├── index.html
│   │   └── ... contenido
│   ├── Backend/
│   │   ├── index.html
│   │   └── ... contenido
│   └── Base-de-Datos/
│       ├── index.html
│       └── ... contenido
│
├── Comandos/                           # Herramientas CLI
│   └── Git-GitHub/
│       ├── index.html                 # Navegación
│       ├── Glosario.html              # 45 comandos
│       └── Ejercicios.html            # 10 ejercicios
│
├── Lenguajes/                          # Lenguajes de programación
│   ├── HTML/
│   │   ├── index.html                 # Navegación
│   │   ├── Glosario.html              # 50+ términos
│   │   ├── Ejercicios.html            # 13 ejercicios
│   │   └── README.md                  # Notas específicas
│   ├── CSS/                            # (Pendiente)
│   ├── JavaScript/                     # (Pendiente)
│   ├── Python/                         # (Pendiente)
│   ├── TypeScript/                     # (Pendiente)
│   └── SQL/                            # (Pendiente)
│
├── Frameworks/                         # Frameworks y librerías
│   ├── React/                          # (Pendiente)
│   ├── Vue/                            # (Pendiente)
│   └── Angular/                        # (Pendiente)
│
└── Herramientas/                       # Dev tools
    ├── Docker/                         # (Pendiente)
    └── Node.js/                        # (Pendiente)
```

### Convenciones de Nombres

**Carpetas**:
- PascalCase con guiones: `Git-GitHub/`, `Base-de-Datos/`
- Plural cuando contenga múltiples items: `Lenguajes/`, `Frameworks/`
- Singular para categorías únicas: `Fundamentos/`

**Archivos**:
- Lowercase con guiones: `search.js`
- PascalCase para documentación: `Glosario.html`, `Ejercicios.html`
- Uppercase para meta-documentos: `README.md`, `ROADMAP.md`

---

## Arquitectura de Páginas

### Tipos de Páginas

El sistema tiene 4 tipos de páginas principales:

#### 1. Página Principal (index.html root)

**Propósito**: Entry point y hub de navegación

**Estructura**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Aprendizaje - Programación</title>
    <style>
        /* Estilos inline completos */
    </style>
</head>
<body>
    <header>
        <!-- Título principal -->
        <!-- Descripción -->
    </header>

    <div class="container">
        <!-- Buscador global -->
        <div class="search-container">
            <input id="globalSearch">
            <div id="searchResults"></div>
        </div>

        <!-- Secciones de categorías -->
        <h2 class="section-title">Fundamentos</h2>
        <div class="categories">
            <!-- Tarjetas de navegación -->
        </div>

        <h2 class="section-title">Lenguajes</h2>
        <div class="categories">
            <!-- Más tarjetas -->
        </div>

        <!-- Más secciones... -->
    </div>

    <footer>
        <!-- Info y enlaces -->
    </footer>

    <script src="search.js"></script>
</body>
</html>
```

**Componentes clave**:
- `<header>`: Título y descripción del sistema
- `.search-container`: Búsqueda global
- `.categories`: Grids de tarjetas de tecnologías
- `<footer>`: Meta información
- `search.js`: Script externo para búsqueda

#### 2. Página de Tecnología (index.html de cada tech)

**Propósito**: Hub de navegación para una tecnología específica

**Estructura**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Tecnología] - Sistema de Aprendizaje</title>
    <style>
        /* Estilos inline con accent color específico */
    </style>
</head>
<body>
    <header>
        <a href="../../index.html" class="back-link">← Volver al Inicio</a>
        <span class="icon">[emoji]</span>
        <h1>[Tecnología]</h1>
        <p class="subtitle">[Descripción corta]</p>
    </header>

    <div class="container">
        <!-- Introducción -->
        <div class="intro">
            <h2>¿Qué es [Tecnología]?</h2>
            <p>Descripción completa...</p>
        </div>

        <!-- Recursos -->
        <h2>Recursos de Aprendizaje</h2>
        <div class="resources">
            <div class="resource-card" onclick="window.location.href='Glosario.html'">
                <!-- Link a glosario -->
            </div>
            <div class="resource-card" onclick="window.location.href='Ejercicios.html'">
                <!-- Link a ejercicios -->
            </div>
        </div>

        <!-- Temas cubiertos -->
        <div class="topics">
            <h2>Temas Cubiertos</h2>
            <div class="topic-list">
                <!-- Lista de temas -->
            </div>
        </div>
    </div>

    <footer>
        <!-- Breadcrumbs de vuelta -->
    </footer>
</body>
</html>
```

**Niveles de breadcrumb**:
- Desde `Lenguajes/HTML/index.html`: `../../index.html` (2 niveles arriba)
- Desde `Comandos/Git-GitHub/index.html`: `../../index.html` (2 niveles arriba)

#### 3. Glosario (Glosario.html)

**Propósito**: Diccionario de términos con ejemplos

**Estructura**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glosario [Tech] - Sistema de Aprendizaje</title>
    <style>
        /* Estilos completos inline */
    </style>
</head>
<body>
    <header>
        <a href="index.html" class="back-link">← Volver a [Tech]</a>
        <h1>📚 Glosario de [Tech]</h1>
        <div class="search-container">
            <input type="text" id="searchBox" placeholder="Buscar...">
        </div>
    </header>

    <div class="container">
        <!-- Categoría -->
        <div class="categoria">[icono] Categoría 1</div>

        <!-- Términos -->
        <div class="termino" data-tags="keywords for search">
            <span class="tag">término</span>
            <p class="significado">Significado: ...</p>
            <p class="descripcion">Explicación detallada...</p>
            <div class="ejemplo">código ejemplo</div>
            <div class="nota">
                <strong>💡 Tip:</strong> ...
            </div>
        </div>

        <!-- Más términos y categorías -->
    </div>

    <footer>
        <p><a href="index.html">← Volver a [Tech]</a> | <a href="../../index.html">Ir al Índice Principal</a></p>
    </footer>

    <script>
        // Script de búsqueda local
        document.addEventListener('DOMContentLoaded', function() {
            const searchBox = document.getElementById('searchBox');
            const terminos = document.querySelectorAll('.termino');

            searchBox.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                terminos.forEach(termino => {
                    const tags = termino.getAttribute('data-tags').toLowerCase();
                    const texto = termino.textContent.toLowerCase();
                    if (texto.includes(searchTerm) || tags.includes(searchTerm)) {
                        termino.style.display = 'block';
                    } else {
                        termino.style.display = 'none';
                    }
                });
            });
        });
    </script>
</body>
</html>
```

**Componentes del término**:
- `.termino`: Contenedor principal (con `data-tags` para búsqueda)
- `.tag`: Badge visual del término
- `.significado`: Definición breve
- `.descripcion`: Explicación completa (1-3 párrafos)
- `.ejemplo`: Bloque de código
- `.nota`: Tips adicionales

#### 4. Ejercicios (Ejercicios.html)

**Propósito**: Prácticas progresivas

**Estructura**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios [Tech] - Sistema de Aprendizaje</title>
    <style>
        /* Estilos completos inline */
    </style>
</head>
<body>
    <header>
        <a href="index.html" class="back-link">← Volver a [Tech]</a>
        <h1>🎯 Ejercicios de [Tech]</h1>
    </header>

    <div class="container">
        <!-- Introducción -->
        <div class="intro">
            <h2>Bienvenido a los Ejercicios</h2>
            <p>Instrucciones...</p>
        </div>

        <!-- Separador de nivel -->
        <div class="section-separator">📚 NIVEL BÁSICO</div>

        <!-- Ejercicio -->
        <div class="ejercicio">
            <span class="nivel basico">Básico</span>
            <h2>Ejercicio 1: Título</h2>
            <p class="objetivo">
                <strong>Objetivo:</strong> Qué aprenderás
            </p>
            <div class="instrucciones">
                <strong>Tareas:</strong>
                <ul>
                    <li>Tarea 1</li>
                    <li>Tarea 2</li>
                </ul>
            </div>
            <div class="tip">
                💡 <strong>Tip:</strong> Ayuda
            </div>

            <!-- Solución expandible (opcional) -->
            <div class="solucion">
                <button class="solucion-toggle" onclick="toggleSolution(this)">Ver Solución 📖</button>
                <div class="solucion-content">
                    <pre>código solución</pre>
                </div>
            </div>
        </div>

        <!-- Más ejercicios -->
        <!-- Más niveles -->
    </div>

    <footer>
        <p><a href="index.html">← Volver a [Tech]</a> | <a href="../../index.html">Ir al Índice Principal</a></p>
    </footer>

    <script>
        function toggleSolution(button) {
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.textContent = 'Ver Solución 📖';
            } else {
                content.style.display = 'block';
                button.textContent = 'Ocultar Solución 📖';
            }
        }
    </script>
</body>
</html>
```

**Niveles de ejercicios**:
- Básico: `.nivel.basico` (verde)
- Intermedio: `.nivel.intermedio` (naranja)
- Avanzado: `.nivel.avanzado` (rojo)
- Experto: `.nivel.experto` (púrpura)

---

## Sistema de Estilos

### Enfoque: Inline CSS

**Razones**:
1. No requiere archivos externos
2. Cada página es autocontenida
3. Fácil de copiar/duplicar
4. No hay conflicts de estilos
5. Performance (no hay HTTP requests extras)

**Desventaja aceptada**:
- Repetición de código (pero mantenible con búsqueda/reemplazo)

### Paleta de Colores

Definida en custom properties (CSS variables):

```css
:root {
    /* Fondos */
    --bg-primary: #0f0f0f;
    --bg-secondary: #1a1a1a;
    --bg-code: #0a0a0a;

    /* Bordes */
    --border-primary: #2a2a2a;
    --border-secondary: #3a3a3a;

    /* Texto */
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --text-tertiary: #888;
    --text-muted: #666;

    /* Acento (varía por tecnología) */
    --accent-color: #e74c3c;  /* Ejemplo: HTML */

    /* Estados */
    --success: #2ecc71;
    --warning: #f1c40f;
    --error: #e74c3c;
    --info: #4a90e2;
}
```

### Colores por Tecnología

Cada tecnología tiene su color de acento único:

```css
/* Lenguajes */
HTML:       #e74c3c   /* Rojo */
CSS:        #3498db   /* Azul */
JavaScript: #f1c40f   /* Amarillo */
Python:     #3776ab   /* Azul Python */
TypeScript: #3178c6   /* Azul TS */
SQL:        #336791   /* Azul PostgreSQL */

/* Frameworks */
React:      #61dafb   /* Cyan */
Vue:        #42b883   /* Verde */
Angular:    #dd0031   /* Rojo Angular */

/* Herramientas */
Node.js:    #339933   /* Verde */
Docker:     #2496ed   /* Azul Docker */
Git:        #f05032   /* Naranja */
```

### Tipografía

```css
/* Fuente principal */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Código */
code, pre, .ejemplo {
    font-family: 'Courier New', monospace;
}

/* Jerarquía de tamaños */
h1: 3em
h2: 1.8em
h3: 1.5em
body: 1em (16px base)
small: 0.9em
```

### Layout System

**Grid para tarjetas**:
```css
.categories, .resources, .topic-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}
```

**Flexbox para componentes**:
```css
header, footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

### Componentes Reutilizables

Patrones de CSS que se repiten en todo el sistema:

#### Card Pattern
```css
.card-base {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 30px;
    transition: all 0.3s ease;
}

.card-base:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}
```

#### Code Block Pattern
```css
.code-block {
    background: #0a0a0a;
    border: 1px solid #2a2a2a;
    border-left: 3px solid var(--accent-color);
    padding: 20px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    overflow-x: auto;
    white-space: pre;
}
```

#### Badge Pattern
```css
.badge {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 600;
}
```

### Responsive Design

**Breakpoint principal**: 768px

```css
@media (max-width: 768px) {
    /* Typography */
    h1 { font-size: 2em; }

    /* Layout */
    .categories { grid-template-columns: 1fr; }

    /* Navigation */
    .back-link {
        position: relative;
        display: block;
        margin-bottom: 20px;
    }

    /* Spacing */
    .container { padding: 15px; }
}
```

---

## JavaScript y Funcionalidad

### Filosofía: Progressive Enhancement

- El contenido es accesible sin JavaScript
- JavaScript mejora la experiencia (búsqueda, soluciones expandibles)
- No hay lógica crítica en JS

### Scripts en el Sistema

#### 1. search.js (Búsqueda Global)

**Ubicación**: `/search.js` (root)
**Usado en**: `index.html` principal

**Estructura**:
```javascript
// Data structure
const searchData = {
    html: [
        {
            term: "DOCTYPE",
            description: "Declaración de tipo de documento",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        // más términos...
    ],
    css: [],
    javascript: [],
    // más categorías...
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    // Debounce function (espera 300ms antes de buscar)
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Search function
    function performSearch(query) {
        if (!query || query.trim().length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const queryLower = query.toLowerCase().trim();
        const allResults = [];

        // Search all categories
        Object.keys(searchData).forEach(category => {
            const categoryResults = searchData[category].filter(item => {
                return item.term.toLowerCase().includes(queryLower) ||
                       item.description.toLowerCase().includes(queryLower);
            });
            allResults.push(...categoryResults);
        });

        displayResults(allResults, query);
    }

    // Display results
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No se encontraron resultados para "${query}"</p>
                </div>
            `;
            searchResults.classList.add('active');
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" onclick="window.location.href='${result.url}'">
                <div class="result-title">${highlightMatch(result.term, query)}
                    <span style="color: #666;">[${result.category}]</span>
                </div>
                <div class="result-description">${highlightMatch(result.description, query)}</div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
        searchResults.classList.add('active');
    }

    // Highlight matching text
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span style="background: rgba(74, 144, 226, 0.3);">$1</span>');
    }

    // Event listener with debounce
    searchInput.addEventListener('input', debounce(function(e) {
        performSearch(e.target.value);
    }, 300));

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Escape to close
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
});
```

**Características**:
- Búsqueda case-insensitive
- Debouncing (300ms) para performance
- Highlighting de matches
- Muestra categoría de cada resultado
- Click para navegar
- Escape para cerrar

#### 2. Local Search (Inline en Glosarios)

**Ubicación**: Inline en cada `Glosario.html`

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const terminos = document.querySelectorAll('.termino');

    if (!searchBox || terminos.length === 0) return;

    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        terminos.forEach(termino => {
            const tags = termino.getAttribute('data-tags')?.toLowerCase() || '';
            const texto = termino.textContent.toLowerCase();

            if (searchTerm === '' || texto.includes(searchTerm) || tags.includes(searchTerm)) {
                termino.style.display = 'block';
            } else {
                termino.style.display = 'none';
            }
        });

        // Hide empty categories
        document.querySelectorAll('.categoria').forEach(cat => {
            let hasVisibleTerms = false;
            let sibling = cat.nextElementSibling;

            while (sibling && sibling.classList.contains('termino')) {
                if (sibling.style.display !== 'none') {
                    hasVisibleTerms = true;
                    break;
                }
                sibling = sibling.nextElementSibling;
            }

            cat.style.display = hasVisibleTerms ? 'block' : 'none';
        });
    });
});
```

**Características**:
- Búsqueda instantánea (sin debounce)
- Filtra por texto y data-tags
- Oculta categorías vacías
- Case-insensitive

#### 3. Solution Toggle (Inline en Ejercicios)

**Ubicación**: Inline en cada `Ejercicios.html`

```javascript
function toggleSolution(button) {
    const content = button.nextElementSibling;

    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'Ver Solución 📖';
        button.style.background = 'rgba(74, 144, 226, 0.2)';
    } else {
        content.style.display = 'block';
        button.textContent = 'Ocultar Solución 📖';
        button.style.background = 'rgba(46, 204, 113, 0.2)';
    }
}
```

**Uso**:
```html
<button class="solucion-toggle" onclick="toggleSolution(this)">Ver Solución 📖</button>
<div class="solucion-content">
    <pre>código de solución</pre>
</div>
```

---

## Sistema de Búsqueda

### Arquitectura de Búsqueda

**Dos niveles de búsqueda**:

1. **Búsqueda Global** (index.html)
   - Busca en todos los glosarios
   - Usa `search.js` externo
   - Data structure centralizada
   - Navega directamente a glosario específico

2. **Búsqueda Local** (cada Glosario.html)
   - Busca solo en ese glosario
   - Script inline
   - Filtra términos visualmente
   - No navega, solo filtra

### Data Structure

```javascript
const searchData = {
    // Categoría
    html: [
        {
            term: "string",           // Término exacto
            description: "string",    // Descripción breve
            category: "string",       // Categoría (HTML, CSS, etc.)
            url: "string"            // Path relativo desde root
        }
    ]
};
```

**Importante**:
- URLs son **relativas desde el root**
- Ejemplo: `"Lenguajes/HTML/Glosario.html"` NO `"./HTML/Glosario.html"`

### Agregar Términos a Búsqueda

Cuando agregas un término al glosario, DEBES agregarlo a `search.js`:

```javascript
// En search.js
css: [
    {
        term: "flexbox",
        description: "Sistema de layout unidimensional",
        category: "CSS",
        url: "Lenguajes/CSS/Glosario.html"
    }
]
```

### Búsqueda por Tags

En glosarios locales, los términos tienen `data-tags`:

```html
<div class="termino" data-tags="flexbox flex layout responsive diseño contenedor">
    <!-- Contenido del término -->
</div>
```

**Tags incluyen**:
- Término principal
- Sinónimos
- Conceptos relacionados
- Keywords en español e inglés
- Separados por espacios (NO comas)

---

## Navegación y Routing

### Sistema de Navegación

No hay routing dinámico. Todo es navegación estática con `<a href>` y `onclick`.

### Patrones de Links

**Desde root a tecnología**:
```html
<!-- index.html → Lenguajes/HTML/index.html -->
<a href="Lenguajes/HTML/index.html">HTML</a>
```

**Desde tecnología a root**:
```html
<!-- Lenguajes/HTML/index.html → index.html -->
<a href="../../index.html">Volver al Inicio</a>
```

**Dentro de tecnología**:
```html
<!-- Lenguajes/HTML/index.html → Lenguajes/HTML/Glosario.html -->
<a href="Glosario.html">Glosario</a>

<!-- Lenguajes/HTML/Glosario.html → Lenguajes/HTML/index.html -->
<a href="index.html">Volver a HTML</a>
```

**Desde glosario/ejercicios al root**:
```html
<!-- Lenguajes/HTML/Glosario.html → index.html -->
<a href="../../index.html">Índice Principal</a>
```

### Breadcrumbs

Estructura típica:

```html
<!-- En index.html de tecnología -->
<a href="../../index.html" class="back-link">← Volver al Inicio</a>

<!-- En Glosario/Ejercicios -->
<footer>
    <p>
        <a href="index.html">← Volver a [Tech]</a> |
        <a href="../../index.html">Ir al Índice Principal</a>
    </p>
</footer>
```

### Navegación con JavaScript

**Cards clickeables**:
```html
<div class="category-card" onclick="window.location.href='Lenguajes/HTML/index.html'">
    <!-- Contenido -->
</div>
```

**Search results**:
```javascript
onclick="window.location.href='${result.url}'"
```

---

## Convenciones de Código

### HTML

**Indentación**: 4 espacios

**Estructura de atributos**:
```html
<div
    class="termino"
    data-tags="keywords for search"
    id="unique-id"
>
    <!-- Contenido -->
</div>
```

**Order de atributos**:
1. `class`
2. `id`
3. `data-*`
4. `href`, `src`, `onclick`
5. `style` (evitar inline styles)

### CSS

**Indentación**: 4 espacios

**Order de propiedades**:
1. Display & Box Model
2. Positioning
3. Typography
4. Visual
5. Misc

```css
.elemento {
    /* Display & Box Model */
    display: flex;
    width: 100%;
    padding: 20px;
    margin: 10px;

    /* Positioning */
    position: relative;
    top: 0;
    left: 0;

    /* Typography */
    font-family: sans-serif;
    font-size: 1em;
    color: #fff;

    /* Visual */
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 8px;

    /* Misc */
    transition: all 0.3s ease;
    cursor: pointer;
}
```

### JavaScript

**Indentación**: 4 espacios

**Naming conventions**:
- Variables: camelCase
- Constants: UPPER_CASE
- Functions: camelCase
- Event handlers: handleEventName

**Template**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const DEBOUNCE_DELAY = 300;

    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('results');

    // Early return if elements don't exist
    if (!searchInput || !resultsList) return;

    // Helper functions
    function helperFunction(param) {
        // ...
    }

    // Event handlers
    searchInput.addEventListener('input', function(e) {
        // ...
    });
});
```

---

## Patrones de Diseño

### Component Pattern

Aunque no hay componentes reales (no framework), hay patrones reutilizables:

**Card Component**:
```html
<div class="card">
    <span class="card-icon">[emoji]</span>
    <h3 class="card-title">Título</h3>
    <p class="card-description">Descripción</p>
    <div class="card-meta">Meta info</div>
</div>
```

**Term Component**:
```html
<div class="termino" data-tags="tags">
    <span class="tag">término</span>
    <p class="significado">Significado</p>
    <p class="descripcion">Descripción</p>
    <div class="ejemplo">código</div>
    <div class="nota">nota</div>
</div>
```

**Exercise Component**:
```html
<div class="ejercicio">
    <span class="nivel [basico|intermedio|avanzado|experto]">Nivel</span>
    <h2>Título</h2>
    <p class="objetivo">Objetivo</p>
    <div class="instrucciones">Tareas</div>
    <div class="tip">Tip</div>
    <div class="solucion">Solución expandible</div>
</div>
```

### Module Pattern (JS)

Cada script está encapsulado en DOMContentLoaded:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Private scope
    const privateVar = 'value';

    function privateFunction() {
        // ...
    }

    // Public interface (si necesario)
    window.myModule = {
        publicMethod: function() {
            privateFunction();
        }
    };
});
```

---

## Performance y Optimización

### Current Performance

**Assets**:
- HTML: ~10-50 KB por página
- CSS: Inline, no requests extra
- JS: ~10 KB (search.js)
- Total: <100 KB por página típica

**Load Time**:
- First Paint: <100ms (local)
- Interactive: <200ms (local)

### Optimizaciones Aplicadas

1. **Inline CSS**: No HTTP requests extras
2. **Minimal JS**: Solo lo esencial
3. **No Images**: Solo emojis (unicode)
4. **No External Dependencies**: Cero requests externos
5. **Debouncing**: En búsqueda global (300ms)

### Optimizaciones Futuras

**Cuando sea necesario** (solo si hay problemas):

1. **Minificación**:
   ```bash
   # CSS
   cssnano

   # JS
   terser search.js -o search.min.js
   ```

2. **Lazy Loading**:
   - Cargar categorías de search.js bajo demanda
   - Scroll infinito en glosarios muy largos

3. **Caching**:
   - Service Worker para offline
   - Cache API para búsquedas frecuentes

4. **Code Splitting**:
   - Dividir search.js por categoría
   - Cargar solo lo necesario

---

## Seguridad

### Consideraciones

Como es un sistema estático local, no hay vectores de ataque tradicionales:

- ✅ No hay servidor
- ✅ No hay base de datos
- ✅ No hay autenticación
- ✅ No hay inputs de usuario persistidos

### Buenas Prácticas Aplicadas

1. **XSS Prevention**:
   - No se usa `innerHTML` con contenido de usuario
   - Highlighting usa regex con texto controlado

2. **Safe Navigation**:
   - Todos los links son relativos
   - No hay redirects externos

3. **Content Security**:
   - Código de ejemplo está en bloques `<pre>`
   - No ejecutable por defecto

---

## Testing

### Current Testing

**Manual**:
- Navegación completa del sistema
- Búsqueda en todos los glosarios
- Responsive en diferentes tamaños
- Cross-browser (Chrome, Firefox, Safari)

### Future Testing

**Cuando crezca el sistema**:

1. **Automated Tests**:
   ```javascript
   // Jest para búsqueda
   test('search finds HTML terms', () => {
       const results = performSearch('div');
       expect(results.length).toBeGreaterThan(0);
   });
   ```

2. **E2E Tests**:
   ```javascript
   // Playwright/Cypress
   test('navigation works', async ({ page }) => {
       await page.goto('/index.html');
       await page.click('text=HTML');
       await expect(page).toHaveURL(/HTML\/index.html/);
   });
   ```

3. **Validation**:
   - W3C HTML validator (automated)
   - CSS validator
   - Lighthouse audits

---

## Deployment

### Opciones de Deploy

**1. Local (current)**:
- Solo abrir `index.html` en navegador

**2. Static Hosting** (futuro):
- GitHub Pages
- Netlify
- Vercel
- Surge

**3. Self-hosted**:
- Simple HTTP server
- Nginx/Apache
- Docker container

### Deploy Simple

```bash
# Python HTTP server
python -m http.server 8000

# Node HTTP server
npx http-server -p 8000

# PHP server
php -S localhost:8000
```

---

## Mantenimiento

### Actualizar Contenido

**Nuevo término en glosario**:
1. Editar `[Tech]/Glosario.html`
2. Agregar término con estructura correcta
3. Agregar `data-tags`
4. Actualizar `search.js` con nuevo término

**Nuevo ejercicio**:
1. Editar `[Tech]/Ejercicios.html`
2. Agregar en sección de nivel apropiado
3. Seguir estructura de ejercicios existentes

**Nueva tecnología**:
1. Consultar `/docs/INSTRUCCIONES_CLAUDE.md`
2. Copiar estructura de HTML o Git-GitHub
3. Crear los 3 archivos obligatorios
4. Actualizar `index.html` principal
5. Actualizar `search.js`

### Actualizar Estilos

**Cambio de color de acento**:
1. Buscar `--accent-color` en el archivo
2. Reemplazar con nuevo color
3. Verificar que los cambios sean consistentes

**Cambio global**:
1. Hacer en un archivo primero
2. Probar exhaustivamente
3. Replicar en otros archivos
4. Usar search & replace en editor

---

## Conclusión

Este sistema está diseñado para ser:
- **Simple**: Sin complejidad innecesaria
- **Mantenible**: Estructura clara y consistente
- **Escalable**: Fácil agregar contenido nuevo
- **Performante**: Carga rápida y eficiente
- **Accessible**: Funciona en cualquier navegador

**Principio guía**: "Hazlo funcionar, hazlo bien, hazlo rápido" - en ese orden.

---

**Última actualización**: 2025-10-12
**Versión del sistema**: 2.0.0
