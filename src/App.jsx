import Hero from './components/Hero';
import Nav from './components/Nav';
import useTheme from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-txt transition-colors duration-300">
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
    </div>
  );
}
