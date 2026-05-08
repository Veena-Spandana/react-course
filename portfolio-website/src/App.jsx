
import './App.css'

function App() {
  const name = "John Doe"
  const profession = "Full Stack Developer"
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
  ]
  return (
   <div className='App'> 

   {/* Header section*/}
    <header className='header'>
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>

    {/* About section*/}
    <section id="about" className='about-section'>
      <h2>About Me</h2>
      <p>Hello! I am {name}, a passionate {profession}. I love building web applications that solve real-world problems. I have experience in both front-end and back-end development, and I enjoy working with technologies such as React, Node.js and Django.</p>
    </section>

    {/* Project section*/}
    <section id="projects" className='project-section'>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-item'>
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
          </div>
        ))}
      </div>
    </section>

    {/* Contact section*/}
    <section id="contact" className='contact-section'>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to email me  at <a href="mailto:john.doe@exampe.com">john.doe@exampe.com</a></p>
    </section>

    {/* Footer section*/}
    <footer className='footer'>
        <p>© 2026 John Doe. All Rights Reserved</p>
    </footer>
   </div>
  )
}

export default App
