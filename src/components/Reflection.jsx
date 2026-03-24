export default function Reflection() {
  const reflections = [
    {
      q: '📚 Concepts Learned in Full-stack Development & React.js',
      a: 'Through this course, I\'ve gained a deep understanding of component-based architecture using React.js, learning how to break down complex UIs into reusable, maintainable components. I\'ve learned about state management with hooks (useState), the importance of separation of concerns, and how frontend frameworks integrate with backend systems. I also understood the full-stack perspective: how the client-side (React) serves as the user interface layer that communicates with backend APIs, databases, and servers. The concept of unidirectional data flow and component lifecycle has reshaped how I think about application architecture.',
    },
    {
      q: '🎯 Concepts I Want to Learn Further',
      a: 'I\'m eager to dive deeper into advanced React patterns like Context API for global state management, Redux for complex state scenarios, and React Router for multi-page applications. On the backend side, I want to master Node.js and Express for building REST APIs, work with databases like PostgreSQL and MongoDB, and understand authentication/authorization mechanisms. I\'m also interested in learning DevOps practices, containerization with Docker, and how to deploy full-stack applications. Most importantly, I want to understand system design principles for building scalable applications that can handle real-world demands.',
    },
    {
      q: '🛠️ Technology Choices & Implementation',
      a: 'I chose React and Vite because React provides excellent component reusability and state management through hooks, while Vite offers blazingly fast development and build times. JavaScript is fundamental for modern web development. This tech stack aligns perfectly with full-stack development practices and industry standards.',
    },
    {
      q: '✅ Easiest Parts of the Project',
      a: 'Breaking down the portfolio into logical React components (About, Skills, Projects, Reflection) felt natural. Using hooks for state management to switch between sections was straightforward. The component-based architecture made the code clean and maintainable, and I appreciated how React\'s declarative nature made UI development intuitive.',
    },
    {
      q: '⚠️ Most Challenging Parts',
      a: 'Creating a responsive design that works across all screen sizes required careful CSS work and understanding flexbox/grid layouts. Styling everything cohesively while maintaining the design system was challenging. Also, condensing complex technical concepts into clear, concise explanations for the portfolio narrative required significant thought and revision.',
    },
    {
      q: '🚀 Future Applications & Backend Integration',
      a: 'I\'m passionate about building my automated watering application by combining frontend React interfaces with backend services. I want to create applications that solve real-world problems - IoT solutions, data-driven dashboards, and scalable systems. Moving forward, I\'ll need to learn how to connect React frontends to Node.js/Express backends with MongoDB databases, implement user authentication, and deploy applications to production environments.',
    },
  ];

  return (
    <section className="section reflection-section">
      <h2>Reflection</h2>
      <p className="section-intro">
        Here's my reflection on the portfolio project and my learning journey:
      </p>

      <div className="reflection-container">
        {reflections.map((item, idx) => (
          <div key={idx} className="reflection-item">
            <h3 className="reflection-question">❓ {item.q}</h3>
            <p className="reflection-answer">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="reflection-summary">
        <h3>🎓 Key Takeaways</h3>
        <ul>
          <li>React's component-based architecture makes complex UIs manageable and maintainable</li>
          <li>Full-stack development requires understanding both frontend and backend technologies</li>
          <li>Hooks and state management are crucial for building responsive applications</li>
          <li>User experience and responsive design are as important as functionality</li>
          <li>Real-world problems inspire and guide the best project implementations</li>
          <li>Continuous learning in web development is essential due to rapid technology evolution</li>
        </ul>
      </div>
    </section>
  );
}
