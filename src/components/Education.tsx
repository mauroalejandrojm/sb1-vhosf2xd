import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const education: Education[] = [
    {
      degree: 'Master of Science in Electronics Engineering',
      institution: 'Uninorte',
      period: '06/2019 - 04/2023',
      description: 'Identification of expressive descriptors for style extraction in music analysis using linear and non-linear models.',
    },
    {
      degree: 'Bachelor in Electronics Engineering',
      institution: 'Uninorte',
      period: '06/2014 - 01/2019',
      description: 'System for the measurement of musical similarity, using expressive markers considering acoustic intensity and temporal metrics.',
    },
  ];

  const certifications: Certification[] = [
    { name: 'Project Management: Professional Certificate', issuer: 'Google on Coursera', date: '2025', url: 'https://www.credly.com/badges/3ec3cf4c-65ae-4da4-a304-4f1656b6b57d/linked_in_profile' },
    { name: 'Introduction to Kubernetes (LFS158)', issuer: 'The Linux Foundation', date: '2025', url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c4b0e53f-666a-4852-b6c9-9e81653a594f-mauro-jimenez-1df12478-91a8-46df-be0b-1b29c27985d6-certificate.pdf' },
    { name: 'API Academy Certification Program', issuer: 'API Academy', date: '2021' },
    { name: 'Convolutional Networks for Visual Recognition', issuer: 'Uninorte', date: '2018' },
    { name: 'International Test of English Proficiency ITEP', issuer: 'CEFR Level B2', date: '2018' },
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
    <section id="education" ref={sectionRef} className="py-24 bg-white dark:bg-dark-800 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label font-mono">// 04 ─ learn</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="section-label text-teal-500 dark:text-teal-400 font-mono">CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-2xl">
            Education & certifications.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={18} className="text-teal-500 dark:text-teal-400" />
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-6 border-l border-slate-200 dark:border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400 border-2 border-white dark:border-dark-900"></div>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">{edu.institution}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <Award size={18} className="text-teal-500 dark:text-teal-400" />
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">Certifications</h3>
            </div>

            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 bg-slate-50 dark:bg-dark-700/100 rounded border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{cert.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-600 font-mono flex-shrink-0">{cert.date}</span>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
