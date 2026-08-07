import Certificaciones from './components/Certificaciones';
import Contacto from './components/Contacto';
import DesarrolloWeb from './components/DesarrolloWeb';
import Hero from './components/Hero';
import Nav from './components/Nav';
import ProyectosDestacados from './components/ProyectosDestacados';
import ProyectosFormacion from './components/ProyectosFormacion';
import SobreMi from './components/SobreMi';
import StackTecnico from './components/StackTecnico';
import useIdioma from './hooks/useIdioma';
import useReveal from './hooks/useReveal';
import useTheme from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { idioma, alternarIdioma } = useIdioma();
  useReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-txt transition-colors duration-300">
      <Nav
        isDark={isDark}
        toggleTheme={toggleTheme}
        idioma={idioma}
        alternarIdioma={alternarIdioma}
      />
      <Hero isDark={isDark} idioma={idioma} />
      <main className="flex flex-col gap-[110px] px-6 pt-10 pb-[90px]">
        <ProyectosDestacados idioma={idioma} />
        <DesarrolloWeb idioma={idioma} />
        <ProyectosFormacion idioma={idioma} />
        <StackTecnico idioma={idioma} />
        <SobreMi idioma={idioma} />
        <Certificaciones idioma={idioma} />
        <Contacto idioma={idioma} />
      </main>
      <footer className="px-6 py-7 text-center text-[13px] text-sec">
        © 2026 Gabriel Domingo
      </footer>
    </div>
  );
}
