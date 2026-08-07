import ThermalCanvas from './ThermalCanvas';
import useCounter from '../hooks/useCounter';
import { t, textos } from '../data/textos';

const metricas = [
  { valor: 43, sufijo: 'M', etiqueta: 'registros procesados' },
  { valor: 4, sufijo: '', etiqueta: 'modelos entrenados' },
  { valor: 3, sufijo: '', etiqueta: 'apps en producción' },
  { valor: 2, sufijo: '', etiqueta: 'dashboards de BI' },
];

// A nivel de módulo para que useCounter reciba siempre el mismo array
const objetivos = metricas.map((m) => m.valor);

const botonSecundario =
  'boton inline-flex items-center gap-2 rounded-xl bg-surf px-5 py-3 text-[15px] font-semibold shadow-soft transition-transform duration-200 hover:-translate-y-0.5';

export default function Hero({ isDark, idioma }) {
  const { hostRef, valores } = useCounter(objetivos);

  return (
    <header className="relative overflow-hidden px-6 pt-[130px] pb-[72px]">
      <ThermalCanvas isDark={isDark} />

      <div className="relative mx-auto flex max-w-[760px] flex-col gap-[22px]">
        <a
          href="#contacto"
          className="inline-flex self-start items-center gap-[9px] rounded-full bg-surf px-[15px] py-2 text-[13.5px] font-medium shadow-soft"
        >
          <span className="pulse-dot h-[9px] w-[9px] rounded-full bg-green" />
          Disponible para trabajar
        </a>

        <h1 className="font-display m-0 text-[clamp(38px,6.5vw,58px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          Hola, soy Gabriel
        </h1>

        <p className="m-0 max-w-[640px] text-[clamp(17px,2.4vw,20px)] leading-[1.65] text-sec [text-wrap:pretty]">
          Analista de datos y desarrollador de Buenos Aires.{' '}
          <strong className="text-txt">
            Construyo pipelines de datos de punta a punta
          </strong>
          : extraigo, proceso, modelo y dejo el resultado funcionando en la
          nube.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="boton inline-flex items-center gap-2 rounded-xl bg-vio px-[22px] py-3 text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(124_92_240/0.4)]"
          >
            Ver proyectos
          </a>
          <a href={t(textos.cv, idioma)} download className={botonSecundario}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Descargar CV
          </a>
          <a
            href="https://linkedin.com/in/gabydomingo"
            target="_blank"
            rel="noopener"
            className={botonSecundario}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/gabydomingo"
            target="_blank"
            rel="noopener"
            className={botonSecundario}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
            </svg>
            GitHub
          </a>
        </div>

        <div
          ref={hostRef}
          className="mt-[14px] flex flex-wrap gap-x-[44px] gap-y-[14px]"
        >
          {metricas.map((m, i) => (
            <div key={m.etiqueta} className="flex flex-col gap-[2px]">
              <span className="font-mono text-[34px] font-semibold tracking-[-0.02em]">
                {valores[i]}
                {m.sufijo}
              </span>
              <span className="text-[13px] text-sec">{m.etiqueta}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
