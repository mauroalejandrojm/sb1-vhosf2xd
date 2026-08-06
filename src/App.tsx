import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroStats from './components/HeroStats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChroniclePage from './pages/ChroniclePage';
import { ThemeProvider } from './context/ThemeContext';
import PipelineTrace from "./components/PipelineTrace";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-slate-900 dark:text-white transition-colors duration-300 relative">
        {/* Global grid background */}
        <div className="fixed inset-0 pointer-events-none z-0 grid-bg" />

        <div className="relative z-10">
          <Routes>
            <Route path="/chronicle" element={<ChroniclePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/" element={
              <>
                <PipelineTrace />
                <Navbar scrolled={scrolled} />
                <main>
                  <Hero />
                  <HeroStats />
                  <Projects />
                  <Skills />
                  <Experience />
                  <Education />
                  <About />
                  <Contact />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
