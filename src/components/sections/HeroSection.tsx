"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { GitFork, Link as LinkIcon, Globe, AtSign } from "lucide-react";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <GitFork className="w-5 h-5" />,
  linkedin: <LinkIcon className="w-5 h-5" />,
  twitter: <Globe className="w-5 h-5" />,
  dribbble: <AtSign className="w-5 h-5" />,
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 gradient-mesh"
        style={{ y: backgroundY }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Floating Accent Shapes */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, 30, -10, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content — Two Column Split Layout */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 lg:pt-0"
        style={{ opacity }}
      >
        {/* Left Column — Text Content */}
        <div className="order-2 lg:order-1">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-text-primary"
          >
            {personalInfo.shortName.split(" ").map((word, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  word
                ) : (
                  <span className="bg-gradient-to-r from-accent via-purple-500 to-accent bg-clip-text text-transparent">
                    {word}
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Title / Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-text-secondary tracking-wide"
          >
            {personalInfo.title}
          </motion.p>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-text-primary hover:text-accent hover:bg-accent-muted transition-all duration-300"
                aria-label={`Visit ${link.name}`}
              >
                {socialIconMap[link.icon] || <Globe className="w-5 h-5" />}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column — Profile Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <div className="relative">
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-purple-500/15 to-accent/10 blur-2xl opacity-70" />

            {/* Profile Image */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[26rem] lg:h-[30rem] xl:w-[30rem] xl:h-[34rem] rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/images/profile.png"
                alt={`${personalInfo.name} — ${personalInfo.title}`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
              {/* Subtle bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
