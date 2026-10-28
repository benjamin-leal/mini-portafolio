# Mini Portafolio

Sitio web personal de una sola página (SPA) hecho con React y React Router para la
Evaluación N°3 de Desarrollo de Frontend.

**Autor:** Benjamin Leal

## Descripción

Portafolio con cinco páginas: Inicio, Sobre mí, Habilidades, Proyectos y Contacto.
Todas comparten un header con navegación y un footer con el nombre y el año.

## Tecnologías

- React
- React Router (`react-router-dom`)
- Vite
- CSS

## Cómo ejecutar el proyecto

Requisito: tener [Node.js](https://nodejs.org) instalado.

```bash
# 1. Clonar el repositorio
git clone https://github.com/benjamin-leal/mini-portafolio.git

# 2. Entrar a la carpeta
cd mini-portafolio

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Luego abre en el navegador la dirección que muestra la terminal (normalmente
`http://localhost:5173`).

## Páginas y rutas

| Página | Ruta |
|---|---|
| Inicio | `/` |
| Sobre mí | `/sobremi` |
| Habilidades | `/habilidades` |
| Proyectos | `/proyectos` |
| Contacto | `/contacto` |

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx              # Menú de navegación con NavLink
│   ├── Footer.jsx              # Nombre y año (recibe el nombre por props)
│   ├── Layout.jsx              # Header + Outlet + Footer
│   ├── TarjetaProyecto.jsx     # Tarjeta reutilizable (recibe datos por props)
│   └── FormularioContacto.jsx  # Formulario con useState y validación
├── pages/
│   ├── Inicio.jsx
│   ├── SobreMi.jsx
│   ├── Habilidades.jsx
│   ├── Proyectos.jsx
│   └── Contacto.jsx
├── assets/                     # Imágenes
├── App.jsx                     # Definición de rutas
├── main.jsx                    # Punto de entrada y BrowserRouter
└── index.css                   # Estilos
```

## Funcionamiento

- **Rutas anidadas:** `App.jsx` define una ruta padre con el `Layout` y cinco rutas
  hijas. Cada página se muestra en el `Outlet` del `Layout`.
- **Props:** `Footer` recibe el nombre y `TarjetaProyecto` recibe título, descripción,
  enlace e imagen.
- **Listas con `.map()`:** las páginas Habilidades y Proyectos recorren arreglos de datos.
- **Formulario de contacto:** guarda los campos con `useState`, valida que no estén
  vacíos y que el correo tenga un formato básico (`@` y `.`), y muestra un mensaje de
  confirmación al enviar correctamente. No envía datos a un servidor.

## Uso de IA

El detalle del uso de herramientas de IA está declarado en [`uso_ia.md`](./uso_ia.md).