import React from 'react';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'conectando',
      title: t('projects.conectando.name'),
      role: t('projects.conectando.role'),
      description: t('projects.conectando.description'),
      url: 'http://Conectando.com.ar',
    },
    {
      id: 'simi',
      title: t('projects.simi.name'),
      role: t('projects.simi.role'),
      description: t('projects.simi.description'),
      url: 'http://Conectando.com.ar',
    },
    {
      id: 'sinam',
      title: t('projects.sinam.name'),
      role: t('projects.sinam.role'),
      description: t('projects.sinam.description'),
      url: 'http://Conectando.com.ar',
    },
    {
      id: 'spinlab',
      title: t('projects.spinlab.name'),
      role: t('projects.spinlab.role'),
      description: t('projects.spinlab.description'),
      url: 'http://Conectando.com.ar',
    },
    {
      id: 'alarms',
      title: t('projects.alarms.name'),
      role: t('projects.alarms.role'),
      description: t('projects.alarms.description'),
      url: 'http://Conectando.com.ar',
    },
    {
      id: 'notes',
      title: t('projects.notes.name'),
      role: t('projects.notes.role'),
      description: t('projects.notes.description'),
      url: 'http://Conectando.com.ar',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-white">{t('projectsTitle')}</h3>
        <div className="grid mt-4 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow rounded p-4">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <h2 className="font-bold">
                {t('roleLabel')} : <span className="font-normal">{project.role}</span>
              </h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a href={project.url} className="text-blue-600 underline hover:underline">
                {t('viewProject')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;