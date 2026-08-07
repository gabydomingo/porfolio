import { useCallback, useEffect, useState } from 'react';

const CLAVE = 'gd-lang';

// Mismo criterio que useTheme: el default es fijo y no se mira
// navigator.language. El público principal es Argentina y LATAM, así que un
// visitante con el navegador en inglés igual entra en español.
function leerIdiomaGuardado() {
  try {
    return localStorage.getItem(CLAVE) === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

export default function useIdioma() {
  const [idioma, setIdioma] = useState(leerIdiomaGuardado);

  useEffect(() => {
    document.documentElement.lang = idioma;
    try {
      localStorage.setItem(CLAVE, idioma);
    } catch {
      // Storage bloqueado: el idioma vale solo para esta sesión.
    }
  }, [idioma]);

  const alternarIdioma = useCallback(
    () => setIdioma((actual) => (actual === 'en' ? 'es' : 'en')),
    [],
  );

  return { idioma, alternarIdioma };
}
