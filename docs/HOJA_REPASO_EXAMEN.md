# 📄 HOJA DE REPASO RÁPIDO - EXAMEN SUSTITORIO IDWeb

**Examen:** Viernes 5 diciembre, 2:50 PM | **Para:** Pliego de hoja permitido

---

## 🌐 HTML - CONCEPTOS CLAVE

### Estructura Básica
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
</head>
<body>
    <!-- Contenido -->
</body>
</html>
```

### Etiquetas Semánticas (HTML5)
```
<header>    - Encabezado de página/sección
<nav>       - Menú de navegación
<main>      - Contenido principal
<article>   - Contenido independiente
<section>   - Sección temática
<aside>     - Contenido secundario (sidebar)
<footer>    - Pie de página
<figure>    - Contenido multimedia con caption
<figcaption> - Descripción de figure
```

### Formularios
```html
<form action="/submit" method="POST">
    <input type="text" name="nombre" required placeholder="Nombre">
    <input type="email" name="email" required>
    <input type="password" name="pass" minlength="8">
    <input type="number" name="edad" min="0" max="120">
    <input type="date" name="fecha">
    <input type="radio" name="genero" value="M"> Masculino
    <input type="checkbox" name="acepto" required>
    <textarea name="mensaje" rows="4"></textarea>
    <select name="pais">
        <option value="pe">Perú</option>
    </select>
    <button type="submit">Enviar</button>
</form>
```

**Diferencia GET vs POST:**
- `GET`: Datos en URL, visible, para consultas, limitado
- `POST`: Datos en body, oculto, para envíos, ilimitado

### Tablas
```html
<table>
    <thead>
        <tr><th>Nombre</th><th>Edad</th></tr>
    </thead>
    <tbody>
        <tr><td>Juan</td><td>25</td></tr>
    </tbody>
    <tfoot>
        <tr><td colspan="2">Total: 1</td></tr>
    </tfoot>
</table>
```
- `colspan="2"` - Une 2 columnas
- `rowspan="2"` - Une 2 filas

### Listas
```html
<ul>        <!-- No ordenada -->
<ol>        <!-- Ordenada -->
<li>        <!-- Item de lista -->
<dl>        <!-- Lista de definiciones -->
  <dt>Término</dt>
  <dd>Definición</dd>
</dl>
```

### Multimedia
```html
<img src="foto.jpg" alt="Descripción" width="300">
<video src="video.mp4" controls autoplay muted></video>
<audio src="audio.mp3" controls loop></audio>
<iframe src="https://ejemplo.com" width="600" height="400"></iframe>
```

### Hipervínculos
```html
<a href="https://google.com">Absoluto externo</a>
<a href="/paginas/contacto.html">Relativo raíz</a>
<a href="contacto.html">Relativo actual</a>
<a href="#seccion">Ancla interna</a>
<a href="mailto:email@example.com">Email</a>
<a href="tel:+51999888777">Teléfono</a>
<a href="doc.pdf" download>Descargar</a>
<a href="externa.com" target="_blank">Nueva pestaña</a>
```

---

## 🎨 CSS - CONCEPTOS CLAVE

### Sintaxis Básica
```css
selector { propiedad: valor; }
```

### Formas de Incluir CSS
```html
<!-- 1. Inline (mayor prioridad) -->
<p style="color: red;">Texto</p>

<!-- 2. Interno -->
<style>
    p { color: blue; }
</style>

<!-- 3. Externo (mejor práctica) -->
<link rel="stylesheet" href="styles.css">
```

### Selectores
```css
elemento       /* Todos los <p> */
.clase         /* Todos con class="clase" */
#id            /* El único con id="id" */
*              /* Todos los elementos */
elemento.clase /* <p> con class="clase" */
elemento, otro /* Múltiples elementos */
padre > hijo   /* Hijo directo */
ancestro desc  /* Todos los descendientes */
elem + sig     /* Hermano adyacente siguiente */
elem ~ herms   /* Todos hermanos siguientes */
[atributo]     /* Con ese atributo */
[attr="val"]   /* Atributo con valor exacto */
```

### Pseudoclases
```css
:hover         /* Al pasar el mouse */
:active        /* Al hacer clic */
:focus         /* Al enfocar (input) */
:visited       /* Enlace visitado */
:first-child   /* Primer hijo */
:last-child    /* Último hijo */
:nth-child(n)  /* n-ésimo hijo (2, even, odd, 3n+1) */
:not(selector) /* Negación */
```

### Pseudoelementos
```css
::before       /* Antes del contenido */
::after        /* Después del contenido */
::first-letter /* Primera letra */
::first-line   /* Primera línea */
```

### Especificidad (de mayor a menor prioridad)
```
!important     → 10000 (evitar)
inline style   → 1000
#id            → 100
.clase         → 10
elemento       → 1
```

### Box Model
```
┌─────────────────────────────┐
│        MARGIN (exterior)     │  Transparente, separa elementos
│  ┌─────────────────────────┐ │
│  │   BORDER (borde)        │ │  Color, grosor, estilo
│  │  ┌───────────────────┐  │ │
│  │  │ PADDING (relleno) │  │ │  Transparente, espacio interno
│  │  │  ┌─────────────┐  │  │ │
│  │  │  │   CONTENT   │  │  │ │  Contenido real
│  │  │  └─────────────┘  │  │ │
│  │  └───────────────────┘  │ │
│  └─────────────────────────┘ │
└─────────────────────────────┘

width/height aplican a CONTENT (box-sizing: content-box)
box-sizing: border-box → width incluye padding y border
```

### Display
```css
display: block;        /* Ocupa toda la línea, width/height funcionan */
display: inline;       /* En línea, NO acepta width/height */
display: inline-block; /* En línea pero acepta width/height */
display: none;         /* No se muestra ni ocupa espacio */
display: flex;         /* Contenedor flexible */
display: grid;         /* Contenedor de grilla */
```

### Position
```css
static;   /* Normal, por defecto */
relative; /* Relativo a su posición normal, deja espacio */
absolute; /* Relativo al ancestro positioned, NO deja espacio */
fixed;    /* Relativo al viewport, fijo al scroll */
sticky;   /* Normal hasta scroll, luego fijo */

/* Con top, right, bottom, left */
```

### Flexbox (contenedor flex)
```css
.container {
    display: flex;
    flex-direction: row | column | row-reverse | column-reverse;
    justify-content: flex-start | center | flex-end | space-between | space-around;
    align-items: flex-start | center | flex-end | stretch;
    flex-wrap: nowrap | wrap;
    gap: 20px;
}
.item {
    flex: 1;              /* Crece y se encoge */
    order: 2;             /* Orden visual */
    align-self: center;   /* Alineación individual */
}
```

### Grid
```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr; /* 3 columnas */
    grid-template-rows: auto 100px;       /* 2 filas */
    gap: 20px;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
.item {
    grid-column: 1 / 3;    /* Ocupa columnas 1-2 */
    grid-row: 1 / 2;       /* Ocupa fila 1 */
    grid-area: header;     /* Asigna a área */
}
```

### Responsive Design
```css
/* Mobile First (desde pequeño hacia grande) */
.elemento { width: 100%; }                    /* Por defecto móvil */
@media (min-width: 768px) { width: 50%; }     /* Tablet */
@media (min-width: 1024px) { width: 33.33%; } /* Desktop */

/* Desktop First (desde grande hacia pequeño) */
.elemento { width: 33.33%; }                  /* Por defecto desktop */
@media (max-width: 1024px) { width: 50%; }    /* Tablet */
@media (max-width: 768px) { width: 100%; }    /* Móvil */
```

### Unidades
```
Absolutas:
  px    - Píxeles (fijo)

Relativas:
  %     - Porcentaje del padre
  em    - Relativo al font-size del elemento
  rem   - Relativo al font-size del root (html)
  vw    - 1% del ancho del viewport
  vh    - 1% del alto del viewport
  vmin  - 1% de la dimensión más pequeña del viewport
  vmax  - 1% de la dimensión más grande del viewport
```

### Colores
```css
color: red;                      /* Nombre */
color: #FF5733;                  /* Hexadecimal */
color: rgb(255, 87, 51);         /* RGB */
color: rgba(255, 87, 51, 0.5);   /* RGBA (con transparencia) */
color: hsl(9, 100%, 60%);        /* HSL (matiz, saturación, luminosidad) */
color: hsla(9, 100%, 60%, 0.5);  /* HSLA (con transparencia) */
```

---

## 💻 JAVASCRIPT - CONCEPTOS CLAVE

### Variables
```javascript
var x = 10;    // Scope global/función, redeclarable, hoisting
let y = 20;    // Scope bloque, NO redeclarable, preferible
const z = 30;  // Constante, NO reasignable, preferible para no cambiar
```

### Tipos de Datos
```javascript
let str = "texto";           // String
let num = 42;                // Number
let bool = true;             // Boolean
let nulo = null;             // Null (intencionalmente vacío)
let indefinido;              // Undefined (no inicializado)
let arr = [1, 2, 3];         // Array
let obj = {a: 1, b: 2};      // Object
```

### Operadores
```javascript
// Aritméticos: +  -  *  /  %  **
// Comparación: ==  !=  ===  !==  >  <  >=  <=
// Lógicos: &&  ||  !
// Ternario: condicion ? verdadero : falso
```

**Diferencia `==` vs `===`:**
- `==`: Igualdad con conversión de tipo (`"5" == 5` → true)
- `===`: Igualdad estricta sin conversión (`"5" === 5` → false)

### Funciones
```javascript
// Declaración tradicional
function sumar(a, b) {
    return a + b;
}

// Arrow function (moderna)
const sumar = (a, b) => a + b;
const saludar = nombre => `Hola ${nombre}`;
```

### Arrays
```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6);              // Agregar al final → [1,2,3,4,5,6]
arr.pop();                // Quitar del final → [1,2,3,4,5]
arr.unshift(0);           // Agregar al inicio → [0,1,2,3,4,5]
arr.shift();              // Quitar del inicio → [1,2,3,4,5]
arr.length;               // Longitud → 5
arr[0];                   // Acceso por índice → 1

// Métodos importantes
arr.map(x => x * 2);      // Transforma cada elemento
arr.filter(x => x > 2);   // Filtra elementos que cumplan condición
arr.forEach(x => console.log(x));  // Ejecuta función por cada elemento
arr.find(x => x > 3);     // Encuentra primer elemento que cumple
arr.includes(3);          // Verifica si contiene elemento → true
```

### Objetos
```javascript
let persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};
persona.nombre;           // Acceso → "Juan"
persona["edad"];          // Acceso alternativo → 25
persona.saludar();        // Llamar método → "Hola, soy Juan"
```

### Clases (POO)
```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);  // Llama al constructor padre
        this.carrera = carrera;
    }
}

let juan = new Persona("Juan", 25);
juan.saludar();  // "Hola, soy Juan"
```

### DOM (Document Object Model)
```javascript
// Seleccionar elementos
document.getElementById("miId");
document.querySelector(".miClase");     // Primero que encuentra
document.querySelectorAll(".miClase");  // Todos los que encuentra

// Modificar contenido
elemento.innerHTML = "<p>HTML</p>";
elemento.textContent = "Solo texto";
elemento.value = "Valor input";

// Modificar atributos
elemento.setAttribute("src", "imagen.jpg");
elemento.getAttribute("href");
elemento.classList.add("activo");
elemento.classList.remove("inactivo");
elemento.classList.toggle("visible");

// Modificar estilos
elemento.style.color = "red";
elemento.style.backgroundColor = "blue";

// Crear/eliminar elementos
let nuevo = document.createElement("div");
padre.appendChild(nuevo);
padre.removeChild(hijo);
```

### Eventos
```javascript
// Agregar evento
elemento.addEventListener("click", function() {
    console.log("Click!");
});

// Arrow function
elemento.addEventListener("click", () => console.log("Click!"));

// Prevenir comportamiento por defecto
form.addEventListener("submit", (e) => {
    e.preventDefault();  // No envía el formulario
    // Tu código aquí
});

// Eventos comunes:
// click, dblclick, mouseenter, mouseleave
// submit, change, input, focus, blur
// keydown, keyup, keypress
// load, DOMContentLoaded
```

### Async/Await y Fetch
```javascript
// Promesas
fetch("https://api.ejemplo.com/datos")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await (más limpio)
async function obtenerDatos() {
    try {
        const response = await fetch("https://api.ejemplo.com/datos");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

### JSON
```javascript
// Convertir objeto a JSON string
let obj = {nombre: "Juan", edad: 25};
let json = JSON.stringify(obj);  // '{"nombre":"Juan","edad":25}'

// Convertir JSON string a objeto
let texto = '{"nombre":"Juan","edad":25}';
let objeto = JSON.parse(texto);  // {nombre: "Juan", edad: 25}
```

---

## 🌐 PROTOCOLOS Y REDES

### HTTP (HyperText Transfer Protocol)
- Protocolo de comunicación para transferir información en la web
- Stateless (sin estado): cada petición es independiente
- Puerto por defecto: 80

### HTTPS (HTTP Secure)
- HTTP con encriptación SSL/TLS
- Seguro para transferir datos sensibles
- Puerto por defecto: 443

### Métodos HTTP Principales
```
GET    - Solicitar/obtener recursos (datos en URL)
POST   - Enviar datos al servidor (datos en body)
PUT    - Actualizar recurso completo
PATCH  - Actualizar recurso parcial
DELETE - Eliminar recurso
```

### TCP/IP (Transmission Control Protocol / Internet Protocol)
- TCP: Controla transmisión confiable de datos (orientado a conexión)
- IP: Direccionamiento y enrutamiento de paquetes

### DNS (Domain Name System)
- Sistema que traduce nombres de dominio a direcciones IP
- Ejemplo: www.google.com → 142.250.185.46

### URL (Uniform Resource Locator)
```
https://www.ejemplo.com:443/ruta/recurso?param=valor#seccion
└──┬─┘   └──────┬──────┘ └┬┘ └────┬────┘ └─────┬────┘ └──┬──┘
Protocolo   Dominio      Puerto  Ruta      Query    Fragment
```

### Cliente-Servidor
- **Cliente**: Solicita recursos/servicios (navegador, app)
- **Servidor**: Provee recursos/servicios (servidor web, API)
- Comunicación mediante protocolos (HTTP, FTP, SSH)

---

## 🐍 PYTHON BÁSICO (si aplica)

### Sintaxis Básica
```python
# Comentario
print("Hola Mundo")

# Variables (sin declarar tipo)
nombre = "Juan"
edad = 25
pi = 3.14
activo = True
```

### Tipos de Datos
```python
int     - Enteros: 42, -10
float   - Decimales: 3.14, -0.5
str     - Strings: "texto", 'texto'
bool    - Booleanos: True, False
list    - Listas: [1, 2, 3]
tuple   - Tuplas (inmutables): (1, 2, 3)
dict    - Diccionarios: {"clave": "valor"}
```

### Estructuras de Control
```python
# Condicionales (INDENTACIÓN OBLIGATORIA)
if edad >= 18:
    print("Mayor de edad")
elif edad >= 13:
    print("Adolescente")
else:
    print("Niño")

# Ciclos
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

for item in [1,2,3]:
    print(item)

while x < 10:
    x += 1
```

### Funciones
```python
def saludar(nombre):
    return f"Hola {nombre}"

resultado = saludar("Juan")
```

### Listas
```python
lista = [1, 2, 3, 4]
lista.append(5)       # Agregar al final
lista.pop()           # Quitar último
len(lista)            # Longitud
lista[0]              # Acceso por índice
```

---

## ⚡ TIPS FINALES PARA EL EXAMEN

### Manejo de Tiempo
- 🕐 Lee TODAS las preguntas primero
- 🎯 Responde primero las fáciles
- ⏰ No te atasques en una pregunta > 3 minutos
- ✅ Deja marcadas las difíciles para volver

### En Preguntas Teóricas
- 📖 Lee con CALMA, cada palabra importa
- ❌ Elimina opciones obviamente incorrectas
- ✍️ Responde con tus propias palabras
- 🤔 Si dudas, ve con tu primera intuición

### En Código Práctico
- 💻 Escribe código LIMPIO y COMENTADO
- 🏗️ Sigue la estructura básica (DOCTYPE, html, head, body)
- 🎨 Sintaxis CSS: `selector { propiedad: valor; }`
- 📝 Nombres descriptivos (no `x`, sino `nombreUsuario`)
- 🧪 Si puedes probar el código, hazlo

### Control de Nervios
- 😮‍💨 Respira profundo 3 veces antes de empezar
- 💪 Confía en tu preparación
- 🎯 Enfócate en cada pregunta a la vez
- 🚫 NO pienses en otras preguntas mientras resuelves una

---

**RECUERDA:** Este examen es una OPORTUNIDAD, no una amenaza.
**Tú tienes el conocimiento. Solo déjalo fluir.**

🔥 **¡ÉXITO!** 🔥
