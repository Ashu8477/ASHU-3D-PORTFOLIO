import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Certificate from './sections/Certificate';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Projects from './sections/Projects';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
