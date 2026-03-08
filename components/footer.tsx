import { Github, Linkedin, Mail, BookOpen, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            {
              icon: Github,
              href: "https://github.com/shelby628",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/shelbyadede",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:shelbyadede@gmail.com",
              label: "Email",
            },
            {
              icon: BookOpen,
              href: "https://medium.com/@shelbyadede",
              label: "Medium",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
            >
              <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        
            <span className="font-semibold text-foreground">Shelby Adede</span>
         
        

        <div className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
