// Global Search System for Learning Platform
// This script enables searching across all glossaries and content

// Search data structure - Add more terms as content is created
const searchData = {
    html: [
        {
            term: "DOCTYPE",
            description: "Declaración de tipo de documento HTML5",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "html",
            description: "Elemento raíz del documento HTML",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "head",
            description: "Cabecera del documento con metadatos",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "body",
            description: "Cuerpo del documento con contenido visible",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "title",
            description: "Título de la página",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "meta",
            description: "Metainformación del documento",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "h1, h2, h3, h4, h5, h6",
            description: "Encabezados de diferentes niveles",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "p",
            description: "Párrafo de texto",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "a",
            description: "Ancla o enlace (anchor)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "img",
            description: "Imagen",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "div",
            description: "Contenedor de división genérico",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "span",
            description: "Contenedor en línea",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "ul",
            description: "Lista no ordenada",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "ol",
            description: "Lista ordenada",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "li",
            description: "Elemento de lista",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "table",
            description: "Tabla",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "tr",
            description: "Fila de tabla",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "td",
            description: "Celda de datos de tabla",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "th",
            description: "Encabezado de tabla",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "form",
            description: "Formulario",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "input",
            description: "Campo de entrada",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "button",
            description: "Botón",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "select",
            description: "Lista desplegable",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "textarea",
            description: "Área de texto multilínea",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "header",
            description: "Encabezado de sección (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "nav",
            description: "Navegación (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "main",
            description: "Contenido principal (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "article",
            description: "Artículo (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "section",
            description: "Sección (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "aside",
            description: "Contenido lateral (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "footer",
            description: "Pie de página (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "video",
            description: "Video (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "audio",
            description: "Audio (HTML5)",
            category: "HTML",
            url: "HTML/Glosario.html"
        },
        {
            term: "Ejercicios HTML",
            description: "Ejercicios prácticos progresivos de HTML",
            category: "HTML",
            url: "HTML/Ejercicios.html"
        }
    ],
    // Add more categories as content is created
    css: [],
    javascript: [],
    python: [],
    react: [],
    vue: [],
    angular: [],
    nodejs: [],
    typescript: [],
    git: [],
    docker: [],
    sql: []
};

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    // Debounce function to avoid excessive searching
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

        // Search through all categories
        Object.keys(searchData).forEach(category => {
            const categoryResults = searchData[category].filter(item => {
                return item.term.toLowerCase().includes(queryLower) ||
                       item.description.toLowerCase().includes(queryLower);
            });
            allResults.push(...categoryResults);
        });

        // Display results
        displayResults(allResults, query);
    }

    // Display search results
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No se encontraron resultados para "${query}"</p>
                    <p style="margin-top: 10px; font-size: 0.9em;">Intenta con otros términos o consulta los glosarios directamente.</p>
                </div>
            `;
            searchResults.classList.add('active');
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" onclick="window.location.href='${result.url}'">
                <div class="result-title">${highlightMatch(result.term, query)} <span style="color: #666; font-size: 0.85em;">[${result.category}]</span></div>
                <div class="result-description">${highlightMatch(result.description, query)}</div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
        searchResults.classList.add('active');
    }

    // Highlight matching text
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span style="background: rgba(74, 144, 226, 0.3); color: #64a8f0;">$1</span>');
    }

    // Event listener with debounce
    searchInput.addEventListener('input', debounce(function(e) {
        performSearch(e.target.value);
    }, 300));

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside search area
    searchInput.addEventListener('click', function(e) {
        e.stopPropagation();
        if (searchInput.value.trim().length >= 2) {
            performSearch(searchInput.value);
        }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
});

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { searchData };
}
