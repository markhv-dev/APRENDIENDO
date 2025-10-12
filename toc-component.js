// Table of Contents (TOC) Component - Generador automático de índice de navegación
// Uso: Incluir este script al final del body en páginas largas

document.addEventListener('DOMContentLoaded', function() {
    // Buscar todas las secciones y headings que deben aparecer en el TOC
    const contentArea = document.querySelector('.container, .main-content, main');
    if (!contentArea) return;

    // Buscar todos los h2 y h3 que tengan ID o crear IDs automáticamente
    const headings = contentArea.querySelectorAll('h2, h3');

    if (headings.length === 0) return; // No hay headings, no crear TOC

    // Crear IDs automáticamente si no existen
    headings.forEach((heading, index) => {
        if (!heading.id) {
            // Crear ID a partir del texto del heading
            const text = heading.textContent.trim();
            const id = text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
                .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres especiales
                .replace(/\s+/g, '-') // Espacios a guiones
                .substring(0, 50); // Limitar longitud

            heading.id = id || `section-${index}`;
        }
    });

    // Crear estructura del TOC
    const tocHTML = `
        <aside class="toc-sidebar" id="tocSidebar">
            <div class="toc-header">
                📑 Contenido
            </div>
            <nav>
                <ul class="toc-list" id="tocList">
                    ${generateTOCItems(headings)}
                </ul>
            </nav>
            <div class="toc-progress">
                <div class="toc-progress-bar" id="tocProgressBar"></div>
            </div>
        </aside>
    `;

    // Envolver el contenido existente en la estructura con TOC
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

    // Inicializar funcionalidades
    initScrollSpy();
    initProgressBar();
    initSmoothScroll();
});

// Generar items del TOC
function generateTOCItems(headings) {
    let items = '';

    headings.forEach(heading => {
        const level = heading.tagName.toLowerCase() === 'h2' ? 2 : 3;
        const text = heading.textContent.trim();
        const id = heading.id;

        items += `
            <li class="toc-item level-${level}">
                <a href="#${id}" class="toc-link" data-target="${id}">
                    ${text}
                </a>
            </li>
        `;
    });

    return items;
}

// Toggle TOC en móvil
function toggleTOC() {
    const toc = document.getElementById('tocSidebar');
    if (toc) {
        toc.classList.toggle('active');
    }
}

// Cerrar TOC al hacer click en un link (móvil)
function initSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-link');

    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cerrar TOC en móvil después de click
            if (window.innerWidth <= 1200) {
                setTimeout(() => {
                    const toc = document.getElementById('tocSidebar');
                    if (toc) toc.classList.remove('active');
                }, 300);
            }
        });
    });
}

// Scroll Spy: Detectar qué sección está visible y marcarla en el TOC
function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = Array.from(tocLinks).map(link => {
        const id = link.getAttribute('data-target');
        return document.getElementById(id);
    }).filter(section => section !== null);

    if (sections.length === 0) return;

    // Configurar Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Área de detección centrada
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remover active de todos
                tocLinks.forEach(link => link.classList.remove('active'));

                // Agregar active al correspondiente
                const activeLink = document.querySelector(`.toc-link[data-target="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach(section => observer.observe(section));
}

// Barra de progreso de lectura
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

// Detectar si estamos en la parte superior
window.addEventListener('scroll', () => {
    const toc = document.getElementById('tocSidebar');
    if (!toc) return;

    if (window.scrollY < 100) {
        toc.classList.add('at-top');
    } else {
        toc.classList.remove('at-top');
    }
});
