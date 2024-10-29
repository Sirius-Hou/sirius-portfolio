import React, { useEffect, useRef } from "react";
import aboutPhoto from "../../assets/Sirius_Hou_LinkedIn_Profile_Picture.png";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (photoRef.current) {
        observer.unobserve(photoRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        {/* Photo section */}
        <div className="photo-wrapper" ref={photoRef}>
          <div className="photo-background"></div>
          <img src={aboutPhoto} alt="Sirius Hou" className="about-photo" />
        </div>

        {/* Text section */}
        <div className="about-text" ref={textRef}>
          <h2 className="about-title"><strong className="blue">About</strong> Me</h2>
          <h3 className="about-subtitle">Web & App Developer</h3>
          <p className="about-description">
            I am currently a 4th-year Computer Science student at the
            University of Waterloo, specializing in AI. I have completed
            internships at Christie Digital, Ford, and Behaviour Interactive,
            where I gained hands-on experience in software engineering,
            front-end development, and UI/UX design. My key projects include
            developing a VR locomotion system using gesture recognition and a
            real-time collaborative whiteboard app for Android. I am seeking
            opportunities in web development, front-end engineering, and UI/UX
            design, where I can leverage my technical skills and design
            expertise to enhance user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;