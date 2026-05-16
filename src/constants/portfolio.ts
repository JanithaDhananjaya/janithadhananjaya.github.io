import { Code2, Database } from "lucide-react";

export const personalInfo = {
  name: "Janitha Silva",
  role: "Senior Full Stack Engineer",
  tagline: {
    highlight: "Senior Full Stack Engineer",
    description: "Specialized in Next.js Ecosystems & Scalable Microservices"
  },
  bio: "Senior Full-Stack Engineer with 7+ years of experience designing, developing, and deploying enterprise-grade SaaS applications. Expert in Java (Spring Boot) and Microservices architecture with deep specialization in React and Next.js. Proven track record in optimizing system performance and leading legacy monolith decompositions into scalable microservices.",
  email: "janithadhananjaya@gmail.com",
  avatar: "/images/me.jpg",
  socials: {
    github: "https://github.com/JanithaDhananjaya",
    linkedin: "https://linkedin.com/in/janitha-silva-657b3b142",
  },
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Core Technologies", value: "15+" },
    { label: "Location", value: "Sri Lanka" },
  ]
};

export const educationDetails = [
  {
    id: 1,
    degree: "B.Sc. (Hons) Computer Science",
    institution: "Informatics Institute of Technology (IIT) in Collaboration with University of Westminster, UK",
    period: "2018 – 2022",
    description: "Focus on Advanced Algorithms and Software Engineering.",
  },
  {
    id: 2,
    degree: "Graduate Diploma in Software Engineering (GDSE)",
    institution: "Institute of Java Software Engineering — Authorized Oracle Partner",
    period: "2016 – 2018",
    description: "",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Embla Software Innovations",
    logo: "https://cdn.simpleicons.org/e/60a5fa",
    role: "Senior Software Engineer",
    period: "May 2023 – Present",
    location: "Remote / Singapore",
    tech: ["Next.js", "React", "Java", "Spring Boot", "Azure", "TypeScript"],
    responsibilities: [
      { label: "Full-Stack Product Engineering", text: "Leading end-to-end execution for Zuellig Pharma's enterprise web portals, integrating Next.js App Router frontends with Java/Spring Boot backends." },
      { label: "Enterprise Architecture", text: "Architected cloud environments using Azure APIM, Key Vault, and Blob Storage, ensuring 100% data compliance across Dev, Staging, and Production." },
      { label: "Technical Leadership", text: "Mentoring a team of 4+ developers on SOLID principles and Clean Architecture while delivering a major system rebranding under aggressive enterprise deadlines." },
    ],
  },
  {
    id: 2,
    company: "Axiata Digital Labs",
    logo: "https://cdn.simpleicons.org/axiata/005596",
    role: "Senior Software Engineer",
    period: "Jan 2021 – May 2023",
    location: "Sri Lanka",
    tech: ["Java", "Spring Boot", "React", "Node.js", "Redux", "PostgreSQL"],
    responsibilities: [
      { label: "Architecture Transformation", text: "Decomposed a legacy Node.js/Express.js monolith into scalable Java Spring Boot microservices, maintaining both backends in parallel with zero downtime for enterprise clients." },
      { label: "Frontend Modernization", text: "Led migration of the core React app from Class components to Functional Components with Hooks, significantly improving maintainability and rendering performance." },
      { label: "Security & Compliance", text: "Remediated penetration test vulnerabilities, resulting in a 50% reduction in security risks across the platform." },
    ],
  },
  {
    id: 3,
    company: "Dialog Axiata PLC",
    logo: "https://cdn.simpleicons.org/dialog/FFED00",
    role: "Software Engineer",
    period: "Aug 2019 – Jan 2021",
    location: "Sri Lanka",
    tech: ["Java", "Angular", "Spring Boot", "iText PDF"],
    responsibilities: [
      { label: "Multi-language Document Engine", text: "Engineered an automated PDF generation system for customer payment plans with full i18n support (English, Sinhala, Tamil), overcoming complex Indic script rendering challenges." },
      { label: "Core Systems", text: "Resolved 100+ defects in a mission-critical telecom CRM and billing platform, directly improving product quality by 15%." },
    ],
  },
  {
    id: 4,
    company: "Encyte (PVT) LTD",
    logo: "https://cdn.simpleicons.org/e/ffffff",
    role: "Associate Software Engineer",
    period: "Aug 2018 – Aug 2019",
    location: "Sri Lanka",
    tech: ["React", "Python", "Django", "Node.js", "MongoDB", "Firebase"],
    responsibilities: [
      { label: "React.js Standardization", text: "Pioneered React.js adoption from the ground up, building reusable component libraries that increased team development efficiency by 25%." },
      { label: "Full-Stack Engineering", text: "Engineered campaign management platforms with Node.js, React, MongoDB, and Firebase, implementing real-time data synchronization for distributed marketing modules." },
    ],
  },
];


export const allProjects = [
  {
    id: "eZPharmacy",
    title: "eZPharmacy",
    subtitle: "Digital Healthcare & Pharmacy Platform",
    description: "Integrated healthcare platform built with Next.js, GraphQL, and secure authentication systems to connect patients, doctors, and pharmacies for digital prescription management and medicine fulfillment.",
    challenge: "Building a high-performance, secure bridge between patients, doctors, and pharmacies while adhering to Singapore's stringent national security standards, including national digital identity verification.",
    execution: [
      { label: "Architecture", text: "Refactored and enhanced the Next.js frontend application based on Figma designs using Tailwind CSS and Ant Design, improving UI consistency and responsiveness." },
      { label: "Identity & Security", text: "Implemented secure authentication flows using NextAuth and integrated Singpass for national-level identity verification across the platform." },
      { label: "Data Strategy", text: "Integrated backend services using GraphQL with Apollo Client to enable efficient data fetching and state management, eliminating over-fetching across complex prescription workflows." },
      { label: "Code Quality", text: "Enforced code quality and consistency across the frontend using ESLint and Prettier, and built a role-based system supporting patients, doctors, and pharmacists." },
    ],
    keyResult: "Delivered a seamless, enterprise-grade UI supporting end-to-end digital prescription fulfillment for a nationwide user base in Singapore.",
    tech: ["Next.js", "GraphQL", "Apollo", "Singpass", "NextAuth", "TailwindCSS", "Ant Design"],
    link: "https://github.com",
    isFeatured: true,
  },
  {
    id: "eZTracker",
    title: "eZTracker",
    subtitle: "Supply Chain & Inventory Management",
    description: "Enterprise-grade supply chain platform built with Next.js and Spring Boot backend services to manage inventory operations across multiple warehouses and client locations, supporting end-to-end workflows.",
    challenge: "Managing complex supply chain workflows — including Receiving, Dispatching, and Decommissioning — across multiple global warehouse locations with 100% accuracy and real-time quantity verification.",
    execution: [
      { label: "Barcode Scanning", text: "Developed barcode scanning functionality within a Next.js frontend to improve inventory tracking accuracy and enable real-time quantity verification at the point of scan." },
      { label: "Access Control", text: "Implemented complex backend workflows with authentication, validation, and role-based access control (RBAC) using Okta to ensure data integrity across all user roles." },
      { label: "Component Architecture", text: "Designed and built modular, reusable React components to enhance maintainability and scalability of the frontend architecture." },
      { label: "Optimization", text: "Implemented centralized error handling and optimized asynchronous operations for core workflows such as receiving and dispatching, improving system performance and responsiveness." },
    ],
    keyResult: "Standardized warehouse operations into a modular, reusable system that minimized manual entry errors and improved overall supply chain visibility across multiple locations.",
    tech: ["Next.js", "React", "Spring Boot", "Okta", "MongoDB", "TailwindCSS"],
    link: "https://github.com",
    isFeatured: true,
  },
  {
    id: "MarketPlace",
    title: "MarketPlace",
    subtitle: "Enterprise Digital Services Platform",
    description: "Multi-module enterprise platform built on Java Spring Boot microservices, delivering business solutions including employee management, customer engagement, and campaign management across client and admin applications.",
    challenge: "Reducing backend latency and hardening security for a high-concurrency platform handling sensitive employee and campaign management data for large enterprises, while maintaining 100% uptime.",
    execution: [
      { label: "Microservices", text: "Designed and developed scalable microservices using Java Spring Boot, improving overall system performance by approximately 30%." },
      { label: "API & Integrations", text: "Led API design and third-party integrations to enable seamless interoperability across multiple enterprise systems." },
      { label: "Performance Tuning", text: "Optimized PostgreSQL queries and implemented Redis caching strategies, significantly reducing response times. Offloaded image and document storage to AWS S3 for high availability." },
      { label: "Security", text: "Implemented robust security mechanisms within Spring Boot services, reducing system vulnerabilities by approximately 50% based on penetration testing results." },
    ],
    keyResult: "Launched new enterprise features driving a 20% increase in user engagement, a 30% boost in system performance, and maintained a 100% security validation record.",
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL", "AWS S3", "Docker", "RabbitMQ"],
    link: "https://github.com",
    isFeatured: true,
  },
  {
    id: "geo-reach",
    title: "Geo Reach",
    subtitle: "Geo-Targeted Campaign Management",
    description: "Location-based marketing platform built with Java Spring Boot and React.js, enabling businesses to create and manage geo-targeted campaigns with real-time tracking across web and mobile systems.",
    challenge: "Building a scalable platform capable of processing large-scale location data and campaign targeting logic while ensuring seamless synchronization across web and mobile channels.",
    execution: [
      { label: "Backend Services", text: "Developed backend services using Java Spring Boot to handle campaign management, targeting logic, and large-scale data processing." },
      { label: "Frontend Dashboards", text: "Built interactive frontend dashboards using React.js for real-time campaign monitoring and administrative control." },
      { label: "Security", text: "Integrated Keycloak for secure authentication and authorization across all services." },
      { label: "Performance & Async", text: "Implemented Redis caching and RabbitMQ messaging to improve system performance, scalability, and asynchronous processing for high-throughput campaign operations." },
    ],
    keyResult: "Enabled businesses to run real-time geo-targeted campaigns with consistent data synchronization across web and mobile platforms.",
    tech: ["Java", "Spring Boot", "React", "Redis", "RabbitMQ", "Keycloak", "PostgreSQL"],
    link: "https://github.com",
    isFeatured: false,
  },
  {
    id: "fieldsmart",
    title: "Fieldsmart",
    subtitle: "Field Service & Job Management Platform",
    description: "Comprehensive SaaS-based workflow management platform designed to digitize and streamline operations for trade contractors and field service businesses, automating the entire job lifecycle from scheduling to client communications.",
    challenge: "Replacing manual, paper-based field operations with a fully automated digital platform that could handle complex scheduling, real-time reporting, and automated client communications at scale.",
    execution: [
      { label: "Workflow Engine", text: "Implemented the core workflow management engine from the ground up using Django and React.js to automate job scheduling and field operations for trade contractors." },
      { label: "API Architecture", text: "Developed a robust set of RESTful APIs using Django Rest Framework (DRF), ensuring high-performance data synchronization between the PostgreSQL backend and the dynamic React frontend." },
      { label: "Database Design", text: "Designed complex relational schemas in PostgreSQL, optimizing Django ORM queries to handle large volumes of job orders, staff allocations, and real-time reporting." },
      { label: "Communication Automation", text: "Integrated SendGrid API to enable automated email alerts for job assignments and customer scheduling, streamlining operational communication." },
    ],
    keyResult: "Fully automated the job lifecycle for field service businesses, bridging the gap between field staff and administrative teams to drive measurable operational efficiency.",
    tech: ["Python", "Django", "React", "Redux", "PostgreSQL", "SendGrid", "DRF"],
    link: "https://github.com",
    isFeatured: false,
  },
  {
    id: "onecrm",
    title: "ONECRM",
    subtitle: "Telecom CRM & Billing Platform",
    description: "Enterprise telecom CRM and billing system supporting customer lifecycle management and billing operations across large-scale organizational workflows for Dialog Axiata PLC.",
    challenge: "Maintaining stability and performance of a mission-critical billing system with zero tolerance for downtime, while simultaneously improving product quality and introducing new features.",
    execution: [
      { label: "CRM Development", text: "Contributed to development and maintenance of a mission-critical CRM and billing platform used in large-scale telecom operations." },
      { label: "Defect Resolution", text: "Identified and resolved 100+ defects through systematic testing, improving overall product quality and stability by 15%." },
      { label: "PDF Document Engine", text: "Engineered an automated PDF generation system for dynamic customer payment plans with full i18n support (English, Sinhala, and Tamil), overcoming significant hurdles in rendering Indic scripts." },
      { label: "Code Quality", text: "Participated in peer code reviews to enforce coding standards, and collaborated within an agile team to deliver stable production releases." },
    ],
    keyResult: "Achieved a 15% improvement in product quality through systematic defect resolution and delivered a multi-language document engine that served a diverse national customer base.",
    tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "iText PDF"],
    link: "https://github.com",
    isFeatured: false,
  },
  {
    id: "ilo",
    title: "ILO",
    subtitle: "International Labour Organization",
    description: "Fully automated operational system for the ILO in Sri Lanka to digitize and manage labor and staff functionalities, replacing manual paper-based legacy processes through a strategic partnership with the Department of Immigration & Emigration.",
    challenge: "Digitizing complex government workflows for the Department of Immigration & Emigration with strict usability requirements for government officials, while ensuring robust data validation and real-time synchronization across organizational modules.",
    execution: [
      { label: "Dynamic Form Builder", text: "Engineered a highly flexible and reusable Dynamic Form Builder using React.js, empowering administrative users to create, customize, and deploy complex forms independently without developer intervention." },
      { label: "Process Digitization", text: "Digitized legacy paper-based processes for the Department of Immigration & Emigration, streamlining data collection, validation, and approval cycles for labor management." },
      { label: "State Management", text: "Utilized Apollo Client (GraphQL) and Redux for robust state management, ensuring seamless real-time data synchronization across different organizational modules." },
      { label: "Performance", text: "Optimized frontend rendering performance for data-intensive long-form entry modules, reducing client-side latency and improving overall data entry accuracy." },
    ],
    keyResult: "Successfully automated a high-stakes government operational system, eliminating paper-based processes and enabling the ILO and Department of Immigration to manage labor workflows digitally.",
    tech: ["React", "GraphQL", "Apollo", "Redux", "UI Kit", "Node.js"],
    link: "https://github.com",
    isFeatured: false,
  },
];


export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Angular", "Redux Toolkit", "GraphQL", "Storybook", "Ant Design"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Java", "Spring Boot", "Node.js", "Express", "NestJS", "GraphQL", "Microservices", "REST APIs", "RabbitMQ", "Hibernate", "Prisma", "Sequelize"],
  },
];
