import React from "react";
import { SkillIcon } from "./SkillIcon";
import { useTranslation } from "react-i18next";

const skillList = [
  { name: "React", icon: "react" },
  { name: "NextJS", icon: "nextjs" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Docker", icon: "docker" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "Git", icon: "git" },
  { name: "GitLab", icon: "gitlab" },
  { name: "GitHub", icon: "github" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Figma", icon: "figma" },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 bg-gray-700 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
          {t("skillsTitle")}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-10">
          {skillList.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
