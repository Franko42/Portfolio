import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
