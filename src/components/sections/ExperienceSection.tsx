"use client";

import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 bg-surface/50"
      aria-label="Experience section"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey building exceptional web experiences."
        />

        <div className="mt-12">
          {experiences.map((experience, i) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
