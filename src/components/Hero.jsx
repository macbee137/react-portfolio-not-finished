import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 py-8 lg:py-12">
        {/* Linke Spalte (Bild) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="bg-my-custom-blue rounded p-4">
            <img
              src="/images/king3.webp"
              alt="Portrait"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-none lg:max-w-lg h-auto"
            />
          </div>
        </div>

        {/* Rechte Spalte (Text + Steckbrief) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Marco
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Programmierer / Web-Entwickler
          </h2>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed max-w-md mb-6">
            Hier könntest du einen kurzen Einleitungstext unterbringen:
            Was dich ausmacht, wofür du brennst oder was Besucher
            auf deiner Seite erwarten können.
          </p>

          {/* Steckbrief-Placeholder */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 shadow-sm w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Steckbrief
            </h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong>Name:</strong> Marco</li>
              <li><strong>Job:</strong> Web-Entwickler</li>
              <li><strong>Herkunft:</strong> Österreich</li>
              <li><strong>Alter:</strong> 25 Jahre</li>
              <li><strong>Hobbys:</strong> Musik, Wandern, Programmieren</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
