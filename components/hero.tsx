"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, BarChart3, Brain, Database } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Animated radial glow that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.08), transparent 50%)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating data-themed icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <BarChart3
          className={`absolute left-[10%] top-[20%] h-8 w-8 text-primary/[0.07] transition-all duration-[2000ms] ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <Brain
          className={`absolute right-[15%] top-[25%] h-10 w-10 text-accent/[0.07] transition-all duration-[2500ms] ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          style={{ animation: "float 10s ease-in-out infinite 1s" }}
        />
        <Database
          className={`absolute left-[20%] bottom-[25%] h-7 w-7 text-primary/[0.07] transition-all duration-[3000ms] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animation: "float 9s ease-in-out infinite 2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Available for Internship and Junior Roles
          </span>
        </div>

        <h1
          className={`font-serif text-5xl font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 delay-200 md:text-7xl lg:text-8xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Shelby</span>
          <span className="block text-primary">Adede</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-400 md:text-xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-semibold text-foreground">Data Analyst</span> &{" "}
          <span className="font-semibold text-accent">Machine Learning Developer.</span>{" "}
         I find patterns in messy data, build models that actually work, and enjoy every step in between
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 active:scale-95"
          >
            <span className="relative z-10">View My Projects</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#about"
            className="group rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95"
          >
            About Me
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-12 flex items-center justify-center gap-5 transition-all duration-1000 delay-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 active:scale-95"
            >
              <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        
      </div>
    </section>
  );
}
