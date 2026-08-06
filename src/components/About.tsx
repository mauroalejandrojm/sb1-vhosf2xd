import React, { useEffect, useRef, useState } from 'react';
import { Database, Server, Cloud, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const pillars = [
    { icon: <Database size={20} className="text-teal-500 dark:text-teal-400" />, title: 'Data Engineering', description: 'Robust ETL pipelines and data warehouses that transform raw data into valuable insights.' },
    { icon: <Cloud size={20} className="text-teal-500 dark:text-teal-400" />, title: 'Cloud Solutions', description: 'Scalable and cost-effective data solutions on major cloud platforms.' },
    { icon: <Server size={20} className="text-teal-500 dark:text-teal-400" />, title: 'Big Data', description: 'Large-scale data processing frameworks handling massive datasets efficiently.' },
    { icon: <Code size={20} className="text-teal-500 dark:text-teal-400" />, title: 'Data Architecture', description: 'Comprehensive data architectures aligned with business goals and technical requirements.' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-white/5 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label font-mono">// 05 ─ collaborate</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="section-label text-teal-500 dark:text-teal-400 font-mono">ABOUT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-2xl">
            Engineering data systems that just work.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: narrative */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a Senior Data Engineer with over 7 years of experience designing, implementing, managing, and optimizing data pipelines and analytics platforms. My expertise spans logistics, psychology, robotics, and education — where I've helped organizations harness the knowledge locked in their data.
              </p>
              <p>
                I enjoy solving complex problems and building scalable infrastructure that enables data-driven decision making. My approach combines technical expertise with a deep understanding of business needs to deliver solutions that drive real value.
              </p>
              <p>
                From real-time optimization engines processing thousands of records, to ML-powered analytics platforms handling 15,000+ daily calls — I build systems that are as reliable as they are performant.
              </p>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white dark:bg-dark-700 rounded-lg border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-colors duration-300"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
