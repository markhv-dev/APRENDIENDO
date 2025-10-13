// Table of Contents (TOC) Component - Generador automático de índice de navegación
// Uso: Incluir este script al final del body en páginas largas

document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.querySelector('.container, .main-content, main');
    if (!contentArea) return;

    // Detectar si es página de Ejercicios (tiene section-separator) o Glosario (tiene categoria)
    const isExercises = contentArea.querySelector('.section-separator') !== null;
    const isGlossary = contentArea.querySelector('.categoria') !== null;

    if (isExercises) {
        initExercisesTOC(contentArea);
    } else if (isGlossary) {
        initGlossaryTOC(contentArea);
    } else {
        // TOC genérico para otras páginas
        initGenericTOC(contentArea);
    }
});

// ========================================
// TOC para EJERCICIOS (agrupado por nivel)
// ========================================
function initExercisesTOC(contentArea) {
    const separators = contentArea.querySelectorAll('.section-separator');
    if (separators.length === 0) return;

    let tocHTML = '<aside class="toc-sidebar" id="tocSidebar">';
    tocHTML += '<div class="toc-header">📑 Ejercicios</div>';
    tocHTML += '<nav><ul class="toc-list">';

    separators.forEach((separator, index) => {
        const sectionTitle = separator.textContent.trim();
        const sectionId = separator.id || `section-${index}`;

        // Asignar ID si no existe
        if (!separator.id) separator.id = sectionId;

        // Obtener ejercicios de esta sección
        let nextElement = separator.nextElementSibling;
        let exercises = [];

        while (nextElement && !nextElement.classList.contains('section-separator')) {
            if (nextElement.classList.contains('ejercicio')) {
                const exerciseTitle = nextElement.querySelector('h2');
                if (exerciseTitle) {
                    const exerciseId = exerciseTitle.id || `ejercicio-${exercises.length}`;
                    if (!exerciseTitle.id) exerciseTitle.id = exerciseId;

                    exercises.push({
                        id: exerciseId,
                        title: exerciseTitle.textContent.trim()
                    });
                }
            }
            nextElement = nextElement.nextElementSibling;
        }

        // Crear grupo colapsable
        tocHTML += `
            <li class="toc-group">
                <div class="toc-group-header" onclick="toggleTOCGroup('${sectionId}')">
                    <span class="toggle-icon">▼</span>
                    ${sectionTitle}
                </div>
                <ul class="toc-group-items" id="toc-group-${sectionId}">
        `;

        exercises.forEach(ex => {
            tocHTML += `
                <li class="toc-item level-2">
                    <a href="#${ex.id}" class="toc-link" data-target="${ex.id}">
                        ${ex.title}
                    </a>
                </li>
            `;
        });

        tocHTML += '</ul></li>';
    });

    tocHTML += '</ul></nav>';
    tocHTML += '<div class="toc-progress"><div class="toc-progress-bar" id="tocProgressBar"></div></div>';
    tocHTML += '</aside>';

    insertTOC(contentArea, tocHTML);
    initScrollSpy();
    initProgressBar();
}

// ========================================
// TOC para GLOSARIO (categorías + búsqueda)
// ========================================
function initGlossaryTOC(contentArea) {
    const categorias = contentArea.querySelectorAll('.categoria');
    const terminos = contentArea.querySelectorAll('.termino');
    if (categorias.length === 0) return;

    // Construir lista de términos para autocompletado
    let searchTerms = [];
    terminos.forEach(termino => {
        const tag = termino.querySelector('.tag');
        const tags = termino.getAttribute('data-tags') || '';
        const allText = termino.textContent.trim();

        if (tag) {
            searchTerms.push({
                text: tag.textContent.trim(),
                element: termino,
                tags: tags,
                fullText: allText
            });
        }
    });

    let tocHTML = '<aside class="toc-sidebar" id="tocSidebar">';
    tocHTML += '<div class="toc-header">📚 Glosario HTML</div>';

    // Buscador con autocompletado
    tocHTML += `
        <div class="toc-search-container">
            <input type="text"
                   class="toc-search-box"
                   id="tocSearchBox"
                   placeholder="Buscar etiquetas...">
            <div class="toc-search-suggestions" id="tocSearchSuggestions"></div>
        </div>
    `;

    tocHTML += '<nav><ul class="toc-list" id="tocCategoryList">';

    categorias.forEach((categoria, index) => {
        const categoryTitle = categoria.textContent.trim();
        const categoryId = categoria.id || `categoria-${index}`;

        if (!categoria.id) categoria.id = categoryId;

        tocHTML += `
            <li class="toc-item">
                <a href="#${categoryId}" class="toc-link toc-category-link" data-target="${categoryId}">
                    ${categoryTitle}
                </a>
            </li>
        `;
    });

    tocHTML += '</ul></nav>';
    tocHTML += '<div class="toc-progress"><div class="toc-progress-bar" id="tocProgressBar"></div></div>';
    tocHTML += '</aside>';

    insertTOC(contentArea, tocHTML);
    initGlossarySearch(searchTerms);
    initScrollSpy();
    initProgressBar();
}

// ========================================
// TOC genérico (h2, h3)
// ========================================
function initGenericTOC(contentArea) {
    const headings = contentArea.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    headings.forEach((heading, index) => {
        if (!heading.id) {
            const text = heading.textContent.trim();
            const id = text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .substring(0, 50);
            heading.id = id || `section-${index}`;
        }
    });

    let tocHTML = '<aside class="toc-sidebar" id="tocSidebar">';
    tocHTML += '<div class="toc-header">📑 Contenido</div>';
    tocHTML += '<nav><ul class="toc-list">';

    headings.forEach(heading => {
        const level = heading.tagName.toLowerCase() === 'h2' ? 2 : 3;
        const text = heading.textContent.trim();
        const id = heading.id;

        tocHTML += `
            <li class="toc-item level-${level}">
                <a href="#${id}" class="toc-link" data-target="${id}">
                    ${text}
                </a>
            </li>
        `;
    });

    tocHTML += '</ul></nav>';
    tocHTML += '<div class="toc-progress"><div class="toc-progress-bar" id="tocProgressBar"></div></div>';
    tocHTML += '</aside>';

    insertTOC(contentArea, tocHTML);
    initScrollSpy();
    initProgressBar();
}

// ========================================
// Insertar TOC en el DOM
// ========================================
function insertTOC(contentArea, tocHTML) {
    const existingContent = contentArea.innerHTML;
    contentArea.innerHTML = `
        <div class="content-with-toc">
            <div class="main-content">
                ${existingContent}
            </div>
            ${tocHTML}
        </div>
    `;

    // Agregar botón toggle para móvil
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toc-toggle';
    toggleButton.innerHTML = '📑';
    toggleButton.setAttribute('aria-label', 'Mostrar/Ocultar Índice');
    toggleButton.onclick = toggleTOC;
    document.body.appendChild(toggleButton);

    initSmoothScroll();
}

// ========================================
// Toggle grupo colapsable
// ========================================
window.toggleTOCGroup = function(groupId) {
    const group = document.getElementById(`toc-group-${groupId}`);
    const header = event.currentTarget;
    const icon = header.querySelector('.toggle-icon');

    if (!group) return;

    if (group.style.display === 'none') {
        group.style.display = 'block';
        icon.textContent = '▼';
    } else {
        group.style.display = 'none';
        icon.textContent = '▶';
    }
}

// ========================================
// Toggle TOC en móvil
// ========================================
function toggleTOC() {
    const toc = document.getElementById('tocSidebar');
    if (toc) {
        toc.classList.toggle('active');
    }
}

// ========================================
// Scroll suave y cerrar TOC en móvil
// ========================================
function initSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-link');

    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1200) {
                setTimeout(() => {
                    const toc = document.getElementById('tocSidebar');
                    if (toc) toc.classList.remove('active');
                }, 300);
            }
        });
    });
}

// ========================================
// Scroll Spy
// ========================================
function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = Array.from(tocLinks).map(link => {
        const id = link.getAttribute('data-target');
        return document.getElementById(id);
    }).filter(section => section !== null);

    if (sections.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => link.classList.remove('active'));

                const activeLink = document.querySelector(`.toc-link[data-target="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');

                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ========================================
// Barra de progreso
// ========================================
function initProgressBar() {
    const progressBar = document.getElementById('tocProgressBar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = `${Math.min(progress, 100)}%`;
    });
}

// ========================================
// Detectar si estamos en la parte superior
// ========================================
window.addEventListener('scroll', () => {
    const toc = document.getElementById('tocSidebar');
    if (!toc) return;

    if (window.scrollY < 100) {
        toc.classList.add('at-top');
    } else {
        toc.classList.remove('at-top');
    }
});

// ========================================
// Búsqueda con autocompletado (Glosario)
// ========================================
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function initGlossarySearch(searchTerms) {
    const searchBox = document.getElementById('tocSearchBox');
    const suggestionsBox = document.getElementById('tocSearchSuggestions');
    if (!searchBox) return;

    // Click en categorías del TOC limpia búsqueda
    const categoryLinks = document.querySelectorAll('.toc-category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function() {
            searchBox.value = '';
            suggestionsBox.style.display = 'none';
            showAllTerms();
            removeHighlights();
        });
    });

    searchBox.addEventListener('input', function(e) {
        const query = normalizeText(e.target.value.trim());
        suggestionsBox.innerHTML = '';
        removeHighlights();

        if (query.length < 2) {
            suggestionsBox.style.display = 'none';
            showAllTerms();
            return;
        }

        // Filtrar sugerencias
        const matches = searchTerms.filter(term => {
            const text = normalizeText(term.text);
            const tags = normalizeText(term.tags);
            const fullText = normalizeText(term.fullText);
            return text.includes(query) || tags.includes(query) || fullText.includes(query);
        });

        if (matches.length === 0) {
            suggestionsBox.style.display = 'none';
            hideAllTerms();
            return;
        }

        // Mostrar sugerencias (máximo 8)
        suggestionsBox.style.display = 'block';
        matches.slice(0, 8).forEach(match => {
            const div = document.createElement('div');
            div.className = 'toc-suggestion-item';
            div.textContent = match.text;
            div.onclick = () => {
                searchBox.value = match.text;
                suggestionsBox.style.display = 'none';
                match.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                highlightText(match.element, match.text);
            };
            suggestionsBox.appendChild(div);
        });

        // Filtrar y resaltar términos visibles
        filterAndHighlightTerms(query);
    });

    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
}

function filterTerms(query) {
    const terminos = document.querySelectorAll('.termino');
    const categorias = document.querySelectorAll('.categoria');

    terminos.forEach(termino => {
        const text = termino.textContent.toLowerCase();
        const tags = termino.getAttribute('data-tags') || '';

        if (text.includes(query) || tags.includes(query)) {
            termino.style.display = 'block';
        } else {
            termino.style.display = 'none';
        }
    });

    // Ocultar categorías vacías
    categorias.forEach(categoria => {
        let nextElement = categoria.nextElementSibling;
        let hasVisible = false;

        while (nextElement && !nextElement.classList.contains('categoria')) {
            if (nextElement.classList.contains('termino') && nextElement.style.display !== 'none') {
                hasVisible = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }

        categoria.style.display = hasVisible ? 'block' : 'none';
    });
}

function showAllTerms() {
    const terminos = document.querySelectorAll('.termino');
    const categorias = document.querySelectorAll('.categoria');

    terminos.forEach(t => t.style.display = 'block');
    categorias.forEach(c => c.style.display = 'block');
}

function hideAllTerms() {
    const terminos = document.querySelectorAll('.termino');
    const categorias = document.querySelectorAll('.categoria');

    terminos.forEach(t => t.style.display = 'none');
    categorias.forEach(c => c.style.display = 'none');
}

function filterAndHighlightTerms(query) {
    const terminos = document.querySelectorAll('.termino');
    const categorias = document.querySelectorAll('.categoria');

    terminos.forEach(termino => {
        const text = normalizeText(termino.textContent);
        const tags = normalizeText(termino.getAttribute('data-tags') || '');

        if (text.includes(query) || tags.includes(query)) {
            termino.style.display = 'block';
            highlightText(termino, query);
        } else {
            termino.style.display = 'none';
        }
    });

    // Ocultar categorías vacías
    categorias.forEach(categoria => {
        let nextElement = categoria.nextElementSibling;
        let hasVisible = false;

        while (nextElement && !nextElement.classList.contains('categoria')) {
            if (nextElement.classList.contains('termino') && nextElement.style.display !== 'none') {
                hasVisible = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }

        categoria.style.display = hasVisible ? 'block' : 'none';
    });
}

function highlightText(element, query) {
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    const nodesToReplace = [];
    let node;

    while (node = walker.nextNode()) {
        if (normalizeText(node.nodeValue).includes(query)) {
            nodesToReplace.push(node);
        }
    }

    nodesToReplace.forEach(node => {
        const text = node.nodeValue;
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Crear regex que ignore tildes
        const accentsMap = {
            'a': '[aáàäâã]', 'e': '[eéèëê]', 'i': '[iíìïî]',
            'o': '[oóòöôõ]', 'u': '[uúùüû]', 'n': '[nñ]'
        };

        let regexPattern = '';
        for (let char of escapedQuery) {
            regexPattern += accentsMap[char] || char;
        }

        const regex = new RegExp(`(${regexPattern})`, 'gi');
        const span = document.createElement('span');
        span.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
        node.parentNode.replaceChild(span, node);
    });
}

function removeHighlights() {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceWith(parent.textContent);
    });
}
