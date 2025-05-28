import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

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
      degree: "Master of Science in Electronics Engineering",
      institution: "Uninorte",
      period: "06/2019 - 04/2023",
      description: "dentification of expressive descriptors for style extraction in music analysis using linear and non linear models."
    },
    {
      degree: "Bachelor in Electronics Engineering",
      institution: "Uninorte",
      period: "06/2014 - 01/2019",
      description: "System for the measurement of musical similarity, using expressive markers considering the acoustic intensity and temporal metrics."
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Project Management: Professional Certificate",
      issuer: "Google on Coursera",
      date: "2025",
      url: "https://www.credly.com/badges/3ec3cf4c-65ae-4da4-a304-4f1656b6b57d/linked_in_profile"
    },
    {
      name: "Introduction to Kubernetes (LFS158)",
      issuer: "The linux Foundation",
      date: "2025",
      url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c4b0e53f-666a-4852-b6c9-9e81653a594f-mauro-jimenez-1df12478-91a8-46df-be0b-1b29c27985d6-certificate.pdf"
    },
    {
      name: "API Academy Certification Program",
      issuer: "API Academy",
      date: "2021",
    },
    {
      name: "Convolutional Networks for Visual Recognition",
      issuer: "Uninorte",
      date: "2018",
    },
    {
      name: "International Test of English Proficiency ITEP",
      issuer: "CEFR Level B2",
      date: "2018",
    }
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
      id="education" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Education & Certifications
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform -translate-y-2"></div>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full before:z-10
                      ${index < education.length - 1 ? 'before:shadow-[0_12px_0_0_#fff,0_24px_0_0_#fff] dark:before:shadow-[0_12px_0_0_#0f172a,0_24px_0_0_#0f172a]' : ''}
                      after:content-[''] after:absolute after:left-1.5 after:top-2 after:w-[1px] after:h-full after:bg-slate-200 dark:after:bg-slate-700 after:-z-10
                      transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
                  >
                    <div className="mb-1 flex flex-wrap justify-between items-baseline">
                      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">{edu.degree}</h4>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{edu.period}</span>
                    </div>
                    <p className="text-base font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <Award size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className={`bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border-l-4 border-blue-600 dark:border-blue-400 transform transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">{cert.date}</span>
                    </div>
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;