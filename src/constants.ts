import { Project, Skill, Feature } from './types';

export const PERSONAL_INFO = {
  name: "Hitarth Chauhan",
  role: "Front-End Developer | React Specialist | UI/UX Enthusiast | Problem Solver",
  email: "hitarth0236@gmail.com",
  phone: "+91 9898760235",
  location: "Idar, Gujarat",
  resume: "/Hitarth Resume.pdf",
  profileImage: "/Hitarth.jpg",
  social: {
    github: "https://github.com/hit246",
    linkedin: "https://linkedin.com/chauhan-hitarth-44187634a",
    instagram: "https://instagram.com/hitarth011"
  },
  about: {
    experience: "1+",
    projectsCompleted: "5+",
    description: "I'm a passionate full-stack developer with over 1 years of experience in creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful, and intuitive designs.",
    additional: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends."
  }
};

export const SKILLS: Skill[] = [
  { name: "React", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Git", level: 88 },
  { name: "Database", level: 82 },
];

export const TOOLS = [
  "VS Code", "MongoDB", "Vite", "NPM", "Yarn", "Firebase"
];

export const LEARNING = [
  "Next.js", "MongoDB", "Firebase", "JAVA"
];

export const PROJECTS: Project[] = [
  {
    title: "Imagera",
    description: "A creative social platform to share and explore digital artworks. Features include likes-to-coins, redemption, and admin dashboard.",
    technologies: ["React", "Sanity", "Tailwind", "EmailJS"],
    category: "web",
    image: "/imagera.jpg",
    github: "https://github.com/hit246",
    live: "https://imagera-main.netlify.app",
    featured: true
  },
  {
    title: "Snapcast",
    description: "A video-sharing app with transcript, secure auth, upload & watch feature built using modern full-stack tools.",
    technologies: ["Next.js", "Bunny", "Google Cloud", "Drizzle ORM"],
    category: "api",
    image: "/snapcast.jpg",
    github: "https://github.com/hit246/snapcast",
    live: "https://hrc-snapcast.vercel.app",
    featured: true
  },
  {
    title: "GSAP Demo (Velvet Pour)",
    description: "Made for learning basic GSAP animations. Features animated scroll, transitions and smooth user experience.",
    technologies: ["React", "GSAP", "Tailwind"],
    category: "web",
    image: "/Velvet-pour.png",
    github: "https://github.com/hit246",
    live: "https://velvet-pour-gsap.netlify.app",
    featured: false
  },
  {
    title: "Foodash",
    description: "A local food delivery web app designed for Idar town. It allows users to browse restaurants, view menus, place orders, and track delivery. Built with a modern responsive UI and Firebase backend.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    category: "web",
    image: "/foodash.jpg",
    github: "https://github.com/hit246",
    live: "https://foodash-idar.vercel.app",
    featured: true
  },
  {
    title: "CareerCraft AI",
    description: "An AI-powered career assistant that helps users craft professional resumes and cover letters. Features include ATS-Score Checker, job description analyzer, Resume builder and performance analytics for resume improvement.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "OpenAI API"],
    category: "api",
    image: "/careercraftai.jpg",
    github: "https://github.com/hit246",
    live: "https://carrercraftai.vercel.app",
    featured: true
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices."
  },
  {
    title: "Passionate",
    description: "Love what I do and always eager to learn new technologies."
  },
  {
    title: "Innovative",
    description: "Creative solutions to complex problems with modern approaches."
  }
];
