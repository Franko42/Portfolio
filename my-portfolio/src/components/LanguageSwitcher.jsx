import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage?.split("-")[0] || i18n.language.split("-")[0];

  return (
    <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1" aria-label={t("languageLabel")}>
      {[
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ].map(({ code, label }) => (
        <button
          key={code}
          type="button"
          aria-pressed={activeLanguage === code}
          onClick={() => i18n.changeLanguage(code)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
            activeLanguage === code
              ? "bg-cyan-300 text-gray-950"
              : "text-gray-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
