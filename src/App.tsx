import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />          {/* id="home" - The hook */}
      <Projects />      {/* id="projects" - Show your best work first */}
      <Skills />        {/* id="skills" - Demonstrate capabilities */}
      <Experience />    {/* id="experience" - Build credibility */}
      <Hobbies />       {/* id="hobbies" - Humanize and connect */}
      <About />         {/* id="about" - Tell your story */}
      <Contact />       {/* id="contact" - Call to action */}
    </div>
  );
};

export default App;