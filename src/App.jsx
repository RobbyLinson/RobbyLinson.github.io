import React from 'react';
import './index.css';
import Widget from './components/Widget';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Robby from './assets/Robby.png';
import TCD from './assets/TCD-Logo.png';

function App() {
  return (
    <div className="container">
      <div className="widget-grid">
        {/* Social Icons*/}
        <Widget
          widthUnits={0.1}
          heightUnits={1}
          row={1}
          col={1}
          className="social-widget"
        >
          <div className="social-icons">
            <a
              href="https://github.com/RobbyLinson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/robby-linson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:RobbyLinson@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </Widget>
        {/* About Me*/}
        <Widget
          widthUnits={0.9}
          heightUnits={0.8}
          row={1}
          col={2}
          className="about-widget"
        >
          <h1>Robby Linson</h1>
          <h2>About Me</h2>
          <ul className="about-list">
            <li>
              I am a Computer Science student passionate about working hard and
              making an impact.
            </li>
            <li>
              I have experience in Data Science, Research and Software
              Development.
            </li>
            <li>I will complete an M.Sc in Computer Science in August 2026.</li>
          </ul>
        </Widget>

        {/* Profile Picture */}
        <Widget
          widthUnits={0.5}
          heightUnits={1.5}
          row={2}
          col={1}
          className="profile-widget"
        >
          <img src={Robby} alt="Me!" className="profile-picture" />
        </Widget>

        {/* Education */}
        <Widget
          widthUnits={0.5}
          heightUnits={1}
          row={2}
          col={7}
          className="education-widget"
        >
          <h2>Education</h2>
          <div className="edu-header">
            <h3>Trinity College Dublin</h3>
            <img src={TCD} alt="College Logo" className="college-logo" />
          </div>
          <div className="edu-details">
            <div className="edu-item">
              <span className="edu-label">Year:</span>
              <span className="edu-value">2021 – 2026</span>
            </div>
            <div className="edu-item">
              <span className="edu-label">Course:</span>
              <span className="edu-value">M.Sc. in Computer Science</span>
            </div>
            <div className="edu-item">
              <span className="edu-label">Grade:</span>
              <span className="edu-value">First Class Honours</span>
            </div>
          </div>
        </Widget>

        {/* Projects */}
        <Widget
          widthUnits={0.5}
          heightUnits={1}
          row={3}
          col={7}
          className="projects-widget"
        >
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <h3>Personal Website</h3>
              <p>
                A responsive personal portfolio built with React and a custom
                widget system.
              </p>
            </div>
            <div className="project-item">
              <h3>Project 2</h3>
              <p>Description of another impressive project you've worked on.</p>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  );
}

export default App;
