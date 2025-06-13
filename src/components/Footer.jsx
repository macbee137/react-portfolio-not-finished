import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-my-custom-blue dark:bg-gray-900 py-10 min-h-40 transition-colors duration-300">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} Dein Name. Alle Rechte vorbehalten.</p>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
