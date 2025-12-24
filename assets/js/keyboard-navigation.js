// Navegación por teclado - Espacio para avanzar, Shift+Espacio para retroceder
// Uso: Incluir este script en las páginas de módulos

document.addEventListener('DOMContentLoaded', function() {
    // Selectores de secciones navegables (solo .termino que tienen id)
    const sectionSelectors = [
        '.termino[id]',       // Términos del glosario con ID
        'section[id]'         // Secciones con ID
    ];

    let sections = [];
    let currentIndex = -1;

    // Inicializar secciones
    function initSections() {
        sections = [];
        sectionSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (!sections.includes(el) && el.id) {
                    sections.push(el);
                }
            });
        });

        // Ordenar por posición vertical
        sections.sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            return (rectA.top + window.scrollY) - (rectB.top + window.scrollY);
        });
    }

    // Encontrar la sección actual basada en scroll
    function getCurrentSectionIndex() {
        const scrollTop = window.scrollY + window.innerHeight / 3;

        for (let i = sections.length - 1; i >= 0; i--) {
            const rect = sections[i].getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (elementTop <= scrollTop) {
                return i;
            }
        }
        return 0;
    }

    // Centrar sección en la pantalla (cálculo manual)
    function scrollToCenter(element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calcular posición para centrar
        const elementTop = rect.top + window.scrollY;
        const scrollTo = elementTop - (windowHeight / 2) + (elementHeight / 2);

        window.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: 'smooth'
        });
    }

    // Actualizar TOC (tabla de contenidos)
    function updateTOC(sectionId) {
        // Buscar en el TOC de la derecha
        const tocLinks = document.querySelectorAll('.toc-link, .toc-sidebar a');

        tocLinks.forEach(link => {
            link.classList.remove('toc-active');
            const href = link.getAttribute('href');
            if (href === '#' + sectionId) {
                link.classList.add('toc-active');

                // Hacer scroll en el TOC para que sea visible
                link.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });
    }

    // Navegar a una sección
    function navigateToSection(index) {
        if (index < 0 || index >= sections.length) return;

        const section = sections[index];
        currentIndex = index;

        // Remover highlight de TODAS las secciones
        sections.forEach(s => s.classList.remove('kb-nav-active'));

        // Centrar la sección en pantalla
        scrollToCenter(section);

        // Agregar highlight a la sección actual (permanente hasta cambiar)
        section.classList.add('kb-nav-active');

        // Actualizar TOC
        if (section.id) {
            updateTOC(section.id);
        }

        // Mostrar indicador de progreso
        showNavigationIndicator(index + 1, sections.length, section);
    }

    // Indicador visual de navegación
    let indicatorTimeout;
    function showNavigationIndicator(current, total, section) {
        let indicator = document.getElementById('kb-nav-indicator');

        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'kb-nav-indicator';
            document.body.appendChild(indicator);
        }

        // Obtener título de la sección
        const tag = section.querySelector('.tag');
        const title = tag ? tag.textContent.trim() : section.id;

        indicator.innerHTML = `
            <div class="kb-nav-title">${title}</div>
            <span class="kb-nav-progress">${current} / ${total}</span>
            <div class="kb-nav-bar">
                <div class="kb-nav-fill" style="width: ${(current / total) * 100}%"></div>
            </div>
            <span class="kb-nav-hint">ESPACIO: siguiente | SHIFT+ESPACIO: anterior</span>
        `;

        indicator.classList.add('visible');

        clearTimeout(indicatorTimeout);
        indicatorTimeout = setTimeout(() => {
            indicator.classList.remove('visible');
        }, 3000);
    }

    // Manejar teclas
    function handleKeydown(e) {
        // No actuar si está en un input o textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
            return;
        }

        // Solo espacio
        if (e.code !== 'Space') return;

        // Verificar si hay secciones
        if (sections.length === 0) {
            initSections();
            if (sections.length === 0) return;
        }

        e.preventDefault();

        // Obtener índice actual si no está definido
        if (currentIndex === -1) {
            currentIndex = getCurrentSectionIndex();
        }

        if (e.shiftKey) {
            // Shift + Espacio = retroceder
            navigateToSection(Math.max(0, currentIndex - 1));
        } else {
            // Espacio = avanzar
            navigateToSection(Math.min(sections.length - 1, currentIndex + 1));
        }
    }

    // Inicializar
    setTimeout(() => {
        initSections();
        console.log('[KB-Nav] Inicializado con', sections.length, 'secciones');
    }, 500);

    document.addEventListener('keydown', handleKeydown);

    // Re-inicializar si cambia el contenido
    const observer = new MutationObserver(() => {
        initSections();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Actualizar índice y TOC al hacer scroll manual
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const newIndex = getCurrentSectionIndex();
            if (newIndex !== currentIndex && newIndex >= 0) {
                currentIndex = newIndex;

                // Actualizar highlight
                sections.forEach(s => s.classList.remove('kb-nav-active'));
                if (sections[currentIndex]) {
                    sections[currentIndex].classList.add('kb-nav-active');
                    if (sections[currentIndex].id) {
                        updateTOC(sections[currentIndex].id);
                    }
                }
            }
        }, 100);
    });
});
