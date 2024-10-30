import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToSection from "./components/ScrollToSection";
import Resume from "./components/resume/Resume";
import Work from "./components/work/Work";
import ParticleBackground from "./components/ParticleBackground";

import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true); // CHANGE THIS BACK TO TRUE WHEN DONE TESTING!!!
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const getSectionIdFromHash = () => {
    if (location.hash) {
      return location.hash.substring(1);
    }
    return null;
  };

  return (
    <div>
      {/* Render particles throughout, even during preloading */}
      <ParticleBackground />

      {/* Show Preloader only if load is true */}
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />

          {/* Define Routes for pages */}
          <Routes>
            <Route path="/" element={
              <div className="main-container">
                <Home />
                <About />
                <Skills />
                <Work />
                <ScrollToSection sectionId={getSectionIdFromHash()} />
              </div>
            } />
            <Route path="/resume" element={<Resume />} />
            <Route path="/photography" element={<div>Photography Component</div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;