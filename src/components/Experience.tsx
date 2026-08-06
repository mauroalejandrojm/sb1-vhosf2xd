import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const jobs: Job[] = [
    {
      id: 1,
      company: 'DexFreight',
      position: 'Senior Data Engineer',
      period: '2019 - Present',
      location: 'Barranquilla, Atlántico (Remote)',
      description: [
        'Led end-to-end project management for port operations optimization initiatives by deploying machine learning algorithms, improving efficiency across key workflows and reducing operational bottlenecks.',
        'VMRS decoding system using a speech-to-text transformer optimized to process audio samples with a signal-to-noise ratio over -58dB.',
        'Fleet manager algorithm using a state machine optimizing trucking operation, reducing driver utilization by 5%, deadhead miles by 27%, and non-revenue hours by 44%.',
        'Trip planning algorithm combining geospatial features, constraints functions, and Bayes theorem for processing thousands of records with an average response time under 5s.',
        'ETL pipeline for clustering geospatial data of shipments to map layers optimizing data storage by 98% to improve customer experience.',
      ],
      technologies: ['Apache Arrow', 'FastAPI', 'Flask', 'Azure', 'Google Cloud', 'TensorFlow', 'PyTorch', 'Python'],
    },
    {
      id: 2,
      company: 'Uninorte',
      position: 'Assistant Professor',
      period: '2019 - 2020',
      location: 'Barranquilla, Atlántico',
      description: [
        'Instructed classes for digital signal processing using Matlab and Python focused on UI design using the Qt framework with an average score of 4.7/5 in the professor review.',
        'Laboratory assistant for the course of digital electronics design with DC-AC prototypes using the Arduino UNO board with an average score of 4.3/5.',
      ],
      technologies: ['PyQt', 'Python', 'NumPy'],
    },
    {
      id: 3,
      company: 'Psychology PhD Thesis Study',
      position: 'Data Science',
      period: '06/2019 - 08/2019',
      location: 'Barranquilla, Atlántico',
      description: [
        'Designed and analyzed experiments for an instrument that measures the falsehood or credibility of stories for children between 8 and 11 years old.',
        'Identified linguistic descriptors for the study group using NLP techniques with neuropsychology knowledge exploited with ML algorithms.',
      ],
      technologies: ['NumPy', 'Python', 'ETL'],
    },
    {
      id: 4,
      company: 'MadnessLab',
      position: 'Backend Developer',
      period: '06/2019 - 12/2019',
      location: 'Remote',
      description: [
        'ELT pipelines for processing call audio files recorded for credit institutions or financial companies with support for over 10 FFmpeg codecs.',
        'Sensitive reports and analytics for users and operators for improving the quality of service by 20% using ML techniques based on natural language processing.',
      ],
      technologies: ['Python', 'Flask', 'FastAPI', 'Docker', 'PostgreSQL', 'NumPy'],
    },
    {
      id: 5,
      company: 'Quantum Computing Framework',
      position: 'Python Developer',
      period: '08/2021 - 10/2021',
      location: 'Mexico (Remote)',
      description: [
        'Tutoring and subsidiary in Python for the thesis modelling of a system/environment in the framework of deeper entropy rise (SEA-QT) using random matrices.',
      ],
      technologies: ['Python', 'Pandas', 'NumPy'],
    },
    {
      id: 6,
      company: 'Autonomous Surface Vessel',
      position: 'Backend Developer',
      period: '01/2018 - 12/2018',
      location: 'Barranquilla, Atlántico',
      description: [
        'Developed a prototype related to Autonomous Surface Boats using a GPS receiver for measuring the position of the boat, a compass and other sensors and actuators for navigation.',
        'Search algorithm using spherical geometry for the navigation with an error of 2 meters, leading to an acceptable error due to low-cost hardware limitations.',
      ],
      technologies: ['Python', 'Flask', 'Arduino', 'Firestore'],
    },
    {
      id: 7,
      company: 'AISMAP',
      position: 'Frontend Developer',
      period: '01/2018 - 06/2018',
      location: 'Barranquilla, Atlántico',
      description: [
        'Built the UI for a mobile application on the Automatic Identification System (AIS) used by ships and vessel traffic services.',
        'Accomplished time latency for the prototype close to 5s for transmitting data in real-time using the AIVDM/AIVDO communication protocol.',
      ],
      technologies: ['HTML5', 'CSS3', 'Firestore'],
    },
    {
      id: 8,
      company: 'Trucking Tracking',
      position: 'Full-stack Developer',
      period: '01/2018 - 06/2018',
      location: 'Barranquilla, Atlántico',
      description: [
        'Designed the UI for trucks in transit with historical and real-time locations with an average response of 200ms using JavaScript, HTML5 and CSS3.',
        'Deployed the web application using Amazon EC2 for the server and Amazon RDS for storage.',
      ],
      technologies: ['HTML5', 'Kotlin', 'Firestore'],
    },
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
    <section id="experience" ref={sectionRef} className="py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label font-mono">// 03 ─ deliver</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="section-label text-teal-500 dark:text-teal-400 font-mono">CAREER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-2xl">
            Work experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar: company list */}
          <div className="lg:col-span-4">
            <div className="space-y-1">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-4 rounded border-l-2 transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-teal-500 dark:border-teal-400 bg-white dark:bg-dark-800'
                      : 'border-transparent hover:border-slate-300 dark:hover:border-white/20 hover:bg-white/50 dark:hover:bg-dark-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-sm font-semibold ${activeIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                        {job.company}
                      </h3>
                      <p className={`text-xs mt-0.5 ${activeIndex === index ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 dark:text-slate-600'}`}>
                        {job.position}
                      </p>
                    </div>
                    <span className={`text-xs font-mono ${activeIndex === index ? 'text-teal-500 dark:text-teal-400' : 'text-slate-300 dark:text-slate-700'}`}>
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <div className={`bg-white dark:bg-dark-800 rounded-lg p-8 border border-slate-200 dark:border-white/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono text-teal-500 dark:text-teal-400">ROLE 0{activeIndex + 1}</span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/10"></div>
              </div>

              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">{jobs[activeIndex].position}</h3>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{jobs[activeIndex].company}</h4>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-slate-500 dark:text-slate-500 mb-8">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{jobs[activeIndex].period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{jobs[activeIndex].location}</span>
                </div>
              </div>

              <div className="mb-8">
                <h5 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
                  Responsibilities & Achievements
                </h5>
                <ul className="space-y-3">
                  {jobs[activeIndex].description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="text-teal-500 dark:text-teal-400 mt-1 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
                  Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {jobs[activeIndex].technologies.map((tech, i) => (
                    <span key={i} className="tag-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
