import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


import React, { useState } from 'react';
import './styles.css';

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  }

  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section className="projects">
          <h2>My Science Projects</h2>
          <p>Here are some of my recent science projects:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section className="projects">
          <h2>My Game Projects</h2>
          <p>Here are some of my recent game projects:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section className="internship">
          <h2>My Internship Experience</h2>
          <p>Here is a summary of my past internship experience:</p>
          <ul>
            <li>Internship 1</li>
            <li>Internship 2</li>
            <li>Internship 3</li>
          </ul>
        </section>
        <section className="skills">
          <h2>My Skills</h2>
          <p>Here are some of my key skills:</p>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </section>
        <div className="button-container">
          <button className={isHovering ? "box-button hover" : "box-button"} onMouseEnter={handleHover} onMouseLeave={handleHover}>Contact Me</button>
        </div>
      </main>
      <div className="background-container">
        <div className="line-container">
          {[...Array(20)].map((_, i) => (
            <div className="line" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
