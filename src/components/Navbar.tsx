import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: '/home', href: '#home' },
    { label: '/work', href: '#projects' },
    { label: '/process', href: '#skills' },
    { label: '/experience', href: '#experience' },
    { label: '/contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo — keeps ~/ prefix */}
        <a href="#home" className="text-sm font-mono font-semibold tracking-tight text-slate-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
          <span className="text-teal-500 dark:text-teal-400">~/</span>mauro-jimenez
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/chronicle"
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
          >
            /chronicle
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-dark-800 border-t border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
            {[...navLinks, { label: '/chronicle', href: '/chronicle' }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 py-3 border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
