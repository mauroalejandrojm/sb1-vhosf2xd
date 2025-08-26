import React, { useEffect, useRef } from 'react';
import { Database, Server, Cloud, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              About Me
              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></div>
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-10">
              I'm a Senior Data Engineer with over 6 years of experience in designing, implementing, managing, and optimizing data pipelines and analytics platforms.
              My expertise spans across diverse industries including logistics, psychology, robotics, and education, where I've helped organizations and individuals harness the knoweledge of their data.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              I enjoy solving complex problems, data challenges and building scalable infrastructure that enables data-driven decision making.
              My approach combines technical expertise with a deep understanding of business needs to deliver solutions that drive real value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Database size={24} className="text-indigo-600 dark:text-indigo-400" />,
                title: "Data Engineering",
                description: "Building robust ETL pipelines and data warehouses that transform raw data into valuable insights."
              },
              {
                icon: <Cloud size={24} className="text-indigo-600 dark:text-indigo-400" />,
                title: "Cloud Solutions",
                description: "Implementing scalable and cost-effective data solutions on major cloud platforms."
              },
              {
                icon: <Server size={24} className="text-indigo-600 dark:text-indigo-400" />,
                title: "Big Data",
                description: "Working with large-scale data processing frameworks to handle massive datasets efficiently."
              },
              {
                icon: <Code size={24} className="text-indigo-600 dark:text-indigo-400" />,
                title: "Data Architecture",
                description: "Designing comprehensive data architectures that align with business goals and technical requirements."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;