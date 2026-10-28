# Uso de IA

## 1. Herramienta utilizada

Claude (Anthropic), mediante chat conversacional.

## 2. Para qué la usé

- Entender cómo funcionan `react-router-dom`, `NavLink`, rutas anidadas y `Outlet`.
- Obtener una base de la estructura del proyecto (carpetas, componentes y páginas) a partir del wireframe y la pauta.
- Obtener un código base para el formulario de contacto, las tarjetas de proyecto y los estilos.
- Generar las imágenes de ejemplo (ilustraciones SVG simples).
- Resolver por qué los estilos no se aplicaban.

## 3. Resumen de las consultas (parafraseado)

- Por qué el `import` de `BrowserRouter` no funcionaba.
- Cómo usar `NavLink` dentro de un componente `Header`.
- Cómo implementar un `Layout` con rutas hijas y una ruta `index`.
- Una base lo más simple posible para llegar al wireframe pedido.
- Qué hacen `useState`, `e.preventDefault()`, `e.target.value`, `target="_blank"` y las props.
- Una versión más corta del formulario, con solo lo necesario.
- Un diseño minimalista (header simple, botones azules, footer centrado).
- Por qué el CSS no se aplicaba (faltaban `className`).
- Imágenes simples para las secciones.

## 4. Qué parte del código vino de la IA y qué modifiqué

Gran parte de la estructura inicial y del código base fue generada por la IA y yo la
adapté. Lo que hice yo:

- Crear las carpetas y archivos, y llevar el código al proyecto.
- Personalizar los contenidos: nombre, carrera, intereses, proyectos y enlaces.
- Corregir las rutas y los nombres de los enlaces del menú.
- Detectar y corregir los `className` que faltaban en `Header` y `Footer`.
- Probar el sitio con `npm run dev`.

<!-- COMPLETA o corrige esta sección con lo que realmente hiciste. -->

## 5. Cómo verifiqué que entendía el código

Pedí explicaciones de cada concepto (props, `useState`, eventos, `Outlet`) y probé el
sitio en el navegador. Puedo explicar:

- Cómo las rutas anidadas muestran cada página dentro del `Layout`.
- Cómo el formulario guarda lo escrito con `useState` y valida antes de confirmar.
- Cómo se pasan datos a `TarjetaProyecto` mediante props.

<!-- Escribe aquí solo lo que de verdad puedas explicar. -->

## 6. Reflexión

La IA me aceleró el inicio y me ayudó a entender los conceptos, pero parte del código
viene de ella y no de escribirlo desde cero. Lo que más me costó fue recordar cosas claves de React
y aprendí a trabajar junto a la IA sin tener que solo aplicar un copia y pega.