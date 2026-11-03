import { useTranslation } from "react-i18next";
import { SkillIcon } from "./SkillIcon";

const skillList = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Docker", icon: "docker" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "Git", icon: "git" },
  { name: "GitLab", icon: "gitlab" },
  { name: "GitHub", icon: "github" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Figma", icon: "figma" },
];

const Skills = () => {
  const { t } = useTranslation();
  const agenticSkills = t("agenticSkills", { returnObjects: true });

  return (
    <section id="skills" className="scroll-mt-20 border-b border-white/5 bg-gray-950 py-20" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {t("skillsEyebrow")}
        </p>
        <h2 id="skills-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("skillsTitle")}
        </h2>

        <h3 className="mb-5 mt-8 text-lg font-semibold text-white">{t("agenticSkillsTitle")}</h3>
        <ul className="flex flex-wrap gap-2.5">
          {Array.isArray(agenticSkills) && agenticSkills.map((skill) => (
            <li key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3.5 py-2 text-sm text-cyan-100">
              {skill}
            </li>
          ))}
        </ul>

        <h3 className="mb-6 mt-10 text-lg font-semibold text-white">{t("technicalSkillsTitle")}</h3>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7" aria-label={t("technicalSkillsTitle")}>
          {skillList.map((skill) => (
            <li key={skill.name}>
              <SkillIcon skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
