"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, GitFork, Link as LinkIcon, Loader2, CheckCircle } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <GitFork className="w-5 h-5" />,
  linkedin: <LinkIcon className="w-5 h-5" />,
};

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const response = await fetch("https://formspree.io/f/xlgalrqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      aria-label="Contact section"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={formState === "loading" || formState === "success"}
              >
                {formState === "loading" && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                {formState === "success" && (
                  <CheckCircle className="w-4 h-4" />
                )}
                {formState === "idle" && <Send className="w-4 h-4" />}
                {formState === "error" && <Send className="w-4 h-4" />}
                {formState === "loading"
                  ? "Sending..."
                  : formState === "success"
                  ? "Message Sent!"
                  : formState === "error"
                  ? "Failed — Try Again"
                  : "Send Message"}
              </Button>
            </form>
          </AnimatedSection>

          {/* Right Side Info */}
          <AnimatedSection
            className="lg:col-span-2"
            direction="right"
            delay={0.1}
          >
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">
                  Let&apos;s connect
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-text-secondary">Email: </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-accent hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="text-text-secondary">Location: </span>
                    <span className="text-text-primary">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Find me online
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 rounded-xl border border-border bg-surface-hover px-4 py-3 text-sm font-medium text-text-primary hover:border-accent/40 hover:text-accent transition-colors"
                      aria-label={`Visit ${link.name}`}
                    >
                      {socialIconMap[link.icon]}
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
