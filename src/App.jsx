import React from 'react';
import './index.css';
import Widget from './components/Widget';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Robby from './assets/Robby.png';
import TCD from './assets/TCD-Logo.png';

function App() {
  return (
    <div className="container">
      <Widget widthUnits={1} heightUnits={0.25}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <a
            href="https://github.com/RobbyLinson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--color-primary)', fontSize: '32px' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/robby-linson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--color-primary)', fontSize: '32px' }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:RobbyLinson@gmail.com"
            aria-label="Email"
            style={{ color: 'var(--color-primary)', fontSize: '32px' }}
          >
            <FaEnvelope />
          </a>
        </div>
      </Widget>

      <Widget widthUnits={1} heightUnits={0.25}>
        <h1>About Me</h1>
        <p>I .</p>
      </Widget>

      <Widget widthUnits={0.49} heightUnits={2}>
        <img src={Robby} alt="Me!" className="profilePicture" />
      </Widget>

      <Widget widthUnits={0.49} heightUnits={0.99}>
        <div className="educationWidget">
          <h2>Education</h2>
          <div className="eduHeader">
            <h2 className="collegeName">Trinity College Dublin</h2>
            <img src={TCD} alt="College Logo" className="collegeLogo" />
          </div>
          <ul className="eduDetails">
            <li>
              <strong>Year:</strong> 2021 – 2026
            </li>
            <li>
              <strong>Course:</strong> M.Sc. in Computer Science
            </li>
            <li>
              <strong>Grade:</strong> First Class Honours
            </li>
          </ul>
        </div>
      </Widget>
      <Widget widthUnits={0.49} heightUnits={0.99}>
        <h2>Projects</h2>
        <p>List of projects here...</p>
      </Widget>
    </div>
  );
}

export default App;
