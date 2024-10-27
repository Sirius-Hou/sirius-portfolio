import { useState, useEffect } from 'react'
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home_page/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import Resume from "./components/Resume/ResumeNew";
import ParticleBackground from "./components/ParticleBackground";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // return (
  //   <div>
  //     <ParticleBackground />
  //     <Router>
  //       {/* <Preloader load={load} /> */}
  //       <div className="App" id={load ? "no-scroll" : "scroll"}>
  //         <Preloader load={load} />
  //         <Navbar />
  //         <ScrollToTop />
  //         <div className="main-container">
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             {/* <Route path="/project" element={<Projects />} />
  //             <Route path="/about" element={<About />} />
  //             <Route path="/resume" element={<Resume />} /> */}
  //             <Route path="*" element={<Navigate to="/" />} />
  //           </Routes>
  //         </div>
  //         <Footer />
  //       </div>
  //     </Router>
  //   </div>
  // );
  return (
    <div>
      {/* Render particles throughout, even during preloading */}
      <ParticleBackground />
      
      {/* Show Preloader only if load is true */}
      {load ? (
        <Preloader load={load} />
      ) : (
        <Router>
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <div className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                {/* <Route path="/project" element={<Projects />} />
  //             <Route path="/about" element={<About />} />
  //             <Route path="/resume" element={<Resume />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}


export default App
