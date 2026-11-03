import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#about", label: t("navigateAbout") },
    { href: "#projects", label: t("navigateProjects") },
    { href: "#skills", label: t("navigateSkills") },
    { href: "#contact", label: t("navigateContact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-10">
        <a
          href="#top"
          className="shrink-0 rounded-sm text-sm font-bold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Franco Argüello
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label={t("mainNavigation")}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
            aria-label={t(isOpen ? "closeMenu" : "openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-white/10 bg-gray-950 px-5 py-3 md:hidden ${isOpen ? "block" : "hidden"}`}
        aria-label={t("mainNavigation")}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/5 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
