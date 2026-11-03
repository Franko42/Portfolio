import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-20 border-b border-white/5 bg-gray-950 py-20" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:px-10">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {t("aboutEyebrow")}
          </p>
          <h2 id="about-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("aboutTitle")}
          </h2>
        </div>
        <p className="text-base leading-8 text-gray-300 md:text-lg">
          {t("aboutMe")}
        </p>
      </div>
    </section>
  );
};

export default About;
