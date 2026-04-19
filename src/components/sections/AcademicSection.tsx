"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Award, BookMarked } from "lucide-react";
import { education, publications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AcademicSection() {
  return (
    <section
      id="academic"
      className="relative py-24 lg:py-32"
      aria-label="Academic and Research section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Academic & Research"
          subtitle="Education background and research contributions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Education</h3>
            </div>

            {education.map((edu, index) => (
              <AnimatedSection
                key={edu.id}
                direction="left"
                delay={index * 0.1}
                className="relative pl-8 border-l border-border hover:border-accent transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-background" />

                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h4 className="text-xl font-bold text-text-primary">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary bg-surface-hover px-3 py-1 rounded-full border border-border">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-accent font-medium mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-text-primary">GPA:</span>
                    <span className="bg-green-500/10 text-green-500 text-sm font-bold px-2 py-0.5 rounded border border-green-500/20">
                      {edu.gpa}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Publications Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                <BookMarked className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Publications</h3>
            </div>

            {publications.map((pub, index) => (
              <AnimatedSection
                key={pub.id}
                direction="right"
                delay={index * 0.1}
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h4 className="text-lg font-bold text-text-primary leading-tight">
                      {pub.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {pub.date}
                  </div>

                  {pub.conference && (
                    <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex gap-3">
                      <Award className="w-5 h-5 text-purple-500 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-1">Presented at</p>
                        <p className="text-sm text-text-secondary italic">{pub.conference}</p>
                      </div>
                    </div>
                  )}

                  {pub.description && (
                    <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                      {pub.description}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
