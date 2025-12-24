import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Loader from './components/Layout/Loader';
import Cursor from './components/Layout/Cursor';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Scene from './components/Three/Scene';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-slate-200 min-h-screen relative selection:bg-primary/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      <Cursor />
      
      {!loading && (
        <>
          <Suspense fallback={null}>
             <Scene />
          </Suspense>

          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;