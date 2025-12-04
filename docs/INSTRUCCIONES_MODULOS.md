# Instrucciones para Crear Módulos de Lenguajes

## Estructura de Archivos por Lenguaje

```
Lenguajes/[LENGUAJE]/
├── index.html          → usa pages.css + sidebar.css
├── Glosario.html       → usa glosario.css + toc.css + sidebar.css
├── Ejercicios.html     → usa ejercicios.css + toc.css + sidebar.css
├── README.md           → descripción del lenguaje
└── modulos/
    ├── modulo1.html    → usa glosario.css + toc.css + sidebar.css
    ├── modulo2.html
    └── ...
```

## CSS Ubicado en /assets/css/

- `glosario.css` - estilos para glosarios y módulos
- `ejercicios.css` - estilos para ejercicios
- `toc.css` - TOC navegación derecha (sticky)
- `sidebar.css` - sidebar navegación izquierda
- `pages.css` - páginas index/landing

## Estructura de un Módulo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Título] - Sistema de Aprendizaje</title>
    <link rel="stylesheet" href="/assets/css/sidebar.css">
    <link rel="stylesheet" href="/assets/css/glosario.css">
    <link rel="stylesheet" href="/assets/css/toc.css">
</head>
<body>
    <header>
        <a href="../index.html" class="back-link">← Volver a [LENGUAJE]</a>
        <span class="icon">[EMOJI]</span>
        <h1>Módulo N: [Título]</h1>
        <p class="subtitle">[Descripción corta]</p>
    </header>

    <div class="content-with-toc">
        <main class="main-content">
            <!-- Sección de introducción -->
            <section id="introduccion">...</section>

            <!-- Términos/conceptos -->
            <section id="terminos" class="topic-section">
                <div id="terminosContainer">
                    <div class="termino" id="[id-unico]" data-tags="[tags búsqueda]">
                        <span class="tag">[Título del término]</span>
                        <p class="significado">[Significado corto]</p>
                        <p class="descripcion">[Descripción detallada]</p>
                        <div class="ejemplo">[Código de ejemplo]</div>
                        <div class="nota">[Notas importantes]</div>
                    </div>
                    <!-- Más términos... -->
                </div>
            </section>
        </main>

        <!-- TOC Sidebar derecha -->
        <aside class="toc-sidebar">
            <div class="toc-header">📚 [Título del Módulo]</div>
            <div class="toc-search-container">
                <input type="text" id="searchInput" class="toc-search-box" placeholder="🔍 Buscar término...">
            </div>
            <nav>
                <ul class="toc-list">
                    <li class="toc-item"><a href="#introduccion" class="toc-link">📋 Introducción</a></li>
                    <!-- Items del TOC por cada término -->
                </ul>
            </nav>
            <div class="toc-progress">
                <div class="toc-progress-bar" id="tocProgressBar"></div>
            </div>
        </aside>
    </div>

    <footer>
        <p>[Título] | <a href="../index.html">Volver a [LENGUAJE]</a></p>
    </footer>

    <script src="/assets/js/sidebar-component.js"></script>
    <script src="/assets/js/toc-component.js"></script>
</body>
</html>
```

## Colores por Lenguaje

Cada lenguaje tiene un color accent para su identidad visual:

- **HTML**: #e74c3c (rojo)
- **CSS**: #f1c40f (amarillo)
- **JavaScript**: #f1c40f (amarillo)
- **Python**: #3498db (azul)
- **C++**: #00599C (azul oscuro)
- **Java**: #f89820 (naranja)
- **Git**: #f05032 (naranja-rojo)

## Reglas de Contenido

### Términos
- Cada término debe tener un `id` único para navegación
- Usar `data-tags` para mejorar la búsqueda
- Incluir ejemplos de código prácticos
- Agregar notas con tips, warnings o best practices

### Ejemplos de código
- Usar `<div class="ejemplo">` para bloques de código
- Escapar caracteres HTML: `&lt;` `&gt;` `&amp;`
- Incluir comentarios explicativos en el código

### Notas
- 💡 Tips y mejores prácticas
- ⚠️ Advertencias y precauciones
- ✅ Best practices
- ❌ Antipatrones

## Módulos Estándar por Lenguaje

### CSS (10 módulos)
1. Fundamentos - sintaxis, cascada, especificidad
2. Selectores - elemento, clase, ID, combinadores
3. Box Model - content, padding, border, margin
4. Flexbox - layout unidimensional
5. Grid - layout bidimensional
6. Colores - hex, rgb, hsl, gradientes
7. Tipografía - fuentes, tamaños, espaciado
8. Posicionamiento - position, z-index
9. Pseudoclases - estados y selección avanzada
10. Animaciones - transitions, transforms, keyframes

### JavaScript (10 módulos sugeridos)
1. Fundamentos - variables, tipos, operadores
2. Funciones - declaración, scope, arrow
3. Arrays - métodos, iteración
4. Objetos - propiedades, métodos
5. DOM - selección, manipulación
6. Eventos - listeners, delegation
7. Async - callbacks, promises, async/await
8. ES6+ - features modernas
9. Clases - POO en JS
10. Módulos - import/export

### Para otros lenguajes
Seguir patrón similar adaptado al lenguaje específico.

## Index del Lenguaje

El `index.html` debe mostrar tarjetas para cada módulo:

```html
<div class="resource-card" onclick="window.location.href='modulos/[archivo].html'">
    <span class="resource-icon">[EMOJI]</span>
    <h3 class="resource-title">Módulo N: [Título]</h3>
    <p class="resource-description">[Descripción]</p>
    <div class="resource-meta">
        ✓ [Punto 1]<br>
        ✓ [Punto 2]<br>
        ✓ [Punto 3]
    </div>
</div>
```

## Scripts Necesarios

### Búsqueda en módulos
El script de búsqueda debe:
- Normalizar texto (eliminar tildes)
- Buscar en tags, título, descripción y ejemplos
- Mostrar/ocultar términos según coincidencia
- Resaltar texto encontrado

### TOC funcionalidad
- Scroll spy para marcar sección activa
- Grupos colapsables con toggleTOCGroup()
- Barra de progreso de lectura

## Instrucciones de Trabajo

1. **Leer primero** este archivo antes de crear módulos
2. **Consultar** módulos existentes de HTML como referencia
3. **Mantener** consistencia en estructura y diseño
4. **Usar** los mismos archivos CSS externos
5. **No** usar CSS embebido excepto en sección de introducción
6. **Incluir** TOC con todos los términos del módulo
7. **Probar** la búsqueda y navegación funcionan correctamente

## Checklist para Nuevo Lenguaje

- [ ] Crear carpeta en /Lenguajes/[NOMBRE]/
- [ ] Crear carpeta modulos/
- [ ] Crear index.html con intro y tarjetas de módulos
- [ ] Crear 10 módulos con contenido completo
- [ ] Cada módulo tiene TOC funcional
- [ ] Agregar lenguaje al sidebar-component.js
- [ ] Actualizar README principal con progreso
