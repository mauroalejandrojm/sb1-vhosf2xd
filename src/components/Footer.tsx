import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/5 dark:bg-dark-900">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-12">

        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <a
              href="#home"
              className="font-mono text-sm font-semibold tracking-tight"
            >
              <span className="text-teal-500 dark:text-teal-400">~/</span>
              <span className="text-slate-900 dark:text-white">
                mauro-jimenez
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Senior Data Engineer designing scalable data platforms,
              analytics systems, and AI-ready infrastructure.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "/home", href: "#home" },
              { label: "/work", href: "#projects" },
              { label: "/process", href: "#skills" },
              { label: "/experience", href: "#experience" },
              { label: "/contact", href: "#contact" },
              { label: "/chronicle", href: "/chronicle" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            © {currentYear} Mauro Jimenez — Built with precision, curiosity, and
            lots of coffee.
          </p>

          <div className="flex items-center gap-6">

            <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
              Status: operational · Available for consulting
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition-colors hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400"
            >
              cd ~
              <ArrowUp size={14} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;