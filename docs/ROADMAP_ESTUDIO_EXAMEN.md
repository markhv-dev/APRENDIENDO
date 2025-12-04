# 🎯 ROADMAP DE ESTUDIO - EXAMEN SUSTITORIO

**Fecha límite:** Viernes 5 de diciembre, 2:50 PM
**Tiempo disponible:** ~36 horas (desde jueves 4 de diciembre noche)
**Modalidad examen:** SIN APUNTES, Teórico/Práctico
**Nivel de conocimiento actual:** Cero - empezando desde el principio

---

## 📊 ESTADÍSTICAS DE TIEMPO

**Tiempo total de contenido:** ~15 horas de lectura
**Tiempo disponible real para estudiar:** ~20-24 horas
**Estrategia:** Enfoque en lo CRÍTICO primero, luego complementario

---

## 🔥 PRIORIDAD MÁXIMA (6 HORAS) - HACER SÍ O SÍ

### 1️⃣ GET vs POST (1 hora) ⭐⭐⭐ CRÍTICO
**Por qué es #1:** Vino en AMBOS exámenes, es el concepto MÁS preguntado

**Qué estudiar:**
- 📖 `Fundamentos/Protocolos/modulos/metodos-http.html` (30 min)
- 📖 `Lenguajes/HTML/modulos/formularios.html` - Sección GET vs POST (30 min)

**Memorizar:**
```
GET:
✓ Datos en la URL (visible)
✓ Limitado ~2000 caracteres
✓ Cacheable
✓ Idempotente
✓ Para: búsquedas, filtros
✓ Ejemplo URL: /buscar?q=html&page=2

POST:
✓ Datos en el body (oculto)
✓ Sin límite de tamaño
✓ NO cacheable
✓ NO idempotente
✓ Para: login, registro, crear datos
✓ Los datos NO aparecen en la URL
```

**Pregunta tipo examen:**
- ¿Cuál es la diferencia entre GET y POST?
- ¿Cuándo usarías GET y cuándo POST?
- ¿Dónde viajan los datos en GET vs POST?

---

### 2️⃣ HTML Semántico (45 min) ⭐⭐⭐
**Por qué:** Pregunta frecuente en exámenes teóricos

**Qué estudiar:**
- 📖 `Lenguajes/HTML/modulos/semantico.html` (30 min)
- 🎯 `Lenguajes/HTML/Quiz.html` - Quiz 4 (15 min)

**Memorizar:**
```
Elementos semánticos HTML5:
✓ <header> - Encabezado de página/sección
✓ <nav> - Navegación principal
✓ <main> - Contenido principal
✓ <article> - Contenido independiente
✓ <section> - Sección temática
✓ <aside> - Contenido relacionado/sidebar
✓ <footer> - Pie de página

¿Por qué usar semántica?
✓ Mejor SEO
✓ Mejor accesibilidad
✓ Código más claro y mantenible
✓ Más significativo que <div>
```

**Pregunta tipo examen:**
- ¿Qué son los elementos semánticos?
- Ventajas de usar HTML semántico vs div
- Nombra 5 elementos semánticos y su propósito

---

### 3️⃣ CSS Box Model (30 min) ⭐⭐⭐
**Por qué:** Concepto fundamental, muy preguntado

**Qué estudiar:**
- 📖 `Lenguajes/CSS/Glosario.html` - Buscar "box model" (20 min)
- 📖 Revisar: margin, padding, border, content (10 min)

**Memorizar:**
```
Orden del Box Model (de adentro hacia afuera):
1. content (contenido)
2. padding (relleno interno)
3. border (borde)
4. margin (margen externo)

Importante:
✓ padding: espacio DENTRO del borde
✓ margin: espacio FUERA del borde
✓ border: línea que separa padding de margin
✓ width/height por defecto = solo content
✓ box-sizing: border-box incluye padding+border en width
```

**Pregunta tipo examen:**
- Explica el Box Model de CSS
- ¿Cuál es la diferencia entre padding y margin?
- ¿Qué incluye el width de un elemento?

---

### 4️⃣ Formularios HTML (45 min) ⭐⭐⭐
**Por qué:** Muy importante, incluye GET/POST

**Qué estudiar:**
- 📖 `Lenguajes/HTML/modulos/formularios.html` (30 min)
- 🎯 `Lenguajes/HTML/Quiz.html` - Quiz 3 (15 min)

**Memorizar:**
```
Elementos de formulario:
✓ <form action="/ruta" method="post">
✓ <input type="text|email|password|number|checkbox|radio">
✓ <textarea> - Texto multilínea
✓ <select> - Lista desplegable
✓ <button type="submit"> - Enviar formulario

Atributos importantes:
✓ name - Nombre del campo (se envía al servidor)
✓ required - Campo obligatorio
✓ placeholder - Texto de ayuda
✓ value - Valor del campo
✓ for (en label) - Asocia label con input

Validación:
✓ required - Obligatorio
✓ minlength/maxlength - Longitud
✓ min/max - Rango numérico
✓ pattern - Expresión regular
```

**Pregunta tipo examen:**
- ¿Qué hace el atributo method en un formulario?
- ¿Para qué sirve el atributo name?
- Escribe un formulario de login (usuario + contraseña)

---

### 5️⃣ CSS Selectores y Especificidad (30 min) ⭐⭐⭐
**Por qué:** Muy preguntado en teoría

**Qué estudiar:**
- 📖 `Lenguajes/CSS/modulos/selectores.html` (20 min)
- 📖 `Lenguajes/CSS/Glosario.html` - Buscar "especificidad" (10 min)

**Memorizar:**
```
Especificidad (de mayor a menor):
1. !important - 10000 puntos (evitar)
2. Estilos inline style="" - 1000 puntos
3. #id - 100 puntos
4. .clase - 10 puntos
5. elemento - 1 punto
6. * (universal) - 0 puntos

Ejemplos de puntos:
✓ p { } = 1 punto
✓ .clase { } = 10 puntos
✓ #id { } = 100 puntos
✓ p.clase { } = 11 puntos
✓ #id .clase p { } = 111 puntos

Regla de oro: El selector más específico gana
```

**Pregunta tipo examen:**
- ¿Qué es la especificidad en CSS?
- ¿Cuál selector tiene mayor especificidad: .clase o #id?
- Si tengo dos reglas que afectan el mismo elemento, ¿cuál se aplica?

---

### 6️⃣ Tablas HTML (30 min) ⭐⭐
**Por qué:** Atributos colspan/rowspan suelen preguntarse

**Qué estudiar:**
- 📖 `Lenguajes/HTML/modulos/tablas.html` (20 min)
- 🎯 `Lenguajes/HTML/Quiz.html` - Quiz 3 (10 min)

**Memorizar:**
```
Estructura de tabla:
<table>
  <thead> - Encabezado
    <tr> - Fila
      <th> - Celda de encabezado
  <tbody> - Cuerpo
    <tr>
      <td> - Celda de datos
  <tfoot> - Pie (opcional)

Atributos importantes:
✓ colspan="2" - Combina 2 columnas horizontalmente
✓ rowspan="2" - Combina 2 filas verticalmente

Ejemplo:
<td colspan="2"> - Esta celda ocupa 2 columnas
<td rowspan="3"> - Esta celda ocupa 3 filas
```

**Pregunta tipo examen:**
- ¿Para qué sirve colspan?
- Crea una tabla de 3x3 con un encabezado
- ¿Cuál es la diferencia entre <th> y <td>?

---

### 7️⃣ Protocolos HTTP/HTTPS (30 min) ⭐⭐
**Por qué:** Fundamentos de web, suele preguntarse

**Qué estudiar:**
- 📖 `Fundamentos/Protocolos/modulos/http-https.html` (20 min)
- 📖 `Fundamentos/Protocolos/Glosario.html` (10 min)

**Memorizar:**
```
HTTP vs HTTPS:
✓ HTTP: Puerto 80, NO encriptado, inseguro
✓ HTTPS: Puerto 443, SÍ encriptado (SSL/TLS), seguro

Códigos de estado HTTP:
✓ 200 - OK (éxito)
✓ 404 - Not Found (no encontrado)
✓ 500 - Internal Server Error (error del servidor)
✓ 401 - Unauthorized (no autorizado)
✓ 403 - Forbidden (prohibido)
✓ 301/302 - Redirect (redirección)

Características HTTP:
✓ Stateless - Sin estado (no recuerda peticiones anteriores)
✓ Request-Response - Cliente solicita, servidor responde
```

**Pregunta tipo examen:**
- ¿Cuál es la diferencia entre HTTP y HTTPS?
- ¿Qué significa el código 404?
- ¿En qué puerto funciona HTTPS?

---

### 8️⃣ Flexbox CSS (30 min) ⭐⭐
**Por qué:** Layout moderno, muy usado y preguntado

**Qué estudiar:**
- 📖 `Lenguajes/CSS/modulos/flexbox.html` (30 min)

**Memorizar:**
```
Container (padre):
✓ display: flex - Activa flexbox
✓ flex-direction: row|column - Dirección principal
✓ justify-content - Alineación horizontal (eje principal)
  - flex-start, flex-end, center, space-between, space-around
✓ align-items - Alineación vertical (eje cruzado)
  - flex-start, flex-end, center, stretch

Items (hijos):
✓ flex: 1 - Ocupa espacio disponible
✓ order - Cambia el orden visual

Ejemplo básico:
.container {
  display: flex;
  justify-content: center;  /* Centra horizontalmente */
  align-items: center;      /* Centra verticalmente */
}
```

**Pregunta tipo examen:**
- ¿Para qué sirve Flexbox?
- ¿Qué hace justify-content?
- Centra un div horizontal y verticalmente con Flexbox

---

## 🟡 PRIORIDAD ALTA (4 HORAS) - IMPORTANTE

### 9️⃣ JavaScript Fundamentos (1 hora) ⭐⭐
**Qué estudiar:**
- 📖 `Lenguajes/JavaScript/modulos/fundamentos.html` (40 min)
- 📖 `Lenguajes/JavaScript/Glosario.html` - Variables, tipos (20 min)

**Memorizar:**
```
Variables:
✓ let - Modificable, scope de bloque
✓ const - Inmutable, scope de bloque
✓ var - Evitar (scope de función, problemas)

Tipos de datos:
✓ string - "texto"
✓ number - 42, 3.14
✓ boolean - true, false
✓ undefined - Sin valor asignado
✓ null - Valor intencionalmente vacío
✓ object - { nombre: "Ana" }
✓ array - [1, 2, 3]

Operadores:
✓ == (comparación suelta)
✓ === (comparación estricta) - PREFERIR
✓ +, -, *, /, %
✓ &&, ||, !

Template strings:
✓ `Hola ${nombre}` - Interpolación
```

---

### 🔟 JavaScript DOM (1 hora) ⭐⭐
**Qué estudiar:**
- 📖 `Lenguajes/JavaScript/modulos/dom.html` (40 min)
- 📖 `Lenguajes/JavaScript/modulos/eventos.html` (20 min)

**Memorizar:**
```
Selección de elementos:
✓ document.querySelector('.clase') - Primero que coincida
✓ document.querySelectorAll('.clase') - Todos
✓ document.getElementById('id') - Por ID
✓ document.getElementsByClassName('clase') - Por clase

Manipulación:
✓ elemento.textContent = "texto" - Cambiar texto
✓ elemento.innerHTML = "<p>HTML</p>" - Cambiar HTML
✓ elemento.style.color = "red" - Cambiar estilo
✓ elemento.classList.add('clase') - Agregar clase
✓ elemento.classList.remove('clase') - Quitar clase

Eventos:
✓ elemento.addEventListener('click', function() {})
✓ Eventos comunes: click, submit, change, input, keypress
```

---

### 1️⃣1️⃣ JavaScript Funciones (45 min) ⭐⭐
**Qué estudiar:**
- 📖 `Lenguajes/JavaScript/modulos/funciones.html` (45 min)

**Memorizar:**
```
Declaración de funciones:
✓ function nombre() { } - Declaración clásica
✓ const nombre = () => { } - Arrow function
✓ const nombre = function() { } - Expresión de función

Parámetros y return:
✓ function suma(a, b) { return a + b; }
✓ Si no hay return, retorna undefined

Arrow functions:
✓ const doble = x => x * 2; - Implícito return
✓ const suma = (a, b) => a + b;
✓ const saludo = () => "Hola";

Callbacks:
✓ Función que se pasa como argumento
✓ array.map(callback)
✓ elemento.addEventListener('click', callback)
```

---

### 1️⃣2️⃣ JavaScript Arrays (45 min) ⭐⭐
**Qué estudiar:**
- 📖 `Lenguajes/JavaScript/modulos/arrays.html` (45 min)

**Memorizar:**
```
Métodos importantes:
✓ push(item) - Agregar al final
✓ pop() - Quitar del final
✓ shift() - Quitar del inicio
✓ unshift(item) - Agregar al inicio
✓ length - Tamaño del array

Métodos de iteración:
✓ forEach(callback) - Iterar
✓ map(callback) - Transformar
✓ filter(callback) - Filtrar
✓ find(callback) - Encontrar primero
✓ includes(valor) - ¿Contiene?

Ejemplos:
const numeros = [1, 2, 3];
numeros.map(n => n * 2); // [2, 4, 6]
numeros.filter(n => n > 1); // [2, 3]
```

---

### 1️⃣3️⃣ Comandos UNIX (30 min) ⭐
**Qué estudiar:**
- 📖 `Fundamentos/Computacion/modulos/unix-basico.html` (30 min)

**Memorizar:**
```
Comandos básicos:
✓ ls - Listar archivos
✓ cd directorio - Cambiar directorio
✓ pwd - Mostrar directorio actual
✓ mkdir nombre - Crear directorio
✓ rm archivo - Eliminar archivo
✓ cp origen destino - Copiar
✓ mv origen destino - Mover/renombrar

Permisos:
✓ r (read) = 4 - Lectura
✓ w (write) = 2 - Escritura
✓ x (execute) = 1 - Ejecución
✓ rwxr-xr-x = 755
✓ rw-r--r-- = 644

root:
✓ Superusuario con todos los permisos
✓ sudo - Ejecutar como root
```

---

## 🟢 PRIORIDAD MEDIA (3 HORAS) - COMPLEMENTARIO

### 1️⃣4️⃣ CSS Position (30 min)
- 📖 `Lenguajes/CSS/Glosario.html` - Buscar "position"

**Memorizar:**
```
✓ static - Normal (por defecto)
✓ relative - Relativo a posición original
✓ absolute - Relativo al padre posicionado
✓ fixed - Relativo al viewport, no se mueve al scroll
✓ sticky - Mezcla de relative y fixed
```

---

### 1️⃣5️⃣ JavaScript Control de Flujo (30 min)
- 📖 `Lenguajes/JavaScript/modulos/control.html`

**Memorizar:**
```
if (condicion) { }
else if (otra) { }
else { }

switch (valor) {
  case 1: break;
  default:
}

Operador ternario:
condicion ? siTrue : siFalse
```

---

### 1️⃣6️⃣ JavaScript Loops (30 min)
- 📖 `Lenguajes/JavaScript/modulos/loops.html`

**Memorizar:**
```
for (let i = 0; i < 10; i++) { }
while (condicion) { }
do { } while (condicion);

for...of - Iterar valores
for...in - Iterar propiedades
```

---

### 1️⃣7️⃣ CSS Display (20 min)
- 📖 `Lenguajes/CSS/Glosario.html` - Buscar "display"

**Memorizar:**
```
✓ block - Ocupa todo el ancho
✓ inline - Solo ocupa lo necesario
✓ inline-block - Híbrido
✓ none - No se muestra
✓ flex - Flexbox
✓ grid - Grid

Diferencia none vs visibility hidden:
✓ none - No ocupa espacio
✓ hidden - Sí ocupa espacio
```

---

### 1️⃣8️⃣ HTML Estructura Básica (20 min)
- 📖 `Lenguajes/HTML/modulos/fundamentos.html`

**Memorizar:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Contenido</h1>
  <script src="script.js"></script>
</body>
</html>
```

---

### 1️⃣9️⃣ CSS Responsive (20 min)
- 📖 `Lenguajes/CSS/modulos/responsive.html`

**Memorizar:**
```css
/* Mobile first */
/* Estilos base para móvil */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

Meta tag viewport:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### 2️⃣0️⃣ JavaScript Objetos (30 min)
- 📖 `Lenguajes/JavaScript/modulos/objetos.html`

**Memorizar:**
```javascript
const persona = {
  nombre: "Ana",
  edad: 25,
  saludar: function() {
    console.log("Hola");
  }
};

// Acceder:
persona.nombre
persona["nombre"]

// Destructuring:
const { nombre, edad } = persona;
```

---

## 🔵 PRIORIDAD BAJA (2 HORAS) - OPCIONAL

### 2️⃣1️⃣ JavaScript Async (30 min)
- 📖 `Lenguajes/JavaScript/modulos/async.html`

### 2️⃣2️⃣ JavaScript Depuración (30 min)
- 📖 `Lenguajes/JavaScript/modulos/depuracion.html`

### 2️⃣3️⃣ CSS Animaciones (20 min)
- 📖 `Lenguajes/CSS/modulos/animaciones.html`

### 2️⃣4️⃣ TCP/IP y DNS (20 min)
- 📖 `Fundamentos/Protocolos/modulos/tcp-ip.html`
- 📖 `Fundamentos/Protocolos/modulos/dns-url.html`

### 2️⃣5️⃣ Internet vs WWW (20 min)
- 📖 `Fundamentos/Computacion/modulos/internet-web.html`

---

## 🎯 EXÁMENES DE PRÁCTICA (3 HORAS) ⭐⭐⭐

### ✅ Examen Parcial 1 (1 hora)
📝 `Examen/examen-parcial-1.html` (NUEVO - a crear)
- 4 preguntas teóricas
- 3 preguntas prácticas
- CON apuntes permitidos

### ✅ Examen Parcial 2 (1 hora)
📝 `Examen/examen-parcial-2.html` (NUEVO - a crear)
- 3 preguntas prácticas de JavaScript
- CON apuntes permitidos

### ✅ Examen Sustitorio (1 hora)
📝 `Examen/examen-sustitorio.html` (NUEVO - a crear)
- Combinación de examen 1 y 2
- SIN apuntes
- Teórico/Práctico

---

## ⏱️ PLAN DE EJECUCIÓN (24 HORAS)

### JUEVES 4 DE DICIEMBRE - NOCHE (4 horas)
**20:00 - 21:00** → GET vs POST (crítico #1)
**21:00 - 21:45** → HTML Semántico
**21:45 - 22:15** → CSS Box Model
**22:15 - 23:00** → Formularios HTML
**23:00 - 00:00** → Break / Cena / Descanso

### VIERNES 5 DE DICIEMBRE - MAÑANA (6 horas)
**06:00 - 06:30** → CSS Selectores y Especificidad
**06:30 - 07:00** → Tablas HTML
**07:00 - 09:00** → **EXAMEN (otro curso)** ← No estudiar en este tiempo
**09:00 - 09:30** → Protocolos HTTP/HTTPS
**09:30 - 10:00** → Flexbox CSS
**10:00 - 10:30** → Desayuno / Break
**10:30 - 11:30** → JavaScript Fundamentos
**11:30 - 12:30** → JavaScript DOM

### VIERNES 5 DE DICIEMBRE - TARDE (4 horas)
**12:30 - 13:30** → Almuerzo / Break
**13:30 - 14:15** → JavaScript Funciones
**14:15 - 14:50** → **EXAMEN SUSTITORIO** ← TU EXAMEN

---

## 📌 RESUMEN ULTRA RÁPIDO (CHEAT SHEET)

### GET vs POST (CRÍTICO):
- **GET:** URL, visible, limitado, búsquedas
- **POST:** body, oculto, ilimitado, login/registro

### HTML Semántico:
- header, nav, main, article, section, aside, footer
- Mejor SEO + accesibilidad

### CSS Box Model:
- content → padding → border → margin (de adentro a afuera)

### Formularios:
- form, input, textarea, select, button
- method="get|post", name, required

### Especificidad CSS:
- #id (100) > .clase (10) > elemento (1)

### Flexbox:
- display: flex
- justify-content (horizontal)
- align-items (vertical)

### HTTP:
- 200 OK, 404 Not Found, 500 Error
- HTTP puerto 80, HTTPS puerto 443

### JavaScript Básico:
- let/const, ===, template strings
- querySelector, addEventListener
- map, filter, forEach

### UNIX:
- ls, cd, pwd, mkdir, rm
- rwx = 421, rwxr-xr-x = 755

---

## ✅ CHECKLIST FINAL

Antes del examen, asegúrate de haber estudiado:
- ✅ GET vs POST (CRÍTICO)
- ✅ HTML Semántico
- ✅ CSS Box Model
- ✅ Formularios HTML
- ✅ CSS Selectores y Especificidad
- ✅ Tablas HTML (colspan/rowspan)
- ✅ Protocolos HTTP/HTTPS
- ✅ Flexbox CSS
- ✅ JavaScript Fundamentos
- ✅ JavaScript DOM
- ✅ JavaScript Funciones
- ✅ JavaScript Arrays
- ✅ Examen Parcial 1 (práctica)
- ✅ Examen Sustitorio (práctica)

**TOTAL TIEMPO CRÍTICO:** 15 horas
**TIEMPO DISPONIBLE:** 24 horas
**MARGEN:** 9 horas para repasar y practicar

---

**¡ÉXITO EN TU EXAMEN!** 🔥

Sigue este roadmap paso a paso y tendrás cobertura del 90-95% del contenido del examen.
