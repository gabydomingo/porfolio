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
  App.jsx                  -> el footer va acá, inline: es una sola línea
  main.jsx
public/
  proyectos/               -> capturas de los proyectos
  og-image.png             -> 1200x630, para compartir en redes
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
- `public/vite.svg`, que no lo referenciaba nadie. El favicon propio se queda.

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

Con `prefers-reduced-motion` hay dos correcciones deliberadas respecto de la
referencia, y son el mismo problema con dos disparadores: sin loop no queda
nadie que repinte el cuadro único cuando cambia algo que lo define. Asignar
`width` o `height` borra el canvas, así que `medir()` repinta después de cada
resize; y el effect que sincroniza el tema repinta también al cambiarlo, porque
si no los blobs conservan los colores del tema anterior. La referencia no hace
ninguna de las dos: nunca se probó con movimiento reducido.

**Movimiento reducido.** Con `prefers-reduced-motion` los revelados quedan
visibles de entrada, los contadores muestran el valor final directo, y el
canvas dibuja un solo cuadro sin loop.

**Hero.** El avatar circular de la referencia no va: la única foto del sitio es
la de Sobre mí. El badge "Disponible para trabajar" queda solo en su fila, con
`self-start` para que el contenedor en columna no lo estire a lo ancho.

**Hover de los enlaces.** El violeta del `a:hover` vale para enlaces de texto,
no para los anclas con forma de botón, que llevan la clase `.boton` y quedan
fuera por el `:not(.boton)` de `index.css`. En los botones sólidos cambiaría el
blanco sobre violeta y en los de superficie tiñe un texto que ya funciona como
botón; en los dos casos alcanza con que se eleven. Es una desviación
deliberada: la referencia solo reprotege los sólidos, con un `color:#fff` en el
`style-hover`, y deja que los de superficie se pongan violetas.

**Nav en pantallas angostas.** Los cuatro enlaces más el toggle miden 402px, y
la píldora no tiene `flex-wrap`: por debajo de 422px de viewport flexbox los
comprime hasta su ancho mínimo y "Sobre mí", la única etiqueta con espacio, se
parte en dos líneas. La solución es por breakpoint —Tailwind es mobile-first,
así que la base es la móvil y `sm:` restaura los valores de la referencia—, con
`whitespace-nowrap` y `shrink-0` para que nada se corte, y `overflow-x-auto`
con la barra oculta como reserva por debajo de 357px. En móvil el padding
horizontal baja a 6px y el vertical sube a 12px, así el enlace queda en 44px de
alto táctil. El total baja a 337px.

El toggle queda en 44px de alto pero 32px de ancho: llevarlo a 44x44 suma 12px
y empuja el nav a 349px, que rompe los 360px de un Galaxy S8 o un iPhone 12
mini. Se prefirió el ancho de pantalla sobre el área táctil del toggle.

**Etiquetas de tecnología.** `Tag.jsx` tiene tres variantes con nombre
—`tarjeta`, `suave` y `mini`—, que son las tres combinaciones de tamaño y fondo
que usa la referencia. Las secciones eligen por nombre y no pasan estilos
sueltos; si aparece una cuarta combinación, se pregunta antes de agregarla. El
color de marca va solo en el punto y el texto usa `var(--txt)`: varios hex no
llegan a contraste AA como color de texto, el amarillo de Power BI sobre fondo
claro entre otros.

**Íconos del stack.** Viven en `StackTecnico.jsx`, en un mapa indexado por el
`id` del grupo, y `stack.js` solo los nombra. La referencia los inyecta con
`dangerouslySetInnerHTML`, que acá no hace falta, y además `stack.js` no puede
tener JSX por ser un `.js`.

**Proyectos de formación.** Van sin captura, y es una decisión de diseño de la
referencia que conviene respetar: son ejercicios de cursada, y una imagen les
daría un peso visual que no les corresponde al lado de los proyectos de datos.
El acordeón anima la altura con `grid-template-rows` en la clase `.acc`, sin
medir nada en JS.

**Enlaces en desarrollo web y formación.** La referencia deja esas tarjetas sin
enlace. Acá sí lo llevan, y es una desviación deliberada: son sitios en
producción y repos públicos, y esconderlos no tiene sentido en un portfolio. El
criterio de botones es el mismo que en los destacados —violeta sólido para lo
que se puede ver funcionando, superficie para el código— pero con la tipografía
achicada a 13px en las tarjetas web y a 11,5px en el acordeón, para que no le
ganen en peso a la tarjeta que los contiene. Cuando hay un solo enlace va un
solo botón: nada de un segundo botón deshabilitado. En los proyectos web de
inmobiliarias el repo es privado, así que solo va el sitio; en pcZone es al
revés y solo va el código.

**Enlaces externos.** Los enlaces de proyecto llevan `target="_blank"` y
`rel="noopener"` solo cuando el `href` arranca con `http`. Los que todavía
apuntan a `#` no los llevan, porque en un ancla vacía sería incorrecto. La
condición se evalúa sola: al pegar un link real se aplica sin tocar el
componente.

**Meta tags.** El `title` y las tres descriptions —normal, `og:` y `twitter:`—
dicen analista de datos, que es lo que se ve en Google y en la tarjeta de
LinkedIn. `og:image` apunta a `/og-image.png` con `1200x630` declarados.

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

## Qué está verificado y cómo

**El loop del canvas no tiene fuga.** Contando repintados del canvas contra
frames del navegador durante 1,5s: 90 frames y 90 repintados después del doble
montaje de StrictMode, y los mismos 90 y 90 después de cinco toggles de tema
seguidos. Relación 1,00 en los dos casos, así que el cleanup cancela el
`requestAnimationFrame` y el toggle no recrea el loop.

Importa cómo se midió: con `prefers-reduced-motion` forzado a `no-preference`
desde DevTools, no con la detección real. La máquina de desarrollo devuelve
`reduce` y no cede ni apagando la opción en Windows. Eso prueba que la ruta
animada no tiene fuga, pero **no** prueba que la detección del media query
funcione en una máquina sin el modo reducido.

**Los contadores animan, por dos de sus tres rutas.** Con
`prefers-reduced-motion` apagado de verdad en Windows —está en la
configuración de Rendimiento del sistema, no en Accesibilidad—, verificado en
Chrome y en Firefox: los cuatro suben desde cero hasta 43, 4, 3 y 2. La ruta
directa, la del rect visible al montar, y la del `IntersectionObserver` al
bajar quedan las dos confirmadas. En la misma pasada se verificaron el
movimiento de los blobs con su degradado de temperatura, el pulso del punto
verde del badge y los revelados al scroll.

**Deuda conocida: el reintento a los 3000ms de los contadores nunca se
ejerció.** Solo corre cuando el `IntersectionObserver` no llegó a disparar, y
con el observador vivo siempre gana alguna de las otras dos rutas. Para
reproducirlo hay que anular el observador, así que quedó sin probar.

**El nav entra en los tres anchos de teléfono.** Verificado con el device
toolbar de Chrome a 360, 390 y 430px: "Sobre mí" en una línea, sin scroll
horizontal y con la píldora alineada. El margen a 360px es de 3px, y es el peor
caso real: midiendo el mismo nav con Instrument Sans, system-ui, Arial y Segoe
UI, la tipografía del sitio resultó la más ancha de las cuatro, así que una
fuente de reserva sin cargar no lo rompe.

**Estructura del documento.** Las siete secciones salen en el orden de la
referencia, hay un solo `<h1>`, la secuencia de encabezados no saltea niveles y
no hay scroll horizontal ni elementos que se pasen del viewport.

## Pendientes que dependen de Gabriel

- Las capturas de dos de los tres proyectos destacados: la del dashboard de
  telemetría de F1 y la del detector de anomalías oceánicas.
- La foto para Sobre mí, 260x300 con radio 16. El placeholder ya tiene esas
  medidas exactas para que al reemplazarlo no se mueva el layout.
- `public/og-image.png`, 1200x630.
- Los dos links de AUSA, notebook y dashboard, que siguen en `#`.
- Pasar `og:image` a URL absoluta. Bloqueado: espera a que el proyecto quede
  con su nombre definitivo en Vercel, para no escribir el dominio dos veces.
  Varios scrapers, LinkedIn entre ellos, no resuelven la ruta relativa.

Ya resueltos: el CV en `public/DomingoGabrielCV.pdf`, la captura de AUSA y las
cuatro de desarrollo web en `public/proyectos/`, y los links de F1 y del
detector oceánico. Las tarjetas de desarrollo web no llevan enlace: el diseño
las define como informativas, no es un pendiente.
