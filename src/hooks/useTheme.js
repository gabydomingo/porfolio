import { useCallback, useEffect, useState } from 'react';

const CLAVE = 'gd-theme';

// El script inline de index.html ya aplicó la clase antes de la primera
// pintura. Esto lee lo mismo, con el mismo default oscuro, para que React
// arranque con el tema correcto y el ícono del toggle no salte.
function leerTemaGuardado() {
  try {
    return localStorage.getItem(CLAVE) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(leerTemaGuardado);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(CLAVE, theme);
    } catch {
      // Storage bloqueado: el tema vale solo para esta sesión.
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((actual) => (actual === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { isDark: theme === 'dark', toggleTheme };
}
