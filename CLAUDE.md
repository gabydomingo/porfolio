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
`framer-motion`.

`lucide-react` queda instalado aunque el rediseño no lo use: la referencia trae
todos los íconos como SVG inline. Es una decisión tomada, no un olvido.

## Estructura de destino

```
index.html               -> fuentes, script de tema y meta tags
.gitattributes           -> normaliza los saltos de línea a LF
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

El contenido que se agrega o edita con frecuencia —proyectos, certificaciones,
grupos del stack, tecnologías con su color— vive en `src/data/` y no se
hardcodea en los componentes. Sumar un proyecto tiene que ser tocar un solo
archivo.

Los textos que forman parte de la estructura de una sección y solo cambian si
cambia el sitio —los enlaces del nav, los títulos de sección, el copy fijo del
hero— pueden quedar en su propio componente. Si aparece un caso que no encaja
claro en ninguna de las dos, se pregunta antes de decidir.

## Qué se conserva del código actual

- La configuración de Vite y el `index.html`, con estos ajustes:
  - a `vite.config.js` se le sacó el alias `@` y el `import path` que lo
    acompañaba;
  - `index.html` suma las tres familias de Google Fonts, el script inline de
    tema y los meta tags de analista de datos, no de desarrollador.
- El favicon y los assets de `public/` que sigan usándose.
- Nada más. El resto de `src/` se reemplaza.

## Qué se elimina

- Las barras de skills con porcentaje y su filtro por categoría.
- Las nueve tarjetas de proyecto viejas.
- El formulario de contacto y la dependencia de EmailJS: el diseño nuevo usa un
  botón directo a email.
- `react-router-dom`: el sitio es una sola página con anclas.
- `ogl`.
- Las dependencias que quedaron huérfanas al sacar el toast de shadcn: `clsx`,
  `tailwind-merge`, `class-variance-authority` y `@radix-ui/react-toast`.
- El alias `@` de `vite.config.js`: no quedó ningún import que lo use. Se borra
  la config muerta en vez de parchear el error de lint que daba `__dirname`.

## Detalles de implementación

**Tema.** Un script inline en el `<head>` de `index.html`, antes del bundle,
lee `localStorage` con la clave `gd-theme` y agrega la clase `dark` en `<html>`
si corresponde. Al ser un script clásico y sincrónico corre antes de que el
navegador pinte el `<div id="root">`, así que el modo oscuro no parpadea. El
hook `useTheme` lee la misma clave en la función lazy de `useState` —no en un
`useEffect`, que agregaría una pintura de más— y su `useEffect` solo sincroniza
la clase en `<html>` y persiste el cambio. El default es `light`; no se mira
`prefers-color-scheme`. El contenedor raíz de `App.jsx` no lleva clase de tema.

**Sombras.** En `index.css` los tokens de sombra valen `var(--shadow)` y
`var(--shadow-sm)`, y los valores reales viven en `:root` y en `.dark`.
`@theme inline` copia el valor literal dentro de la utilidad: si la sombra se
escribe ahí con el color adentro queda horneada la del tema claro y el modo
oscuro no cambia. Lo mismo vale para cualquier token nuevo.

**Revelado al scroll.** Los elementos arrancan con la clase `.reveal` de
`index.css` —la referencia usa el atributo `[data-rv]`, pero acá manda
`index.css`— y un `IntersectionObserver` con umbral 0.12 les agrega la clase
`rv-in` y deja de observarlos. Los hermanos dentro de un mismo contenedor
llevan un desfasaje de 90ms por posición, en ciclos de cuatro.

**Contadores del hero.** Animan 1300ms con easing cúbico de salida. Arrancan
cuando el bloque entra en pantalla, y si ya está visible al cargar, arrancan a
los 250ms. La referencia además reintenta a los 3000ms, por si el observador no
llegó a disparar.

**Canvas térmico.** Cuatro blobs con gradiente radial en `oklch`, con matices
252, 275, 300 y 318, desplazándose con seno y coseno a velocidades distintas.
La opacidad, la luminosidad y el croma cambian según el tema. Un
`ResizeObserver` redimensiona el canvas. El `requestAnimationFrame` se cancela
al desmontar.

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

Se verifica en el navegador antes de pasar al paso siguiente.

1. Limpieza: borrar componentes viejos, desinstalar dependencias que no van.
2. `src/index.css` con los tokens, y las fuentes en `index.html`.
3. `App.jsx`, `Nav.jsx` y el hook de tema.
4. `Hero.jsx` con `ThermalCanvas` y los contadores.
5. `ProyectosDestacados.jsx` y `Tag.jsx`.
6. Desarrollo web, proyectos de formación, stack.
7. Sobre mí, certificaciones, contacto.
8. Meta tags, favicon, imagen para compartir en redes.

### Commits

Cada paso puede necesitar varios commits, y está bien: lo que importa es que
cada commit contenga un solo tipo de cambio y se entienda solo. En particular:

- Los cambios a `CLAUDE.md` van siempre en su propio commit, sin código.
- La configuración del repo (`.gitattributes`, config de build) va aparte del
  código de la aplicación.
- Una corrección a algo de un paso anterior va en su propio commit, no colgada
  del paso en curso.
- Ningún paso se cierra con cambios sin commitear: el árbol tiene que quedar
  limpio para que un `reset --hard` sea un punto de retorno real.

Mensajes cortos en español, describiendo qué cambió y por qué si no es obvio.

## Pendientes que dependen de Gabriel

- Las capturas de dos de los tres proyectos destacados: la del dashboard de
  telemetría de F1 y la del detector de anomalías oceánicas.
- La foto para el avatar del hero y para la sección Sobre mí.
- Los links reales de cada proyecto (demo, repo, dashboard).

Ya resueltos: el CV está en `public/DomingoGabrielCV.pdf`, la captura de AUSA
en `public/proyectos/ausa.png`, y las capturas de desarrollo web y de los
proyectos de formación están todas en `public/proyectos/`.
