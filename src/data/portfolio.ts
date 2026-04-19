export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  details: string[];
}

export interface Publication {
  id: string;
  title: string;
  date: string;
  conference?: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Reza MD Zakiul Karim Dhruba",
  shortName: "Dhruba Karim",
  title: "Frontend Engineer",
  headline: "I design & code for web",
  subtext:
    "Software Developer specializing in Full Stack Development with expertise in React.js, Node.js and modern Web Technologies.",
  bio: [
    "I'm a Frontend Engineer with 3 years of experience building scalable, high-performance web applications using React and Next.js. I'm experienced in designing reusable component architectures, managing complex application state, and integrating RESTful APIs in enterprise environments.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or refining my craft. I believe in continuous learning and pushing the boundaries of what's possible on the web.",
    "My approach combines a performance-first mindset with meticulous attention to design detail. Every millisecond matters, and every pixel counts.",
  ],
  email: "zkdhruba@gmail.com",
  location: "Dhaka, Bangladesh",
  yearsOfExperience: "3",
  projectsDelivered: "10+",
  happyClients: "5+",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Academic", href: "#academic" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Library Management System",
    description:
      "A full-stack web application for managing book inventory, borrowing workflows, and user tracking. Features include availability tracking, borrowing history, and due-date monitoring.",
    image: "/images/projects/LMS.PNG",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/zkDhruba/library-management-website",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Software Developer",
    company: "United Software Solutions",
    duration: "March 2023 — Present",
    achievements: [
      "Developed and maintained multiple production-level web applications using React, Next.js, and Angular",
      "Built reusable and scalable component architectures to ensure UI consistency across multiple modules",
      "Implemented centralized state management using Redux Toolkit and NgRx to improve maintainability and scalability",
      "Integrated and optimized RESTful API communication to ensure responsive and data-driven interfaces",
      "Applied performance optimization techniques such as component memoization and efficient state updates",
      "Collaborated with backend and IoT teams to translate business requirements into scalable frontend solutions",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "BSc in Computer Science",
    institution: "Shahjalal University of Science & Technology",
    duration: "Feb 2017 — June 2022",
    gpa: "3.41/4.0",
    details: [
      "Campus: Sylhet Engineering College",
      "Coursework: Programming Language, OOP, Algorithms, Computer Architecture, Data Structure, Computational Theory, Database Management System, Artificial Intelligence, Machine Learning",
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Bangla Hand Sign Recognition using Convolutional Neural Network and Transfer Learning",
    date: "Jan 2023",
    conference: "7th International Conference on Engineering Research, Innovation and Education (ICERIE 2023)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "PyTorch", icon: "default" },
      { name: "TensorFlow", icon: "default" },
      { name: "Scikit-Learn", icon: "default" },
      { name: "Keras", icon: "default" },
      { name: "Pandas", icon: "default" },
      { name: "NumPy", icon: "default" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "RESTful APIs", icon: "api" },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "BitBucket", icon: "default" },
      { name: "GitLab", icon: "default" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/zkDhruba",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
];
