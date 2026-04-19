"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl"
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
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
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

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur-sm px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm text-text-secondary">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-text-primary"
        >
          {personalInfo.headline.split("fast, scalable")[0]}
          <span className="bg-gradient-to-r from-accent via-purple-500 to-accent bg-clip-text text-transparent">
            fast, scalable
          </span>{" "}
          {personalInfo.headline.split("fast, scalable")[1]}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="#projects">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" href="#contact">
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
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
