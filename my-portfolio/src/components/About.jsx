import React from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-gray-900 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-4 text-white ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">{t("aboutTitle")}</h3>
        <p className="leading-loose text-gray-400 text-base md:text-lg ">
         {t("aboutMe")}
        </p>
      </div>
    </section>
  );
};

export default About;