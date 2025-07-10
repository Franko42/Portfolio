import React from 'react';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 text-center bg-cover bg-center "
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} >
      <div className='flex items-center justify-center'>
        <div className='flex-column items-center justify-start w-1/2'>
          <h2 className="text-4xl text-white font-bold mb-4">{t("greeting")}</h2>
          <p className="text-lg text-white ">{t("occupation")}</p>
          <div className="mt-4" >
            <a href="#projects" className="bg-blue-600 text-white px-6 py-2  rounded hover:bg-blue-700 transition ">{t("invitation")}</a>
          </div>
        </div>
        <div className='flex items-center justify-center w-1/2  '>
          <div className="w-2/3 h-2/3  aspect-square rounded-full overflow-hidden  ">
            <img
              src="../../public/franco.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        <div>

        </div>
      </div>
    </section>
  );
};

export default Hero;