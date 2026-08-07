// Cada texto lleva sus dos idiomas juntos, no en archivos paralelos: si falta
// una traducción se ve en el renglón de al lado, y sumar un proyecto sigue
// siendo tocar un solo archivo.
export const textos = {
  cv: {
    es: '/DomingoGabrielCV.pdf',
    en: '/DomingoGabrielCV-en.pdf',
  },
};

// Cae en español si todavía no hay traducción, así el sitio nunca queda vacío
// mientras se traduce por partes.
export function t(campo, idioma) {
  if (campo == null) return '';
  return campo[idioma] ?? campo.es;
}
