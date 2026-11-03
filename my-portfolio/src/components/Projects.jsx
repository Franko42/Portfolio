import { useTranslation } from "react-i18next";

const projects = [
  { id: "taskagent", availability: "private" },
  { id: "vertishops", availability: "private" },
  { id: "conectando", website: "https://conectando.com.ar" },
  { id: "simi", availability: "professional" },
  { id: "sinam", availability: "professional" },
  { id: "spinlab", availability: "professional" },
  { id: "alarms", source: "https://github.com/Franko42/Alarms.app" },
  { id: "notes" },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="scroll-mt-20 bg-gray-900 py-20" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-9 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {t("projectsEyebrow")}
          </p>
          <h2 id="projects-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("projectsTitle")}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const skills = t(`projects.${project.id}.skills`, { returnObjects: true });
            const availability = project.availability === "private"
              ? t("privateProject")
              : project.availability === "professional"
                ? t("professionalProject")
                : null;

            return (
              <article
                key={project.id}
                className={`flex h-full flex-col rounded-xl border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${
                  project.id === "taskagent"
                    ? "border-cyan-300/40 bg-gradient-to-br from-cyan-950/70 to-gray-950"
                    : "border-white/10 bg-white/[0.035] hover:border-white/20"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                    {t(`projects.${project.id}.role`)}
                  </span>
                  {availability && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                      {availability}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t(`projects.${project.id}.name`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">
                  {t(`projects.${project.id}.description`)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={t("technologiesUsed")}>
                  {Array.isArray(skills) && skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {(project.website || project.source) && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                      >
                        {t("viewLiveProject")}
                        <span className="sr-only">: {t(`projects.${project.id}.name`)}</span>
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                      >
                        {t("viewSource")}
                        <span className="sr-only">: {t(`projects.${project.id}.name`)}</span>
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
