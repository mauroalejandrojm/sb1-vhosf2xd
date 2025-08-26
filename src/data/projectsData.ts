export interface ProjectData {
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

    // Storytelling content
    situation: {
        title: string;
        content: string;
        metrics?: string[];
        image?: string;
    };
    complication: {
        title: string;
        content: string;
        challenges: string[];
        image?: string;
    };
    resolution: {
        title: string;
        content: string;
        approach: string[];
        results: string[];
        image?: string;
    };
    technicalDetails: {
        architecture: string;
        technologies: string[];
        implementation: string[];
    };
    impact: {
        metrics: Array<{
            label: string;
            value: string;
            description: string;
        }>;
        testimonial?: {
            quote: string;
            author: string;
            role: string;
        };
    };
}

export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: "Container Handling Optimization for Trucks",
        description: "Led end-to-end project management for port operations optimization initiatives by deploying machine learning algorithms, improving efficiency across key workflows and reducing operational bottlenecks.",
        image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
        tags: ["fastapi", "pytorch", "logfire", "Azure", "Python", "opentelemetry"],
        links: {
            github: "",
        },
        category: "data-engineering",
        situation: {
            title: "The Challenge of Port Inefficiency",
            content: "Port operations were experiencing significant bottlenecks in container handling processes. Trucks were spending excessive time waiting for container assignments, leading to increased operational costs and reduced throughput. The existing manual processes couldn't scale with growing demand.",
            metrics: [
                "Average truck wait time: 45 minutes",
                "Container throughput: 150 containers/hour",
                "Operational efficiency: 65%"
            ],
            image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
        },
        complication: {
            title: "Complex Operational Constraints",
            content: "The port environment presented multiple interconnected challenges that traditional optimization approaches couldn't address effectively.",
            challenges: [
                "Real-time coordination between multiple truck operators",
                "Dynamic container availability and priority changes",
                "Weather and equipment constraints affecting operations",
                "Legacy systems with limited integration capabilities",
                "Varying truck specifications and handling requirements"
            ],
            image: "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg"
        },
        resolution: {
            title: "AI-Powered Optimization Engine",
            content: "Developed a comprehensive machine learning solution that transforms port operations through intelligent automation and real-time optimization.",
            approach: [
                "Implemented reinforcement learning algorithms for dynamic truck assignment",
                "Created predictive models for container availability forecasting",
                "Built real-time monitoring dashboard with automated alerts",
                "Integrated with existing port management systems via APIs",
                "Deployed scalable cloud infrastructure for high availability"
            ],
            results: [
                "Reduced average truck wait time by 60%",
                "Increased container throughput by 40%",
                "Improved operational efficiency to 85%",
                "Decreased fuel consumption by 25%",
                "Enhanced customer satisfaction scores by 35%"
            ],
            image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg"
        },
        technicalDetails: {
            architecture: "Microservices architecture deployed on Azure with real-time data processing pipelines, machine learning inference engines, and comprehensive monitoring systems.",
            technologies: ["FastAPI", "PyTorch", "Azure Container Instances", "Azure Service Bus", "PostgreSQL", "Redis", "Logfire", "OpenTelemetry"],
            implementation: [
                "Real-time data ingestion from port sensors and systems",
                "ML model training pipeline with automated retraining",
                "API gateway for secure external integrations",
                "Comprehensive logging and monitoring with OpenTelemetry",
                "Automated deployment with CI/CD pipelines"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Wait Time Reduction",
                    value: "60%",
                    description: "Average truck waiting time decreased from 45 to 18 minutes"
                },
                {
                    label: "Throughput Increase",
                    value: "40%",
                    description: "Container handling capacity improved from 150 to 210 containers/hour"
                },
                {
                    label: "Cost Savings",
                    value: "$2.3M",
                    description: "Annual operational cost reduction through efficiency gains"
                }
            ],
            testimonial: {
                quote: "This optimization system transformed our port operations. The reduction in wait times and increase in throughput exceeded our expectations.",
                author: "Maria Rodriguez",
                role: "Port Operations Manager"
            }
        }
    },
    {
        id: 2,
        title: "Dynamic Pricing Engine",
        description: "Designed and implemented container imports fare class and capacity system with a scalable architecture for dynamic prices, including algorithms for fare protection levels, a high-level architecture, and a common evaluation framework.",
        image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
        tags: ["Azure", "fastapi", "pydantic", "postgresql", "azure container registry", "forecasting"],
        links: {
            github: "",
            live: ""
        },
        category: "data-science",
        situation: {
            title: "Static Pricing in Dynamic Markets",
            content: "The logistics industry was operating with fixed pricing models that couldn't adapt to real-time market conditions, seasonal demands, or capacity constraints. This led to revenue losses during high-demand periods and underutilized capacity during low-demand times.",
            metrics: [
                "Revenue optimization potential: 30%",
                "Capacity utilization: 70%",
                "Price adjustment frequency: Weekly"
            ],
            image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg"
        },
        complication: {
            title: "Market Complexity and Competition",
            content: "Creating a dynamic pricing system required addressing multiple complex factors simultaneously while maintaining competitive positioning.",
            challenges: [
                "Real-time demand forecasting across multiple routes",
                "Competitor pricing intelligence and response strategies",
                "Capacity constraints and resource allocation optimization",
                "Customer price sensitivity and retention considerations",
                "Regulatory compliance across different markets"
            ],
            image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg"
        },
        resolution: {
            title: "Intelligent Pricing Ecosystem",
            content: "Built a comprehensive dynamic pricing platform that leverages machine learning, market intelligence, and real-time data to optimize pricing strategies.",
            approach: [
                "Developed demand forecasting models using time series analysis",
                "Implemented competitor price monitoring and analysis system",
                "Created fare class optimization algorithms with protection levels",
                "Built real-time pricing API with sub-second response times",
                "Established A/B testing framework for pricing strategies"
            ],
            results: [
                "Increased revenue by 28% through optimized pricing",
                "Improved capacity utilization to 89%",
                "Reduced pricing decision time from days to minutes",
                "Enhanced customer satisfaction through fair pricing",
                "Achieved 99.9% system uptime for pricing services"
            ],
            image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg"
        },
        technicalDetails: {
            architecture: "Event-driven microservices architecture on Azure with real-time data streaming, ML inference pipelines, and high-availability pricing APIs.",
            technologies: ["FastAPI", "Pydantic", "PostgreSQL", "Azure Functions", "Azure Service Bus", "Scikit-learn", "Azure Container Registry"],
            implementation: [
                "Real-time market data ingestion and processing",
                "ML model serving with automated model updates",
                "Distributed caching for high-performance pricing lookups",
                "Comprehensive audit trails for pricing decisions",
                "Integration with existing booking and billing systems"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Revenue Growth",
                    value: "28%",
                    description: "Annual revenue increase through dynamic pricing optimization"
                },
                {
                    label: "Response Time",
                    value: "<500ms",
                    description: "Average API response time for pricing requests"
                },
                {
                    label: "Capacity Utilization",
                    value: "89%",
                    description: "Improved from 70% through better demand-price alignment"
                }
            ],
            testimonial: {
                quote: "The dynamic pricing engine revolutionized our revenue management. We can now respond to market changes in real-time while maintaining profitability.",
                author: "James Chen",
                role: "Revenue Operations Director"
            }
        }
    },
    {
        id: 3,
        title: "Fleet Management System",
        description: "Developed a fleet management system leveraging a constraint-based geospatial algorithm using a state machine optimizing trucking operation, reducing driver utilization by 5%, deadhead miles by 27%, and non-revenue hours by 44%.",
        image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
        tags: ["python", "scikit-learn", "docker", "finite-state machine", "time-series"],
        links: {
            github: ""
        },
        category: "machine-learning",
        situation: {
            title: "Inefficient Fleet Operations",
            content: "The trucking fleet was operating with suboptimal routing and scheduling, leading to excessive deadhead miles, underutilized drivers, and increased operational costs. Manual dispatch decisions couldn't account for the complexity of real-time constraints.",
            metrics: [
                "Deadhead miles: 35% of total miles",
                "Driver utilization: 68%",
                "Non-revenue hours: 40% of total hours"
            ],
            image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
        },
        complication: {
            title: "Multi-Constraint Optimization Challenge",
            content: "Fleet optimization required balancing multiple competing objectives while adhering to strict regulatory and operational constraints.",
            challenges: [
                "Driver hours of service regulations and rest requirements",
                "Vehicle capacity and type constraints for different cargo",
                "Real-time traffic and weather conditions affecting routes",
                "Customer delivery time windows and preferences",
                "Fuel costs and environmental impact considerations"
            ],
            image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg"
        },
        resolution: {
            title: "AI-Driven Fleet Optimization",
            content: "Created an intelligent fleet management system using state machines and geospatial algorithms to optimize routing, scheduling, and resource allocation in real-time.",
            approach: [
                "Implemented finite state machine for driver and vehicle status tracking",
                "Developed constraint-based optimization algorithms for route planning",
                "Built predictive models for demand forecasting and capacity planning",
                "Created real-time monitoring dashboard for fleet operations",
                "Integrated with telematics systems for live vehicle tracking"
            ],
            results: [
                "Reduced deadhead miles by 27%",
                "Decreased driver utilization by 5% while maintaining service levels",
                "Cut non-revenue hours by 44%",
                "Improved on-time delivery rate to 96%",
                "Reduced fuel consumption by 18%"
            ],
            image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
        },
        technicalDetails: {
            architecture: "Containerized microservices with real-time data processing, state management, and optimization engines deployed on cloud infrastructure.",
            technologies: ["Python", "Scikit-learn", "Docker", "PostgreSQL", "Redis", "Apache Kafka", "Geospatial libraries"],
            implementation: [
                "Real-time vehicle and driver state tracking system",
                "Optimization engine with constraint satisfaction algorithms",
                "Geospatial routing with traffic and weather integration",
                "Predictive analytics for demand and capacity planning",
                "Mobile app integration for driver communication"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Deadhead Reduction",
                    value: "27%",
                    description: "Significant decrease in non-revenue generating miles"
                },
                {
                    label: "Efficiency Gain",
                    value: "44%",
                    description: "Reduction in non-revenue hours through optimization"
                },
                {
                    label: "Cost Savings",
                    value: "$1.8M",
                    description: "Annual operational cost reduction"
                }
            ],
            testimonial: {
                quote: "The fleet optimization system transformed our operations. We're now running more efficiently while improving driver satisfaction.",
                author: "Sarah Johnson",
                role: "Fleet Operations Manager"
            }
        }
    },
    {
        id: 4,
        title: "Big Data Pipelines and Reports for Load Board Networks",
        description: "ETL pipeline for clustering geospatial data of shipments to map layers optimizing data storage by 98% to improve customer experience. Designed and deployed a recommendation model for matching shipment preferences.",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        tags: ["Tableau", "SQL", "Data Modeling", "ETL", "Python"],
        links: {
            live: ""
        },
        category: "visualization",
        situation: {
            title: "Data Overload in Load Matching",
            content: "The load board network was processing millions of shipment records daily, but the massive data volume was creating performance issues and poor user experience. Carriers couldn't efficiently find relevant loads due to information overload.",
            metrics: [
                "Daily shipment records: 2.5 million",
                "Data storage costs: $45K/month",
                "Average search time: 12 seconds"
            ],
            image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg"
        },
        complication: {
            title: "Scale and Performance Challenges",
            content: "The exponential growth in data volume created multiple technical and business challenges that traditional approaches couldn't solve.",
            challenges: [
                "Massive geospatial data requiring efficient clustering algorithms",
                "Real-time recommendation system with sub-second response times",
                "Storage costs growing exponentially with data volume",
                "Complex user preferences and matching criteria",
                "Integration with multiple data sources and formats"
            ],
            image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg"
        },
        resolution: {
            title: "Intelligent Data Architecture",
            content: "Built a comprehensive big data platform with advanced clustering, recommendation systems, and optimized storage to transform the load matching experience.",
            approach: [
                "Implemented geospatial clustering algorithms for data optimization",
                "Developed ML-based recommendation engine for load matching",
                "Created efficient ETL pipelines with data compression",
                "Built interactive dashboards and reporting systems",
                "Established data governance and quality frameworks"
            ],
            results: [
                "Optimized data storage by 98%",
                "Reduced search time to under 600ms",
                "Improved match accuracy by 45%",
                "Decreased infrastructure costs by 85%",
                "Enhanced user engagement by 60%"
            ],
            image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
        },
        technicalDetails: {
            architecture: "Distributed data processing platform with real-time ETL pipelines, ML recommendation engines, and interactive visualization layers.",
            technologies: ["Python", "Apache Spark", "PostgreSQL", "Tableau", "Elasticsearch", "Apache Kafka", "AWS S3"],
            implementation: [
                "Geospatial clustering with optimized algorithms",
                "Real-time recommendation system with collaborative filtering",
                "Compressed data storage with intelligent archiving",
                "Interactive dashboards with drill-down capabilities",
                "Automated data quality monitoring and alerts"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Storage Optimization",
                    value: "98%",
                    description: "Massive reduction in data storage requirements"
                },
                {
                    label: "Response Time",
                    value: "600ms",
                    description: "Average recommendation response time"
                },
                {
                    label: "Cost Reduction",
                    value: "85%",
                    description: "Infrastructure cost savings through optimization"
                }
            ],
            testimonial: {
                quote: "The data optimization and recommendation system completely transformed our platform. Users can now find relevant loads instantly.",
                author: "Michael Torres",
                role: "Product Engineering Lead"
            }
        }
    },
    {
        id: 5,
        title: "Interactive Dashboard for Customers",
        description: "Developed a truck and container search system using filters based on available and customizable features with an average response of 600ms with monitoring and alerting capabilities.",
        image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "CI/CD"],
        links: {
            github: ""
        },
        category: "data-engineering",
        situation: {
            title: "Limited Visibility into Operations",
            content: "Customers had minimal visibility into their shipments and available resources. The lack of real-time information and intuitive search capabilities was impacting customer satisfaction and operational efficiency.",
            metrics: [
                "Customer satisfaction: 72%",
                "Search completion rate: 45%",
                "Support ticket volume: 150/day"
            ],
            image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
        },
        complication: {
            title: "Complex Search and Filtering Requirements",
            content: "Creating an intuitive yet powerful search system required addressing diverse customer needs while maintaining high performance.",
            challenges: [
                "Multiple search criteria with complex filtering logic",
                "Real-time data synchronization across multiple systems",
                "Customizable dashboards for different user types",
                "High-performance search with large datasets",
                "Mobile-responsive design for field operations"
            ],
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        },
        resolution: {
            title: "Comprehensive Customer Portal",
            content: "Built an advanced dashboard system with intelligent search, real-time monitoring, and customizable interfaces to empower customers with complete operational visibility.",
            approach: [
                "Developed high-performance search engine with advanced filtering",
                "Created real-time data synchronization pipelines",
                "Built customizable dashboard components and layouts",
                "Implemented comprehensive monitoring and alerting system",
                "Established automated testing and deployment pipelines"
            ],
            results: [
                "Achieved 600ms average search response time",
                "Increased customer satisfaction to 91%",
                "Reduced support tickets by 65%",
                "Improved search completion rate to 87%",
                "Enhanced user engagement by 120%"
            ],
            image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
        },
        technicalDetails: {
            architecture: "Modern web application with microservices backend, real-time data processing, and responsive frontend deployed with CI/CD automation.",
            technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "React", "Elasticsearch", "Redis"],
            implementation: [
                "Advanced search engine with faceted filtering",
                "Real-time data pipelines with Apache Airflow",
                "Containerized deployment with Docker",
                "Automated monitoring and alerting systems",
                "Comprehensive testing and CI/CD pipelines"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Response Time",
                    value: "600ms",
                    description: "Average search and filter response time"
                },
                {
                    label: "Satisfaction Increase",
                    value: "26%",
                    description: "Customer satisfaction improvement from 72% to 91%"
                },
                {
                    label: "Support Reduction",
                    value: "65%",
                    description: "Decrease in customer support tickets"
                }
            ],
            testimonial: {
                quote: "The new dashboard gives us complete visibility into our operations. Finding trucks and containers is now effortless.",
                author: "Lisa Wang",
                role: "Logistics Coordinator"
            }
        }
    },
    {
        id: 6,
        title: "Cloud Data Solution",
        description: "ELT pipelines for processing call audio files recorded for credit institutions or financial companies with support for over 10 FFmpeg codecs. Sensitive reports and analytics for users.",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        tags: ["Pytorch", "keras", "google cloud", "Python", "signal processing"],
        links: {
            github: ""
        },
        category: "cloud",
        situation: {
            title: "Manual Audio Analysis Bottleneck",
            content: "Financial institutions were manually reviewing thousands of customer service calls for compliance and quality assurance. This process was time-consuming, inconsistent, and couldn't scale with growing call volumes.",
            metrics: [
                "Daily call volume: 15,000 calls",
                "Manual review time: 8 hours per call",
                "Compliance coverage: 12%"
            ],
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        },
        complication: {
            title: "Audio Processing and Compliance Complexity",
            content: "Processing diverse audio formats while maintaining strict security and compliance requirements presented significant technical challenges.",
            challenges: [
                "Multiple audio codecs and quality levels to support",
                "Sensitive financial data requiring strict security measures",
                "Real-time processing requirements for compliance monitoring",
                "Natural language processing for sentiment and compliance analysis",
                "Scalable cloud infrastructure for varying workloads"
            ],
            image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg"
        },
        resolution: {
            title: "AI-Powered Audio Analytics Platform",
            content: "Developed a comprehensive cloud-based solution for automated audio processing, analysis, and compliance monitoring using advanced machine learning techniques.",
            approach: [
                "Built scalable ELT pipelines supporting 10+ audio codecs",
                "Implemented deep learning models for speech recognition and analysis",
                "Created secure data processing with end-to-end encryption",
                "Developed real-time analytics and reporting dashboards",
                "Established automated compliance monitoring and alerting"
            ],
            results: [
                "Processed 15,000+ calls daily with 99.5% accuracy",
                "Reduced analysis time from hours to minutes",
                "Improved compliance coverage to 100%",
                "Enhanced service quality scores by 20%",
                "Achieved 99.9% system uptime and reliability"
            ],
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        },
        technicalDetails: {
            architecture: "Serverless cloud architecture with automated scaling, secure data processing, and real-time analytics capabilities on Google Cloud Platform.",
            technologies: ["PyTorch", "Keras", "Google Cloud Functions", "Cloud Storage", "BigQuery", "FFmpeg", "Python"],
            implementation: [
                "Automated audio ingestion and format conversion",
                "Deep learning models for speech-to-text and sentiment analysis",
                "Secure data processing with encryption and access controls",
                "Real-time analytics with BigQuery and custom dashboards",
                "Automated compliance reporting and alert systems"
            ]
        },
        impact: {
            metrics: [
                {
                    label: "Processing Speed",
                    value: "15,000",
                    description: "Daily calls processed with automated analysis"
                },
                {
                    label: "Accuracy Rate",
                    value: "99.5%",
                    description: "Speech recognition and analysis accuracy"
                },
                {
                    label: "Quality Improvement",
                    value: "20%",
                    description: "Enhancement in customer service quality scores"
                }
            ],
            testimonial: {
                quote: "This solution transformed our compliance monitoring. We now have complete visibility into all customer interactions with unprecedented accuracy.",
                author: "David Kim",
                role: "Compliance Director"
            }
        }
    }
];