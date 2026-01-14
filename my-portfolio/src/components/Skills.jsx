import React from 'react';
import SkillPill from './SkillPill';
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 bg-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4 text-white">{t("skillsTitle")}</h3>
        <div className='mt-4 flex flex-wrap gap-3 justify-between md:justify-start'>
          <SkillPill skill="Agile" level={40} />
          <SkillPill skill="Bootstrap" level={30} />
          <SkillPill skill="CSS" level={60} />
          <SkillPill skill="Docker" level={40} />
          <SkillPill skill="Figma" level={30} />
          <SkillPill skill="GitHub" level={30} />
          <SkillPill skill="JavaScript" level={50} />
          <SkillPill skill="Jira" level={80} />
          <SkillPill skill="MySQL" level={40} />
          <SkillPill skill="Node.js" level={40} />
          <SkillPill skill="PostgreSQL" level={30} />
          <SkillPill skill="React" level={80} />
          <SkillPill skill="SCRUM" level={50} />
          <SkillPill skill="SQL" level={60} />
          <SkillPill skill="Tailwind" level={80} />
          <SkillPill skill="NextJS" level={40} />
          <SkillPill skill="Prisma" level={30} />
          <SkillPill skill="Gitlab" level={60} />
          <SkillPill skill="Typescript" level={30} />
          <SkillPill skill="Git" level={50} />

          <SkillPill skill="CI/CD" level={20} />



        </div>
      </div>
    </section>
  );
};

export default Skills;