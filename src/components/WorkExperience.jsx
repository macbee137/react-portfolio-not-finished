import React from 'react';
import { useThemeLang } from '../context/ThemeLangContext';

const WorkExperience = () => {
  const { language } = useThemeLang();

  const headings = {
    en: 'My Work Experiences',
    de: 'Meine Arbeitserfahrungen'
  };

    const experiences = [
        {
            id: 1,
            title: {
                en: 'Apprenticeship as Application Developer at Coders.Bay / BBRZ Kapfenberg',
                de: 'Lehre als Anwendungsentwickler bei Coders.Bay / BBRZ Kapfenberg'
            },
            date: {
                en: 'Sept. 2023 - ongoing',
                de: 'Sept. 2023 - aktuell'
            },
            description: {
                en: `I am currently undertaking an apprenticeship as an Application Developer, with a focus on PHP, webshop design, and databases.
This program encompasses a broad range of key areas in software development, including Java, JavaScript and various frameworks.
An integral part of my training involves enhancing my skills in mathematics and English, which are crucial for this field.
Additionally, I am acquiring foundational knowledge in operating systems, with a specific emphasis on Linux.
This apprenticeship is providing me with a comprehensive understanding and hands-on experience in the realms of web and application development.`,
                de: `Ich absolviere derzeit eine Lehre als Anwendungsentwickler mit Schwerpunkt auf PHP, Webshop-Design und Datenbanken.
Dieses Programm umfasst eine breite Palette von Schlüsselbereichen der Softwareentwicklung, einschließlich Java, JavaScript und verschiedener Frameworks.
Ein wesentlicher Bestandteil meiner Ausbildung besteht darin, meine Fähigkeiten in Mathematik und Englisch zu verbessern, die für dieses Gebiet von großer Bedeutung sind.
Darüber hinaus erwerbe ich grundlegende Kenntnisse in Betriebssystemen, mit besonderem Fokus auf Linux.
Diese Ausbildung vermittelt mir ein umfassendes Verständnis und praktische Erfahrungen in den Bereichen Web- und Anwendungsentwicklung.`
            }
        },
        {
            id: 2,
            title: {
                en: 'Professional Reorientation at BBRZ Liezen',
                de: 'Berufliche Neuorientierung beim BBRZ Liezen'
            },
            date: {
                en: 'May 2023 - Sept. 2023',
                de: 'Mai 2023 - Sept. 2023'
            },
            description: {
                en: `At BBRZ Liezen, I underwent a process of professional reorientation, which included conducting several assessments
to understand my skills and interests better. This experience was enriching in terms of personal development,
as it provided me with insights into my capabilities and future career possibilities. Furthermore, I was presented
with the opportunity to pursue training in the field of application development and coding. This part of my journey
was crucial in broadening my skill set and opening new career paths in the ever-evolving tech industry.`,
                de: `Beim BBRZ Liezen habe ich mich einer beruflichen Neuorientierung unterzogen, die mehrere Assessments umfasste,
um meine Fähigkeiten und Interessen besser zu verstehen. Diese Erfahrung war in Bezug auf meine persönliche Entwicklung
sehr bereichernd, da sie mir Einblicke in meine Kompetenzen und zukünftigen Karrieremöglichkeiten verschaffte. Außerdem
erhielt ich die Möglichkeit, eine Ausbildung im Bereich Anwendungsentwicklung und Programmierung zu absolvieren. Dieser Teil
meiner Reise war entscheidend, um meine Fähigkeiten zu erweitern und neue Karrierewege in der sich ständig weiterentwickelnden
Tech-Branche zu eröffnen.`
            }
        },
        {
            id: 3,
            title: {
                en: 'Work Training in Laundry and Ironing Service in Liezen',
                de: 'Arbeitstraining in einer Wäscherei und Bügelservice in Liezen'
            },
            date: {
                en: 'Feb. 2022 - May 2023',
                de: 'Feb. 2022 - Mai 2023'
            },
            description: {
                en: `In my position at the laundry and ironing service, my duties encompassed a range of responsibilities.
These included receiving goods, creating internal work orders, attending to and processing payments from customers,
as well as picking up and delivering items. I was also in charge of quality control, ensuring high standards were met,
and writing delivery notes. During my time there, I gained valuable experience in a leadership role, overseeing various
aspects of the operation and guiding the team towards efficient and effective service delivery.`,
                de: `In meiner Position in der Wäscherei und im Bügelservice umfassten meine Aufgaben ein breites Spektrum an Verantwortlichkeiten.
Dazu gehörten das Entgegennehmen von Waren, das Erstellen interner Arbeitsaufträge, die Betreuung von Kunden und die Abwicklung
von Zahlungen sowie das Abholen und Liefern von Artikeln. Außerdem war ich für die Qualitätskontrolle zuständig, um hohe Standards
zu gewährleisten, und verfasste Lieferscheine. Während meiner Zeit dort sammelte ich wertvolle Erfahrungen in einer Führungsrolle,
indem ich verschiedene Aspekte des Betriebs beaufsichtigte und das Team zu effizientem und effektivem Arbeiten anleitete.`
            }
        },
        {
            id: 4,
            title: {
                en: 'Forklift Driver at Admonter Holzböden in Admont',
                de: 'Staplerfahrer bei Admonter Holzböden in Admont',
            },
            date: {
                en: 'April 2020 – Feb. 2021',
                de: 'April 2020 – Feb. 2021',
            },
            description: {
                en: `In my position as a Forklift Driver at Admonter Holzböden, my responsibilities included delivering materials
  to production machines, managing the logistical flow of finished products, and organizing production processes.
  This role required a careful coordination to ensure a steady supply of materials to production areas while also handling
  the movement and storage of final products, maintaining efficiency and order in the production workflow.`,
                de: `In meiner Position als Staplerfahrer bei Admonter Holzböden umfassten meine Aufgaben das Anliefern von Materialien
  an die Produktionsmaschinen, die logistische Abwicklung fertiger Produkte sowie die Organisation von Produktionsprozessen.
  Diese Rolle erforderte eine sorgfältige Koordination, um einen stetigen Materialfluss in die Produktionsbereiche sicherzustellen
  und gleichzeitig die Lagerung und den Transport der Endprodukte zu verwalten, wodurch Effizienz und Ordnung im Produktionsablauf
  gewahrt blieben.`,
            },
        },
        {
            id: 5,
            title: {
                en: 'Order Picker at Knauf GmbH in Weissenbach/Liezen',
                de: 'Kommissionierer bei Knauf GmbH in Weissenbach/Liezen',
            },
            date: {
                en: 'Sept. 2019 – March 2020',
                de: 'Sept. 2019 – März 2020',
            },
            description: {
                en: `As an order picker, my primary responsibility was to manage and fulfill orders in a distribution center.
  This involved locating products, ensuring they are the correct items and quantities, packing them for shipment,
  and possibly managing inventory.`,
                de: `Als Kommissionierer bestand meine Hauptaufgabe darin, Bestellungen in einem Vertriebszentrum zusammenzustellen und zu bearbeiten.
  Dazu gehörte das Auffinden der Produkte, das Prüfen auf Richtigkeit von Artikeln und Mengen, das Verpacken für den Versand sowie gegebenenfalls
  die Verwaltung des Lagerbestands.`,
            },
        },
        {
            id: 6,
            title: {
                en: 'Metal Technician at CUT Technik in Liezen',
                de: 'Metalltechniker bei CUT Technik in Liezen',
            },
            date: {
                en: 'July 2018 – June 2019',
                de: 'Juli 2018 – Juni 2019',
            },
            description: {
                en: `Similar to your previous role as a metal technician, this position focused on working with metal components,
  involving precision cutting, shaping, and assembly of parts.
  This included reading blueprints, operating machinery, and ensuring quality control.`,
                de: `Ähnlich wie bei Ihrer vorherigen Tätigkeit als Metalltechniker konzentrierte sich diese Position auf die Arbeit mit Metallkomponenten,
  einschließlich präzisem Schneiden, Formen und Zusammenbauen von Teilen.
  Dazu gehörte das Lesen von Konstruktionszeichnungen, das Bedienen von Maschinen und die Qualitätssicherung.`,
            },
        },
        {
            id: 7,
            title: {
                en: 'Metal Technician at AHT Cooling Systems in Rottenmann',
                de: 'Metalltechniker bei AHT Cooling Systems in Rottenmann',
            },
            date: {
                en: 'Jan. 2014 – July 2018',
                de: 'Jan. 2014 – Juli 2018',
            },
            description: {
                en: `In my position at AHT Cooling Systems, my main tasks included fabricating metal parts for assembling cooling devices.
  I was responsible for conducting quality checks and testing new parts as prototypes,
  integrating them into the production process. Additionally, for several months, I worked abroad as an assembly worker,
  where I specialized in the mechanical repair of cooling devices, ensuring they functioned effectively and met our high standards.`,
                de: `In meiner Position bei AHT Cooling Systems gehörte die Herstellung von Metallteilen für den Zusammenbau von Kühlgeräten
  zu meinen Hauptaufgaben. Ich war verantwortlich für die Durchführung von Qualitätskontrollen und das Testen neuer Teile als Prototypen,
  die anschließend in den Produktionsprozess integriert wurden. Außerdem war ich mehrere Monate im Ausland als Monteur tätig und
  spezialisierte mich auf die mechanische Reparatur von Kühlgeräten, um sicherzustellen, dass sie effektiv funktionierten und unseren
  hohen Standards entsprachen.`,
            },
        },
        {
            id: 8,
            title: {
                en: 'Mechanical Engineering Technician at MARK Metallwarenfabrik in Spital/Pyhrn',
                de: 'Maschinenbautechniker bei MARK Metallwarenfabrik in Spital/Pyhrn',
            },
            date: {
                en: 'July 2013 – Dec. 2013',
                de: 'Juli 2013 – Dez. 2013',
            },
            description: {
                en: `As a Mechanical Engineering Technician, my primary responsibilities included the maintenance, repair,
  and servicing of machinery. This role demanded a thorough understanding of various types of mechanical systems
  and the ability to troubleshoot effectively.`,
                de: `Als Maschinenbautechniker umfassten meine Hauptaufgaben die Wartung, Reparatur und Instandhaltung von Maschinen.
  Diese Rolle verlangte ein fundiertes Verständnis verschiedener Arten von mechanischen Systemen sowie die Fähigkeit,
  Probleme effektiv zu beheben.`,
            },
        },
        {
            id: 9,
            title: {
                en: 'Tool Mechanic at MACO Produktions GmbH in Trieben',
                de: 'Werkzeugmechaniker bei MACO Produktions GmbH in Trieben',
            },
            date: {
                en: 'July 2011 – July 2013',
                de: 'Juli 2011 – Juli 2013',
            },
            description: {
                en: `As a tool mechanic, my role involved constructing, maintaining, and repairing precision tools
  and machinery used in manufacturing. This included tasks like setting up machines, ensuring they operate
  correctly, and troubleshooting any issues.`,
                de: `Als Werkzeugmechaniker war ich für die Konstruktion, Wartung und Reparatur von Präzisionswerkzeugen
  und Maschinen zuständig, die in der Fertigung eingesetzt wurden. Dazu gehörten Aufgaben wie das Einrichten von Maschinen,
  das Sicherstellen eines reibungslosen Betriebs und das Beheben von Störungen.`,
            },
        },
        {
            id: 10,
            title: {
                en: 'Apprenticeship as Tool Mechanic, at MACO Produktions GmbH in Trieben',
                de: 'Lehre als Werkzeugmechaniker bei MACO Produktions GmbH in Trieben',
            },
            date: {
                en: 'Sept. 2007 – July 2011',
                de: 'Sept. 2007 – Juli 2011',
            },
            description: {
                en: `The apprenticeship as a Tool Mechanic involves comprehensive training in handling metals and mastering various techniques
  such as filing, drilling, turning, milling, grinding, and more. It focuses on the assembly and maintenance of precision tools.
  The program equips apprentices with the skills needed to precisely shape metal components and create tools that meet exact specifications.
  It also involves learning how to keep these tools in optimal condition through regular maintenance and repairs, ensuring they function
  efficiently and accurately in various industrial and manufacturing settings.`,
                de: `Die Lehre zum Werkzeugmechaniker umfasst eine umfassende Ausbildung im Umgang mit Metallen und das Erlernen verschiedener Techniken
  wie Feilen, Bohren, Drehen, Fräsen, Schleifen und mehr. Der Schwerpunkt liegt auf der Montage und Wartung von Präzisionswerkzeugen.
  Das Programm vermittelt den Lehrlingen die Fähigkeiten, Metallkomponenten präzise zu bearbeiten und Werkzeuge herzustellen, die genauen
  Spezifikationen entsprechen. Außerdem lernen sie, diese Werkzeuge durch regelmäßige Wartung und Reparaturen in optimalem Zustand zu halten,
  um sicherzustellen, dass sie in verschiedenen industriellen und Fertigungsumgebungen effizient und präzise funktionieren.`,
            },
        },
    ];

    return (
        <div className="w-full px-2 py-6 md:px-6 md:py-6">
          {/* Überschrift */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-gray-900 dark:text-gray-100">
              {headings[language]}
            </h1>
          </div>
        
          {/* Timeline */}
          <ul className="relative border-l border-gray-200 dark:border-gray-600">
            {experiences.map((exp) => (
              <li key={exp.id} className="relative mb-10 pl-8">
                <span
                  className="
                    absolute top-2 left-0 flex items-center justify-center
                    w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white -translate-x-1/2
                  "
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.title[language]}
                </h4>
                <span className="mt-2 text-base font-medium text-blue-700 dark:text-blue-400 block">
                  {exp.date[language]}
                </span>
                <div className="mt-3 text-gray-700 dark:text-gray-300">
                  {exp.description[language].split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default WorkExperience;
