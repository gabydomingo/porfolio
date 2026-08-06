import { useEffect, useRef, useState } from 'react';

const DURACION = 1300;
const DEMORA_INICIAL = 250;
const REINTENTO = 3000;

// Recibe un array de identidad estable (definido a nivel de módulo) y devuelve
// el ref del bloque a observar más los valores que hay que mostrar.
export default function useCounter(objetivos) {
  const hostRef = useRef(null);
  const [valores, setValores] = useState(() => objetivos.map(() => 0));

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValores(objetivos);
      return;
    }

    let arrancado = false;
    let raf = null;
    const temporizadores = [];

    const animar = () => {
      if (arrancado) return;
      arrancado = true;
      const inicio = performance.now();
      const paso = (ahora) => {
        const avance = Math.min(1, (ahora - inicio) / DURACION);
        const suave = 1 - Math.pow(1 - avance, 3);
        setValores(objetivos.map((o) => Math.round(o * suave)));
        if (avance < 1) raf = requestAnimationFrame(paso);
      };
      raf = requestAnimationFrame(paso);
    };

    const enPantalla = () => {
      const r = host.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    // Tres rutas, como la referencia: si el bloque ya se ve al montar arranca
    // solo; si no, lo despierta el observador; y el reintento tardío cubre el
    // caso de que el observador no haya llegado a disparar.
    if (enPantalla()) temporizadores.push(setTimeout(animar, DEMORA_INICIAL));

    const io = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          animar();
          io.disconnect();
        }
      },
      { threshold: 0 },
    );
    io.observe(host);

    temporizadores.push(
      setTimeout(() => {
        if (enPantalla()) animar();
      }, REINTENTO),
    );

    return () => {
      io.disconnect();
      temporizadores.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [objetivos]);

  return { hostRef, valores };
}
