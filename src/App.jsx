import Hero from './components/Hero';
import Nav from './components/Nav';
import ProyectosDestacados from './components/ProyectosDestacados';
import useReveal from './hooks/useReveal';
import useTheme from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-txt transition-colors duration-300">
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <main className="flex flex-col gap-[110px] px-6 pt-10 pb-[90px]">
        <ProyectosDestacados />
      </main>
    </div>
  );
}
