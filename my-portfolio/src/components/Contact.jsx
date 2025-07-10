import React from 'react';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-16 bg-gray-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">{t("contactTitle")}</h3>
        <p className="mb-6 mt-4 text-gray-200">{t("contactDescription")}</p>
        <div className='mt-4'>
        <a href="mailto:youremail@example.com" className="bg-blue-600 text-white text-xl px-6 py-2 rounded hover:bg-blue-700 transition">{t("contactButton")}</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;