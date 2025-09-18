import React from 'react';
import { useTranslation } from "react-i18next";
import heroBg from "../assets/hero-bg.jpg";
import profilePic from "../assets/franco.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[80vh] max-h-[90vh] md:min-h-[60vh] md:max-h-[70vh] flex items-center justify-center bg-blue-50 text-center bg-cover bg-center "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='col md:flex items-center justify-center'>

        <div className='flex items-center justify-center md:w-1/2 w-full '>
          <div className="w-2/4 h-2/4 md:w-2/4 md:w-2/4  aspect-square rounded-full overflow-hidden  ">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>


        </div>
        <div className='flex-column items-center justify-start md:w-1/2 w-full pt-4'>
          <h2 className="text-4xl text-white font-bold mb-4">{t("greeting")}</h2>
          <p className="text-lg text-white ">{t("occupation")}</p>
          <div className="mt-4" >
            <a href="#projects" className="bg-blue-600 text-white px-6 py-2  rounded hover:bg-blue-700 transition ">{t("invitation")}</a>
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  );
};

export default Hero;