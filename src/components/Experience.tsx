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
      company: "DexFreight",
      position: "Senior Data Engineer",
      period: "2019 - Present",
      location: "Barranquilla, Atlántico (Remote)",
      description: [
        "Led end-to-end project management for port operations optimization initiatives by deploying machine learning algorithms, improving efficiency across key workflows and reducing operational bottlenecks.",
        "VMRS decoding system using a speech-to-text transformer optimized to process audio samples with a signal-to-noise ratio over -58dB.",
        "Fleet manager algorithm using a state machine optimizing trucking operation, reducing driver utilization by 5%, deadhead miles by 27%, and non-revenue hours by 44%.",
        "Trip planning algorithm combining geospatial features, constraints functions, and Bayes theorem for processing thousands of records with an average response time under 5s.",
        "Shipment search system using filters based on available and customizable features with an average response of 600ms.",
        "ETL pipeline for clustering geospatial data of shipments to map layers optimizing data storage by 98% to improve customer experience.",
        "Designed and deployed a recommendation model for matching shipment preferences using the features and user s stated preference with an average response of 600ms."
      ],
      technologies: ["Apache arrow", "Fastapi", "Flask", "Azure", "Google Cloud", "Tensorflow", "Pytorch", "Python"]
    },
    {
      id: 2,
      company: "Uninorte",
      position: "Assistant Professor",
      period: "2019 - 2020",
      location: "Barranquilla, Atlántico",
      description: [
        "Instructed classes for digital signal processing using Matlab and Python focused on UI  design using the Qt framework with an average score of 4.7/5 in the professor review.",
        "Laboratory assistant for the course of digital electronics design with DC-AC prototypes using the Arduino UNO board with an average score of 4.3/5 in the professor review."
      ],
      technologies: ["PyQt", "Python", "Numpy"]
    },
    {
      id: 3,
      company: "Psychology PhD Thesis Study",
      position: "Data Science",
      period: "06/2019 - 08/2019",
      location: "Barranquilla, Atlántico",
      description: [
        "Designed and Analyzed of experiments for an instrument that measures the falsehood or credibility of stories for children between 8 and 11 years old.",
        "Identified linguistic descriptors for the study group using processing techniques from natural language with neuropsychology knowledge exploited with ML algorithms."
      ],
      technologies: ["Numpy", "Python", "ETL"]
    },
    {
      id: 4,
      company: "MadnessLab",
      position: "Backend Developer",
      period: "06/2019 - 12/2019",
      location: "remote",
      description: [
        "ELT pipelines for processing call audio files recorded for credit institutions or financial companies with support for over 10 FFmpeg codecs.",
        "Sensitive reports and analytics for users (and operators) for improving the quality of service by 20% using machine learning techniques based on natural language processing."
      ],
      technologies: ["Python", "Flask", "Fastapi", "Docker", "PostgreSQL", "Numpy"],
    },
    {
      id: 5,
      company: "Quatum Computing Framework",
      position: "Python Developer",
      period: "08/2021 - 10/2021",
      location: "Mexico (remote)",
      description: [
        "Tutoring and subsidiary in Python for the thesis modelling of a system/environment in the framework of deeper entropy rise (SEA-QT) using random matrices."
      ],
      technologies: ["Python", "Pandas", "Numpy"],
    },
    {
      id: 6,
      company: "Autonomous Surface Vessel",
      position: "Backend Developer",
      period: "01/2018 - 12/2018",
      location: "Barranquilla, Atlántico",
      description: [
        "Developed a prototype related to Autonomous Surface Boats using a GPS receiver for measuring the position of the boat, a compass and other sensors and actuators for navigation.",
        "Search algorithm using spherical geometry for the navigation with an error of 2 meters, leading to an acceptable error due to low-cost hardware limitations.using random matrixes."
      ],
      technologies: ["Python", "Flask", "Arduino", "Firestore"],
    },
    {
      id: 7,
      company: "AISMAP",
      position: "Frontend Developer",
      period: "01/2018 - 06/2018",
      location: "Barranquilla, Atlántico",
      description: [
        "Build the UI for a mobile application on the Automatic Identification System (AIS) used by ships and vessel traffic services.",
        "Accomplished time latency for the prototype close to 5s for transmitting data in realtime.",
        "The AIVDM / AIVDO communication protocol was used to collect and integrate information from publicly available sources and vessels using the AIS protocol."
      ],
      technologies: ["HTML5", "CSS3", "Firestore"],
    },
    {
      id: 8,
      company: "Trucking Tracking",
      position: "Full-stack Developer",
      period: "01/2018 - 06/2018",
      location: "Barranquilla, Atlántico",
      description: [
        "Designed the UI for the trucks in transit with historical and real-time locations with an average response of 200ms using Javascript and HTML5 and CSS3.",
        "Deployed the web application using Amazon Elastic Cloud Computing service EC2 for the server and the Amazon Relational Database Service for storage."
      ],
      technologies: ["HTML5", "kotlin", "Firestore"],
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
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Work Experience
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform -translate-y-2"></div>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company selector (sidebar) */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden">
                {jobs.map((job, index) => (
                  <div
                    key={job.id}
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 cursor-pointer transition-colors duration-300 ${activeIndex === index
                      ? 'bg-blue-600 dark:bg-blue-500 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                  >
                    <h3 className="font-semibold text-lg">{job.company}</h3>
                    <p className={activeIndex === index ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}>
                      {job.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Job details */}
            <div className="lg:col-span-8">
              <div
                className={`bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{jobs[activeIndex].position}</h3>
                  <h4 className="text-xl font-semibold mb-2">{jobs[activeIndex].company}</h4>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center mr-6 mb-2 sm:mb-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{jobs[activeIndex].period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{jobs[activeIndex].location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Responsibilities & Achievements</h5>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {jobs[activeIndex].description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {jobs[activeIndex].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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