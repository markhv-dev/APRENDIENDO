// Sidebar Component - Inyectable en cualquier página
// Uso: Incluir este script al final del body: <script src="/sidebar-component.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    // Cargar navegación por teclado automáticamente
    if (!document.querySelector('link[href*="keyboard-navigation.css"]')) {
        const kbNavCSS = document.createElement('link');
        kbNavCSS.rel = 'stylesheet';
        kbNavCSS.href = '/assets/css/keyboard-navigation.css';
        document.head.appendChild(kbNavCSS);
    }

    if (!document.querySelector('script[src*="keyboard-navigation.js"]')) {
        const kbNavJS = document.createElement('script');
        kbNavJS.src = '/assets/js/keyboard-navigation.js';
        document.body.appendChild(kbNavJS);
    }
    // Crear el HTML del sidebar
    const sidebarHTML = `
        <!-- Sidebar Navigation -->
        <nav class="sidebar" id="globalSidebar">
            <div class="sidebar-header">
                <a href="/home.html" class="sidebar-logo">
                    <span class="logo-icon">📚</span>
                    <span class="logo-text">Aprendizaje Web</span>
                </a>
            </div>

            <div class="sidebar-menu">
                <!-- Fundamentos -->
                <div class="menu-section" data-section="fundamentos">
                    <div class="section-title" onclick="window.toggleSection('fundamentos')">
                        <span class="toggle-icon">▼</span>
                        FUNDAMENTOS
                    </div>
                    <div class="section-items">
                        <a href="/Fundamentos/Computacion/index.html" class="menu-item" data-section="computacion">
                            <span class="item-icon">💻</span>
                            <span class="item-text">Computación</span>
                            <span class="badge-completed">✓</span>
                        </a>
                        <a href="/Fundamentos/Protocolos/index.html" class="menu-item" data-section="protocolos">
                            <span class="item-icon">🌐</span>
                            <span class="item-text">Protocolos y Redes</span>
                            <span class="badge-completed">✓</span>
                        </a>
                        <a href="/Fundamentos/Diseño/index.html" class="menu-item" data-section="diseño">
                            <span class="item-icon">🎨</span>
                            <span class="item-text">Diseño (UI/UX)</span>
                        </a>
                        <a href="/Fundamentos/Frontend/index.html" class="menu-item" data-section="frontend">
                            <span class="item-icon">🖥️</span>
                            <span class="item-text">Frontend</span>
                        </a>
                        <a href="/Fundamentos/Backend/index.html" class="menu-item" data-section="backend">
                            <span class="item-icon">⚙️</span>
                            <span class="item-text">Backend</span>
                        </a>
                        <a href="/Fundamentos/Base-de-Datos/index.html" class="menu-item" data-section="base-de-datos">
                            <span class="item-icon">🗄️</span>
                            <span class="item-text">Base de Datos</span>
                        </a>
                    </div>
                </div>

                <!-- Lenguajes -->
                <div class="menu-section" data-section="lenguajes">
                    <div class="section-title" onclick="window.toggleSection('lenguajes')">
                        <span class="toggle-icon">▼</span>
                        LENGUAJES
                    </div>
                    <div class="section-items">
                        <a href="/Lenguajes/HTML/index.html" class="menu-item" data-section="html">
                            <span class="item-icon">📄</span>
                            <span class="item-text">HTML</span>
                            <span class="badge-completed">✓ 10</span>
                        </a>
                        <a href="/Lenguajes/CSS/index.html" class="menu-item" data-section="css">
                            <span class="item-icon">🎨</span>
                            <span class="item-text">CSS</span>
                            <span class="badge-completed">✓ 10</span>
                        </a>
                        <a href="/Lenguajes/JavaScript/index.html" class="menu-item" data-section="javascript">
                            <span class="item-icon">⚡</span>
                            <span class="item-text">JavaScript</span>
                            <span class="badge-completed">✓ 11</span>
                        </a>
                        <a href="/Lenguajes/Python/index.html" class="menu-item" data-section="python">
                            <span class="item-icon">🐍</span>
                            <span class="item-text">Python</span>
                            <span class="badge-completed">✓ 10</span>
                        </a>
                        <a href="/Lenguajes/TypeScript/index.html" class="menu-item" data-section="typescript">
                            <span class="item-icon">📘</span>
                            <span class="item-text">TypeScript</span>
                        </a>
                        <a href="/Lenguajes/SQL/index.html" class="menu-item" data-section="sql">
                            <span class="item-icon">🗄️</span>
                            <span class="item-text">SQL</span>
                        </a>
                        <a href="/Lenguajes/PHP/index.html" class="menu-item" data-section="php">
                            <span class="item-icon">🐘</span>
                            <span class="item-text">PHP</span>
                        </a>
                        <a href="/Lenguajes/Java/index.html" class="menu-item" data-section="java">
                            <span class="item-icon">☕</span>
                            <span class="item-text">Java</span>
                        </a>
                        <a href="/Lenguajes/C++/index.html" class="menu-item" data-section="cpp">
                            <span class="item-icon">⚙️</span>
                            <span class="item-text">C++</span>
                        </a>
                        <a href="/Lenguajes/CSharp/index.html" class="menu-item" data-section="csharp">
                            <span class="item-icon">💜</span>
                            <span class="item-text">C#</span>
                        </a>
                        <a href="/Lenguajes/Go/index.html" class="menu-item" data-section="go">
                            <span class="item-icon">🔷</span>
                            <span class="item-text">Go</span>
                        </a>
                        <a href="/Lenguajes/Rust/index.html" class="menu-item" data-section="rust">
                            <span class="item-icon">🦀</span>
                            <span class="item-text">Rust</span>
                        </a>
                        <a href="/Lenguajes/Ruby/index.html" class="menu-item" data-section="ruby">
                            <span class="item-icon">💎</span>
                            <span class="item-text">Ruby</span>
                        </a>
                        <a href="/Lenguajes/Swift/index.html" class="menu-item" data-section="swift">
                            <span class="item-icon">🍎</span>
                            <span class="item-text">Swift</span>
                        </a>
                        <a href="/Lenguajes/Kotlin/index.html" class="menu-item" data-section="kotlin">
                            <span class="item-icon">🤖</span>
                            <span class="item-text">Kotlin</span>
                        </a>
                    </div>
                </div>

                <!-- Frameworks -->
                <div class="menu-section collapsed" data-section="frameworks">
                    <div class="section-title" onclick="window.toggleSection('frameworks')">
                        <span class="toggle-icon">▶</span>
                        FRAMEWORKS
                    </div>
                    <div class="section-items">
                        <a href="#" class="menu-item disabled">
                            <span class="item-icon">⚛️</span>
                            <span class="item-text">React</span>
                            <span class="badge-soon">PRONTO</span>
                        </a>
                        <a href="#" class="menu-item disabled">
                            <span class="item-icon">💚</span>
                            <span class="item-text">Vue</span>
                            <span class="badge-soon">PRONTO</span>
                        </a>
                    </div>
                </div>

                <!-- Comandos -->
                <div class="menu-section" data-section="comandos">
                    <div class="section-title" onclick="window.toggleSection('comandos')">
                        <span class="toggle-icon">▼</span>
                        COMANDOS
                    </div>
                    <div class="section-items">
                        <a href="/Comandos/Git-GitHub/index.html" class="menu-item" data-section="git">
                            <span class="item-icon">🔀</span>
                            <span class="item-text">Git & GitHub</span>
                            <span class="badge-completed">✓</span>
                        </a>
                    </div>
                </div>

            </div>

            <div class="sidebar-footer">
                <div id="userProfileSection">
                    <!-- Se carga dinámicamente -->
                </div>
            </div>
        </nav>
    `;

    // Insertar el sidebar al inicio del body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    // Agregar margin-left al contenido existente
    const mainContent = document.body.querySelector('.container, .main-content, main');
    if (mainContent && !mainContent.classList.contains('main-content')) {
        mainContent.style.marginLeft = '280px';
        mainContent.style.transition = 'margin-left 0.3s ease';
    }

    // Auto-highlight el item activo
    highlightActiveItem();

    // Restore collapsed states from localStorage
    restoreCollapsedStates();

    // Cargar perfil de usuario
    loadUserProfile();
});

function loadUserProfile() {
    const profileSection = document.getElementById('userProfileSection');
    if (!profileSection) return;

    profileSection.innerHTML = `
        <div class="user-profile" id="userProfileMenu">
            <div class="profile-dropdown">
                <a href="/mensajes.html" class="dropdown-item">
                    <span>📬</span>
                    <span>Ver Mensajes</span>
                </a>
                <a href="/api/logout" class="dropdown-item">
                    <span>🚪</span>
                    <span>Cerrar Sesión</span>
                </a>
            </div>
            <div class="profile-trigger">
                <div class="profile-icon">👤</div>
                <div class="profile-info">
                    <div class="profile-name">Usuario</div>
                    <div class="profile-email">Autenticado</div>
                </div>
            </div>
        </div>
    `;

    // Toggle dropdown
    const profileMenu = document.getElementById('userProfileMenu');
    const trigger = profileMenu.querySelector('.profile-trigger');

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        profileMenu.classList.remove('active');
    });
}

function highlightActiveItem() {
    const currentPath = window.location.pathname.toLowerCase();
    const menuItems = document.querySelectorAll('#globalSidebar .menu-item');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (!href || href === '#') return;

        // Normalizar la ruta para comparación
        const normalizedHref = href.toLowerCase().replace('/index.html', '');
        const normalizedPath = currentPath.replace('/index.html', '');

        // Si la ruta actual coincide exactamente con el href del menú
        if (normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + '/')) {
            item.classList.add('active');
        }
    });
}

// Toggle section collapse/expand
window.toggleSection = function(sectionName) {
    const section = document.querySelector(`#globalSidebar [data-section="${sectionName}"]`);
    if (!section) return;

    section.classList.toggle('collapsed');

    // Update toggle icon
    const toggleIcon = section.querySelector('.toggle-icon');
    if (section.classList.contains('collapsed')) {
        toggleIcon.textContent = '▶';
    } else {
        toggleIcon.textContent = '▼';
    }

    // Save state to localStorage
    saveCollapsedStates();
}

// Save collapsed states to localStorage
function saveCollapsedStates() {
    const sections = document.querySelectorAll('#globalSidebar .menu-section');
    const states = {};

    sections.forEach(section => {
        const sectionName = section.getAttribute('data-section');
        states[sectionName] = section.classList.contains('collapsed');
    });

    localStorage.setItem('sidebarCollapsedStates', JSON.stringify(states));
}

// Restore collapsed states from localStorage
function restoreCollapsedStates() {
    const savedStates = localStorage.getItem('sidebarCollapsedStates');
    if (!savedStates) return;

    const states = JSON.parse(savedStates);

    Object.keys(states).forEach(sectionName => {
        const section = document.querySelector(`#globalSidebar [data-section="${sectionName}"]`);
        if (!section) return;

        const toggleIcon = section.querySelector('.toggle-icon');

        if (states[sectionName]) {
            section.classList.add('collapsed');
            if (toggleIcon) toggleIcon.textContent = '▶';
        } else {
            section.classList.remove('collapsed');
            if (toggleIcon) toggleIcon.textContent = '▼';
        }
    });
}
