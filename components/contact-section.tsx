"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shelbyadede@gmail.com",
    href: "mailto:shelbyadede@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 707 887162",
    href: "tel:+254707887162",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shelbyadede",
    href: "https://www.linkedin.com/in/shelbyadede",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shelby628",
    href: "https://github.com/shelby628",
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "medium.com/@shelbyadede",
    href: "https://medium.com/@shelbyadede",
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-28 md:py-36"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          {/* Left side */}
          <div
            className={`max-w-lg text-center transition-all duration-1000 lg:text-left ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Contact
            </span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {"Let's talk data"}
              
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Got a data problem you're trying to figure out, or just want to talk about ML? I'm always open to new projects, collaborations, or opportunities"}
            </p>
            <Link
              href="/contact"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 active:scale-95"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>

          {/* Right side - contact cards */}
          <div
            className={`grid w-full max-w-md gap-3 transition-all delay-300 duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {label}
                  </div>
                  <div className="truncate text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                    {value}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
