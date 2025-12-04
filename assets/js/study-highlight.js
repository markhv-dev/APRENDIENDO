/**
 * Study Highlight System
 * Resalta bloques específicos cuando se viene del roadmap de estudio
 * Uso: pagina.html?study=bloque1,bloque2,bloque3
 */

(function() {
    'use strict';

    // Configuración de estilos
    const HIGHLIGHT_STYLES = {
        border: '3px solid #e74c3c',
        boxShadow: '0 0 25px rgba(231, 76, 60, 0.6), inset 0 0 15px rgba(231, 76, 60, 0.1)',
        background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.15) 0%, rgba(231, 76, 60, 0.05) 100%)',
        transition: 'all 0.3s ease'
    };

    // Banner de modo estudio
    const STUDY_BANNER_HTML = `
        <div id="study-mode-banner" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            color: white;
            padding: 12px 20px;
            z-index: 10000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            font-family: 'Segoe UI', sans-serif;
        ">
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="font-size: 1.5em;">📚</span>
                <div>
                    <strong style="font-size: 1.1em;">MODO ESTUDIO ACTIVO</strong>
                    <p style="margin: 0; font-size: 0.85em; opacity: 0.9;">Los bloques resaltados son los que debes estudiar para el examen</p>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="scrollToNextHighlight()" style="
                    background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9em;
                    transition: all 0.2s;
                " onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                    ⬇️ Siguiente bloque
                </button>
                <button onclick="exitStudyMode()" style="
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9em;
                    transition: all 0.2s;
                " onmouseover="this.style.background='rgba(0,0,0,0.3)'" onmouseout="this.style.background='rgba(0,0,0,0.2)'">
                    ✕ Salir
                </button>
            </div>
        </div>
    `;

    // Variables globales
    let highlightedElements = [];
    let currentHighlightIndex = 0;

    // Función para obtener parámetros de la URL
    function getStudyParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const studyParam = urlParams.get('study');
        return studyParam ? studyParam.split(',') : [];
    }

    // Función para resaltar elementos
    function highlightElements(ids) {
        highlightedElements = [];

        ids.forEach(id => {
            const element = document.getElementById(id.trim());
            if (element) {
                // Guardar estilos originales
                element.dataset.originalBorder = element.style.border;
                element.dataset.originalBoxShadow = element.style.boxShadow;
                element.dataset.originalBackground = element.style.background;

                // Aplicar estilos de resaltado
                Object.assign(element.style, HIGHLIGHT_STYLES);

                // Agregar badge de "estudiar"
                const badge = document.createElement('div');
                badge.className = 'study-badge';
                badge.innerHTML = '📖 ESTUDIAR';
                badge.style.cssText = `
                    position: absolute;
                    top: -12px;
                    right: 10px;
                    background: #e74c3c;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 0.75em;
                    font-weight: 600;
                    z-index: 100;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                `;

                // Asegurar que el elemento tenga position relative
                if (getComputedStyle(element).position === 'static') {
                    element.style.position = 'relative';
                }

                element.appendChild(badge);
                highlightedElements.push(element);
            }
        });

        return highlightedElements.length > 0;
    }

    // Función para scroll al siguiente elemento resaltado
    window.scrollToNextHighlight = function() {
        if (highlightedElements.length === 0) return;

        currentHighlightIndex = (currentHighlightIndex + 1) % highlightedElements.length;
        const element = highlightedElements[currentHighlightIndex];

        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Efecto de pulso
        element.style.transform = 'scale(1.02)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 300);
    };

    // Función para salir del modo estudio
    window.exitStudyMode = function() {
        // Remover banner
        const banner = document.getElementById('study-mode-banner');
        if (banner) banner.remove();

        // Restaurar estilos originales
        highlightedElements.forEach(element => {
            element.style.border = element.dataset.originalBorder || '';
            element.style.boxShadow = element.dataset.originalBoxShadow || '';
            element.style.background = element.dataset.originalBackground || '';

            // Remover badge
            const badge = element.querySelector('.study-badge');
            if (badge) badge.remove();
        });

        // Limpiar URL
        const url = new URL(window.location);
        url.searchParams.delete('study');
        window.history.replaceState({}, '', url);

        // Restaurar padding del body
        document.body.style.paddingTop = '';
    };

    // Función de inicialización
    function initStudyMode() {
        const studyIds = getStudyParams();

        if (studyIds.length === 0) return;

        // Esperar a que el DOM esté completamente cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => initStudyHighlights(studyIds));
        } else {
            initStudyHighlights(studyIds);
        }
    }

    function initStudyHighlights(studyIds) {
        const hasHighlights = highlightElements(studyIds);

        if (hasHighlights) {
            // Insertar banner
            document.body.insertAdjacentHTML('afterbegin', STUDY_BANNER_HTML);

            // Ajustar padding del body para compensar el banner fijo
            document.body.style.paddingTop = '70px';

            // Scroll al primer elemento después de un breve delay
            setTimeout(() => {
                if (highlightedElements.length > 0) {
                    highlightedElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);

            // Agregar estilos de animación
            const styleSheet = document.createElement('style');
            styleSheet.textContent = `
                @keyframes study-pulse {
                    0%, 100% { box-shadow: 0 0 25px rgba(231, 76, 60, 0.6), inset 0 0 15px rgba(231, 76, 60, 0.1); }
                    50% { box-shadow: 0 0 35px rgba(231, 76, 60, 0.8), inset 0 0 20px rgba(231, 76, 60, 0.15); }
                }
                .study-badge {
                    animation: badge-bounce 2s ease-in-out infinite;
                }
                @keyframes badge-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }

    // Iniciar
    initStudyMode();
})();
