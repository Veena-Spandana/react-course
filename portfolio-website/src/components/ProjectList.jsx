function ProjectList() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Node.js.",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An eCommerce platform built with Django and React.",
      link: "#"
    },
    {
      title: "Project Three",
      description: "A portfolio website using HTML, CSS, and JavaScript.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
