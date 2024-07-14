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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API Developer",
    icon: creator,
  }
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
 
];

const experiences = [
  {
    title: "MERN INTERN",
    company_name: "Hoping Minds",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JAN 2024 - JUN 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Full stack Developer [FreeLancing]",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - SEP 2023 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN eCommerce",
    description:
      "Developed a scalable MERN eCommerce platform featuring secure transactions, real-time data updates, and a user-friendly interface. Utilized MongoDB, Express, React, and Node.js to deliver a seamless shopping experience.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "paypal",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lovisa",
    description:
      "Developed the Lovisa app using React and integrated it with Shopify. The app features a seamless shopping experience, secure transactions, and real-time updates, enhancing user engagement and satisfaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Kaisama/Aura/tree/main/Frontend",
  },
  {
    name: "Basic React Project",
    description:
      "Developed a basic React project to enhance my skills, focusing on creating interactive and dynamic user interfaces, state management, and component-based architecture. The project improved my proficiency in React and JavaScript.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: reactpic,
    source_code_link: "https://github.com/Kaisama/Basic-React-Project",
  },
  {
    name: "React Greet App",
    description:
      "Developed a basic Greet app using React. The app allows users to input their name and receive a personalized greeting, showcasing interactive UI elements and state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: greet,
    source_code_link: "https://github.com/Kaisama/Greet_Application",
  },
  {
    name: "Pizza Web App",
    description:
      "Developed a basic Greet app using React. The app allows users to input their name and receive a personalized greeting, showcasing interactive UI elements and state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/Kaisama/Pizza_Web_Application",
  },
  {
    name: "Billing Web App",
    description:
      "Developed a basic Greet app using React. The app allows users to input their name and receive a personalized greeting, showcasing interactive UI elements and state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: billing,
    source_code_link: "https://github.com/Kaisama/Billing-Application",
  },
  {
    name: "HomePage NetFlix",
    description:
      "Created a replica of the Netflix homepage using HTML and CSS. The project involved designing a responsive layout, styling components to match Netflix's design, and improving my front-end development skills.",
    tags: [
      
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Kaisama/HomePage-NetFlix",
  },
  {
    name: "Temperature Converter",
    description:
      " The temperature converter app, built with JavaScript, allows users to convert temperatures between Celsius and Fahrenheit.",
    tags: [
      
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: temperature,
    source_code_link: "https://github.com/Kaisama/Temperature-Converter",
  },
  {
    name: "Portfolio Website",
    description:
      "Developed a personal portfolio which showcases my projects and skills",
    tags: [
      
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: portf,
    source_code_link: "https://github.com/Kaisama/Portfolio_Website",
  },
  {
    name: "MultiUser ChatApp",
    description:
      "Developed a multi-user chat application using Java. The project included real-time messaging, user authentication, and a robust server-client architecture, enhancing my skills in network programming and Java development.",
    tags: [
      
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
      {
        name: "awt",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "JDBC",
        color: "pink-text-gradient",
      },
    ],
    image: multi,
    source_code_link: "https://github.com/Kaisama/Multi_User_ChatApp",
  },
  {
    name: "Street_Fighter ",
    description:
      "Building a 2D Street Fighter game using Java and Swing involves creating a graphical user interface (GUI) and implementing various game components and mechanics.",
    tags: [
      
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
      {
        name: "animation",
        color: "blue-text-gradient",
      },
      {
        name: "Animation",
        color: "green-text-gradient",
      },
      {
        name: "Sound effects and music",
        color: "pink-text-gradient",
      },
    ],
    image: street,
    source_code_link: "https://github.com/Kaisama/Street_Fighter",
  },
];

export { services, technologies, experiences, testimonials, projects };
