import React from 'react';
import Person from '../components/Person';

const PersonView = () => {
  return (
    <div className="min-h-screen p-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-gray-100 mb-6 text-center mt-6">
          Hobbies &amp; Interessen
        </h1>
        <Person />
      </div>
    </div>
  );
};

export default PersonView;
