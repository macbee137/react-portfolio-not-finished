import React from 'react';
import Hero from '../components/Hero';
import HobbyCarousel from '../components/HobbyCarousel';

const HomeView = () => {
  return (
    <div className="w-full sm:w-4/5 mx-auto py-8">
      <div className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-lg shadow-lg">
        <Hero />
      </div>

      {/* Full-Bleed Carousel */}
      <div className="relative -mx-4 sm:-mx-8 mt-12">
        <HobbyCarousel />
      </div>
    </div>
  );
};

export default HomeView;
