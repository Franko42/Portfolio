import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "conectando",
      title: t("projects.conectando.name"),
      role: t("projects.conectando.role"),
      description: t("projects.conectando.description"),
      skills: ["React", "Tailwind CSS", "JavaScript", "Figma"],
      url: "http://Conectando.com.ar",
    },
    {
      id: "simi",
      title: t("projects.simi.name"),
      role: t("projects.simi.role"),
      description: t("projects.simi.description"),
      skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      url: "http://Conectando.com.ar",
    },
    {
      id: "sinam",
      title: t("projects.sinam.name"),
      role: t("projects.sinam.role"),
      description: t("projects.sinam.description"),
      skills: ["Testing", "Manual Testing", "Bug Reporting"],
      url: "http://Conectando.com.ar",
    },
    {
      id: "spinlab",
      title: t("projects.spinlab.name"),
      role: t("projects.spinlab.role"),
      description: t("projects.spinlab.description"),
      skills: [
        "Testing",
        "Technical Analysis",
        "Functional Analysis",
        "Technical Documentation",
      ],
      url: "http://Conectando.com.ar",
    },
    {
      id: "alarms",
      title: t("projects.alarms.name"),
      role: t("projects.alarms.role"),
      description: t("projects.alarms.description"),
      skills: ["Next.js", "NestJS", "PostgreSQL", "Cron Jobs"],
      url: "http://Conectando.com.ar",
    },
    {
      id: "notes",
      title: t("projects.notes.name"),
      role: t("projects.notes.role"),
      description: t("projects.notes.description"),
      skills: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
        "TypeScript",
      ],
      url: "http://Conectando.com.ar",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {t("projectsTitle")}
        </h3>
        <div className="grid mt-4 gap-6 md:grid-cols-2  space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black/40 border border-white/10 backdrop-blur-[2px] rounded-lg p-5  hover:bg-white/5 hover:scale-[1.02] transition cursor-pointer"
            >
              <h4 className="text-white text-lg font-semibold tracking-wide mb-3">
                {project.title}
              </h4>
              <p className="text-md text-white/50 mt-1">{project.role}</p>
              <p className="text-white/90 mb-2 leading-relaxed max-w-prose">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.skills.map((skill) => (
                  <span className="text-white/50 bg-white/20 px-2 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              {/* <a
                href={project.url}
                className="text-white/80 hover:text-white text-sm inline-block mt-2 transition"
              >
                {t("viewProject")}
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
