import { pompo, kontra, intelligent } from "../assets/images";
import {
  rpg,
  movie,
  todo,
  gta,
  dula,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  react,
  sass,
  tailwindcss,
  typescript,
  sql,
  gsap,
  threejs,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  //   {
  //     imageUrl: redux,
  //     name: "Redux",
  //     type: "State Management",
  //   },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Animation",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "3D Graphics",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Kontra Digital",
    icon: kontra,
    iconBg: "#accbe1",
    date: "September 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js, TypeScript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and utilizing Git/GitHub for version control and team collaboration.",
      "Delivered projects including nikolastejskalova.com, showcasing modern frontend development practices.",
    ],
  },
  {
    title: "Consultant IT / Tester",
    company_name: "Intelligent Studios",
    icon: intelligent,
    iconBg: "#f4a8b8",
    date: "September 2024 - September 2025",
    points: [
      "Analyzing diverse customer requirements and translating them into technical solutions.",
      "Configuring components and services in Xeelo and Integray platforms.",
      "Implementing user interfaces using HTML, CSS, and JavaScript while integrating APIs and working with JSON data structures.",
      "Conducting user testing sessions and iteratively refining UI components based on feedback.",
      "Collaborating with cross-functional teams and maintaining regular client communication throughout the development lifecycle.",
      "Deploying finalized solutions to production environments.",
    ],
  },
  {
    title: "Web Content Developer",
    company_name: "Pompo",
    icon: pompo,
    iconBg: "#b7e4c7",
    date: "October 2021 - October 2022",
    points: [
      "Developing and maintaining product presentation pages using HTML and CSS to enhance visual appeal and user experience. ",
      "Creating and implementing responsive product layouts and interactive components. ",
      "Managing product photography integration and optimizing image delivery for web performance. ",
      "Building structured product catalogs with efficient data organization and search functionality. ",
      "Translating product content from English to ensure accurate multilingual product descriptions.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/CreativeOxana",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/oxanaestok",
  },
];

export const projects = [
  {
    iconUrl: rpg,
    theme: "btn-back-black",
    name: "RPG games",
    description:
      "Modern gaming website built with React 19 and Vite. Features advanced GSAP scroll animations, clip-path effects, 3D transforms with perspective, interactive Bento grid cards, and smooth video transitions.",
    githubLink: "https://github.com/CreativeOxana/RPG-games",
    liveLink: "https://games-rpg.netlify.app/",
  },
  {
    iconUrl: gta,
    theme: "btn-back-red",
    name: "GTA-6 Landing Page",
    description:
      "Interactive landing page built with React 19 and Vite. Features GSAP scroll-triggered animations, character showcases (Jason & Lucia), video integration with smooth transitions, and responsive design with custom fonts.",
    githubLink: "https://github.com/CreativeOxana/GTA6-LandingPage",
    liveLink: "https://gta6landing-page.netlify.app/",
  },
  {
    iconUrl: movie,
    theme: "btn-back-blue",
    name: "Movie App",
    description:
      "Mobile application built with React Native and Expo. Browse movies, view details, and explore ratings. Requires Expo Go app to run.",
    githubLink: "https://github.com/CreativeOxana/Movie_App",
  },
  {
    iconUrl: dula,
    theme: "btn-back-pink",
    name: "Moje Dula Website",
    description:
      "Professional website for doula organization. Features information about organization, courses, doulas and contact functionality with clean, calming design.",
    githubLink: "https://github.com/CreativeOxana/mojedula",
    liveLink: "https://mojedula.netlify.app/",
  },
  {
    iconUrl: todo,
    theme: "btn-back-green",
    name: "ToDo Coach App",
    description:
      "Task management application with coaching features. Organize tasks, set goals, practice Pomodoro technique, and track progress with an intuitive, user-friendly interface.",
    githubLink: "https://github.com/CreativeOxana/ToDoCoach",
    liveLink: "https://todocoach.netlify.app/",
  },
];
