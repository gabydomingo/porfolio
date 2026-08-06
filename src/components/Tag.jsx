import { colorDe } from '../data/tecnologias';

// Las tres combinaciones de tamaño y fondo que usa la referencia. Las
// secciones eligen por nombre; no pasan estilos sueltos.
const variantes = {
  tarjeta: {
    caja: 'gap-[6px] bg-tagbg px-[11px] py-[5px] text-[12.5px] shadow-soft',
    punto: 'h-2 w-2',
  },
  suave: {
    caja: 'gap-[6px] bg-viosoft px-[10px] py-1 text-[12px]',
    punto: 'h-[7px] w-[7px]',
  },
  mini: {
    caja: 'gap-[5px] bg-viosoft px-[9px] py-[3px] text-[11.5px]',
    punto: 'h-[6px] w-[6px]',
  },
};

// El color de marca va solo en el punto. El texto usa var(--txt) para no
// depender del contraste de cada hex contra el fondo de cada tema.
export default function Tag({ nombre, variante = 'tarjeta' }) {
  const estilo = variantes[variante] ?? variantes.tarjeta;

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${estilo.caja}`}
    >
      <span
        className={`${estilo.punto} flex-none rounded-full`}
        style={{ background: colorDe(nombre) }}
      />
      {nombre}
    </span>
  );
}
