import {
  lookup,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent as netflix,
  jobit as schedulify,
  tripguide,
  csIntro,
  oopJava,
  portfolio,
  threejs,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "docker",
    icon: docker,
  },
];



const projects = [
  {
    name: "Netflix Clone",
    description:
      "Full-stack streaming platform with user auth (JWT), profiles, favorites/watchlist, search & filtering by category, and an Admin panel to manage movies and categories. Backend powered by Node.js/Express with MongoDB; React + Tailwind on the web UI. Docker-ready dev setup.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/NimrodNetzer/Netflix-BIU",
    live_demo_link: "https://netflix-web-ashy.vercel.app/login",
  },
  {
    name: "LookUp — Study Sensei",
    description:
      "A full-stack Chrome extension that captures screenshots, records audio, and highlights text — sending them to Groq AI for instant summaries, explanations, quizzes, and flashcards. Features a built-in dashboard with search, folders, math rendering, PDF viewer, and flashcard review. Fully self-contained in the browser with no backend, built with React 18, Vite, and IndexedDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chrome-extension",
        color: "green-text-gradient",
      },
      {
        name: "groq-ai",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
    ],
    image: lookup,
    source_code_link: "https://github.com/Mnlohani/lookUp",
    live_demo_link: "https://look-up-gold.vercel.app/",
  },
  {
    name: "Schedulify",
    description:
      "Interactive course scheduling tool with file import support (.xlsx/.txt), conflict-free schedule generation, and export to Excel or print. Features include time conflict detection, multiple session types, and visual UI built with Qt/QML. Core logic implemented in modern C++ with MVC design.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: schedulify,
    source_code_link: "https://github.com/NimrodNetzer/Schedulify",
    live_demo_link: "https://schedulify-landing-page.vercel.app/",
  },
  {
    name: "Task Management System",
    description:
      "A full-stack productivity web application that enables users to efficiently create, organize, and track tasks with features like due dates, priority levels, and progress status. Includes a modern authentication system and a clean, responsive UI for managing daily workflows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NimrodNetzer/TMS",
  },
  {
    name: "CS Introduction Project",
    description:
      "A menu-driven C application showcasing fundamental CS concepts: base conversion, recursion (strings, numbers, arrays), and dynamic data structures (linked list UserDB).",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "recursion",
        color: "green-text-gradient",
      },
      {
        name: "linked lists",
        color: "pink-text-gradient",
      },
    ],
    image: csIntro,
    source_code_link: "https://github.com/NimrodNetzer/CS-Introdction-Project",
  },
    {
    name: "OOP Project",
    description:
      "A classic Java Breakout game demonstrating OOP principles. Features collision detection, sprite management, event listeners, and a complete game loop, built for an introductory computer science course.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "java swing",
        color: "pink-text-gradient",
      },
    ],
    image: oopJava,
    source_code_link: "https://github.com/NimrodNetzer/Java-OOP",
  },
      {
    name: "3D Portfolio",
    description:
      "3D personal portfolio website built with React, Three.js, and Tailwind CSS. It features interactive 3D models, smooth animations with Framer Motion, and a functional contact form.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/NimrodNetzer/3d-portfolio",
    live_demo_link: "https://nimrod-3d-portfolio.vercel.app",
  },
];

export { technologies, projects };