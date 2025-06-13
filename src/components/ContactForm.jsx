import React from 'react';
import { useThemeLang } from '../context/ThemeLangContext';

const ContactForm = () => {
  const { language } = useThemeLang();

  const texts = {
    en: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderSubject: "Enter subject",
      placeholderMessage: "Type your message here...",
      buttonText: "Send Message"
    },
    de: {
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      placeholderName: "Gib deinen Namen ein",
      placeholderEmail: "Gib deine E-Mail ein",
      placeholderSubject: "Betreff eingeben",
      placeholderMessage: "Deine Nachricht...",
      buttonText: "Absenden"
    }
  }[language];

  return (
<form className="space-y-6">
  {/* Name */}
  <div>
    <label htmlFor="name" className="block font-semibold mb-2 text-black dark:text-white">
      {texts.name}
    </label>
    <input
      id="name"
      type="text"
      placeholder={texts.placeholderName}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
    />
  </div>
  {/* Email */}
  <div>
    <label htmlFor="email" className="block font-semibold mb-2 text-black dark:text-white">
      {texts.email}
    </label>
    <input
      id="email"
      type="email"
      placeholder={texts.placeholderEmail}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
    />
  </div>
  {/* Subject */}
  <div>
    <label htmlFor="subject" className="block font-semibold mb-2 text-black dark:text-white">
      {texts.subject}
    </label>
    <input
      id="subject"
      type="text"
      placeholder={texts.placeholderSubject}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
    />
  </div>
  {/* Message */}
  <div>
    <label htmlFor="message" className="block font-semibold mb-2 text-black dark:text-white">
      {texts.message}
    </label>
    <textarea
      id="message"
      rows="5"
      placeholder={texts.placeholderMessage}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-black dark:text-white"
    ></textarea>
  </div>
  {/* Submit Button mit extra margin-top */}
  <button
    type="submit"
    className="w-full py-3 px-6 bg-white text-black font-semibold rounded hover:bg-green-300 transition-colors duration-300 mt-6"
  >
    {texts.buttonText}
  </button>
</form>

  );
};

export default ContactForm;
