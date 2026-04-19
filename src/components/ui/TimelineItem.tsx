"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/portfolio";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border group-last:hidden" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-[3px] border-accent bg-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      {/* Content Card */}
      <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <h3 className="text-lg font-semibold text-text-primary">
            {experience.role}
          </h3>
          <span className="text-sm text-accent font-medium">
            {experience.duration}
          </span>
        </div>
        <p className="text-base font-medium text-text-secondary mb-4">
          {experience.company}
        </p>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
