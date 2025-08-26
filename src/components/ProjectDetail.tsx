import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Target, AlertTriangle, CheckCircle, TrendingUp, Quote } from 'lucide-react';
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">
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
        { id: 'impact', label: 'Impact', icon: TrendingUp }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Portfolio
                        </Link>
                        <div className="flex space-x-6">
                            {project.links.github && (
                                <motion.a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github size={20} />
                                </motion.a>
                            )}
                            {project.links.live && (
                                <motion.a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ExternalLink size={20} />
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.section
                className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-blue-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                                {project.category.replace('-', ' ').toUpperCase()}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Sticky Navigation */}
            <div className="sticky top-20 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4">
                    <nav className="flex space-x-8 overflow-x-auto py-4">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeSection === section.id
                                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span className="font-medium">{section.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Content Sections */}
            <motion.div
                className="py-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Situation */}
                {activeSection === 'situation' && (
                    <motion.section variants={itemVariants} className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                                            <Target className="mr-3 text-blue-600 dark:text-blue-400" size={32} />
                                            {project.situation.title}
                                        </h2>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                                            {project.situation.content}
                                        </p>
                                        {project.situation.metrics && (
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-semibold mb-4">Initial Metrics</h3>
                                                {project.situation.metrics.map((metric, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                                        <span className="text-slate-700 dark:text-slate-300">{metric}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {project.situation.image && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <img
                                                src={project.situation.image}
                                                alt="Situation"
                                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Complication */}
                {activeSection === 'complication' && (
                    <motion.section variants={itemVariants} className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {project.complication.image && (
                                        <motion.div
                                            className="relative order-2 lg:order-1"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <img
                                                src={project.complication.image}
                                                alt="Complication"
                                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                                            />
                                        </motion.div>
                                    )}
                                    <div className="order-1 lg:order-2">
                                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                                            <AlertTriangle className="mr-3 text-yellow-600 dark:text-yellow-400" size={32} />
                                            {project.complication.title}
                                        </h2>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                                            {project.complication.content}
                                        </p>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                                            {project.complication.challenges.map((challenge, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-700 dark:text-slate-300">{challenge}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Resolution */}
                {activeSection === 'resolution' && (
                    <motion.section variants={itemVariants} className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                                            <CheckCircle className="mr-3 text-green-600 dark:text-green-400" size={32} />
                                            {project.resolution.title}
                                        </h2>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                                            {project.resolution.content}
                                        </p>

                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold mb-4">Approach</h3>
                                            <div className="space-y-3">
                                                {project.resolution.approach.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                                            {index + 1}
                                                        </div>
                                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Results</h3>
                                            <div className="space-y-3">
                                                {project.resolution.results.map((result, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                                                        <span className="text-slate-700 dark:text-slate-300">{result}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {project.resolution.image && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <img
                                                src={project.resolution.image}
                                                alt="Resolution"
                                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Technical Details */}
                                <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-6">Technical Implementation</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3">Architecture</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {project.technicalDetails.architecture}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technicalDetails.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3">Implementation</h4>
                                            <ul className="space-y-1">
                                                {project.technicalDetails.implementation.slice(0, 3).map((item, index) => (
                                                    <li key={index} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
                                    <TrendingUp className="mr-3 text-blue-600 dark:text-blue-400" size={32} />
                                    Project Impact
                                </h2>

                                {/* Metrics */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                    {project.impact.metrics.map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-lg"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                                {metric.value}
                                            </div>
                                            <div className="text-lg font-semibold mb-2">{metric.label}</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                                {metric.description}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Testimonial */}
                                {project.impact.testimonial && (
                                    <motion.div
                                        className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border-l-4 border-blue-600 dark:border-blue-400"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                                        <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 mb-4">
                                            "{project.impact.testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="font-semibold">{project.impact.testimonial.author}</div>
                                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                                    {project.impact.testimonial.role}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.section>
                )}
            </motion.div>

            {/* Footer CTA */}
            <motion.section
                className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Interested in Similar Solutions?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Let's discuss how I can help solve your data engineering challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/#contact"
                            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/"
                            className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default ProjectDetail;