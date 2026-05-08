function About(){
  const name = "John Doe";
  const profession = "Full Stack Developer";

  return (
    <section id="about" className='about-section'>
      <h2>About Me</h2>
      <p>Hello! I am {name}, a passionate {profession}. I love building web applications that solve real-world problems. I have experience in both front-end and back-end development, and I enjoy working with technologies such as React, Node.js and Django.</p>
    </section>
  );
}

export default About;