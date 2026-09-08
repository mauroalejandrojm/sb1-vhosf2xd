import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import ParticleField from "../components/ParticleField";
import GridOverlay from "../components/GridOverlay";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-white dark:bg-dark-900 relative overflow-hidden">
      <ParticleField />
      <GridOverlay />

      {/* Top status bar */}
      <div className="border-b border-slate-100 dark:border-white/5">
        <div
          className={`max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-5 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 dark:bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 dark:bg-teal-400" />
            </span>

            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">
              System Status: Available
            </span>
          </div>

          <span className="hidden sm:block text-xs font-mono text-slate-300 dark:text-slate-700 tracking-widest uppercase">
            ERROR ── 404
          </span>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Error label */}
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold tracking-[0.3em] uppercase text-teal-500 dark:text-teal-400">
                Navigation Error
              </span>
            </div>

            {/* 404 */}
            <div className="mb-8">
              <h1 className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-black leading-[0.8] tracking-[-0.06em] text-slate-900 dark:text-white">
                404
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white max-w-3xl mb-6">
              This route doesn't{" "}
              <span className="text-teal-500 dark:text-teal-400">
                exist.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mb-10">
              The page you're looking for couldn't be found. It may have been
              moved, removed, or the URL might be incorrect.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900 rounded font-semibold text-sm hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-200 font-mono"
              >
                Back to Home
                <ArrowUpRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 rounded font-semibold text-sm hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Go Back
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <div className="border-t border-slate-100 dark:border-white/5">
        <div
          className={`max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <span className="text-xs font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            Status: Route Not Found
          </span>

          <span className="hidden sm:block text-xs font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            HTTP 404
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

