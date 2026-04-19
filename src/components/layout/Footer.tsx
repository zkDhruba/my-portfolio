import { GitFork, Link as LinkIcon, Heart } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  github: <GitFork className="w-5 h-5" />,
  linkedin: <LinkIcon className="w-5 h-5" />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              className="text-lg font-bold text-text-primary tracking-tight hover:text-accent transition-colors"
            >
              {personalInfo.shortName}
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-text-secondary">
              Building the web, one pixel at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-text-secondary hover:text-accent hover:bg-accent-muted transition-all duration-300"
                aria-label={`Visit ${link.name}`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {year} {personalInfo.shortName}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
