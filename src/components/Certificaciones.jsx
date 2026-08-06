import { certificaciones } from '../data/certificaciones';

export default function Certificaciones() {
  return (
    <section className="mx-auto flex w-full max-w-[720px] flex-col gap-[22px]">
      <h2 className="reveal font-display m-0 text-[clamp(24px,3.2vw,30px)] font-bold tracking-[-0.02em]">
        Certificaciones
      </h2>

      <div className="flex flex-col gap-3">
        {certificaciones.map((c) => (
          <div
            key={c.id}
            className="reveal flex items-center gap-[15px] rounded-2xl bg-surf px-[18px] py-[15px] shadow-soft"
          >
            <span
              className="font-display flex h-10 w-10 flex-none items-center justify-center rounded-xl text-[12px] font-extrabold"
              style={{ background: c.bg, color: c.fg }}
            >
              {c.sigla}
            </span>
            <div className="flex flex-col gap-px">
              <span className="text-[15px] font-semibold">{c.nombre}</span>
              <span className="text-[13px] text-sec">{c.organizacion}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
