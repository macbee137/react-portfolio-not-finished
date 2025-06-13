import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";
import CVView from "./views/CVView";
import WorkExperienceView from "./views/WorkExperienceView";
import PortfolioView from "./views/PortfolioView";
import ContactView from "./views/ContactView";
import PersonView from "./views/PersonView";

import { ThemeLangProvider } from "./context/ThemeLangContext";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeLangProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <div className="h-20" />
          <main className="flex-grow bg-main dark:bg-gray-900 transition-colors duration-300">
            {/* Der Container nutzt die Layout-Komponente und hat eine max-width */}
            <div className="w-full md:w-3/4 lg:w-4/5 max-w-[1280px] mx-auto py-16 min-h-[60vh]">
              <div className="bg-white/75 dark:bg-gray-800/90 p-6 rounded-lg shadow-lg transition-colors duration-300">
                <Routes>
                  <Route path="/" element={<HomeView />} />
                  <Route path="/cv" element={<CVView />} />
                  <Route path="/person" element={<PersonView />} />
                  <Route path="/work-experience" element={<WorkExperienceView />} />
                  <Route path="/portfolio" element={<PortfolioView />} />
                  <Route path="/contact" element={<ContactView />} />
                </Routes>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeLangProvider>
  );
}

export default App;
