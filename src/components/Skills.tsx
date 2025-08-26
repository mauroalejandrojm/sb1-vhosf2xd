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
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);

  const processes: Process[] = [
    {
      icon: <Compass className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "1. Understand the Landscape",
      description: "Assess needs & business context by deeply understanding goals, pain points, and existing systems. Map data flows and identify smart KPIs and blockers.",
      skills: [
        "Business Analysis",
        "System Architecture",
        "Data Modeling",
        "Requirements Gathering",
        "Stakeholder Management"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "2. Design Scalable Architecture",
      description: "Design flexible, scalable, and cost-effective data architecture based on needs. Align modern tools with engineering best practices.",
      skills: [
        "ETL/ELT Development",
        "Data Review",
        "Data Lakes",
        "Data Warehousing",
        "AWS/GCP/Azure",
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "3. Build Robust Pipelines",
      description: "Engineer clean, modular pipelines with strong data quality checks, testing, and observability. Focus on automation using CI/CD integration.",
      skills: [
        "ETL/ELT Development",
        "Python/SQL",
        "Data Quality Testing",
        "CI/CD Pipelines",
        "Monitoring & Logging"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "4. Optimize & Secure",
      description: "Tune performance, enforce data governance, and implement monitoring/alerting. Ensure security and efficiency as core design principles.",
      skills: [
        "Performance Tuning",
        "Data Governance",
        "Security Implementation",
        "Access Control",
        "Compliance Management"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "5. Empower & Iterate",
      description: "Enable teams through clear documentation, reusable components, and easy onboarding. Continuously evolve systems with changing needs.",
      skills: [
        "Technical Documentation",
        "Knowledge Transfer",
        "Team Training",
        "Process Improvement",
        "Agile Methodologies"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            My Process
            <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></div>
          </h2>

          <div className="space-y-6">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                {/* Connection line between cards */}
                {index < processes.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900 -z-10"></div>
                )}

                <div
                  className={`cursor-pointer ${activePhase === index
                    ? 'bg-white dark:bg-slate-700'
                    : 'bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80'
                    } rounded-lg transition-all duration-300 transform ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: `${animated ? index * 100 : 0}ms` }}
                  onClick={() => setActivePhase(activePhase === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg ${activePhase === index
                        ? 'bg-indigo-100 dark:bg-indigo-900/30'
                        : 'bg-slate-100 dark:bg-slate-800'
                        } transition-colors duration-300`}>
                        {process.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold truncate pr-4">{process.title}</h3>
                          <ChevronRight
                            className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${activePhase === index ? 'rotate-90' : ''
                              }`}
                          />
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 break-words">{process.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable skills section */}
                  <div className={`overflow-hidden transition-all duration-300 ${activePhase === index ? 'max-h-96' : 'max-h-0'
                    }`}>
                    <div className="p-6 pt-0">
                      <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                        <h4 className="text-sm font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                          Key Skills & Tools
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {process.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                              <span className="text-sm text-slate-700 dark:text-slate-300 break-words">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default Skills;