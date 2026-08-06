import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight} from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'visualization', label: 'Data Visualization' },
    { id: 'cloud', label: 'Cloud Solutions' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label font-mono">// 01 ─ build</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="section-label text-teal-500 dark:text-teal-400 font-mono">SELECTED WORK</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-2xl">
              Featured case studies.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              A selection of data systems and platforms I've designed, built, and operated across logistics, finance, and robotics.
            </p>
          </div>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                filter === category.id
                  ? 'bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900'
                  : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              className="h-full"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link className="block h-full" to={`/project/${project.id}`}>
                <div className="group flex h-full flex-col bg-white dark:bg-dark-800 rounded-lg overflow-hidden border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-dark-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover
                                  opacity-70
                                  transition-transform transition-opacity duration-500
                                  group-hover:scale-105
                                  group-hover:opacity-100
                                  group-hover:-translate-y-2
                                  transform-gpu
                                  will-change-transform
                                  backface-hidden"
                    />
                    <div className="absolute inset-x-0 -bottom-0 h-24 bg-gradient-to-t from-slate-900/50 dark:from-dark-900 via-transparent to-transparent">
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm text-teal-600 dark:text-teal-400 rounded text-xs font-semibold tracking-wide uppercase">
                        {project.category.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={18} className="text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-1 flex-col">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="tag-pill">{tag}</span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tag-pill">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    {/* Key metric */}
                    {project.impact.metrics[0] && (
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5">
                        <div>
                          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {project.impact.metrics[0].value}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                            {project.impact.metrics[0].label}
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          Read case study →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
