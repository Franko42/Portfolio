import React from 'react';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-white ">{t("projectsTitle")}</h3>
        <div className="grid mt-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Project Card */}
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Conectando.com.ar</h4>
            <p className="text-gray-600 mb-2">Conectando is a platform developed by Silicon Misiones that bridges the gap between startups, entrepreneurs, and digital professionals. It connects innovative projects with skilled tech talent, fostering meaningful collaborations that drive the future of technology in the region.</p>
            <a href="#" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;