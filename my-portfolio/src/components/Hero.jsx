import { useTranslation } from "react-i18next";
import heroBg from "../assets/hero-bg.jpg";
import profilePic from "../assets/franco.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative isolate flex min-h-[76vh] items-center overflow-hidden bg-gray-950 bg-cover bg-center py-16 md:min-h-[68vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)] md:px-10">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {t("occupation")}
          </p>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("greeting")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-200 md:mx-0 md:text-xl">
            {t("heroIntro")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-gray-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("invitation")}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/30 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("contactCta")}
            </a>
          </div>
        </div>
        <div className="order-1 mx-auto w-40 overflow-hidden rounded-full border-4 border-white/15 shadow-2xl shadow-black/40 sm:w-48 md:order-2 md:w-64">
          <img
            src={profilePic}
            alt={t("profileAlt")}
            className="aspect-square h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
