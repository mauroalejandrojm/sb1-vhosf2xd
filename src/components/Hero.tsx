import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import neorones from '../assets/neurones.png';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white-50 to-[#000000]-950 dark:from-[#000000] dark:to-[#000000] opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div
        className={`container mx-auto px-4 py-20 z-10 transform transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
      >
        {/* Make this flex so text and image align side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center">
              <div className="w-2 h-8 bg-indigo-600 dark:bg-indigo-400 mr-3"></div>
              <h2 className="text-xl text-slate-600 dark:text-slate-400 font-medium tracking-wide">
                Senior Data Engineer
              </h2>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              From Chaos to Clarity,
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                Engineering data systems that just work.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
              I develop data solutions that transform raw information into valuable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 font-medium text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-md hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-300 font-medium text-center"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src={neorones}
              alt="Right side illustration"
              className="w-85 h-auto rounded-lg shadow-lg invert hue-rotate-180 saturate-100 dark:invert-0 dark:hue-rotate-0 dark:saturate-100"
            />
          </div>
        </div>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
