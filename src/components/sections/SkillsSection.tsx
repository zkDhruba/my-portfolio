"use client";

import { skillCategories } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32"
      aria-label="Skills section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with daily to build modern web experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection
              key={category.category}
              delay={catIndex * 0.15}
            >
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-accent" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
