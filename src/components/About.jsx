export default function About() {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-avatar">
          <div className="avatar-placeholder">
            <span>RR</span>
          </div>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="intro">
            Hello! I'm Andrei, a passionate developer with a strong interest in backend systems and software engineering. I love solving complex problems and building robust applications that make a difference.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <h3>🎯 Biggest Accomplishment</h3>
              <p>Successfully debugged a critical system issue that improved performance and reliability. The experience taught me the importance of systematic problem-solving and attention to detail.</p>
            </div>
            
            <div className="detail-item">
              <h3>💡 Area of Interest</h3>
              <p>Backend systems and server-side development. I'm fascinated by how complex systems are architected, scaled, and maintained. I want to understand the infrastructure that powers modern applications.</p>
            </div>
            
            <div className="detail-item">
              <h3>🚀 Future Vision</h3>
              <p>I'm working towards building an automated watering application that combines IoT, backend systems, and smart algorithms. This project excites me because it bridges the gap between software and real-world applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
