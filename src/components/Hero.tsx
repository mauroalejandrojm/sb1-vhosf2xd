import ParticleField from "./ParticleField";
import GridOverlay from "./GridOverlay";
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ChevronRight } from 'lucide-react';

const TICKER_ITEMS = [
  'Data Engineering', 'ETL Pipelines', 'Cloud Architecture', 'Machine Learning',
  'Big Data', 'Azure', 'Google Cloud', 'Apache Spark', 'Python', 'PostgreSQL',
  'Data Warehousing', 'Real-time Analytics', 'FastAPI', 'Docker', 'Kubernetes',
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col bg-white dark:bg-dark-900 relative overflow-hidden pt-20"
    >
      <ParticleField />
      <GridOverlay />
      {/* Top status bar */}
      <div className="border-slate-100 dark:border-white/5 mb-10 md:mb-8">
      <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-0 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 dark:bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 dark:bg-teal-400"></span>
          </span>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">
            System Status: Available
          </span>
        </div>
        <span className="hidden sm:block text-xs font-mono text-slate-300 dark:text-slate-700 tracking-widest uppercase">
          MAJ ── v2.0
        </span>
      </div>
      </div>

      {/* Main content */}
      <div className="flex-none md:flex-1 flex flex-col justify-center md:justify-center max-w-7xl mx-auto px-6 py-10 w-full">
        {/* Sub-label */}
        <div
          className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '150ms' }}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.3em] uppercase text-teal-500 dark:text-teal-400">
            Senior Data Engineer
          </span>
        </div>

        {/* Headline */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '250ms' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white max-w-5xl">
            Architecting the infrastructure that fuels{' '}
            <span className="text-teal-500 dark:text-teal-400">enterprise intelligence.</span>
          </h1>
        </div>

        {/* Body + CTAs row */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4 md:mb0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="lg:col-span-6">
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              From chaos to clarity — I design and operate data systems that just work.
              Pipelines, platforms, and architecture that transform raw information into
              measurable enterprise value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900 rounded font-semibold text-sm hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-200 font-mono"
              >
                Get in Touch <ArrowUpRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 rounded font-semibold text-sm hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                View Projects <ChevronRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar: coordinates + scroll hint */}
      <div className="border-slate-100 dark:border-white/5 mt-10 md:mt-0">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <span className="text-xs font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            Lat 10.96° N · Lng 74.78° W
          </span>
      
          <a
            href="#projects"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            Scroll to Trace <ArrowDown size={12} />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
