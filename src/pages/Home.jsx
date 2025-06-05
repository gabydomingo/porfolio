import { ThemeToggle } from "../components/ThemeToggle";
import { FondoEStrellas } from "../components/FondoEStrellas";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer"


export const Home = () => {
    return ( <div className="min-h-screen bg-background text-foregorund overflow-x-hidden"> 
        
        {/* boton de tema */}
        <ThemeToggle />
        {/* efecto de fondo */}
        <FondoEStrellas />

        {/* navbar */}
        <Navbar />

        {/* contenido principal */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/* footer */}
        <Footer />
    </div>
    );
}
