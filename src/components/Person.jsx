import React from 'react';
import { useThemeLang } from '../context/ThemeLangContext';

const MusicBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const AnimeBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const AnimalsBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const ActivityBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const MindBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const SportsBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const GamingBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

const StyleBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    de: {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }[language];

  return (
    <div className="p-4 bg-my-custom-blue dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

// PersonInterests – centered content area with text boxes + images
const PersonInterests = () => {
  const boxes = [
    { component: <MusicBox />, image: "/images/music.jpg" },
    { component: <AnimeBox />, image: "/images/anime.jpg" },
    { component: <AnimalsBox />, image: "/images/animals.jpg" },
    { component: <ActivityBox />, image: "/images/activity.jpg" },
    { component: <MindBox />, image: "/images/mind.jpg" },
    { component: <SportsBox />, image: "/images/sports.jpg" },
    { component: <GamingBox />, image: "/images/gaming.jpg" },
    { component: <StyleBox />, image: "/images/style.jpg" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-stretch`}
        >
          <div className="w-full md:w-1/2 p-2">{box.component}</div>
          <div className="w-full md:w-1/2 p-2">
            <img src={box.image} alt={`Illustration ${index + 1}`} className="w-full h-full object-cover rounded shadow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonInterests;
