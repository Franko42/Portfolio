import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";

const updateDocumentMetadata = (language = i18n.resolvedLanguage || i18n.language) => {
  const locale = language?.toLowerCase().startsWith("es") ? "es" : "en";
  document.documentElement.lang = locale;
  document.title = i18n.t("pageTitle", { lng: locale });

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = i18n.t("metaDescription", { lng: locale });
  }
};

updateDocumentMetadata();
i18n.on("languageChanged", updateDocumentMetadata);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
