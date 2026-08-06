import { colorDe } from '../data/tecnologias';

// El color de marca va solo en el punto. El texto usa var(--txt) para no
// depender del contraste de cada hex contra el fondo de cada tema.
export default function Tag({ nombre }) {
  return (
    <span className="inline-flex items-center gap-[6px] rounded-full bg-tagbg px-[11px] py-[5px] text-[12.5px] font-medium shadow-soft">
      <span
        className="h-2 w-2 flex-none rounded-full"
        style={{ background: colorDe(nombre) }}
      />
      {nombre}
    </span>
  );
}
