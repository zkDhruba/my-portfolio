"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GitFork } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-accent-hover transition-colors"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-surface/90 backdrop-blur px-4 py-2 text-sm font-medium text-text-primary shadow-lg hover:bg-surface transition-colors border border-border"
            aria-label={`View source code of ${project.title}`}
          >
            <GitFork className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
