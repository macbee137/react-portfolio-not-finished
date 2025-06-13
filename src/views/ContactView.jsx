import React from 'react';
import ContactForm from '../components/ContactForm';
import { useThemeLang } from '../context/ThemeLangContext';

function ContactView() {
  const { language } = useThemeLang();

  const textContent = {
    en: {
      heading: "Contact",
      info: "Feel free to reach out if you have any questions, collaboration ideas, or simply want to say hello. I'll get back to you as soon as possible."
    },
    de: {
      heading: "Kontakt",
      info: "Wenn du Fragen hast, Ideen für eine Zusammenarbeit oder einfach nur Hallo sagen möchtest, kannst du dich gerne melden. Ich melde mich so schnell wie möglich bei dir."
    }
  }[language];

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Überschrift */}
      <h2 className="text-4xl font-bold text-black dark:text-white mb-6 text-center">
        {textContent.heading}
      </h2>

      {/* Infobox */}
      <div className="bg-my-custom-blue dark:bg-gray-800 p-4 mb-8 rounded text-black dark:text-white transition-colors duration-300">
        <p>{textContent.info}</p>
      </div>

      {/* Kontaktformular-Container */}
      <div className="p-4 rounded shadow-lg bg-my-custom-blue dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactView;
