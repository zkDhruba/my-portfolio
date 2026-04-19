"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30",
    outline:
      "border border-border bg-transparent text-text-primary hover:bg-surface-hover hover:border-accent/50",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
