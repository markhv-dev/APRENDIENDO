// Global Search System for Learning Platform
// This script enables searching across all glossaries and content

// Search data structure - Add more terms as content is created
const searchData = {
    html: [
        {
            term: "DOCTYPE",
            description: "Declaración de tipo de documento HTML5",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "html",
            description: "Elemento raíz del documento HTML",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "head",
            description: "Cabecera del documento con metadatos",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "body",
            description: "Cuerpo del documento con contenido visible",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "title",
            description: "Título de la página",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "meta",
            description: "Metainformación del documento",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "h1, h2, h3, h4, h5, h6",
            description: "Encabezados de diferentes niveles",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "p",
            description: "Párrafo de texto",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "a",
            description: "Ancla o enlace (anchor)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "img",
            description: "Imagen",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "div",
            description: "Contenedor de división genérico",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "span",
            description: "Contenedor en línea",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "ul",
            description: "Lista no ordenada",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "ol",
            description: "Lista ordenada",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "li",
            description: "Elemento de lista",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "table",
            description: "Tabla",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "tr",
            description: "Fila de tabla",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "td",
            description: "Celda de datos de tabla",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "th",
            description: "Encabezado de tabla",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "form",
            description: "Formulario",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "input",
            description: "Campo de entrada",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "button",
            description: "Botón",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "select",
            description: "Lista desplegable",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "textarea",
            description: "Área de texto multilínea",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "header",
            description: "Encabezado de sección (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "nav",
            description: "Navegación (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "main",
            description: "Contenido principal (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "article",
            description: "Artículo (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "section",
            description: "Sección (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "aside",
            description: "Contenido lateral (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "footer",
            description: "Pie de página (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "video",
            description: "Video (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "audio",
            description: "Audio (HTML5)",
            category: "HTML",
            url: "Lenguajes/HTML/Glosario.html"
        },
        {
            term: "Ejercicios HTML",
            description: "Ejercicios prácticos progresivos de HTML",
            category: "HTML",
            url: "Lenguajes/HTML/Ejercicios.html"
        }
    ],
    // Add more categories as content is created
    git: [
        {
            term: "git init",
            description: "Inicializa un nuevo repositorio Git",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git clone",
            description: "Descarga una copia completa de un repositorio remoto",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git status",
            description: "Muestra el estado actual del repositorio",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git add",
            description: "Agrega archivos al staging area",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git commit",
            description: "Guarda cambios en la historia del repositorio",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git pull",
            description: "Descarga y fusiona cambios del repositorio remoto",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git push",
            description: "Envía commits locales al repositorio remoto",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git branch",
            description: "Crea, lista o elimina ramas",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git switch",
            description: "Cambia entre ramas",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git checkout",
            description: "Cambia de rama o restaura archivos",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git merge",
            description: "Fusiona ramas en la rama actual",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git remote",
            description: "Gestiona conexiones a repositorios remotos",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git fetch",
            description: "Descarga cambios remotos sin fusionar",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git diff",
            description: "Muestra diferencias entre commits, ramas o archivos",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git stash",
            description: "Guarda cambios temporalmente sin commit",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git rebase",
            description: "Reorganiza historial de commits",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git reset",
            description: "Deshace cambios moviendo HEAD",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git revert",
            description: "Crea commit que deshace cambios anteriores",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git cherry-pick",
            description: "Aplica commit específico a rama actual",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git tag",
            description: "Crea marcadores en puntos específicos del historial",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git log",
            description: "Muestra historial de commits",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git show",
            description: "Muestra información detallada de un commit",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git blame",
            description: "Muestra quién modificó cada línea de código",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git reflog",
            description: "Muestra historial completo de referencias",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git bisect",
            description: "Encuentra commit que introdujo un bug",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git clean",
            description: "Elimina archivos sin seguimiento",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git gc",
            description: "Optimiza repositorio eliminando objetos innecesarios",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git fsck",
            description: "Verifica integridad del repositorio",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "git prune",
            description: "Elimina objetos inalcanzables",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh auth login",
            description: "Autentica GitHub CLI",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh repo create",
            description: "Crea nuevo repositorio en GitHub",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh repo clone",
            description: "Clona repositorio de GitHub",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh pr create",
            description: "Crea nuevo pull request",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh pr list",
            description: "Lista pull requests",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh pr checkout",
            description: "Cambia a rama de un pull request",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh issue create",
            description: "Crea nuevo issue en GitHub",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh issue list",
            description: "Lista issues del repositorio",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh workflow run",
            description: "Ejecuta workflow de GitHub Actions",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        },
        {
            term: "gh release create",
            description: "Crea nueva release en GitHub",
            category: "Git",
            url: "Comandos/Git-GitHub/Glosario.html"
        }
    ],
    css: [],
    javascript: [],
    cpp: [
        {
            term: "Variables y Tipos",
            description: "int, double, char, bool, string - Tipos de datos en C++",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "Punteros",
            description: "Variables que almacenan direcciones de memoria (*ptr, &variable)",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "Referencias",
            description: "Alias para variables existentes (int& ref)",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "Clases",
            description: "Plantillas para crear objetos con atributos y métodos",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "vector",
            description: "Array dinámico de STL que cambia de tamaño automáticamente",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "Templates",
            description: "Funciones y clases genéricas que funcionan con cualquier tipo",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "new y delete",
            description: "Gestión de memoria dinámica en heap",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        },
        {
            term: "Herencia",
            description: "Una clase hereda propiedades y métodos de otra",
            category: "C++",
            url: "Lenguajes/C++/Glosario.html"
        }
    ],
    java: [
        {
            term: "Tipos Primitivos",
            description: "int, double, boolean, char - Tipos básicos de Java",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "String",
            description: "Clase para manejar cadenas de texto inmutables",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Clases y Objetos",
            description: "Plantillas para crear objetos con atributos y métodos",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Constructores",
            description: "Método especial que se ejecuta al crear un objeto",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Herencia",
            description: "Una clase hereda atributos y métodos usando extends",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "ArrayList",
            description: "Lista dinámica que cambia de tamaño automáticamente",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "HashMap",
            description: "Almacena pares clave-valor con búsqueda rápida",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Excepciones",
            description: "Manejo de errores con try-catch-finally",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Generics",
            description: "Clases y métodos parametrizados por tipo (ArrayList<T>)",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        },
        {
            term: "Lambda",
            description: "Expresiones funcionales anónimas ((a, b) -> a + b)",
            category: "Java",
            url: "Lenguajes/Java/Glosario.html"
        }
    ],
    python: [],
    react: [],
    vue: [],
    angular: [],
    nodejs: [],
    typescript: [],
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
