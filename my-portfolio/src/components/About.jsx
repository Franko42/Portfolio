import React from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-white">
        <h3 className="text-3xl font-bold mb-4">{t("aboutTitle")}</h3>
        <p className="text-gray-400 text-xl leading-relaxed font-semibold">
         {t("aboutMe")}
        </p>
      </div>
    </section>
  );
};

export default About;