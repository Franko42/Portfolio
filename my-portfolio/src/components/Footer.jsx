import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-800 border-t py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} {t("copyrightFooter")}
    </footer>
  );
};

export default Footer;
