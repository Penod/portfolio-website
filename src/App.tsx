import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // ← Add this import
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About /> {/* ← Add this line */}
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;