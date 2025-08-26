import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'visualization', label: 'Data Visualization' },
    { id: 'cloud', label: 'Cloud Solutions' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Featured Projects
            <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></div>
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${filter === category.id
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                      <div className="flex space-x-3">
                        {project.links.github && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} className="text-slate-500 dark:text-slate-400" />
                          </motion.div>
                        )}
                        {project.links.live && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={18} className="text-slate-500 dark:text-slate-400" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;