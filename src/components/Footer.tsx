import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold tracking-tighter">
                <span className="text-indigo-400">Mauro</span>Jimenez
              </a>
              <p className="text-slate-400 mt-2">Senior Data Engineer</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/mauroalejandrojm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mauroalejandrojimenezmedina/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mauroalejandrojm@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Mauro Jimenez. All rights reserved.
            </p>

            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;