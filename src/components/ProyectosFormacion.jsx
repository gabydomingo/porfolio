import { useState } from 'react';
import Tag from './Tag';
import { formacion } from '../data/proyectos';

export default function ProyectosFormacion() {
  const [abierto, setAbierto] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[920px]">
      <div className="reveal rounded-2xl bg-surf shadow-soft">
        <button
          type="button"
          onClick={() => setAbierto((a) => !a)}
          aria-expanded={abierto}
          className="flex w-full cursor-pointer items-center justify-between gap-[14px] rounded-2xl bg-transparent px-6 py-5 text-left text-txt"
        >
          <span>
            <span className="font-display text-[17px] font-bold tracking-[-0.01em]">
              Proyectos de formación
            </span>
            <span className="text-[14.5px] text-sec">
              {' '}
              — Ejercicios y trabajos de cursada.
            </span>
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`flex-none transition-transform duration-300 ${
              abierto ? 'rotate-180' : ''
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* .acc anima la altura con grid-template-rows, sin medirla en JS */}
        <div className={`acc ${abierto ? 'open' : ''}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-[14px] px-6 pt-1 pb-[22px]">
              {formacion.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-2"
                >
                  <span className="text-[14.5px] font-semibold">
                    {p.nombre}
                  </span>
                  <span className="flex-[1_1_260px] text-[14px] text-sec">
                    {p.descripcion}
                  </span>
                  <span className="flex flex-wrap gap-[6px]">
                    {p.tags.map((t) => (
                      <Tag key={t} nombre={t} variante="mini" />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
