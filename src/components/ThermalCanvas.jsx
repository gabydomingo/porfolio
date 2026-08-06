import { useEffect, useRef } from 'react';

// Matices de frío a caliente, con velocidades y fases distintas para que el
// conjunto nunca se repita a simple vista.
const blobs = [
  { x: 0.22, y: 0.3, r: 0.55, h: 252, sx: 0.00011, sy: 0.00007, p: 0 },
  { x: 0.72, y: 0.22, r: 0.48, h: 275, sx: 0.00008, sy: 0.00012, p: 2.1 },
  { x: 0.5, y: 0.75, r: 0.6, h: 300, sx: 0.00013, sy: 0.00009, p: 4.2 },
  { x: 0.88, y: 0.65, r: 0.42, h: 318, sx: 0.00007, sy: 0.00011, p: 1.3 },
];

export default function ThermalCanvas({ isDark }) {
  const canvasRef = useRef(null);
  // El loop lee el tema desde un ref. Si isDark fuera dependencia del effect,
  // cada toggle destruiría el loop y el ResizeObserver para rearmarlos igual.
  const oscuroRef = useRef(isDark);

  useEffect(() => {
    oscuroRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext('2d');
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dibujar = (t) => {
      const w = cv.width;
      const h = cv.height;
      const oscuro = oscuroRef.current;
      const alfa = oscuro ? 0.16 : 0.13;
      const luz = oscuro ? '60%' : '72%';
      const croma = oscuro ? 0.16 : 0.13;

      ctx.clearRect(0, 0, w, h);
      blobs.forEach((b) => {
        const bx = (b.x + 0.09 * Math.sin(t * b.sx + b.p)) * w;
        const by = (b.y + 0.07 * Math.cos(t * b.sy + b.p)) * h;
        const radio = b.r * Math.max(w, h) * 0.72;
        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, radio);
        grad.addColorStop(0, `oklch(${luz} ${croma} ${b.h} / ${alfa})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, radio, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Cambiar width o height borra el canvas, así que sin loop hay que
    // repintar el cuadro único después de cada resize.
    const medir = () => {
      cv.width = cv.offsetWidth;
      cv.height = cv.offsetHeight;
      if (quieto) dibujar(0);
    };

    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(cv);

    if (quieto) return () => ro.disconnect();

    let raf = requestAnimationFrame(function loop(t) {
      dibujar(t);
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
