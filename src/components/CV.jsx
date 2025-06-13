import React from 'react';
import { useThemeLang } from '../context/ThemeLangContext';

//
// Box 1: Person
//
const PersonBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Person',
      name: 'Name: Marco Baumann',
      age: 'Age: 31',
      gender: 'Gender: Male',
      country: 'Austria',
      email: 'E-mail:'
    },
    de: {
      title: 'Person',
      name: 'Name: Marco Baumann',
      age: 'Alter: 31',
      gender: 'Geschlecht: Männlich',
      country: 'Österreich',
      email: 'E-Mail:'
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <p>{t.name}</p>
      <p>{t.age}</p>
      <p>{t.gender}</p>
      <p>{t.country}</p>
      <p>
        {t.email}{' '}
        <a
          href="mailto:marcobau9@hotmail.com"
          className="text-blue-600 dark:text-blue-400"
        >
          marcobau9@hotmail.com
        </a>
      </p>
    </div>
  );
};

//
// Box 2: Job
//
const JobBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Job',
      current: 'Current Job: Apprentice Application Developer (since 2023)',
      job1: 'Vocational Training 1: Tool Mechanic (2007–2023)',
      job2: 'Web Developer'
    },
    de: {
      title: 'Job',
      current: 'Aktueller Job: Lehrling Applikationsentwickler (seit 2023)',
      job1: 'Lehrberuf 1: Werkzeugmechaniker (2007–2023)',
      job2: 'Web-Entwickler'
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <p className="mb-1">{t.current}</p>
      <p className="mb-1">{t.job1}</p>
      <p>{t.job2}</p>
    </div>
  );
};

//
// Box 3: Career (Beruflicher Werdegang)
//
const CareerBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Career Path',
      text: 'Many years of experience in industrial companies, especially in technical implementation and process handling. Various positions in metal technology, production and logistics (in the Liezen area).'
    },
    de: {
      title: 'Beruflicher Werdegang',
      text: 'Langjährige Erfahrung in industriellen Unternehmen, insbesondere in der technischen Umsetzung und Prozessabwicklung. Diverse Arbeitsstellen in Metalltechnik, Produktion und Logistik (Raum Liezen).'
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <p>{t.text}</p>
    </div>
  );
};

//
// Box 4: Soft Skills
//
const SoftSkillsBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Soft Skills',
      skills: [
        'Analytical Thinking',
        'Willingness to Learn',
        'Problem-Solving Orientation',
        'Teamwork',
        'Flexibility'
      ]
    },
    de: {
      title: 'Soft Skills',
      skills: [
        'Analytisches Denken',
        'Lernbereitschaft',
        'Problemlösungsorientierung',
        'Teamfähigkeit',
        'Flexibilität'
      ]
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <ul className="list-disc list-inside">
        {t.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

//
// Box 5: Qualifications (Sonstige Qualifikationen)
//
const QualificationsBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Other Qualifications',
      items: [
        'Driver License B (since 2010)',
        'Forklift Certificate (since 2014)',
        'Good English skills'
      ]
    },
    de: {
      title: 'Sonstige Qualifikationen',
      items: [
        'Führerschein B (seit 2010)',
        'Staplerschein (seit 2014)',
        'Gute Englischkenntnisse'
      ]
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <ul className="list-disc list-inside">
        {t.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

//
// Box 6: Languages & Frameworks (Sprachen & Frameworks)
//
const LanguagesBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: { title: 'Languages & Frameworks' },
    de: { title: 'Sprachen & Frameworks' }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      {/* Beispiel-Progressbars */}
      <div className="mb-4">
        <span className="font-bold">PHP</span>
        <div className="relative bg-gray-200 dark:bg-gray-600 rounded h-5 mt-1">
          <div className="bg-green-500 h-5 rounded" style={{ width: '60%' }}></div>
          <span className="absolute right-2 top-0 text-white text-sm">60%</span>
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold">JavaScript</span>
        <div className="relative bg-gray-200 dark:bg-gray-600 rounded h-5 mt-1">
          <div className="bg-green-500 h-5 rounded" style={{ width: '70%' }}></div>
          <span className="absolute right-2 top-0 text-white text-sm">70%</span>
        </div>
      </div>
      <div className="mb-4">
        <span className="font-bold">Python</span>
        <div className="relative bg-gray-200 dark:bg-gray-600 rounded h-5 mt-1">
          <div className="bg-green-500 h-5 rounded" style={{ width: '50%' }}></div>
          <span className="absolute right-2 top-0 text-white text-sm">50%</span>
        </div>
      </div>
    </div>
  );
};

//
// Box 7: Programming Skills (Programmierkenntnisse)
//
const ProgrammingBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Programming Skills',
      items: [
        'Frameworks / Libraries: Laravel, React, TailwindCSS',
        'Tools: GitHub, ChatGPT and other AI tools',
        'Operating Systems: Windows, Linux (Ubuntu/Mint)',
        'Databases: Oracle, MySQL',
        'Design Patterns: Singleton, Observer, Builder',
        'Clean Code: KISS, DRY, Open-Closed'
      ]
    },
    de: {
      title: 'Programmierkenntnisse',
      items: [
        'Frameworks / Libraries: Laravel, React, TailwindCSS',
        'Tools: GitHub, ChatGPT und weitere KI-Tools',
        'Betriebssysteme: Windows, Linux (Ubuntu/Mint)',
        'Datenbanken: Oracle, MySQL',
        'Design Patterns: Singleton, Observer, Builder',
        'Clean Code: KISS, DRY, Open-Closed'
      ]
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <ul className="list-disc list-inside">
        {t.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

//
// Box 8: Codersbay Training (Ausbildung Codersbay)
//
const CodersbayBox = () => {
  const { language } = useThemeLang();
  const t = {
    en: {
      title: 'Codersbay Training',
      items: [
        'Programming Languages: PHP, Java',
        'Mathematics: Logic, computing calculations',
        'Project Management: Agile methods, planning and execution',
        'English: IT-specific language and communication',
        'Project Specialization: Planning and implementing web-based software solutions',
        'Databases: Modeling and SQL queries with Oracle and MySQL'
      ]
    },
    de: {
      title: 'Ausbildung Codersbay',
      items: [
        'Programmiersprachen: PHP, Java',
        'Mathematik: Logik, Berechnungen in der Informatik',
        'Projektmanagement: Agile Methoden, Planung und Durchführung',
        'Englisch: Fachsprache in IT und Kommunikation',
        'Projektspezialisierung: Planung und Umsetzung von Softwarelösungen im Webbereich',
        'Datenbanken: Modellierung und SQL-Abfragen mit Oracle und MySQL'
      ]
    }
  }[language];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow transition-colors duration-300 dark:text-gray-200">
      <h2 className="font-bold text-lg mb-2">{t.title}</h2>
      <ul className="list-disc list-inside">
        {t.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

//
// Haupt-CV-Komponente
//
const CV = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Box 1 */}
      <PersonBox />

      {/* Box 2 */}
      <JobBox />

      {/* Box 3 (Career) – über beide Spalten */}
      <div className="md:col-span-2">
        <CareerBox />
      </div>

      {/* Box 4 */}
      <SoftSkillsBox />

      {/* Box 5 */}
      <QualificationsBox />

      {/* Box 6 (Languages & Frameworks) – über beide Spalten */}
      <div className="md:col-span-2">
        <LanguagesBox />
      </div>

      {/* Box 7 */}
      <ProgrammingBox />

      {/* Box 8 */}
      <CodersbayBox />
    </div>
  );
};

export default CV;
