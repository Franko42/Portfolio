import React from "react";
import { useTranslation } from "react-i18next";
import heroBg from "../assets/hero-bg.jpg";
import profilePic from "../assets/franco.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[80vh]  md:min-h-[60vh] md:max-h-[70vh] flex items-center justify-center bg-blue-50 text-center bg-cover bg-center "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className=" max-w-5xl mx-auto px-4 absolute inset-0 bg-black/60 md:flex items-center justify-center">
        <div className=" flex items-center justify-center md:w-1/2 w-full ">
          <div className="w-40 md:w-65 aspect-square rounded-full overflow-hidden  ">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="flex-col items-center justify-start md:w-1/2 w-full mt-6 md:mt-0 md:pl-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5">
            {t("greeting")}
          </h2>
          <p className="text-base md:text-lg text-gray-300 ">
            {t("occupation")}
          </p>
          <div className="mt-4">
            <a
              href="#projects"
              className=" tracking-wide bg-white/10 text-white px-6 py-2  bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition"
            >
              {t("invitation")}
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
