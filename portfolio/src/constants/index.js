import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  carrent,
  jobit,
  threejs,
  reactpic,
  greet,
  pizza,
  billing,
  netflix,
  temperature,
  portf,
  street,
  multi,
  ebizon,
  cppgg,
  hopingminds,
  typescript,
  shopify,
  viafetpic,
  igelebepic,
  dtfpic,
  watchmyprospectpic,
  reapPic,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Shopify Custom Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Specialist",
    icon: backend,
  },
  {
    title: "UI/UX Interaction Engineer",
    icon: creator,
  },
  {
    title: "Backend Architect",
    icon: nodejs,
  },
  {
    title: "React.js Specialist",
    icon: reactjs,
  },
  {
    title: "API Design Expert",
    icon: javascript,
  },
  {
    title: "Database Design Engineer",
    icon: mongodb,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Ebizon",
    icon: ebizon,
    iconBg: "#383E56",
    date: "Sep 2024 – Present",
    points: [
      "Engineered 'ViaFet', a high-performance MERN-based application featuring complex data management and responsive architecture.",
      "Developing and maintaining 'Iglebe', another core MERN project, ensuring scalable backend services and dynamic frontend components.",
      "Architected a specialized DTF (Direct-to-Film) builder using React and Fabric.js, integrated directly into Shopify via iframe embedding.",
      "Spearheaded product configurability features including automated background removal and real-time layout previews.",
      "Collaborating closely with clients to manage feature integration and iterative feedback implementation.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "CPPGG",
    icon: cppgg,
    iconBg: "#E6DEDD",
    date: "July 2024 – August 2024",
    points: [
      "Supported development of internal web tools, mainly focused on UI optimization.",
      "Worked alongside senior developers for performance improvements and feature planning.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hoping Minds",
    icon: hopingminds,
    iconBg: "#383E56",
    date: "Jan 2024 – June 2024",
    points: [
      "Built responsive full-stack applications with React and Express.js.",
      "Implemented RESTful APIs and MongoDB data storage.",
      "Participated in debugging, testing, and agile delivery cycles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Akshat proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Akshat does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Akshat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ViaFet",
    description:
      "Viafet is a full‑stack healthcare web app for managing patient and pre‑patient workflows end‑to‑end. It provides search, create/edit forms, and structured patient records including documents and related entities (e.g., relatives). The frontend focuses on data-heavy clinical forms and smooth navigation, while the backend handles complex CRUD and workflow logic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: viafetpic,
    source_code_link: "https://app.viafet-lis.com",
  },
  {
    name: "iGlebe",
    description:
      "A robust digital therapy platform built to deliver structured psychological interventions at scale. Developed in collaboration with UTS researchers, the system manages complex user journeys through a 5-month program with localized support in English and Spanish, bridging the gap between clinical research and automated health-tech.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "clinical-tech",
        color: "orange-text-gradient",
      },
    ],
    image: igelebepic,
    source_code_link: "https://iglebeprogram.asrc.edu.au/",
  },
  {
    name: "DTF Custom Builder",
    description:
      "An advanced product configurator built using React and Fabric.js. Features automated background removal and dynamic canvas rendering, enabling users to create high-precision layouts for Direct-to-Film printing, integrated directly into Shopify.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "fabricjs",
        color: "green-text-gradient",
      },
      {
        name: "shopify",
        color: "pink-text-gradient",
      },
    ],
    image: dtfpic,
    source_code_link: "https://github.com/",
  },
  {
    name: "WatchMyProspect",
    description:
      "An AI-powered sales tool featuring admin and user panels with Clerk authentication. Users can import client data via CSV; the system then uses AI to gather latest news and generate personalized outreach emails for each prospect, streamlining the lead generation process.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "orange-text-gradient",
      },
    ],
    image: watchmyprospectpic,
    source_code_link: "https://github.com/",
  },
  {
    name: "REAP",
    description:
      "A comprehensive management system featuring a React 18 + MUI admin dashboard for analytics. Built with a Node/Express REST API and MongoDB powering complex workflows (CLF/VO/SHG/HH). Includes JWT authentication, email notifications, Winston logging, and Swagger documentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "swagger",
        color: "orange-text-gradient",
      },
    ],
    image: reapPic,
    source_code_link: "https://github.com/",
  },
  {
    name: "MERN eCommerce",
    description:
      "Professional grade eCommerce solution with full-stack capabilities, including JWT authentication, PayPal integration, and a comprehensive product management dashboard.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "paypal",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
