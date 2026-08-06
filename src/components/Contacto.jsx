const EMAIL = 'domingogaby8@gmail.com';

const enlaceSecundario =
  'inline-flex items-center gap-2 rounded-xl bg-surf px-[22px] py-[14px] text-[15px] font-semibold shadow-soft transition-transform duration-200 hover:-translate-y-0.5';

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="mx-auto flex w-full max-w-[640px] scroll-mt-[90px] flex-col items-center gap-5 text-center"
    >
      <h2 className="reveal font-display m-0 text-[clamp(30px,4.5vw,42px)] font-extrabold tracking-[-0.025em]">
        Hablemos
      </h2>

      <p className="reveal m-0 max-w-[480px] text-[16.5px] leading-[1.65] text-sec [text-wrap:pretty]">
        Estoy buscando mi primer puesto en datos. Si tenés una búsqueda abierta
        o simplemente querés comentar algo de los proyectos, escribime.
      </p>

      <div className="reveal flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-[9px] rounded-xl bg-vio px-[26px] py-[14px] text-[15.5px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_8px_24px_rgb(124_92_240/0.4)]"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-10 6L2 7" />
          </svg>
          {EMAIL}
        </a>

        <a
          href="https://linkedin.com/in/gabydomingo"
          target="_blank"
          rel="noopener"
          className={enlaceSecundario}
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
          className={enlaceSecundario}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>

      <span className="reveal text-[13.5px] text-sec">
        Buenos Aires, Argentina
      </span>
    </section>
  );
}
