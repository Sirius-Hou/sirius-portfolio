import React, { useEffect, useRef } from "react";
import "../../style.css";

// Import icons for skills
import CplusplusOriginal from "react-devicons/cplusplus/original";
import COriginal from "react-devicons/c/original";
import CsharpOriginal from "react-devicons/csharp/original";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import KotlinOriginalWordmark from "react-devicons/kotlin/original-wordmark";
import JavaOriginalWordmark from "react-devicons/java/original-wordmark";
import TypescriptOriginal from "react-devicons/typescript/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import MarkdownOriginal from "react-devicons/markdown/original";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";

import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import NextjsOriginal from "react-devicons/nextjs/original";
import BootstrapOriginal from "react-devicons/bootstrap/original";
import MaterialuiOriginal from "react-devicons/materialui/original";
import FoundationOriginal from "react-devicons/foundation/original";

import UnrealengineOriginal from "react-devicons/unrealengine/original";
import UnityOriginal from "react-devicons/unity/original";
import MatlabOriginal from "react-devicons/matlab/original";
import AndroidstudioOriginal from "react-devicons/androidstudio/original";
import GitOriginal from "react-devicons/git/original";
import GithubOriginal from "react-devicons/github/original";
import JiraOriginal from "react-devicons/jira/original";
import VscodeOriginal from "react-devicons/vscode/original";
import VisualstudioPlain from "react-devicons/visualstudio/plain";
import DockerOriginal from "react-devicons/docker/original";
import LatexOriginal from "react-devicons/latex/original";

import FigmaOriginal from "react-devicons/figma/original";
import CanvaOriginal from "react-devicons/canva/original";

const Skills = () => {
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  

  return (
    <div id="skills" className="skills-section" ref={skillsRef}>
      {/* Section Title */}
      <h2 className="skills-title">My <strong className="blue">Skills</strong></h2>
      
      {/* Programming Languages */}
      <div className="skills-category">
        <h3 className="category-title">Programming Languages</h3>
        <div className="skills-container">

          <div className="skill-item">
            <div className="skill-logo">
              <CplusplusOriginal size={40} />
            </div>
            <p className="skill-name">C++</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <CsharpOriginal size={40} />
            </div>
            <p className="skill-name">C#</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <COriginal size={40} />
            </div>
            <p className="skill-name">C</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <PythonOriginalWordmark size={40} />
            </div>
            <p className="skill-name">Python</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <KotlinOriginalWordmark size={40} />
            </div>
            <p className="skill-name">Kotlin</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <JavaOriginalWordmark size={40} />
            </div>
            <p className="skill-name">Java</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <TypescriptOriginal size={40} />
            </div>
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <JavascriptOriginal size={40} />
            </div>
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <MarkdownOriginal size={40} />
            </div>
            <p className="skill-name">Markdown</p>
          </div>
          
          <div className="skill-item">
            <div className="skill-logo">
              <Html5Original size={40} />
            </div>
            <p className="skill-name">HTML</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <Css3Original size={40} />
            </div>
            <p className="skill-name">CSS</p>
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="skills-category">
        <h3 className="category-title">Frameworks & Libraries</h3>
        <div className="skills-container">
          <div className="skill-item">
            <div className="skill-logo">
              <ReactOriginalWordmark size={40} />
            </div>
            <p className="skill-name">React</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <NodejsOriginalWordmark size={40} />
            </div>
            <p className="skill-name">Node.js</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <NextjsOriginal size={40} />
            </div>
            <p className="skill-name">Next.js</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <img src="https://devicon-website.vercel.app/api/tailwindcss/plain.svg" alt="Tailwind CSS" style={{ width: '40px', height: '40px' }} />
            </div>
            <p className="skill-name">Tailwind CSS</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <BootstrapOriginal size={40} />
            </div>
            <p className="skill-name">Bootstrap</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <MaterialuiOriginal size={40} />
            </div>
            <p className="skill-name">Material UI</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <FoundationOriginal  size={40} />
            </div>
            <p className="skill-name">Foundation</p>
          </div>
        </div>
      </div>

      {/* Dev Tools & Platforms */}
      <div className="skills-category">
        <h3 className="category-title">Dev & Design Tools & Platforms</h3>
        <div className="skills-container">
          <div className="skill-item">
            <div className="skill-logo">
              <UnrealengineOriginal size={40} />
            </div>
            <p className="skill-name">Unreal Engine</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <UnityOriginal size={40} />
            </div>
            <p className="skill-name">Unity</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <MatlabOriginal size={40} />
            </div>
            <p className="skill-name">Matlab</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <AndroidstudioOriginal size={40} />
            </div>
            <p className="skill-name">Android Studio</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <GitOriginal size={40} />
            </div>
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <GithubOriginal size={40} />
            </div>
            <p className="skill-name">GitHub</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <JiraOriginal size={40} />
            </div>
            <p className="skill-name">Jira</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <VscodeOriginal size={40} />
            </div>
            <p className="skill-name">VS Code</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <VisualstudioPlain size={40} />
            </div>
            <p className="skill-name">Visual Studio</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <DockerOriginal size={40} />
            </div>
            <p className="skill-name">Docker</p>
          </div>
          <div className="skill-item">
            <div className="skill-logo">
              <LatexOriginal size={40} />
            </div>
            <p className="skill-name">LaTeX</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <FigmaOriginal size={40} />
            </div>
            <p className="skill-name">Figma</p>
          </div>

          <div className="skill-item">
            <div className="skill-logo">
              <CanvaOriginal size={40} />
            </div>
            <p className="skill-name">Canva</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;