import React from 'react';
import CV from '../components/CV';

const CVView = () => {
  return (
    <div className="bg-my-custom-blue dark:bg-gray-900 flex flex-col transition-colors duration-300">
      {/* Haupt-Inhaltsbereich */}
      <main className="flex-grow p-6">
        <CV />
      </main>
    </div>
  );
};

export default CVView;
