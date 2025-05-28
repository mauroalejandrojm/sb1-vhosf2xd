import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  category: 'data-engineering' | 'machine-learning' | 'visualization' | 'cloud';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Container Handling Optimization for Trucks",
      description: "Led end-to-end project management for port operations optimization initiatives by  deploying machine learning algorithms, improving efficiency across key workflows and reducing operational bottlenecks.",
      image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
      tags: ["fastapi", "pytorch", "logfire", "Azure", "Python", "opentelemetry"],
      links: {
        github: "",
      },
      category: "data-engineering"
    },
    {
      id: 2,
      title: "Dynamic Pricing Engine",
      description: "Designed and implemented container imports fare class and capacity system with a scalable architecture for dynamic prices, including algorithms for fare protection levels, a high-level architecture, and a common evaluation framework. Standardized appointment flows, statuses, and fare class logic using a common schema while allowing terminal-specific customization.",
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
      tags: ["Azure", "fastapi", "pydantic", "posgresql", "azure container registry", "forecasting"],
      links: {
        github: "",
        live: ""
      },
      category: "data-science"
    },
    {
      id: 3,
      title: "Fleet Management System",
      description: "Developed a fleet management system leveraging a constraint-based geospatial algorithm using a state machine optimizing trucking operation, reducing driver utilization by 5%, deadhead miles by 27%, and non-revenue hours by 44%, impacting vehicle routing, yard allocation, and real-time dispatch decisions.",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
      tags: ["python", "scikit-learn", "docker", "finete-state Machine", "time-series"],
      links: {
        github: ""
      },
      category: "machine-learning"
    },
    {
      id: 4,
      title: "Big Data Pipelines and Reports for Load Board Networks",
      description: "ETL pipeline for clustering geospatial data of shipments to map layers optimizing data  storage by 98% to improve customer experience. Designed and deployed a recommendation model for matching shipment preferences using the features and users stated preference with an average response of 600ms.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      tags: ["Tableau", "SQL", "Data Modeling", "ETL", "Python"],
      links: {
        live: ""
      },
      category: "visualization"
    },
    {
      id: 5,
      title: "Interactive Dashboard for Customers",
      description: "Developed a truck and container search system using filters based on available and customizable features with an average response of 600ms with monitoring and alerting capabilities about terminal operations ports in Mexico.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "CI/CD"],
      links: {
        github: ""
      },
      category: "data-engineering"
    },
    {
      id: 6,
      title: "Cloud Data Solution",
      description: "ELT pipelines for processing call audio files recorded for credit institutions or financial companies with support for over 10 FFmpeg codecs. Sensitive reports and analytics for users (and operators) for improving the quality of service by 20% using machine learning techniques based on natural language processing.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      tags: ["Pytorch", "keras", "google cloud", "Python", "signal processing"],
      links: {
        github: ""
      },
      category: "cloud"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Featured Projects
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform -translate-y-2"></div>
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
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
              <div 
                key={project.id}
                className={`bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;