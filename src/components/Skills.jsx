export default function Skills() {
  const skills = {
    languages: ['JavaScript', 'HTML', 'CSS'],
    tools: ['React', 'Vite', 'Node.js', 'Git', 'VS Code'],
    platforms: ['Web Development'],
    interests: ['Backend Development', 'System Design', 'Database Management'],
  };

  return (
    <section className="section skills-section">
      <h2>Skills & Technologies</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>📝 Programming Languages</h3>
          <ul className="skill-list">
            {skills.languages.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>🛠️ Tools & Frameworks</h3>
          <ul className="skill-list">
            {skills.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>💻 Platforms</h3>
          <ul className="skill-list">
            {skills.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>🎯 Areas of Interest</h3>
          <ul className="skill-list">
            {skills.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="skills-summary">
        <h3>My Full-Stack Learning Journey</h3>
        <p>
          I started with JavaScript, HTML, and CSS for web fundamentals, then progressed to React.js for building dynamic, component-based user interfaces. I've learned how React enables efficient state management and component reusability. Currently, I'm expanding into backend development with Node.js and databases to understand how full-stack applications work end-to-end. My goal is to master both frontend (React) and backend technologies to build complete, scalable applications.
        </p>
      </div>
    </section>
  );
}
