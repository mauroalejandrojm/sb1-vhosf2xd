import React, { useEffect, useRef, useState } from 'react';
import { Compass, Building2, Wrench, Shield, Users, ChevronRight } from 'lucide-react';

interface Process {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState<number | null>(0);

  const processes: Process[] = [
    {
      icon: <Compass className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: 'Understand the Landscape',
      description: 'Assess needs & business context by deeply understanding goals, pain points, and existing systems. Map data flows and identify smart KPIs and blockers.',
      skills: ['Business Analysis', 'System Architecture', 'Data Modeling', 'Requirements Gathering', 'Stakeholder Management'],
    },
    {
      icon: <Building2 className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: 'Design Scalable Architecture',
      description: 'Design flexible, scalable, and cost-effective data architecture based on needs. Align modern tools with engineering best practices.',
      skills: ['ETL/ELT Development', 'Data Lakes', 'Data Warehousing', 'AWS/GCP/Azure', 'System Design'],
    },
    {
      icon: <Wrench className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: 'Build Robust Pipelines',
      description: 'Engineer clean, modular pipelines with strong data quality checks, testing, and observability. Focus on automation using CI/CD integration.',
      skills: ['Python/SQL', 'Data Quality Testing', 'CI/CD Pipelines', 'Monitoring & Logging', 'Automation'],
    },
    {
      icon: <Shield className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: 'Optimize & Secure',
      description: 'Tune performance, enforce data governance, and implement monitoring/alerting. Ensure security and efficiency as core design principles.',
      skills: ['Performance Tuning', 'Data Governance', 'Security Implementation', 'Access Control', 'Compliance'],
    },
    {
      icon: <Users className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: 'Empower & Iterate',
      description: 'Enable teams through clear documentation, reusable components, and easy onboarding. Continuously evolve systems with changing needs.',
      skills: ['Technical Documentation', 'Knowledge Transfer', 'Team Training', 'Process Improvement', 'Agile'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && null,
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-white dark:bg-dark-800 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label font-mono">// 02 ─ process</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="section-label text-teal-500 dark:text-teal-400 font-mono">HOW I WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-2xl">
            A repeatable engineering process.
          </h2>
        </div>

        {/* Process timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: phase list */}
          <div className="lg:col-span-5">
            <div className="space-y-1">
              {processes.map((process, index) => (
                <div
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`cursor-pointer p-4 rounded border-l-2 transition-all duration-300 ${
                    activePhase === index
                      ? "border-teal-500 dark:border-teal-400 bg-slate-50 dark:bg-dark-700"
                      : "border-transparent hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50/50 dark:hover:bg-dark-700/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center flex-shrink-0">
                        {process.icon}
                      </div>
          
                      <div>
                        <h3
                          className={`text-sm font-semibold ${
                            activePhase === index
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {process.title}
                        </h3>
          
                        <p
                          className={`text-xs mt-0.5 ${
                            activePhase === index
                              ? "text-teal-600 dark:text-teal-400"
                              : "text-slate-400 dark:text-slate-600"
                          }`}
                        >
                        
                        </p>
                      </div>
                    </div>
          
                    <span
                      className={`text-xs font-mono ${
                        activePhase === index
                          ? "text-teal-500 dark:text-teal-400"
                          : "text-slate-300 dark:text-slate-700"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-7">
            <div className="  rounded-lg p-8 border-slate-200 dark:border-white/5 h-full">
              {activePhase !== null && (
                <div className="animate-fade-up">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono text-teal-500 dark:text-teal-400">PHASE 0{activePhase + 1}</span>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-white/10"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {processes[activePhase].title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {processes[activePhase].description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
                      Key Skills & Tools
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {processes[activePhase].skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 p-2.5 dark:text-slate-500 rounded">
                          <div className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
