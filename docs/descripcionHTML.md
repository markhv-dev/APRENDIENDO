# DESCRIPCIÓN COMPLETA DE LA SECCIÓN HTML
## Blueprint para Implementación de Nuevas Secciones (CSS, JavaScript, etc.)

---

## 📋 TABLA DE CONTENIDOS
1. [Estructura de Carpetas](#estructura-de-carpetas)
2. [Arquitectura de Archivos](#arquitectura-de-archivos)
3. [Sistema de Navegación (Sidebar)](#sistema-de-navegación-sidebar)
4. [Página Index Principal](#página-index-principal)
5. [Estructura de Módulos](#estructura-de-módulos)
6. [Sistema de Términos/Glosario](#sistema-de-términosglosario)
7. [Sistema de Búsqueda](#sistema-de-búsqueda)
8. [TOC (Table of Contents)](#toc-table-of-contents)
9. [Sistema de Estilos CSS](#sistema-de-estilos-css)
10. [Sistema de JavaScript](#sistema-de-javascript)
11. [Botón de Navegación Flotante](#botón-de-navegación-flotante)
12. [Sistema de Badges y Etiquetas](#sistema-de-badges-y-etiquetas)
13. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
14. [Responsive Design](#responsive-design)
15. [Checklist de Implementación](#checklist-de-implementación)

---

## 1. ESTRUCTURA DE CARPETAS

```
Lenguajes/
└── HTML/
    ├── index.html                    # Página principal de HTML
    └── modulos/                      # Carpeta con todos los módulos
        ├── fundamentos.html          # Módulo 1
        ├── texto-formato.html        # Módulo 2
        ├── listas.html               # Módulo 3
        ├── imagenes.html             # Módulo 4
        ├── tablas.html               # Módulo 5
        ├── enlaces.html              # Módulo 6
        ├── bloque-inline.html        # Módulo 7
        ├── semantico.html            # Módulo 8
        ├── formularios.html          # Módulo 9
        └── multimedia.html           # Módulo 10
```

**REGLAS:**
- La carpeta principal se llama igual que la sección (HTML, CSS, JavaScript, etc.)
- Dentro hay un `index.html` que es la landing page de la sección
- La carpeta `modulos/` contiene todos los módulos/temas de la sección
- Los nombres de archivos son kebab-case (minúsculas con guiones)
- Cada módulo es un archivo HTML independiente y autónomo

---

## 2. ARQUITECTURA DE ARCHIVOS

### 2.1 Tipos de Páginas

La sección tiene 2 tipos de páginas:

#### A. Página Index (Landing Page)
- **Propósito**: Vista general de la sección, lista de módulos disponibles
- **Ubicación**: `Lenguajes/HTML/index.html`
- **CSS usado**: `/assets/css/pages.css` + `/assets/css/sidebar.css`
- **Características**:
  - Header con título, icono y descripción
  - Grid de cards con módulos disponibles
  - Cada card muestra: icono, título, descripción, metadatos
  - Badge [U] para contenido de universidad
  - Botón "Volver a HTML" flotante (aunque en index vuelve al nivel superior)

#### B. Páginas de Módulos
- **Propósito**: Contenido educativo específico de un tema
- **Ubicación**: `Lenguajes/HTML/modulos/*.html`
- **CSS usado**: `/assets/css/glosario.css` + `/assets/css/toc.css` + `/assets/css/sidebar.css`
- **Características**:
  - Header con título, icono, subtítulo
  - Sección de introducción estilizada
  - Sección de términos/glosario con sistema de tarjetas
  - TOC lateral derecho con búsqueda
  - Sistema de búsqueda con resaltado
  - Botón flotante "Volver a HTML"
  - Footer con navegación

---

## 3. SISTEMA DE NAVEGACIÓN (SIDEBAR)

### 3.1 Componente Sidebar Global

**Archivo JS**: `/assets/js/sidebar-component.js`

**Características**:
- Sidebar fijo a la izquierda (280px de ancho)
- Siempre visible en todas las páginas
- z-index: 1000
- Background: #1a1a1a
- Scrolleable con scrollbar personalizado

### 3.2 Estructura del Sidebar

```html
<div class="sidebar">
    <!-- Header -->
    <div class="sidebar-header">
        <a href="/index.html" class="sidebar-logo">
            <span class="logo-icon">📚</span>
            <span>Sistema de Aprendizaje</span>
        </a>
    </div>

    <!-- Menu con secciones colapsables -->
    <nav class="sidebar-menu">
        <div class="menu-section">
            <div class="section-title" onclick="toggleSection(this)">
                <span class="toggle-icon">▼</span>
                LENGUAJES
            </div>
            <div class="section-items">
                <a href="/Lenguajes/HTML/index.html" class="menu-item active">
                    <span class="item-icon">📄</span>
                    <span class="item-text">HTML</span>
                </a>
                <a href="#" class="menu-item disabled">
                    <span class="item-icon">🎨</span>
                    <span class="item-text">CSS</span>
                    <span class="badge-soon">PRONTO</span>
                </a>
                <!-- Más items... -->
            </div>
        </div>
        <!-- Más secciones... -->
    </nav>

    <!-- Footer con progreso -->
    <div class="sidebar-footer">
        <div class="progress-info">
            <span class="progress-label">Progreso General</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 15%"></div>
            </div>
            <span class="progress-text">15% completado</span>
        </div>
    </div>
</div>
```

### 3.3 CSS del Sidebar

**Archivo**: `/assets/css/sidebar.css`

**Clases importantes**:
- `.sidebar`: Contenedor principal fijo
- `.sidebar-header`: Logo y título
- `.sidebar-menu`: Contenedor de navegación
- `.menu-section`: Grupo colapsable de items
- `.section-title`: Título del grupo (clickable para colapsar)
- `.toggle-icon`: Icono ▼/▶ que rota al colapsar
- `.section-items`: Contenedor de los items del grupo
- `.menu-item`: Link individual de navegación
- `.menu-item.active`: Estado activo (borde azul)
- `.menu-item.disabled`: Item deshabilitado (opacidad 0.35)
- `.badge-soon`: Badge naranja "PRONTO"
- `.sidebar-footer`: Footer con barra de progreso

### 3.4 Ajuste del Body

**IMPORTANTE**: Todas las páginas tienen:
```css
body {
    margin-left: 280px; /* Compensa el sidebar */
}
```

En mobile (max-width: 768px):
```css
body {
    margin-left: 0; /* Sidebar se oculta */
}
```

---

## 4. PÁGINA INDEX PRINCIPAL

### 4.1 Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML - Sistema de Aprendizaje</title>
    <link rel="stylesheet" href="/assets/css/sidebar.css">
    <link rel="stylesheet" href="/assets/css/pages.css">
</head>
<body>
    <!-- Botón flotante de navegación -->
    <a href="../index.html" class="back-link">← Volver a Lenguajes</a>

    <div class="container">
        <!-- Header con icono y título -->
        <header>
            <span class="icon">📄</span>
            <h1>HTML</h1>
            <p class="subtitle">Lenguaje de marcado para estructurar contenido web</p>
        </header>

        <!-- Introducción opcional -->
        <div class="intro">
            <h2>🎯 ¿Qué aprenderás?</h2>
            <p>Descripción de la sección...</p>
        </div>

        <!-- Grid de módulos -->
        <div class="resources">
            <!-- Card de módulo -->
            <a href="modulos/fundamentos.html" class="resource-card">
                <span class="unsa-badge">[U]</span>
                <span class="resource-icon">🏗️</span>
                <h2 class="resource-title">Módulo 1: Fundamentos</h2>
                <p class="resource-description">Conceptos básicos de HTML...</p>
                <p class="resource-meta">10 términos | Nivel: Básico</p>
            </a>
            <!-- Más cards... -->
        </div>

        <!-- Footer -->
        <footer>
            <p>Sistema de Aprendizaje | <a href="../index.html">Volver</a></p>
        </footer>
    </div>

    <script src="/assets/js/sidebar-component.js"></script>
</body>
</html>
```

### 4.2 Grid de Cards

**CSS**: `.resources` con `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`

**Cada card tiene**:
- `.resource-card`: Card principal con hover effect
- `.unsa-badge`: Badge [U] posicionado absolute top-right (opcional)
- `.resource-icon`: Emoji grande del módulo
- `.resource-title`: Título del módulo (Módulo N: Nombre)
- `.resource-description`: Descripción breve
- `.resource-meta`: Metadatos (ej: "10 términos | Nivel: Básico")

**Efectos**:
- Hover: translateY(-5px) + border color + shadow
- Barra decorativa superior que aparece en hover
- Transición suave

---

## 5. ESTRUCTURA DE MÓDULOS

### 5.1 Anatomía Completa de un Módulo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulo N: Nombre - Sistema de Aprendizaje</title>
    <link rel="stylesheet" href="/assets/css/sidebar.css">
    <link rel="stylesheet" href="/assets/css/glosario.css">
    <link rel="stylesheet" href="/assets/css/toc.css">
</head>
<body>
    <!-- Header fijo con info del módulo -->
    <header>
        <a href="../index.html" class="back-link">← Volver a HTML</a>
        <span class="icon">🏗️</span>
        <h1>Módulo N: Nombre del Módulo</h1>
        <p class="subtitle">Descripción breve del módulo</p>
    </header>

    <!-- Layout principal: contenido + TOC -->
    <div class="content-with-toc">
        <!-- Contenido principal -->
        <main class="main-content">
            <!-- Sección de introducción estilizada -->
            <section id="introduccion" style="background: linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(231, 76, 60, 0.05) 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #e74c3c; margin-bottom: 40px;">
                <h2 style="color: #e74c3c; margin-bottom: 15px; font-size: 1.8em;">
                    <span class="unsa-tag" style="background: #e74c3c; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 0.5em; margin-right: 10px;">[U]</span>
                    🏗️ Nombre del Módulo
                </h2>
                <p style="font-size: 1.1em; line-height: 1.8; color: #e0e0e0; margin-bottom: 20px;">
                    Descripción introductoria del módulo...
                </p>
                <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 8px; border: 1px solid rgba(231, 76, 60, 0.3);">
                    <h3 style="color: #e74c3c; margin-bottom: 12px; font-size: 1.1em;">📋 Contenido del módulo:</h3>
                    <ul style="list-style: none; padding-left: 0; line-height: 2;">
                        <li style="color: #b0b0b0;">✓ Tema 1</li>
                        <li style="color: #b0b0b0;">✓ Tema 2</li>
                        <li style="color: #b0b0b0;">✓ Tema 3</li>
                    </ul>
                </div>
            </section>

            <!-- Sección de términos/glosario -->
            <section id="terminos" class="topic-section">
                <h2>📚 Glosario del Módulo</h2>
                <p>Referencia completa de conceptos de este módulo:</p>

                <div id="terminosContainer">
                    <!-- Términos aquí (ver sección 6) -->
                </div>

                <div id="noResults" class="no-results" style="display: none;">
                    No se encontraron términos que coincidan con tu búsqueda.
                </div>
            </section>
        </main>

        <!-- TOC Lateral -->
        <aside class="toc-sidebar">
            <div class="toc-header">🏗️ Nombre del Módulo</div>

            <div class="toc-search-container">
                <input type="text" id="searchInput" class="toc-search-box" placeholder="🔍 Buscar término...">
            </div>

            <nav>
                <ul class="toc-list">
                    <li class="toc-item"><a href="#introduccion" class="toc-link">📋 Introducción</a></li>
                    <li class="toc-item"><a href="#terminos" class="toc-link">📚 Glosario del Módulo</a></li>
                </ul>
            </nav>

            <div class="toc-progress">
                <div class="toc-progress-bar" id="tocProgressBar"></div>
            </div>
        </aside>
    </div>

    <!-- Footer -->
    <footer>
        <p>Módulo N: Nombre | <a href="../index.html">Volver a HTML</a></p>
    </footer>

    <script src="/assets/js/sidebar-component.js"></script>
    <script>
        // JavaScript del módulo (ver sección 10)
    </script>
</body>
</html>
```

### 5.2 Secciones del Módulo

#### A. Header
- Título del módulo con número
- Icono representativo
- Subtítulo descriptivo
- Botón "Volver a HTML" flotante

#### B. Layout `content-with-toc`
- Display: flex
- Main content ocupa el espacio principal
- TOC lateral ocupa 350px a la derecha

#### C. Sección Introducción
- ID: `introduccion`
- Background con gradiente suave del color principal
- Border-left de 4px del color principal
- Badge [U] si es contenido de universidad
- Título con icono
- Descripción del módulo
- Box interno con lista de contenidos (viñetas con ✓)
- **IMPORTANTE**: Estilos inline para máxima portabilidad

#### D. Sección Términos
- ID: `terminos`
- Título "📚 Glosario del Módulo"
- Descripción breve
- Container `terminosContainer` con todos los términos
- Div `noResults` oculto por defecto (aparece cuando búsqueda sin resultados)

---

## 6. SISTEMA DE TÉRMINOS/GLOSARIO

### 6.1 Estructura de un Término

```html
<div class="termino" data-tags="etiquetas busqueda relacionadas">
    <!-- Tag con el nombre del concepto -->
    <span class="tag">&lt;html&gt;</span>

    <!-- Significado (verde, italic, bold) -->
    <p class="significado">Significado: Elemento raíz del documento <span class="unsa-tag">[U]</span></p>

    <!-- Descripción detallada -->
    <p class="descripcion">
        Descripción completa del concepto. Puede ser de varias líneas.
        Explica en detalle qué es, para qué sirve, cuándo usarlo, etc.
    </p>

    <!-- Ejemplo de código -->
    <div class="ejemplo">
        &lt;html lang="es"&gt;<br>
        &nbsp;&nbsp;&lt;head&gt;&lt;/head&gt;<br>
        &nbsp;&nbsp;&lt;body&gt;&lt;/body&gt;<br>
        &lt;/html&gt;
    </div>

    <!-- Nota adicional (opcional) -->
    <div class="nota">
        <strong>Nota importante:</strong><br>
        Información adicional relevante. Puede incluir <span class="atributo">atributos</span> destacados.
    </div>

    <!-- Ejercicio práctico (opcional) -->
    <div class="practice-exercise">
        <strong>✏️ Ejercicio práctico:</strong>
        <p>Descripción del ejercicio...</p>
        <button class="show-solution">Ver solución</button>
        <div class="solution" style="display: none;">
            Solución del ejercicio...
        </div>
    </div>
</div>
```

### 6.2 Elementos del Término

#### `.tag`
- Background: #e74c3c
- Color: white
- Font: monospace
- Border-radius: 5px
- Padding: 6px 12px
- Display: inline-block
- Margin-bottom: 12px
- **Contenido**: Nombre del concepto (etiqueta HTML, comando, etc.)

#### `.significado`
- Color: #4CAF50 (verde)
- Font-weight: 600
- Font-style: italic
- Margin-bottom: 10px
- Font-size: 1.05em
- **Formato**: "Significado: [descripción corta]"
- Puede incluir `<span class="unsa-tag">[U]</span>` al final

#### `.descripcion`
- Color: #b0b0b0
- Line-height: 1.8
- Margin-bottom: 12px
- **Contenido**: Explicación detallada, múltiples líneas permitidas

#### `.ejemplo`
- Background: #0a0a0a
- Color: #f8f8f2
- Font: monospace
- Font-size: 13px
- Padding: 15px
- Border-radius: 6px
- Border: 1px solid #2a2a2a
- Overflow-x: auto
- **Contenido**: Código de ejemplo con `<br>` y `&nbsp;` para formato

#### `.nota`
- Background: rgba(241, 196, 15, 0.1) (amarillo suave)
- Border-left: 4px solid #f1c40f
- Padding: 15px
- Margin-top: 12px
- Border-radius: 6px
- Color: #d4d4d4
- **strong**: Color #f1c40f

#### `.atributo`
- Color: #e74c3c
- Font-weight: bold
- Se usa dentro de `.nota` o `.descripcion` para destacar atributos

#### `data-tags`
- Atributo del div `.termino`
- Contiene palabras clave separadas por espacios
- Se usa para búsqueda (matching adicional además del contenido visible)
- Ejemplos: "html documento raiz root", "strong importante bold negrita"

### 6.3 Variaciones de Términos

Algunos módulos pueden tener términos sin todas las secciones. Mínimo requerido:
- `.tag`
- `.significado`
- `.descripcion`

Opcionales:
- `.ejemplo`
- `.nota`
- `.practice-exercise`

### 6.4 Orden y Organización

Los términos se ordenan típicamente por:
1. **Importancia/Frecuencia**: Conceptos más básicos primero
2. **Lógica de aprendizaje**: Del simple al complejo
3. **Agrupación temática**: Términos relacionados juntos

---

## 7. SISTEMA DE BÚSQUEDA

### 7.1 Componente de Búsqueda en TOC

```html
<div class="toc-search-container">
    <input type="text" id="searchInput" class="toc-search-box" placeholder="🔍 Buscar término...">
</div>
```

### 7.2 Funcionalidad de Búsqueda

**JavaScript ubicado en**: `<script>` inline al final del módulo

**Características**:
1. **Normalización de texto**: Elimina tildes/acentos para búsqueda flexible
2. **Búsqueda en múltiples campos**: tag, significado, descripción, data-tags
3. **Resaltado de coincidencias**: Marca con `<mark>` amarillo las coincidencias
4. **Filtrado en tiempo real**: Oculta términos que no coinciden
5. **Mensaje de "sin resultados"**: Muestra div `#noResults` cuando no hay coincidencias
6. **Case-insensitive**: No distingue mayúsculas/minúsculas

### 7.3 Función de Normalización

```javascript
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}
```

**Ejemplos**:
- "descripción" → "descripcion"
- "código" → "codigo"
- "Párrafo" → "parrafo"

### 7.4 Función de Resaltado

```javascript
function highlightText(element, query) {
    removeHighlights(element);

    // Crear TreeWalker para recorrer nodos de texto
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    // Recopilar nodos que contienen la query
    const nodesToReplace = [];
    let node;
    while (node = walker.nextNode()) {
        if (normalizeText(node.nodeValue).includes(query)) {
            nodesToReplace.push(node);
        }
    }

    // Reemplazar con versión resaltada
    nodesToReplace.forEach(node => {
        const text = node.nodeValue;
        // Crear regex que ignore tildes
        const accentsMap = {
            'a': '[aáàäâã]', 'e': '[eéèëê]', 'i': '[iíìïî]',
            'o': '[oóòöôõ]', 'u': '[uúùüû]', 'n': '[nñ]'
        };

        let regexPattern = '';
        for (let char of query) {
            regexPattern += accentsMap[char] || char;
        }

        const regex = new RegExp(`(${regexPattern})`, 'gi');
        const span = document.createElement('span');
        span.innerHTML = text.replace(regex,
            '<mark style="background: #f1c40f; color: #000; padding: 2px 4px; border-radius: 3px; font-weight: 500;">$1</mark>'
        );
        node.parentNode.replaceChild(span, node);
    });
}
```

**Resultado**: Texto que coincide se marca con fondo amarillo (#f1c40f)

### 7.5 Event Listener de Búsqueda

```javascript
searchInput.addEventListener('input', function() {
    const searchTerm = normalizeText(this.value.trim());
    let visibleCount = 0;

    terminos.forEach(termino => {
        // Obtener texto de los campos relevantes
        const tag = normalizeText(termino.querySelector('.tag').textContent);
        const significado = normalizeText(termino.querySelector('.significado').textContent);
        const descripcion = normalizeText(termino.querySelector('.descripcion').textContent);
        const tags = normalizeText(termino.getAttribute('data-tags'));

        // Verificar coincidencia
        const matches = tag.includes(searchTerm) ||
                      significado.includes(searchTerm) ||
                      descripcion.includes(searchTerm) ||
                      tags.includes(searchTerm);

        if (matches || searchTerm === '') {
            termino.style.display = 'block';
            visibleCount++;

            // Resaltar solo si hay término de búsqueda
            if (searchTerm !== '') {
                highlightText(termino, searchTerm);
            } else {
                removeHighlights(termino);
            }
        } else {
            termino.style.display = 'none';
            removeHighlights(termino);
        }
    });

    // Mostrar mensaje si no hay resultados
    if (visibleCount === 0 && searchTerm !== '') {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
});
```

---

## 8. TOC (TABLE OF CONTENTS)

### 8.1 Estructura del TOC

```html
<aside class="toc-sidebar">
    <!-- Header del TOC -->
    <div class="toc-header">🏗️ Nombre del Módulo</div>

    <!-- Buscador -->
    <div class="toc-search-container">
        <input type="text" id="searchInput" class="toc-search-box" placeholder="🔍 Buscar término...">
    </div>

    <!-- Navegación -->
    <nav>
        <ul class="toc-list">
            <li class="toc-item">
                <a href="#introduccion" class="toc-link">📋 Introducción</a>
            </li>
            <li class="toc-item">
                <a href="#terminos" class="toc-link">📚 Glosario del Módulo</a>
            </li>
        </ul>
    </nav>

    <!-- Barra de progreso de scroll -->
    <div class="toc-progress">
        <div class="toc-progress-bar" id="tocProgressBar"></div>
    </div>
</aside>
```

### 8.2 Características del TOC

**Posicionamiento**:
- Position: sticky
- Top: 0
- Width: 350px
- Height: 100vh
- Background: #1a1a1a
- Border-left: 1px solid #2a2a2a
- z-index: 100

**Componentes**:
1. `.toc-header`: Título del módulo con icono
2. `.toc-search-container`: Input de búsqueda
3. `nav > ul.toc-list`: Lista de links
4. `.toc-progress`: Barra de progreso de scroll

### 8.3 TOC Simplificado vs TOC con Grupos

#### Simplificado (Usado en HTML)
Solo 2 items:
- Introducción
- Glosario del Módulo

```html
<ul class="toc-list">
    <li class="toc-item"><a href="#introduccion" class="toc-link">📋 Introducción</a></li>
    <li class="toc-item"><a href="#terminos" class="toc-link">📚 Glosario del Módulo</a></li>
</ul>
```

#### Con Grupos (Opcional para secciones más complejas)
```html
<ul class="toc-list">
    <li class="toc-item"><a href="#introduccion" class="toc-link">📋 Introducción</a></li>

    <li class="toc-group">
        <div class="toc-group-header" onclick="toggleTOCGroup('grupo1')">
            <span class="toggle-icon">▼</span>
            🏷️ Nombre del Grupo
        </div>
        <ul class="toc-group-items" id="toc-group-grupo1">
            <li class="toc-item level-2"><a href="#tema1" class="toc-link">Tema 1</a></li>
            <li class="toc-item level-2"><a href="#tema2" class="toc-link">Tema 2</a></li>
        </ul>
    </li>

    <li class="toc-item"><a href="#terminos" class="toc-link">📚 Glosario del Módulo</a></li>
</ul>
```

**NOTA**: En HTML se decidió usar TOC simplificado porque todo el contenido está fusionado en el glosario.

### 8.4 Barra de Progreso de Scroll

**JavaScript**:
```javascript
const progressBar = document.getElementById('tocProgressBar');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    });
}
```

**CSS**:
```css
.toc-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #2a2a2a;
}

.toc-progress-bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
    transition: width 0.2s ease;
}
```

### 8.5 Resaltado de Término al Hacer Click en TOC

**JavaScript**:
```javascript
const tocLinks = document.querySelectorAll('.toc-link');
tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);

        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Remover resaltados anteriores
                document.querySelectorAll('.termino').forEach(t => {
                    t.style.outline = '';
                    t.style.boxShadow = '';
                });

                // Resaltar el elemento seleccionado
                if (targetElement.classList.contains('termino')) {
                    targetElement.style.outline = '3px solid #e74c3c';
                    targetElement.style.boxShadow = '0 0 20px rgba(231, 76, 60, 0.5)';

                    // Quitar resaltado después de 3 segundos
                    setTimeout(() => {
                        targetElement.style.outline = '';
                        targetElement.style.boxShadow = '';
                    }, 3000);
                }
            }
        }, 100);
    });
});
```

---

## 9. SISTEMA DE ESTILOS CSS

### 9.1 Archivos CSS Usados

#### Global:
- `/assets/css/sidebar.css` - Sidebar de navegación global

#### Por Tipo de Página:
- `/assets/css/pages.css` - Index/Landing pages
- `/assets/css/glosario.css` - Páginas de módulos con términos
- `/assets/css/toc.css` - TOC lateral
- `/assets/css/ejercicios.css` - Páginas de ejercicios (si aplica)

### 9.2 Paleta de Colores HTML

**Color Principal**: #e74c3c (rojo)
**Color Secundario**: #c0392b (rojo oscuro)

```css
/* Backgrounds */
--bg-primary: #0f0f0f;      /* Fondo principal */
--bg-secondary: #1a1a1a;    /* Cards, containers */
--bg-tertiary: #222;        /* Elementos internos */
--bg-code: #0a0a0a;         /* Bloques de código */

/* Borders */
--border-primary: #2a2a2a;
--border-accent: #e74c3c;

/* Text */
--text-primary: #e0e0e0;    /* Texto principal */
--text-secondary: #b0b0b0;  /* Texto secundario */
--text-muted: #888;         /* Texto desactivado */
--text-white: #ffffff;

/* Accent Colors */
--accent-primary: #e74c3c;  /* Rojo principal HTML */
--accent-hover: #ff6b5a;    /* Hover state */
--accent-success: #4CAF50;  /* Verde (significados) */
--accent-warning: #f1c40f;  /* Amarillo (notas) */
--accent-info: #4a90e2;     /* Azul (info adicional) */
```

**IMPORTANTE**: Cada sección debe tener su color principal:
- HTML: #e74c3c (rojo)
- CSS: #3498db (azul) - sugerido
- JavaScript: #f1c40f (amarillo) - sugerido
- etc.

### 9.3 Clases CSS Importantes

#### Layout:
- `.container`: max-width: 1100px-1200px, centrado
- `.content-with-toc`: display: flex, contenido + toc
- `.main-content`: flex: 1, contenido principal
- `.toc-sidebar`: width: 350px, sticky

#### Cards:
- `.resource-card`: Card de módulo en index
- `.termino`: Card de término en glosario

#### Text:
- `.tag`: Nombre del concepto (monospace, bold)
- `.significado`: Definición (verde, italic, bold)
- `.descripcion`: Explicación (gris claro)
- `.ejemplo`: Código de ejemplo (negro, monospace)
- `.nota`: Nota adicional (fondo amarillo suave)
- `.atributo`: Atributo destacado (rojo, bold)

#### Badges:
- `.unsa-badge`: Badge [U] en cards (absolute top-right)
- `.unsa-tag`: Badge [U] inline en textos
- `.badge-soon`: Badge "PRONTO" en sidebar

#### Buttons:
- `.back-link`: Botón flotante de navegación
- `.back-button`: Botón estándar de "volver"

#### TOC:
- `.toc-header`: Header del TOC
- `.toc-list`: Lista de navegación
- `.toc-item`: Item individual
- `.toc-link`: Link de navegación
- `.toc-group`: Grupo colapsable
- `.toc-group-header`: Header clickable del grupo
- `.toc-group-items`: Items dentro del grupo
- `.toc-progress`: Container de barra de progreso
- `.toc-progress-bar`: Barra de progreso

#### States:
- `.active`: Estado activo (sidebar, tabs, etc.)
- `.disabled`: Estado deshabilitado
- `.hidden`: display: none
- `.no-results`: Mensaje cuando búsqueda sin resultados

### 9.4 Efectos y Transiciones

**Hover Effects**:
```css
.resource-card:hover {
    transform: translateY(-5px);
    border-color: #e74c3c;
    box-shadow: 0 8px 30px rgba(231, 76, 60, 0.3);
}

.termino:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.2);
    border-color: #e74c3c;
}

.back-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.5);
}
```

**Transiciones**:
```css
/* Estándar para la mayoría de elementos */
transition: all 0.3s ease;

/* Rápida para scroll progress */
transition: width 0.2s ease;
```

### 9.5 Scrollbar Personalizado

```css
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #0f0f0f;
}

::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #4a4a4a;
}
```

---

## 10. SISTEMA DE JAVASCRIPT

### 10.1 Archivos JavaScript

#### Global:
- `/assets/js/sidebar-component.js` - Sidebar y su funcionalidad

#### Inline en Módulos:
Todo el JavaScript específico del módulo va en un `<script>` al final del HTML, justo antes de `</body>`.

### 10.2 Estructura del JavaScript de Módulo

```javascript
<script src="/assets/js/sidebar-component.js"></script>
<script>
    // Funcionalidad de búsqueda en el glosario con normalización y resaltado
    document.addEventListener('DOMContentLoaded', function() {
        // 1. Referencias a elementos DOM
        const searchInput = document.getElementById('searchInput');
        const terminosContainer = document.getElementById('terminosContainer');
        const noResults = document.getElementById('noResults');
        const terminos = terminosContainer.querySelectorAll('.termino');

        // 2. Función normalizeText
        function normalizeText(text) {
            return text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
        }

        // 3. Función highlightText
        function highlightText(element, query) {
            // ... (ver sección 7.4)
        }

        // 4. Función removeHighlights
        function removeHighlights(element) {
            const marks = element.querySelectorAll('mark');
            marks.forEach(mark => {
                const parent = mark.parentNode;
                if (parent) {
                    const textNode = document.createTextNode(mark.textContent);
                    parent.replaceChild(textNode, mark);
                    parent.normalize();
                }
            });
        }

        // 5. Event Listener de búsqueda
        searchInput.addEventListener('input', function() {
            // ... (ver sección 7.5)
        });

        // 6. Barra de progreso de scroll
        const progressBar = document.getElementById('tocProgressBar');
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight - windowHeight;
                const scrolled = window.scrollY;
                const progress = (scrolled / documentHeight) * 100;
                progressBar.style.width = `${Math.min(progress, 100)}%`;
            });
        }

        // 7. Función toggleTOCGroup (si se usan grupos colapsables)
        window.toggleTOCGroup = function(groupId) {
            const group = document.getElementById(`toc-group-${groupId}`);
            const icon = event.currentTarget.querySelector('.toggle-icon');

            if (!group) return;

            if (group.style.display === 'none') {
                group.style.display = 'block';
                icon.textContent = '▼';
            } else {
                group.style.display = 'none';
                icon.textContent = '▶';
            }
        };

        // 8. Resaltar término al hacer clic en TOC
        const tocLinks = document.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // ... (ver sección 8.5)
            });
        });
    });
</script>
```

### 10.3 Funciones Clave

1. **normalizeText(text)**: Normaliza texto eliminando tildes y convirtiendo a minúsculas
2. **highlightText(element, query)**: Resalta coincidencias con `<mark>`
3. **removeHighlights(element)**: Limpia resaltados previos
4. **toggleTOCGroup(groupId)**: Colapsa/expande grupos del TOC
5. **Event listener de búsqueda**: Filtra y resalta términos en tiempo real
6. **Scroll progress**: Actualiza barra de progreso al hacer scroll
7. **Click en TOC**: Resalta temporalmente el término seleccionado

### 10.4 Event Listeners Importantes

```javascript
// Búsqueda en tiempo real
searchInput.addEventListener('input', function() { ... });

// Scroll para barra de progreso
window.addEventListener('scroll', () => { ... });

// Click en links del TOC
tocLinks.forEach(link => {
    link.addEventListener('click', function(e) { ... });
});
```

---

## 11. BOTÓN DE NAVEGACIÓN FLOTANTE

### 11.1 HTML del Botón

```html
<a href="../index.html" class="back-link">← Volver a HTML</a>
```

**Ubicación**: Primera línea dentro de `<body>`, antes de cualquier contenedor.

### 11.2 CSS del Botón

```css
.back-link {
    position: fixed;
    top: 20px;
    left: 300px;  /* Después del sidebar (280px + 20px) */
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
    color: #ffffff;
    text-decoration: none;
    font-size: 0.95em;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    transition: all 0.3s ease;
    z-index: 1001;  /* Encima del sidebar (1000) pero debajo de modales */
    display: flex;
    align-items: center;
    gap: 8px;
}

.back-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.5);
    background: linear-gradient(135deg, #c0392b 0%, #a93226 100%);
}
```

### 11.3 Responsive del Botón

```css
@media (max-width: 768px) {
    .back-link {
        position: fixed;
        top: 15px;
        left: 15px;
        padding: 10px 16px;
        font-size: 0.85em;
        z-index: 9999;
    }
}
```

**En mobile**: El botón va a la izquierda porque el sidebar se oculta.

### 11.4 Variaciones del Texto

Dependiendo de la ubicación:
- En módulos: "← Volver a HTML"
- En index de HTML: "← Volver a Lenguajes"
- En CSS: "← Volver a CSS"
- etc.

**IMPORTANTE**: El botón siempre debe estar visible al hacer scroll (position: fixed).

---

## 12. SISTEMA DE BADGES Y ETIQUETAS

### 12.1 Badge [U] - Contenido Universidad

#### En Cards (Index):
```html
<span class="unsa-badge">[U]</span>
```

**CSS**:
```css
.unsa-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.75em;
    font-weight: 700;
    letter-spacing: 1px;
    box-shadow: 0 4px 10px rgba(231, 76, 60, 0.4);
}
```

#### En Texto (Inline):
```html
<span class="unsa-tag">[U]</span>
```

**CSS**:
```css
.unsa-tag {
    background: #e74c3c;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.85em;
    font-weight: 600;
    margin-left: 5px;
}
```

### 12.2 Badge "PRONTO"

```html
<span class="badge-soon">PRONTO</span>
```

**CSS**:
```css
.badge-soon {
    font-size: 0.6em;
    background: rgba(255, 152, 0, 0.15);
    color: #ff9800;
    padding: 3px 7px;
    border-radius: 4px;
    font-weight: 700;
    letter-spacing: 0.5px;
}
```

### 12.3 Badges de Nivel (Opcional)

Para ejercicios o contenido con niveles:

```html
<span class="nivel basico">Básico</span>
<span class="nivel intermedio">Intermedio</span>
<span class="nivel avanzado">Avanzado</span>
<span class="nivel experto">Experto</span>
```

**CSS**:
```css
.nivel {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 600;
    margin-bottom: 15px;
}

.nivel.basico {
    background: rgba(76, 175, 80, 0.2);
    color: #4CAF50;
    border: 2px solid #4CAF50;
}

.nivel.intermedio {
    background: rgba(255, 152, 0, 0.2);
    color: #FF9800;
    border: 2px solid #FF9800;
}

.nivel.avanzado {
    background: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    border: 2px solid #e74c3c;
}

.nivel.experto {
    background: rgba(156, 39, 176, 0.2);
    color: #9C27B0;
    border: 2px solid #9C27B0;
}
```

---

## 13. CONVENCIONES DE NOMENCLATURA

### 13.1 Archivos y Carpetas

**Formato**: kebab-case (minúsculas con guiones)

```
✅ CORRECTO:
- modulos/texto-formato.html
- modulos/bloque-inline.html
- assets/css/glosario.css

❌ INCORRECTO:
- modulos/TextoFormato.html
- modulos/bloque_inline.html
- assets/css/GlosarioCSS.css
```

### 13.2 IDs HTML

**Formato**: kebab-case

```html
✅ CORRECTO:
<section id="introduccion">
<section id="terminos">
<div id="terminosContainer">
<div id="noResults">
<input id="searchInput">

❌ INCORRECTO:
<section id="Introduccion">
<section id="seccion_terminos">
```

### 13.3 Clases CSS

**Formato**: kebab-case

```css
✅ CORRECTO:
.back-link
.toc-sidebar
.resource-card
.unsa-badge

❌ INCORRECTO:
.backLink
.TOC_Sidebar
.resourceCard
```

### 13.4 Funciones JavaScript

**Formato**: camelCase

```javascript
✅ CORRECTO:
function normalizeText(text)
function highlightText(element, query)
function toggleTOCGroup(groupId)

❌ INCORRECTO:
function normalize_text(text)
function HighlightText(element, query)
```

### 13.5 Variables JavaScript

**Formato**: camelCase

```javascript
✅ CORRECTO:
const searchInput
const terminosContainer
const noResults
let visibleCount

❌ INCORRECTO:
const search_input
const TerminosContainer
```

### 13.6 Constantes

**Formato**: UPPER_SNAKE_CASE (si son verdaderas constantes globales)

```javascript
✅ CORRECTO:
const API_URL = 'https://api.example.com';
const MAX_RESULTS = 100;

// Pero para referencias DOM, usar camelCase:
const searchInput = document.getElementById('searchInput');
```

### 13.7 Títulos de Módulos

**Formato**: "Módulo N: Nombre del Tema"

```
✅ CORRECTO:
Módulo 1: Fundamentos de HTML
Módulo 2: Texto y Formato
Módulo 10: Multimedia en HTML

❌ INCORRECTO:
1. Fundamentos de HTML
Modulo 2 - Texto y Formato
módulo 10: multimedia
```

---

## 14. RESPONSIVE DESIGN

### 14.1 Breakpoints

**Principal breakpoint**: 768px

```css
/* Desktop (por defecto) */
@media (min-width: 769px) {
    /* Estilos desktop */
}

/* Mobile/Tablet */
@media (max-width: 768px) {
    /* Estilos mobile */
}
```

### 14.2 Cambios en Mobile

#### Sidebar:
```css
@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .sidebar.active {
        transform: translateX(0);
    }

    body {
        margin-left: 0;
    }
}
```

#### Layout content-with-toc:
```css
@media (max-width: 768px) {
    .content-with-toc {
        flex-direction: column;
    }

    .toc-sidebar {
        position: static;
        width: 100%;
        height: auto;
        order: -1; /* TOC antes del contenido */
    }
}
```

#### Botón flotante:
```css
@media (max-width: 768px) {
    .back-link {
        left: 15px;
        top: 15px;
        font-size: 0.85em;
        padding: 10px 16px;
    }
}
```

#### Grid de cards:
```css
@media (max-width: 768px) {
    .resources {
        grid-template-columns: 1fr; /* 1 columna en mobile */
    }
}
```

### 14.3 Meta Viewport

**OBLIGATORIO** en todas las páginas:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 15. CHECKLIST DE IMPLEMENTACIÓN

Al crear una nueva sección (CSS, JavaScript, etc.), verificar:

### 15.1 Estructura de Carpetas
- [ ] Crear carpeta en `Lenguajes/[NOMBRE_SECCION]/`
- [ ] Crear `index.html` en la carpeta principal
- [ ] Crear carpeta `modulos/` dentro
- [ ] Crear archivos de módulos con nombres kebab-case

### 15.2 Página Index
- [ ] Copiar estructura de `HTML/index.html`
- [ ] Cambiar título a nombre de la nueva sección
- [ ] Cambiar icono apropiado
- [ ] Actualizar color principal (cambiar #e74c3c por nuevo color)
- [ ] Crear cards para cada módulo
- [ ] Agregar badges [U] donde corresponda
- [ ] Actualizar href del botón "Volver a Lenguajes"
- [ ] Incluir CSS: sidebar.css + pages.css
- [ ] Incluir JS: sidebar-component.js

### 15.3 Módulos
- [ ] Copiar estructura de un módulo de HTML
- [ ] Actualizar título, icono, subtítulo
- [ ] Cambiar color principal en toda la página
- [ ] Crear sección de introducción con estilo inline
- [ ] Crear términos en `#terminosContainer`
- [ ] Cada término debe tener: tag, significado, descripción, ejemplo
- [ ] Agregar `data-tags` a cada término para búsqueda
- [ ] Agregar badges [U] donde corresponda
- [ ] Configurar TOC con enlaces correctos
- [ ] Incluir CSS: sidebar.css + glosario.css + toc.css
- [ ] Incluir JS: sidebar-component.js + script inline
- [ ] Verificar que búsqueda funcione
- [ ] Verificar que resaltado funcione
- [ ] Verificar barra de progreso de scroll

### 15.4 Sidebar
- [ ] Agregar entrada de la nueva sección en sidebar-component.js
- [ ] Icono apropiado
- [ ] Clase `active` cuando estés en esa sección
- [ ] Link correcto a `index.html` de la sección

### 15.5 Estilos
- [ ] Definir color principal de la sección
- [ ] Buscar y reemplazar #e74c3c por nuevo color
- [ ] Buscar y reemplazar rgba(231, 76, 60, ...) por nuevo color
- [ ] Verificar que gradientes usen el nuevo color
- [ ] Verificar hover states
- [ ] Verificar borders y accents

### 15.6 Contenido
- [ ] Cada módulo debe tener mínimo 5-10 términos
- [ ] Términos ordenados lógicamente
- [ ] Ejemplos de código claros y funcionales
- [ ] Descripciones detalladas y precisas
- [ ] Notas adicionales donde sea necesario

### 15.7 Testing
- [ ] Probar búsqueda con y sin tildes
- [ ] Probar resaltado de resultados
- [ ] Probar scroll y barra de progreso
- [ ] Probar click en TOC y resaltado de términos
- [ ] Probar botón flotante "Volver a [SECCION]"
- [ ] Probar responsive en mobile
- [ ] Probar sidebar colapsable en mobile
- [ ] Verificar que no hay errores en consola

### 15.8 Validación Final
- [ ] Todos los links funcionan
- [ ] No hay errores 404
- [ ] Imágenes cargan correctamente (si las hay)
- [ ] Código HTML válido
- [ ] CSS aplicado correctamente
- [ ] JavaScript sin errores
- [ ] Consistencia de diseño con HTML
- [ ] Ortografía correcta en español

---

## NOTAS FINALES

### Filosofía de Diseño

1. **Consistencia**: Todas las secciones deben verse y funcionar igual
2. **Claridad**: Interfaz limpia, sin distracciones
3. **Accesibilidad**: Texto legible, contrastes adecuados
4. **Funcionalidad**: Búsqueda rápida, navegación intuitiva
5. **Responsive**: Funciona en desktop y mobile

### Principios de Contenido

1. **Completo**: Cada término debe estar bien explicado
2. **Ejemplos prácticos**: Código real y funcional
3. **Progresivo**: De simple a complejo
4. **Búsqueda fácil**: data-tags completos y precisos

### Código Reutilizable

**Para crear una nueva sección**:
1. Copiar carpeta completa de HTML
2. Buscar y reemplazar "HTML" por nombre de nueva sección
3. Buscar y reemplazar #e74c3c por nuevo color
4. Actualizar contenido de términos
5. Actualizar íconos
6. Agregar al sidebar

### Mantenibilidad

- CSS centralizado en `/assets/css/`
- JavaScript reutilizable en `/assets/js/`
- Estructura HTML consistente
- Convenciones de nomenclatura claras
- Comentarios en código complejo

---

## RESUMEN TÉCNICO RÁPIDO

**Stack Tecnológico**:
- HTML5 semántico
- CSS3 (Grid, Flexbox, Gradients, Animations)
- JavaScript Vanilla (ES6+)
- Sin frameworks ni librerías externas

**Características Clave**:
- Sidebar global fijo
- Búsqueda con normalización de texto
- TOC sticky con scroll progress
- Resaltado de coincidencias
- Sistema de términos modular
- Responsive design
- Botón de navegación flotante

**Archivos Core**:
- `/assets/js/sidebar-component.js`
- `/assets/css/sidebar.css`
- `/assets/css/glosario.css`
- `/assets/css/toc.css`
- `/assets/css/pages.css`

**Colores por Sección**:
- HTML: #e74c3c (rojo)
- [Definir para CSS, JS, etc.]

---

Este documento debe ser consultado cada vez que se implemente una nueva sección para mantener la consistencia total del sistema.
