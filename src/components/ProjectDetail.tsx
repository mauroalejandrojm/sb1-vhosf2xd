import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Target, AlertTriangle, CheckCircle, TrendingUp, Quote } from 'lucide-react';
import { projectsData, ProjectData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [activeSection, setActiveSection] = useState('situation');

  useEffect(() => {
    if (id) {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject || null);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Project not found</h2>
          <Link to="/" className="text-teal-500 dark:text-teal-400 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'situation', label: 'Situation', icon: Target },
    { id: 'complication', label: 'Complication', icon: AlertTriangle },
    { id: 'resolution', label: 'Resolution', icon: CheckCircle },
    { id: 'impact', label: 'Impact', icon: TrendingUp },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm">
              <ArrowLeft size={18} className="mr-2" />
              Back to Portfolio
            </Link>
            <div className="flex space-x-6">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  <ArrowUpRight size={18} />
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        className="pt-32 pb-16 bg-slate-50 dark:bg-dark-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="section-label font-mono">// case_study</span>
                <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                <span className="section-label text-teal-500 dark:text-teal-400 font-mono">{project.category.replace('-', ' ').toUpperCase()}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky nav */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-900 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-6 overflow-x-auto py-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded text-xs font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? 'bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400'
                      : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <motion.div className="py-16" variants={containerVariants} initial="hidden" animate="visible">
        {/* Situation */}
        {activeSection === 'situation' && (
          <motion.section variants={itemVariants} className="mb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center text-slate-900 dark:text-white">
                    <Target className="mr-3 text-teal-500 dark:text-teal-400" size={28} />
                    {project.situation.title}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {project.situation.content}
                  </p>
                  {project.situation.metrics && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">Initial Metrics</h3>
                      {project.situation.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center p-3 bg-slate-50 dark:bg-dark-800 rounded border border-slate-200 dark:border-white/5"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
                {project.situation.image && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                    <img src={project.situation.image} alt="Situation" className="w-full h-80 object-cover rounded-lg" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Complication */}
        {activeSection === 'complication' && (
          <motion.section variants={itemVariants} className="mb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {project.complication.image && (
                  <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                    <img src={project.complication.image} alt="Complication" className="w-full h-80 object-cover rounded-lg" />
                  </motion.div>
                )}
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6 flex items-center text-slate-900 dark:text-white">
                    <AlertTriangle className="mr-3 text-yellow-400" size={28} />
                    {project.complication.title}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {project.complication.content}
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">Key Challenges</h3>
                    {project.complication.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start p-3 bg-slate-50 dark:bg-dark-800 rounded border border-slate-200 dark:border-white/5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Resolution */}
        {activeSection === 'resolution' && (
          <motion.section variants={itemVariants} className="mb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center text-slate-900 dark:text-white">
                      <CheckCircle className="mr-3 text-teal-500 dark:text-teal-400" size={28} />
                      {project.resolution.title}
                    </h2>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {project.resolution.content}
                    </p>
                    <div className="mb-8">
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">Approach</h3>
                      <div className="space-y-2">
                        {project.resolution.approach.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start p-3 bg-slate-50 dark:bg-dark-800 rounded border border-slate-200 dark:border-white/5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-5 h-5 bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900 rounded flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">Results</h3>
                      <div className="space-y-2">
                        {project.resolution.results.map((result, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center p-3 bg-slate-50 dark:bg-dark-800 rounded border border-slate-200 dark:border-white/5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-teal-500 dark:text-teal-400 mr-3 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {project.resolution.image && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                      <img src={project.resolution.image} alt="Resolution" className="w-full h-80 object-cover rounded-lg" />
                    </motion.div>
                  )}
                </div>

                {/* Technical details */}
                <div className="p-8 bg-slate-50 dark:bg-dark-800 rounded-lg border border-slate-200 dark:border-white/5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technical Implementation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">Architecture</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.technicalDetails.architecture}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technicalDetails.technologies.map((tech, index) => (
                          <span key={index} className="tag-pill">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">Implementation</h4>
                      <ul className="space-y-1.5">
                        {project.technicalDetails.implementation.slice(0, 3).map((item, index) => (
                          <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="w-1 h-1 bg-teal-500 dark:bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Impact */}
        {activeSection === 'impact' && (
          <motion.section variants={itemVariants} className="mb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 flex items-center justify-center text-slate-900 dark:text-white">
                  <TrendingUp className="mr-3 text-teal-500 dark:text-teal-400" size={28} />
                  Project Impact
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {project.impact.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-8 bg-slate-50 dark:bg-dark-800 rounded-lg border border-slate-200 dark:border-white/5"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="text-4xl font-black text-teal-600 dark:text-teal-400 mb-2">{metric.value}</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{metric.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-500">{metric.description}</div>
                    </motion.div>
                  ))}
                </div>

                {project.impact.testimonial && (
                  <motion.div
                    className="bg-slate-50 dark:bg-dark-800 p-8 rounded-lg border border-slate-200 dark:border-white/5 border-l-2 border-l-teal-500 dark:border-l-teal-400"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-6 h-6 text-teal-500 dark:text-teal-400 mb-4" />
                    <blockquote className="text-base italic text-slate-700 dark:text-slate-300 mb-4">
                      "{project.impact.testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{project.impact.testimonial.author}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-500">{project.impact.testimonial.role}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>
        )}
      </motion.div>

      {/* CTA */}
      <motion.section
        className="py-16 bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Interested in similar solutions?</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-8">
            Let's discuss how I can help solve your data engineering challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="px-6 py-3 bg-teal-500 dark:bg-teal-400 text-white dark:text-dark-900 rounded font-semibold text-sm hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors">
              Get in Touch
            </Link>
            <Link to="/" className="px-6 py-3 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 rounded font-semibold text-sm hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors">
              View More Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetail;
