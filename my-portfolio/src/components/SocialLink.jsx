import { useTranslation } from "react-i18next";

function SocialLink({ Icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-gray-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      <Icon aria-hidden="true" className="text-2xl text-cyan-300 transition group-hover:scale-110" />
      <span>{name}</span>
    </a>
  );
}

export default SocialLink;
