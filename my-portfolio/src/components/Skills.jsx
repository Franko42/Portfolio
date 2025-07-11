import React from 'react';
import SkillPill from './SkillPill';
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-16 bg-gray-600">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4 text-white">{t("skillsTitle")}</h3>
        <div className='mt-4 flex flex-wrap gap-3'>
          <SkillPill skill="React" level={80} />
          <SkillPill skill="Node.js" level={50} />
          <SkillPill skill="CSS" level={30} />
        </div>
      </div>
    </section>
  );
};

export default Skills;