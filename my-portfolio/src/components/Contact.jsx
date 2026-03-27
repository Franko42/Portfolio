import React from 'react';
import { useTranslation } from "react-i18next";
import SocialLink from "./SocialLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-600 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white text-left">{t("contactTitle")}</h3>
        <div>
          <div className="flex justify-center gap-6 flex-wrap text-white" >
            <SocialLink Icon={FaLinkedin} name="LinkedIn" url="https://www.linkedin.com/in/franco-agustin-arguello/" />
            <SocialLink Icon={FaGithub} name="GitHub" url="https://github.com/Franko42" />
            <SocialLink Icon={FaEnvelope} name="Email" url="mailto:frankoarguello42@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;