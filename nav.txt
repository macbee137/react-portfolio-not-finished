import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useThemeLang } from "../context/ThemeLangContext";
import "../ThemeSwitch.css";

const Nav = () => {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useThemeLang();
  const [isOpen, setIsOpen] = useState(false);

  // Flaggen-Emojis
  const enFlag = (
    <span role="img" aria-label="English">
      🇬🇧
    </span>
  );
  const deFlag = (
    <span role="img" aria-label="German">
      🇩🇪
    </span>
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation-Links mit Übersetzungen
  const navLinks = [
    { path: "/", en: "Home", de: "Startseite" },
    { path: "/cv", en: "CV", de: "Lebenslauf" },
    { path: "/person", en: "Person", de: "Person" },
    { path: "/portfolio", en: "Portfolio", de: "Portfolio" },
    { path: "/work-experience", en: "Work Experience", de: "Arbeitserfahrung" },
    { path: "/contact", en: "Contact", de: "Kontakt" }
  ];

  // Dynamische Klassen für NavLinks
  const linkClasses = ({ isActive }) =>
    isActive
      ? "hover:text-gray-200 text-gray-200 border-b-2 border-gray-200 pb-1"
      : "hover:text-black dark:hover:text-gray-200 text-black dark:text-gray-200";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-sm
        transition-colors duration-300
        bg-my-custom-blue/80 text-black
        dark:bg-gray-900 dark:text-white
      `}
    >
      <div className="container mx-auto px-4 flex items-center h-20">
        {/* Brand */}
        <div className="mr-auto">
          <h1 className="text-2xl font-bold">MACBEE.DEV</h1>
        </div>

        {/* Desktop-Navigation (zentriert, ab lg) */}
        <div className="hidden lg:flex space-x-6 text-lg mx-auto">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} className={linkClasses}>
              {language === "en" ? link.en : link.de}
            </NavLink>
          ))}
        </div>

        {/* Desktop-Toggles (rechts, ab lg) */}
        <div className="hidden lg:flex items-center ml-auto space-x-3">
          {/* Fancy Theme Switch */}
          <label className="switch" aria-label="Toggle Dark Mode">
            <input
              type="checkbox"
              checked={!darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider">
              <div className="star star_1"></div>
              <div className="star star_2"></div>
              <div className="star star_3"></div>
              <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                <path
                  transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                  fill="#fff"
                  d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                ></path>
              </svg>
            </span>
          </label>

          {/* Language Button: aktiver Sprachmodus */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Language"
          >
            {language === "en" ? enFlag : deFlag}
          </button>
        </div>

        {/* Mobile: Burger-Button (nur sichtbar < lg) */}
        <button
          className="lg:hidden text-black dark:text-white focus:outline-none ml-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile-Menü (unterhalb, sichtbar < lg) */}
      <div
        className={`
          lg:hidden shadow-md backdrop-blur-sm transition-colors duration-300
          ${darkMode ? "bg-gray-900 text-white" : "bg-my-custom-blue/95 text-black"}
          ${isOpen ? "block" : "hidden"}
        `}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-lg">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={toggleMenu}
              className={linkClasses}
            >
              {language === "en" ? link.en : link.de}
            </NavLink>
          ))}
          {/* Mobile: Fancy Switch + Language */}
          <div className="flex items-center space-x-4">
            <label className="switch" aria-label="Toggle Dark Mode">
              <input
                type="checkbox"
                checked={!darkMode}
                onChange={() => {
                  toggleDarkMode();
                  toggleMenu();
                }}
              />
              <span className="slider">
                <div className="star star_1"></div>
                <div className="star star_2"></div>
                <div className="star star_3"></div>
                <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                  <path
                    transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                    fill="#fff"
                    d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                  ></path>
                </svg>
              </span>
            </label>

            <button
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Language"
            >
              {language === "en" ? enFlag : deFlag}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
