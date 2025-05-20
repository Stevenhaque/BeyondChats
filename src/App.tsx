import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  
  // Update page title
  useEffect(() => {
    document.title = 'Modern CPA | Professional Accounting Services';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;