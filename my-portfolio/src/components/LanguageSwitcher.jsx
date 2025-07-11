import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 justify-end items-center p-4 text-white">
      <button
        className={`px-2 py-1 rounded hover:underline ${i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <h1 className="pb-1 font-bold">|</h1>
      <button
        className={`px-2 py-1 hover:underline rounded ${i18n.language === "es" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
    </div>
  );
}
