import { useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Reflection from './components/Reflection';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Andrei</h1>
          <nav className="nav">
            <button
              className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button
              className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              Skills
            </button>
            <button
              className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
            <button
              className={`nav-btn ${activeSection === 'reflection' ? 'active' : ''}`}
              onClick={() => setActiveSection('reflection')}
            >
              Reflection
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'reflection' && <Reflection />}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Andrei Hornilla. All rights reserved.</p>
      </footer>
    </div>
  );
}
