"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Briefcase, FolderGit2, Users } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    value: personalInfo.yearsOfExperience,
    label: "Years Experience",
  },
  {
    icon: <FolderGit2 className="w-5 h-5" />,
    value: personalInfo.projectsDelivered,
    label: "Projects Delivered",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: personalInfo.happyClients,
    label: "Happy Clients",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-surface/50"
      aria-label="About section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into who I am and what drives my work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <AnimatedSection
            className="lg:col-span-2"
            direction="left"
          >
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:aspect-square">
              {/* Decorative Ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 to-purple-500/30 blur-lg opacity-60" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-2xl">
                <Image
                  src="/images/2nd.jpg"
                  alt={`${personalInfo.name} - Frontend Engineer`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection
            className="lg:col-span-3"
            direction="right"
            delay={0.1}
          >
            <div className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-border bg-surface p-4 text-center"
                  >
                    <span className="text-accent mb-2">{stat.icon}</span>
                    <span className="text-2xl font-bold text-text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs text-text-secondary mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
