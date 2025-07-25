import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 99, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 70, category: "frontend" },

  // Backend
  { name: "MongoDB", level: 20, category: "backend" },
  { name: "NodeJS", level: 30, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "MySql", level: 60, category: "backend" },
  { name: "php", level: 80, category: "backend" },


  // Herramientas                 
  { name: "Git/GitHub", level: 90, category: "Herramientas" },
  ///aprendiendo re chanta ponerlo
  ///{ name: "Docker", level: 30, category: "Herramientas" },
  { name: "Figma", level: 90, category: "Herramientas" },
  { name: "VS Code", level: 95, category: "Herramientas" },
  { name: "Linux", level: 50, category: "Herramientas" },
  { name: "Python", level: 50, category: "Herramientas" },
  { name: "NextJS", level: 50, category: "Herramientas" },
];

const categories = ["Todas", "frontend", "backend", "Herramientas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todas" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          sk<span className="text-primary">il</span>ls
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};