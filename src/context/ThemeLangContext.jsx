import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeLangContext = createContext();

export const useThemeLang = () => useContext(ThemeLangContext);

export const ThemeLangProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));

  return (
    <ThemeLangContext.Provider value={{ darkMode, toggleDarkMode, language, toggleLanguage }}>
      {children}
    </ThemeLangContext.Provider>
  );
};

export const useThemeLangContext = () => useContext(ThemeLangContext);
