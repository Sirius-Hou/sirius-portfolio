import React from 'react';
import './Projects.css';
import VRImage from '../../assets/projects/VR.png';
import YADAImage from '../../assets/projects/YADA.png';
import CC3KImage from '../../assets/projects/CC3K.png';
import UWCSImage from '../../assets/projects/UWCS.png';
import WLP4Image from '../../assets/projects/WLP4.png';





const Projects = () => {
  const projects = [
    { id: 1, image: VRImage },
    { id: 2, image: YADAImage },
    { id: 3, image: CC3KImage },
    { id: 4, image: UWCSImage },
    { id: 5, image: WLP4Image },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="title">My <strong className="blue">Projects</strong></h2>
      </div>
      <div className="projects-wrapper">
        <div className="projects-items">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projects-item"
              style={{ backgroundImage: `url(${project.image})` }}
              tabIndex="1"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
