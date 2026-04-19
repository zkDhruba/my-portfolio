"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}
