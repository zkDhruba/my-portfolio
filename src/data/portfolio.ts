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
  shortName: "Reza Dhruba",
  title: "Frontend Engineer",
  headline: "Frontend Engineer crafting fast, scalable web experiences",
  subtext:
    "I build pixel-perfect, performant web applications with modern technologies. Passionate about clean code, design systems, and delivering exceptional user experiences.",
  bio: [
    "I'm a frontend engineer with a passion for building products that are fast, accessible, and beautiful. I specialize in React, Next.js, and TypeScript, and I love turning complex problems into simple, elegant solutions.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or refining my craft. I believe in continuous learning and pushing the boundaries of what's possible on the web.",
    "My approach combines a performance-first mindset with meticulous attention to design detail. Every millisecond matters, and every pixel counts.",
  ],
  email: "reza.dhruba@example.com",
  location: "Dhaka, Bangladesh",
  yearsOfExperience: "4+",
  projectsDelivered: "30+",
  happyClients: "15+",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting tools for SaaS businesses.",
    image: "/images/projects/project-1.png",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project-2",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with product filtering, cart management, secure checkout, and a responsive storefront design.",
    image: "/images/projects/project-2.png",
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project-3",
    title: "CollabSpace",
    description:
      "A real-time collaboration workspace featuring kanban boards, document editing, and team management — inspired by Notion and Linear.",
    image: "/images/projects/project-3.png",
    techStack: ["React", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project-4",
    title: "AI Chat Interface",
    description:
      "An AI-powered chat application with streaming responses, conversation history, and a polished interface built for productivity.",
    image: "/images/projects/project-4.png",
    techStack: ["Next.js", "OpenAI API", "TypeScript", "Vercel AI SDK"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project-5",
    title: "Social Connect",
    description:
      "A social media platform with real-time feeds, stories, profile customization, and rich media sharing features.",
    image: "/images/projects/project-5.png",
    techStack: ["React", "Firebase", "TypeScript", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project-6",
    title: "WeatherCraft",
    description:
      "A beautiful weather application with animated forecasts, location-based data, and a weekly planner with push notifications.",
    image: "/images/projects/project-6.png",
    techStack: ["Next.js", "OpenWeather API", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    duration: "Jan 2024 — Present",
    achievements: [
      "Led the migration of a legacy jQuery application to React/Next.js, improving load times by 60%",
      "Architected a component library with 50+ reusable components, adopted by 3 product teams",
      "Implemented performance monitoring with Core Web Vitals, achieving 95+ Lighthouse scores",
      "Mentored 4 junior developers through code reviews and pair programming sessions",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "CloudPeak Digital",
    duration: "Jun 2022 — Dec 2023",
    achievements: [
      "Built and shipped a real-time collaboration dashboard used by 10,000+ daily active users",
      "Reduced bundle size by 40% through code splitting and lazy loading strategies",
      "Designed and implemented a dark mode system across the entire product suite",
      "Collaborated with UX team to improve accessibility, achieving WCAG 2.1 AA compliance",
    ],
  },
  {
    id: "exp-3",
    role: "Junior Web Developer",
    company: "PixelForge Agency",
    duration: "Aug 2021 — May 2022",
    achievements: [
      "Developed responsive landing pages and web applications for 20+ clients",
      "Introduced Tailwind CSS to the team workflow, reducing CSS development time by 50%",
      "Built reusable email templates and animation systems for marketing campaigns",
      "Participated in client workshops to gather requirements and present design solutions",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "github" },
    ],
  },
  {
    category: "Backend Basics",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "REST APIs", icon: "api" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
];
