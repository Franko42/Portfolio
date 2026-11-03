import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 bg-gray-900 py-20" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {t("contactEyebrow")}
          </p>
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("contactTitle")}
          </h2>
          <p className="mt-3 text-gray-300">{t("contactDescription")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <SocialLink Icon={FaEnvelope} name={t("contactButton")} url="mailto:frankoarguello42@gmail.com" />
          <SocialLink Icon={FaLinkedin} name="LinkedIn" url="https://www.linkedin.com/in/franco-agustin-arguello/" />
          <SocialLink Icon={FaGithub} name="GitHub" url="https://github.com/Franko42" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
