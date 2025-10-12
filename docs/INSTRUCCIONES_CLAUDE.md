# 🤖 INSTRUCCIONES PARA CLAUDE CODE

Guía completa para que Claude Code pueda actualizar y expandir el sistema de aprendizaje de forma consistente y profesional.

---

## 📋 Tabla de Contenidos

1. [Filosofía del Sistema](#filosofía-del-sistema)
2. [Antes de Comenzar](#antes-de-comenzar)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Agregar Nueva Tecnología](#agregar-nueva-tecnología)
5. [Diseño y Estilos](#diseño-y-estilos)
6. [Patrones de Código](#patrones-de-código)
7. [Actualizar Contenido Existente](#actualizar-contenido-existente)
8. [Checklist de Calidad](#checklist-de-calidad)

---

## Filosofía del Sistema

### Principios Core

Este sistema está diseñado bajo estos principios fundamentales:

1. **Modular**: Cada tecnología es completamente independiente
2. **Consistente**: Misma estructura y estilo en todas las secciones
3. **Escalable**: Fácil agregar nuevo contenido sin afectar lo existente
4. **Accesible**: Sin frameworks externos, solo HTML/CSS/JS vanilla
5. **Educativo**: Enfoque en aprendizaje progresivo con ejemplos prácticos
6. **Local First**: Todo funciona offline, sin dependencias externas

### Valores

- **Calidad > Cantidad**: Mejor pocos términos bien explicados que muchos superficiales
- **Claridad > Complejidad**: Explicaciones claras y directas
- **Práctica > Teoría**: Cada concepto debe tener ejemplo de código
- **Progresión > Completitud**: Mejor avanzar paso a paso que intentar cubrirlo todo

---

## Antes de Comenzar

### Paso 1: Leer Documentación

Antes de hacer cualquier cambio, **SIEMPRE** lee:

1. **README.md principal** - Overview del sistema
2. **ARQUITECTURA.md** - Estructura técnica detallada
3. **GUIA_COMPLETA.md** - Cómo funciona todo
4. **Este archivo completo** - Instrucciones específicas

### Paso 2: Revisar Ejemplos Existentes

Explora las secciones completadas como referencia:

- **Fundamentos/** - Estructura de 4 sub-secciones
- **Comandos/Git-GitHub/** - Glosario con 45 comandos + 10 ejercicios
- **Lenguajes/HTML/** - Glosario con 50+ términos + 13 ejercicios

**Regla de oro**: Si algo ya existe y funciona, úsalo como template exacto.

### Paso 3: Identificar el Tipo de Tarea

¿Qué necesitas hacer?

- **Agregar nueva tecnología** → Sigue sección "Agregar Nueva Tecnología"
- **Expandir glosario existente** → Sigue "Actualizar Contenido Existente"
- **Agregar ejercicios** → Usa estructura de ejercicios existente
- **Corregir bugs** → Prueba cambio en un solo archivo primero

---

## Estructura de Archivos

### Jerarquía del Sistema

```
APRENDIENDO/
├── index.html                    # Página principal
├── search.js                     # Búsqueda global
├── README.md                     # Documentación breve
│
├── Fundamentos/                  # Las 4 etapas
│   ├── index.html
│   ├── Diseño/
│   ├── Frontend/
│   ├── Backend/
│   └── Base-de-Datos/
│
├── Comandos/                     # Comandos y herramientas CLI
│   └── Git-GitHub/
│       ├── index.html           # Navegación
│       ├── Glosario.html        # 45 comandos
│       └── Ejercicios.html      # 10 ejercicios
│
├── Lenguajes/                    # Lenguajes de programación
│   ├── HTML/
│   │   ├── index.html
│   │   ├── Glosario.html
│   │   ├── Ejercicios.html
│   │   └── README.md
│   ├── CSS/
│   ├── JavaScript/
│   ├── Python/
│   ├── TypeScript/
│   └── SQL/
│
├── Frameworks/                   # Frameworks y librerías
│   ├── React/
│   ├── Vue/
│   └── Angular/
│
├── Herramientas/                 # Dev tools
│   ├── Docker/
│   └── Node.js/
│
└── docs/                         # Documentación detallada
    ├── GUIA_COMPLETA.md
    ├── INSTRUCCIONES_CLAUDE.md  # Este archivo
    ├── ARQUITECTURA.md
    └── ROADMAP.md
```

### Archivos Requeridos por Tecnología

Cada tecnología **DEBE** tener estos 3 archivos:

1. **index.html** - Página de navegación y overview
2. **Glosario.html** - Diccionario de términos con ejemplos
3. **Ejercicios.html** - Prácticas progresivas

Opcional pero recomendado:
- **README.md** - Notas específicas de la tecnología

---

## Agregar Nueva Tecnología

### Proceso Completo Paso a Paso

#### Paso 1: Identificar Categoría y Color

**Categorías disponibles:**
- `Lenguajes/` - HTML, CSS, JavaScript, Python, TypeScript, SQL
- `Frameworks/` - React, Vue, Angular
- `Herramientas/` - Docker, Node.js
- `Comandos/` - Git, terminal tools

**Colores por tecnología:**
```css
/* Lenguajes */
HTML:       #e74c3c   (rojo)
CSS:        #3498db   (azul)
JavaScript: #f1c40f   (amarillo)
Python:     #3776ab   (azul Python)
TypeScript: #3178c6   (azul TS)
SQL:        #336791   (azul PostgreSQL)

/* Frameworks */
React:      #61dafb   (cyan)
Vue:        #42b883   (verde)
Angular:    #dd0031   (rojo Angular)

/* Herramientas */
Node.js:    #339933   (verde Node)
Docker:     #2496ed   (azul Docker)
Git:        #f05032   (naranja Git)
```

#### Paso 2: Crear Carpeta y Archivos Base

```bash
# Ejemplo para crear nueva tecnología CSS
cd /home/markhv-dev/devspace/personal/APRENDIENDO/Lenguajes

mkdir CSS
cd CSS

# Crear los 3 archivos principales
touch index.html Glosario.html Ejercicios.html README.md
```

#### Paso 3: Crear index.html

Copia EXACTAMENTE la estructura de HTML/index.html y modifica:

**Elementos a cambiar:**
1. `<title>` - Nombre de la tecnología
2. Color de acento (busca y reemplaza `#e74c3c` con el color de tu tech)
3. Icono emoji (ejemplo: 🎨 para CSS)
4. Título `<h1>` - Nombre de la tecnología
5. Descripción y contenido intro
6. Breadcrumb links (ajustar niveles de ../)
7. Temas cubiertos en la sección topics

**Template base:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS - Sistema de Aprendizaje</title>
    <style>
        /* Copiar estilos de HTML/index.html */
        /* Cambiar SOLO el --accent-color */
    </style>
</head>
<body>
    <header>
        <a href="../../index.html" class="back-link">← Volver al Inicio</a>
        <span class="icon">🎨</span>
        <h1>CSS</h1>
        <p class="subtitle">Cascading Style Sheets</p>
    </header>

    <div class="container">
        <div class="intro">
            <h2>¿Qué es CSS?</h2>
            <p>
                CSS (Cascading Style Sheets) es el lenguaje que describe...
            </p>
            <p>
                <strong>Versión actual:</strong> CSS3
            </p>
        </div>

        <h2 style="color: #3498db; margin-bottom: 20px; font-weight: 400;">Recursos de Aprendizaje</h2>
        <div class="resources">
            <div class="resource-card" onclick="window.location.href='Glosario.html'">
                <span class="resource-icon">📚</span>
                <h3 class="resource-title">Glosario Completo</h3>
                <p class="resource-description">
                    Referencia detallada de propiedades CSS...
                </p>
                <div class="resource-meta">
                    ✓ X términos documentados<br>
                    ✓ Ejemplos visuales<br>
                    ✓ Organizado por categorías
                </div>
            </div>

            <div class="resource-card" onclick="window.location.href='Ejercicios.html'">
                <span class="resource-icon">🎯</span>
                <h3 class="resource-title">Ejercicios Prácticos</h3>
                <p class="resource-description">
                    Sistema de ejercicios progresivos...
                </p>
                <div class="resource-meta">
                    ✓ X ejercicios progresivos<br>
                    ✓ Niveles: Básico, Intermedio, Avanzado, Experto<br>
                    ✓ Proyecto final
                </div>
            </div>
        </div>

        <div class="topics">
            <h2>Temas Cubiertos</h2>
            <div class="topic-list">
                <div class="topic-item">
                    <h3>Categoría 1</h3>
                    <p>Descripción breve</p>
                </div>
                <!-- Más temas -->
            </div>
        </div>
    </div>

    <footer>
        <p>CSS - Sistema de Aprendizaje | <a href="../../index.html">Volver al Índice Principal</a></p>
    </footer>
</body>
</html>
```

#### Paso 4: Crear Glosario.html

**Estructura obligatoria:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glosario CSS - Sistema de Aprendizaje</title>
    <style>
        /* Copiar estilos completos de HTML/Glosario.html */
        /* Cambiar SOLO --accent-color a tu color */
    </style>
</head>
<body>
    <header>
        <a href="index.html" class="back-link">← Volver a CSS</a>
        <h1>📚 Glosario de CSS</h1>
        <div class="search-container">
            <input type="text" id="searchBox" class="search-box" placeholder="Buscar en el glosario...">
        </div>
    </header>

    <div class="container">
        <!-- CATEGORÍA 1 -->
        <div class="categoria">📁 Categoría 1</div>

        <div class="termino" data-tags="keywords search terms">
            <span class="tag">propiedad/concepto</span>
            <p class="significado">Significado: Descripción breve</p>
            <p class="descripcion">
                Explicación detallada del concepto con contexto y casos de uso...
            </p>
            <div class="ejemplo">
/* Código de ejemplo */
.selector {
    property: value;
}
            </div>
            <div class="nota">
                <strong>💡 Tip:</strong> Nota adicional útil...
            </div>
        </div>

        <!-- Más términos -->

        <!-- CATEGORÍA 2 -->
        <div class="categoria">📁 Categoría 2</div>

        <!-- Más términos -->
    </div>

    <footer>
        <p><a href="index.html">← Volver a CSS</a> | <a href="../../index.html">Ir al Índice Principal</a></p>
    </footer>

    <script>
        // Copiar script de búsqueda de HTML/Glosario.html EXACTAMENTE
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

**Reglas para términos:**

1. **Tag**: Usar `<span class="tag">` para el término principal
2. **Significado**: Definición en una línea
3. **Descripción**: Explicación completa (2-4 párrafos)
4. **Ejemplo**: SIEMPRE incluir código funcional
5. **Nota**: Tips, warnings o info adicional
6. **data-tags**: Keywords para búsqueda (espacios, sin comas)

**Ejemplo de término bien documentado:**

```html
<div class="termino" data-tags="flexbox flex layout diseño responsive contenedor">
    <span class="tag">display: flex</span>
    <p class="significado">Significado: Activa el modelo de layout Flexbox</p>
    <p class="descripcion">
        Flexbox es un sistema de layout unidimensional que permite distribuir
        espacio entre elementos y alinearlos de forma eficiente. Al aplicar
        <code>display: flex</code> a un contenedor, sus hijos directos se
        convierten en flex items que pueden ser manipulados con propiedades
        de flexbox.
    </p>
    <p class="descripcion">
        Es ideal para crear layouts responsivos, centrar elementos vertical
        y horizontalmente, y distribuir espacio disponible entre elementos
        de forma dinámica.
    </p>
    <div class="ejemplo">
/* Contenedor flex básico */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Los hijos se distribuyen automáticamente */
.item {
    flex: 1;  /* Crecen igualmente */
}
    </div>
    <div class="nota">
        <strong>💡 Tip:</strong> Combina con <code>flex-direction</code>,
        <code>justify-content</code> y <code>align-items</code> para control
        total del layout. Para layouts bidimensionales, usa CSS Grid.
    </div>
</div>
```

#### Paso 5: Crear Ejercicios.html

**Estructura obligatoria:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios CSS - Sistema de Aprendizaje</title>
    <style>
        /* Copiar estilos completos de HTML/Ejercicios.html */
        /* Cambiar SOLO --accent-color */
    </style>
</head>
<body>
    <header>
        <a href="index.html" class="back-link">← Volver a CSS</a>
        <h1>🎯 Ejercicios de CSS</h1>
    </header>

    <div class="container">
        <div class="intro">
            <h2>Bienvenido a los Ejercicios de CSS</h2>
            <p>Instrucciones generales sobre cómo abordar los ejercicios...</p>

            <h3>Cómo practicar:</h3>
            <ol>
                <li>Crea un archivo para cada ejercicio</li>
                <li>Implementa la solución paso a paso</li>
                <li>Prueba en el navegador</li>
                <li>Compara con la solución</li>
            </ol>
        </div>

        <!-- NIVEL BÁSICO -->
        <div class="section-separator">📚 NIVEL BÁSICO</div>

        <div class="ejercicio">
            <span class="nivel basico">Básico</span>
            <h2>Ejercicio 1: Título Descriptivo</h2>
            <p class="objetivo">
                <strong>Objetivo:</strong> Qué vas a aprender con este ejercicio
            </p>
            <div class="instrucciones">
                <strong>Tareas:</strong>
                <ul>
                    <li>Tarea específica 1</li>
                    <li>Tarea específica 2</li>
                    <li>Tarea específica 3</li>
                </ul>
            </div>
            <div class="tip">
                💡 <strong>Tip:</strong> Ayuda opcional para completar el ejercicio
            </div>

            <!-- Solución opcional expandible -->
            <div class="solucion">
                <button class="solucion-toggle" onclick="toggleSolution(this)">Ver Solución 📖</button>
                <div class="solucion-content">
                    <pre>
/* CSS solution */
.selector {
    property: value;
}
                    </pre>
                </div>
            </div>
        </div>

        <!-- Más ejercicios básicos (3-4 total) -->

        <!-- NIVEL INTERMEDIO -->
        <div class="section-separator">⚡ NIVEL INTERMEDIO</div>

        <!-- 3-4 ejercicios intermedios -->

        <!-- NIVEL AVANZADO -->
        <div class="section-separator">🔥 NIVEL AVANZADO</div>

        <!-- 2-3 ejercicios avanzados -->

        <!-- NIVEL EXPERTO -->
        <div class="section-separator">💎 NIVEL EXPERTO</div>

        <!-- 1 proyecto final -->
    </div>

    <footer>
        <p><a href="index.html">← Volver a CSS</a> | <a href="../../index.html">Ir al Índice Principal</a></p>
    </footer>

    <script>
        // Copiar script de toggle de soluciones de HTML/Ejercicios.html
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

**Reglas para ejercicios:**

1. **Distribución de niveles**:
   - Básico: 3-4 ejercicios (fundamentos)
   - Intermedio: 3-4 ejercicios (combinación de conceptos)
   - Avanzado: 2-3 ejercicios (proyectos complejos)
   - Experto: 1 proyecto final (integración completa)

2. **Cada ejercicio debe tener**:
   - Título descriptivo
   - Objetivo claro
   - Lista de tareas específicas
   - Tips opcionales (especialmente en básico)
   - Solución expandible (opcional pero recomendado)

3. **Progresión**:
   - Básico: Un concepto a la vez
   - Intermedio: 2-3 conceptos combinados
   - Avanzado: 4+ conceptos, proyecto mini
   - Experto: Todos los conceptos, proyecto completo

#### Paso 6: Actualizar index.html Principal

Agrega la tarjeta de tu tecnología en el `index.html` principal:

```html
<div class="category-card language" onclick="window.location.href='Lenguajes/CSS/index.html'" style="--accent-color: #3498db;">
    <span class="category-type">Lenguaje</span>
    <span class="category-icon">🎨</span>
    <h3 class="category-title">CSS</h3>
    <p class="category-description">Cascading Style Sheets - Diseño y presentación visual</p>
    <span class="category-status status-active">Contenido Disponible</span>
</div>
```

**Importante**: Cambia `status-pending` a `status-active` cuando el contenido esté completo.

#### Paso 7: Actualizar search.js

Agrega los términos de tu glosario al objeto `searchData`:

```javascript
const searchData = {
    html: [ /* términos HTML */ ],
    css: [
        {
            term: "flexbox",
            description: "Sistema de layout unidimensional",
            category: "CSS",
            url: "Lenguajes/CSS/Glosario.html"
        },
        {
            term: "grid",
            description: "Sistema de layout bidimensional",
            category: "CSS",
            url: "Lenguajes/CSS/Glosario.html"
        },
        // Agregar TODOS los términos del glosario
    ],
    // ...
};
```

**Regla**: Cada término en el glosario DEBE estar en search.js.

---

## Diseño y Estilos

### Paleta de Colores

**No inventes colores nuevos.** Usa esta paleta exacta:

```css
/* Fondos */
--bg-primary: #0f0f0f;      /* Fondo principal */
--bg-secondary: #1a1a1a;    /* Contenedores */
--bg-code: #0a0a0a;         /* Bloques de código */

/* Bordes */
--border-primary: #2a2a2a;
--border-secondary: #3a3a3a;

/* Texto */
--text-primary: #e0e0e0;    /* Principal */
--text-secondary: #b0b0b0;  /* Secundario */
--text-tertiary: #888;      /* Deshabilitado */
--text-muted: #666;         /* Muy bajo contraste */

/* Acentos (usar según tecnología) */
--accent-color: #e74c3c;    /* CAMBIAR según tech */
--accent-hover: #ff6b5a;    /* Versión más clara */

/* Estados */
--success: #2ecc71;
--warning: #f1c40f;
--error: #e74c3c;
--info: #4a90e2;
```

### Tipografía

**No cambies las fuentes.** Usa:

```css
/* Fuente principal */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Código */
font-family: 'Courier New', monospace;

/* Tamaños */
--font-xs: 0.8em;
--font-sm: 0.9em;
--font-base: 1em;
--font-lg: 1.2em;
--font-xl: 1.5em;
--font-2xl: 2em;
--font-3xl: 3em;
```

### Componentes Reutilizables

**Copia estos estilos exactamente. No reinventes la rueda.**

#### Tarjeta (Card)

```css
.card {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 30px;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}
```

#### Término de Glosario

```css
.termino {
    background: #1a1a1a;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--accent-color);
    border: 1px solid #2a2a2a;
    transition: all 0.3s ease;
}

.termino:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(var(--accent-color-rgb), 0.2);
}

.tag {
    display: inline-block;
    background: rgba(var(--accent-color-rgb), 0.15);
    color: var(--accent-color);
    padding: 6px 14px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.95em;
    font-weight: 600;
    margin-bottom: 12px;
}

.significado {
    font-size: 1.05em;
    color: #fff;
    font-weight: 500;
    margin: 12px 0;
}

.descripcion {
    color: #b0b0b0;
    line-height: 1.8;
    margin-bottom: 12px;
}

.ejemplo {
    background: #0a0a0a;
    border: 1px solid #2a2a2a;
    border-left: 3px solid var(--accent-color);
    padding: 20px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: #d4d4d4;
    overflow-x: auto;
    margin: 15px 0;
    white-space: pre;
}

.nota {
    background: rgba(var(--accent-color-rgb), 0.1);
    border: 1px solid rgba(var(--accent-color-rgb), 0.3);
    padding: 15px;
    border-radius: 6px;
    margin-top: 15px;
    color: #b0b0b0;
}
```

#### Badges de Nivel

```css
.nivel {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.basico {
    background: rgba(76, 175, 80, 0.2);
    color: #4CAF50;
    border: 1px solid #4CAF50;
}

.intermedio {
    background: rgba(255, 152, 0, 0.2);
    color: #FF9800;
    border: 1px solid #FF9800;
}

.avanzado {
    background: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    border: 1px solid #e74c3c;
}

.experto {
    background: rgba(156, 39, 176, 0.2);
    color: #9C27B0;
    border: 1px solid #9C27B0;
}
```

### Responsive Design

**SIEMPRE incluye estos media queries:**

```css
@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }

    .container {
        padding: 15px;
    }

    .back-link {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        margin-bottom: 20px;
    }

    .categories, .resources, .topic-list {
        grid-template-columns: 1fr;
    }

    .ejemplo {
        font-size: 0.8em;
        padding: 15px;
    }
}
```

---

## Patrones de Código

### JavaScript - Buscador Local

**Copia este código EXACTAMENTE para buscadores en glosarios:**

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

        // Mostrar/ocultar categorías vacías
        document.querySelectorAll('.categoria').forEach(cat => {
            const siguienteTermino = cat.nextElementSibling;
            if (siguienteTermino && siguienteTermino.classList.contains('termino')) {
                cat.style.display = siguienteTermino.style.display;
            }
        });
    });
});
```

### JavaScript - Toggle de Soluciones

**Para ejercicios con soluciones expandibles:**

```javascript
function toggleSolution(button) {
    const content = button.nextElementSibling;

    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'Ver Solución 📖';
        button.style.background = 'rgba(var(--accent-color-rgb), 0.2)';
    } else {
        content.style.display = 'block';
        button.textContent = 'Ocultar Solución 📖';
        button.style.background = 'rgba(46, 204, 113, 0.2)';
    }
}
```

---

## Actualizar Contenido Existente

### Agregar Términos a Glosario Existente

1. **Lee el glosario completo** primero
2. **Identifica la categoría** apropiada
3. **Sigue el formato exacto** de términos existentes
4. **Agrega data-tags** completos para búsqueda
5. **Incluye ejemplo de código** funcional
6. **Actualiza search.js** con el nuevo término

### Agregar Ejercicios

1. **Identifica el nivel** apropiado (básico/intermedio/avanzado/experto)
2. **Asegura progresión** lógica con ejercicios existentes
3. **Cada ejercicio debe**:
   - Enseñar algo nuevo O
   - Combinar conceptos previos de forma nueva
4. **Incluye solución** si es posible
5. **Prueba el ejercicio** tú mismo antes de agregarlo

### Corregir Errores

1. **Identifica el error** específico
2. **Busca todas las ocurrencias** (puede repetirse en múltiples archivos)
3. **Corrige de forma consistente**
4. **Prueba la corrección** en navegador
5. **Verifica que no rompiste** otras partes

---

## Checklist de Calidad

### Antes de Completar una Nueva Tecnología

- [ ] **Archivos creados**: index.html, Glosario.html, Ejercicios.html
- [ ] **Glosario**: Mínimo 30 términos con ejemplos
- [ ] **Ejercicios**: Mínimo 10 ejercicios (3 básico, 3 intermedio, 2 avanzado, 1 experto, 1 proyecto final)
- [ ] **Color de acento**: Consistente en todos los archivos
- [ ] **Breadcrumbs**: Links de navegación funcionan
- [ ] **Búsqueda local**: Funciona en el glosario
- [ ] **search.js**: Todos los términos agregados
- [ ] **index.html principal**: Tarjeta agregada y actualizada a "Contenido Disponible"
- [ ] **Responsive**: Pruebas en móvil/tablet
- [ ] **Validación**: HTML válido (W3C validator)
- [ ] **Tipografía**: Sin errores ortográficos

### Checklist de Consistencia

- [ ] **Estructura**: Idéntica a tecnologías existentes
- [ ] **Estilos**: Paleta de colores respetada
- [ ] **Nombres de clases**: Mismos que en otros archivos
- [ ] **Scripts**: Copiados exactamente de ejemplos
- [ ] **Formato código**: Indentación consistente
- [ ] **Comentarios**: Claros y útiles donde necesario

### Checklist de Contenido

- [ ] **Términos**: Explicaciones claras y completas
- [ ] **Ejemplos**: Código funcional y práctico
- [ ] **Progresión**: Ejercicios van de fácil a difícil
- [ ] **Relevancia**: Contenido útil y moderno (2025)
- [ ] **Completitud**: No faltan conceptos importantes
- [ ] **Claridad**: Lenguaje simple, evita jerga innecesaria

---

## Errores Comunes a Evitar

### ❌ NO HAGAS ESTO:

1. **Cambiar la estructura de archivos**
   - No agregues archivos extra sin razón
   - No cambies nombres de archivos

2. **Inventar estilos nuevos**
   - No crees nuevas clases CSS
   - No uses colores fuera de la paleta

3. **Agregar dependencias**
   - No uses Bootstrap, Tailwind, etc.
   - No agregues jQuery o React
   - Mantén vanilla JS/CSS

4. **Romper navegación**
   - Verifica TODOS los links
   - Breadcrumbs deben funcionar
   - Niveles de ../ correctos

5. **Contenido superficial**
   - No pongas términos sin explicación completa
   - No copies/pegues de documentación externa sin adaptar
   - No ejercicios sin objetivo claro

6. **Inconsistencia**
   - No uses diferentes formatos en la misma sección
   - No cambies estructura entre tecnologías
   - No uses nombres de clases diferentes

### ✅ HAZ ESTO:

1. **Copia estructuras existentes**
2. **Mantén consistencia absoluta**
3. **Prueba todo en el navegador**
4. **Agrega contenido de calidad**
5. **Documenta decisiones importantes**
6. **Actualiza search.js siempre**

---

## Flujo de Trabajo Recomendado

### Para Agregar Nueva Tecnología Completa:

1. **Día 1: Setup**
   - Crear carpeta y archivos
   - Copiar structures de HTML
   - Ajustar colores y títulos

2. **Día 2-3: Glosario**
   - Investigar términos importantes
   - Documentar 30-50 términos
   - Agregar ejemplos de código

3. **Día 4: Ejercicios Básicos**
   - Diseñar 3-4 ejercicios básicos
   - Escribir instrucciones claras
   - Crear soluciones

4. **Día 5: Ejercicios Intermedios/Avanzados**
   - 3-4 intermedios
   - 2-3 avanzados
   - 1 experto

5. **Día 6: Integración**
   - Actualizar search.js
   - Actualizar index.html principal
   - Probar navegación completa

6. **Día 7: Quality Check**
   - Revisar checklist
   - Correcciones finales
   - Validación

---

## Recursos de Referencia

### Para Consultar Durante Desarrollo:

- **MDN Web Docs**: Información técnica precisa
- **Can I Use**: Compatibilidad de features
- **W3C Validator**: Validar HTML
- **CSS Validator**: Validar CSS

### Ejemplos Completos en el Sistema:

- **Fundamentos/**: Estructura de sub-secciones
- **Comandos/Git-GitHub/**: Glosario de comandos
- **Lenguajes/HTML/**: Glosario de lenguaje

---

## Contacto y Soporte

Si encuentras problemas o necesitas clarificación:

1. **Revisa** este documento completo
2. **Consulta** ARQUITECTURA.md para detalles técnicos
3. **Revisa** ejemplos existentes
4. **Documenta** el problema claramente

---

## Conclusión

Este sistema está diseñado para ser fácilmente expandible siguiendo patrones consistentes.

**La clave es**:
- Copiar lo que funciona
- Mantener consistencia absoluta
- Enfocarse en contenido de calidad
- Probar todo exhaustivamente

**Recuerda**: Es mejor hacer una tecnología completa y de calidad que cinco tecnologías a medias.

¡Feliz desarrollo! 🚀
