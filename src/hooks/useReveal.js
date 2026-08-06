import { useEffect } from 'react';

const UMBRAL = 0.12;
const DESFASAJE = 90;
const CICLO = 4;

export default function useReveal() {
  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll('.reveal'));
    if (!elementos.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elementos.forEach((el) => el.classList.add('rv-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add('rv-in');
          io.unobserve(en.target);
        });
      },
      { threshold: UMBRAL },
    );

    elementos.forEach((el) => {
      // El desfasaje se cuenta entre hermanos, no sobre el total: así cada
      // grupo vuelve a empezar en cero en vez de acumular una demora larga.
      const hermanos = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) =>
            c.classList.contains('reveal'),
          )
        : [el];
      const posicion = hermanos.indexOf(el);
      el.style.transitionDelay = `${posicion > 0 ? (posicion % CICLO) * DESFASAJE : 0}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
