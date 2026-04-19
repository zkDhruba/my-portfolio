"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Pen,
  GitBranch,
  Globe,
  Database,
  Server,
  Cpu,
  Layers,
  Palette,
  Terminal,
  Boxes,
  Flame,
  Container,
  GitFork,
  Workflow,
  Braces,
  AppWindow,
} from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  react: <Code2 className="w-5 h-5" />,
  nextjs: <Globe className="w-5 h-5" />,
  typescript: <FileCode className="w-5 h-5" />,
  javascript: <Braces className="w-5 h-5" />,
  tailwind: <Palette className="w-5 h-5" />,
  framer: <Layers className="w-5 h-5" />,
  html: <AppWindow className="w-5 h-5" />,
  css: <Palette className="w-5 h-5" />,
  git: <GitBranch className="w-5 h-5" />,
  vscode: <Terminal className="w-5 h-5" />,
  figma: <Pen className="w-5 h-5" />,
  vercel: <Globe className="w-5 h-5" />,
  docker: <Container className="w-5 h-5" />,
  github: <GitFork className="w-5 h-5" />,
  nodejs: <Server className="w-5 h-5" />,
  express: <Workflow className="w-5 h-5" />,
  postgresql: <Database className="w-5 h-5" />,
  mongodb: <Database className="w-5 h-5" />,
  api: <Cpu className="w-5 h-5" />,
  angular: <Braces className="w-5 h-5" />,
  python: <FileCode className="w-5 h-5" />,
  default: <Boxes className="w-5 h-5" />,
};

export default function SkillBadge({ name, icon, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-muted cursor-default"
    >
      <span className="text-accent">{iconMap[icon] || iconMap.default}</span>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </motion.div>
  );
}
