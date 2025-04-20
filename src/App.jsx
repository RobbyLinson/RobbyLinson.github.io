import React from 'react';
import './index.css';
import Widget from './components/Widget';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Robby } from './assets/Robby.png';

function App() {
  return (
    <div className="container">
      <Widget widthUnits={1} heightUnits={0.5}>
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
            style={{ color: 'var(--color-primary)', fontSize: '48px' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/robby-linson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--color-primary)', fontSize: '48px' }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:RobbyLinson@gmail.com"
            aria-label="Email"
            style={{ color: 'var(--color-primary)', fontSize: '48px' }}
          >
            <FaEnvelope />
          </a>
        </div>
      </Widget>

      <Widget widthUnits={1} heightUnits={1}>
        <h1>About Me</h1>
        <p>This is a full-width widget.</p>
      </Widget>

      <Widget widthUnits={0.49} heightUnits={1}>
        <h2>About Me</h2>
        <p>Short bio...</p>
      </Widget>

      <Widget widthUnits={0.49} heightUnits={1}>
        <h2>Projects</h2>
        <p>List of projects here...</p>
      </Widget>
    </div>
  );
}

export default App;
