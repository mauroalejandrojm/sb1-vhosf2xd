import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-blue-950 opacity-80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div 
        className={`container mx-auto px-4 py-20 z-10 transform transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 dark:bg-blue-400 mr-3"></div>
            <h2 className="text-xl text-slate-600 dark:text-slate-400 font-medium tracking-wide">
              Senior Data Engineer
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            From Chaos to Clarity,<br />
            <span className="text-blue-600 dark:text-blue-400">Engineering data systems that just work.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
            I build robust data solutions that transform raw information into valuable insights. 
            With expertise in data engineering, cloud technologies, and big data frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-md hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;