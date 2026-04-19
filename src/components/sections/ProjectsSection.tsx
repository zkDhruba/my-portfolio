"use client";

import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
      aria-label="Projects section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work spanning web apps, dashboards, and creative experiments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
