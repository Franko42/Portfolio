import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 justify-end items-center p-4 text-white">
      <button
        className={`px-2 py-1 rounded hover:underline cursor-pointer ${i18n.language === "en" ? "font-bold" : "text-white"}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <h1 className="pb-1 font-bold">|</h1>
      <button
        className={`px-2 py-1 hover:underline rounded cursor-pointer ${i18n.language === "es" ? "font-bold" : "text-white"}`}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
    </div>
  );
}
