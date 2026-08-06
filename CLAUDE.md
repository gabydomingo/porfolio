# Portfolio — Gabriel Domingo

Portfolio personal orientado a data analytics y data science. Está publicado en
Vercel y el repo ya existe: no se crea un proyecto nuevo, se reemplaza el
contenido de `src/` conservando el repo, el historial y el deploy.

## Qué estamos haciendo

Portar el rediseño que está en `design/referencia.html` a React. Ese archivo es
la fuente de verdad para colores, tipografía, espaciados, textos y animaciones.
Ante cualquier duda de diseño, se mira ese archivo, no se improvisa.

El HTML de referencia viene de Claude Design y usa sintaxis propia que no
existe en React. Equivalencias:

| En la referencia | En React |
| --- | --- |
| `<sc-if value="{{ x }}">` | `{x && (...)}` |
| `<sc-for list="{{ xs }}" as="i">` | `{xs.map(i => ...)}` |
| `<image-slot id="..." placeholder="...">` | `<img>` con la captura real |
| `style-hover="..."` | clase de Tailwind con `hover:` |
| `{{ toggleTheme }}` | handler del hook `useTheme` |
| `class Component extends DCLogic` | componente funcional con hooks |

## Stack

React 19 + Vite 6 + Tailwind 4, en JavaScript. Sin TypeScript, sin librería de
componentes, sin librería de animación.

No agregar dependencias sin consultar. En particular, el fondo animado del hero
es un canvas 2D de unas 25 líneas: no hace falta `ogl`, `three` ni
`framer-motion`. `ogl` se puede desinstalar.

## Estructura de destino

```
src/
  components/
    Nav.jsx
    Hero.jsx
    ThermalCanvas.jsx      -> el fondo animado del hero
    ProyectosDestacados.jsx
    DesarrolloWeb.jsx
    ProyectosFormacion.jsx
    StackTecnico.jsx
    SobreMi.jsx
    Certificaciones.jsx
    Contacto.jsx
    Tag.jsx                -> etiqueta de tecnología con su color de marca
  data/
    proyectos.js
    stack.js
    certificaciones.js
    tecnologias.js         -> el mapa de nombre -> color de marca
  hooks/
    useTheme.js
    useReveal.js
    useCounter.js
  index.css                -> tokens de tema, ya resuelto
  App.jsx
  main.jsx
public/
  proyectos/               -> capturas de los proyectos
```

Todo el contenido va en `src/data/`. Nada de textos ni listas de tecnologías
hardcodeados dentro de los componentes: agregar un proyecto tiene que ser tocar
un solo archivo.

## Qué se conserva del código actual

- La configuración de Vite y el `index.html` (ajustando el `<title>` y los meta
  tags para que digan analista de datos, no desarrollador).
- El favicon y los assets de `public/` que sigan usándose.
- Nada más. El resto de `src/` se reemplaza.

## Qué se elimina

- Las barras de skills con porcentaje y su filtro por categoría.
- Las nueve tarjetas de proyecto viejas.
- El formulario de contacto y la dependencia de EmailJS: el diseño nuevo usa un
  botón directo a email.
- `react-router-dom`: el sitio es una sola página con anclas.
- `ogl`.

## Detalles de implementación

**Tema.** El hook `useTheme` lee `localStorage` con la clave `gd-theme`, cae en
`light` si no hay nada guardado, y agrega o saca la clase `dark` en el
contenedor raíz. La lectura inicial va en un `useEffect` para no romper la
primera pintura.

**Revelado al scroll.** Un `IntersectionObserver` con umbral 0.12 que agrega la
clase `rv-in` y deja de observar el elemento. Los hermanos dentro de un mismo
contenedor llevan un desfasaje de 90ms por posición, en ciclos de cuatro.

**Contadores del hero.** Animan 1300ms con easing cúbico de salida. Arrancan
cuando el bloque entra en pantalla, y si ya está visible al cargar, arrancan a
los 250ms.

**Canvas térmico.** Cuatro blobs con gradiente radial en `oklch`, con matices
252, 275, 300 y 318, desplazándose con seno y coseno a velocidades distintas.
La opacidad y la luminosidad cambian según el tema. Un `ResizeObserver`
redimensiona el canvas. El `requestAnimationFrame` se cancela al desmontar.

**Movimiento reducido.** Con `prefers-reduced-motion` los revelados quedan
visibles de entrada, los contadores muestran el valor final directo, y el
canvas dibuja un solo cuadro sin loop.

## Estilo de código

- Comentarios en español, solo donde el código no se explica solo. Nada de
  comentar lo obvio ni de encabezados decorativos.
- Nombres de componentes y variables en español donde son de dominio
  (`proyectos`, `certificaciones`), en inglés donde son técnicos (`useTheme`).
- Un componente por archivo, export default.
- Preferir clases de Tailwind. Estilo inline solo para valores calculados.

## Orden de trabajo

Un commit por paso, verificando en el navegador antes de seguir:

1. Limpieza: borrar componentes viejos, desinstalar dependencias que no van.
2. `src/index.css` con los tokens, y las fuentes en `index.html`.
3. `App.jsx`, `Nav.jsx` y el hook de tema.
4. `Hero.jsx` con `ThermalCanvas` y los contadores.
5. `ProyectosDestacados.jsx` y `Tag.jsx`.
6. Desarrollo web, proyectos de formación, stack.
7. Sobre mí, certificaciones, contacto.
8. Meta tags, favicon, imagen para compartir en redes.

## Pendientes que dependen de Gabriel

- Capturas de los tres proyectos destacados en `public/proyectos/`.
- Foto para el avatar del hero y para la sección Sobre mí.
- El PDF del CV en `public/`.
- Los links reales de cada proyecto (demo, repo, dashboard).
