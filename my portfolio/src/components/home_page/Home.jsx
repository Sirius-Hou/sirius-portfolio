import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/logo.png";
import Particle from "../Particle";
import { Link } from 'react-router-dom';
// import Home2 from "./Home2";
import { FaGithub, FaLinkedin, FaMailBulk  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Type from "./Type";
import "./Home.css";
import profilePic from "../../assets/Sirius Hou - photo.jpg";
import "../../style.css";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> SOUMYAJIT BEHERA</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }


// function Home() {
//   return (
//     // Container for the entire home section, divided into left and right sections
//     <div className="home-container"> 
//       {/* Left section for introductory text */}
//       <div className="home-left"> 
//         {/* Introductory line: "Hello, it's Me" */}
//         <h1 className="intro-text">Hello, it's Me</h1>
//         {/* Main name text: "Sirius Hou" */}
//         <h2 className="name-text">Sirius Hou</h2>
//         {/* Container for the static text and typing animation */}
//         <div className="role-container"> 
//           {/* Static text: "And I'm a" */}
//           <span className="role-static-text">And I'm a</span>
//           {/* Typing animation component for dynamic text */}
//           <div className="type-container"> 
//             <Type />
//           </div>
//         </div>

//         {/* Brief description paragraph */}
//         <p className="description-text">
//           University of Waterloo Undergrad student <br />
//           4th-Year Computer Science | AI specialization <br />
//           Web & App Developer
//         </p>
//       </div>

//       {/* Right section for profile picture */}
//       <div className="home-right"> 
//         <img src={profilePic} alt="Sirius Hou" className="profile-pic" />
//       </div>
//     </div>
//   );
// }
function Home() {
  // Define state for hover effect
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="intro-text">Hello, it's Me</h1>
        <h2 className="name-text">Sirius Hou</h2>
        <div className="role-container">
          <span className="role-static-text">And I'm a</span>
          <div className="type-container">
            <Type />
          </div>
        </div>
        <p className="description-text">
          University of Waterloo Undergrad student <br />
          4th-Year Computer Science | AI specialization <br />
          Web & App Developer
        </p>

        {/* New division for social media logos */}
        <div className="social-buttons">
          <a
            href="https://github.com/Sirius-Hou"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sirius-hou-a40b21239/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="mailto:siriushyc@gmail.com?subject=Glad%20to%20Connect!&body=Hi%20Sirius,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AIf%20you%20have%20some%20time,%20I%20would%20like%20to%20ask%20you%20a%20few%20questions%20about%20your%20work%20and%20experience.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
            className="icon-button"
          >
            <MdEmail className="icon" />
          </a>
        </div>

        {/* View Resume Button */}
        <div className="resume-button-container">
          <Link
            to="/resume"
            className={`view-resume-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View Resume
          </Link>
        </div>


        
      </div>


      {/* Right section with photo and gradient */}
      <div className="home-right">
        {/* Gradient background layer */}
        <div className="gradient-background"></div>
        {/* Photo */}
        <img src={profilePic} alt="Sirius Hou" className="profile-pic" />
      </div>

      
    </div>
  );
}


export default Home;