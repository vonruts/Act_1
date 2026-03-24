export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Web Portfolio',
      description: 'A responsive portfolio website showcasing skills, projects, and reflections. Built with React and Vite for optimal performance.',
      role: 'Full Stack Developer',
      technologies: ['React', 'JavaScript', 'CSS', 'Vite'],
      highlights: [
        'Multi-page navigation without routing',
        'Responsive design',
        'Clean component architecture',
      ],
    },
    {
      id: 2,
      title: 'System Debugging Project',
      description: 'Identified and resolved critical performance issues in a legacy system, improving overall stability and response time.',
      role: 'System Debugger',
      technologies: ['JavaScript', 'Debugging Tools', 'System Analysis'],
      highlights: [
        'Root cause analysis',
        'Performance optimization',
        'Implementation of monitoring',
      ],
    },
    {
      id: 3,
      title: 'Automated Watering Application (In Progress)',
      description: 'An IoT-based application that automates plant watering based on soil moisture levels and weather conditions.',
      role: 'Lead Developer',
      technologies: ['Backend Systems', 'IoT', 'Database', 'Node.js'],
      highlights: [
        'Smart scheduling algorithm',
        'Real-time data collection',
        'User management system',
      ],
    },
  ];

  return (
    <section className="section projects-section">
      <h2>Projects</h2>
      <p className="section-intro">
        Here are some projects that showcase my skills and interests in software development:
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <div className="detail">
                <strong>Role:</strong> {project.role}
              </div>
              <div className="detail">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </div>
            </div>

            <div className="highlights">
              <strong>Key Highlights:</strong>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-note">
        <p>
          <em>Note: These projects represent a mix of academic work, personal projects, and ongoing initiatives. Each has contributed significantly to my development as a software engineer.</em>
        </p>
      </div>
    </section>
  );
}
