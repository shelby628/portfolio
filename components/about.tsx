"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-28 md:py-36"
    >
      {/* Subtle emerald accent line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            About Me
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Who I Am
          </h2>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Photo */}
          <div
            className={`shrink-0 transition-all delay-200 duration-1000 ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-12 scale-95 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              {/* Outer glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 blur-sm" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 md:h-64 md:w-64">
                <Image
                  src="/images/profile.jpeg"
                  alt="Shelby Adede - Data Analyst and Machine Learning enthusiast"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Emerald glow */}
              <div className="absolute -inset-6 -z-10 rounded-full bg-primary/5 blur-3xl" />
            </div>
          </div>

          {/* Bio text */}
          <div
            className={`flex-1 transition-all delay-400 duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
           <p className="text-lg leading-relaxed text-muted-foreground">
  I'm a{" "}
  <span className="font-semibold text-foreground">
    Computer Science student at Maseno University
  </span>{" "}
  who gravitated toward data because I've always been drawn to numbers — not just crunching them, but understanding what they're actually saying. That curiosity pulled me into{" "}
  <span className="font-semibold text-primary">
    Data Analysis
  </span>{" "}
  and{" "}
  <span className="font-semibold text-accent">
    Machine Learning
  </span>
  , and I haven't looked back since.
</p>
<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
  What keeps me going is building things that solve{" "}
  <span className="font-semibold text-primary">
    real problems
  </span>
  . Fraudify — my ML-based fraud detection system — was the project that cemented it for me. When it worked, it didn't feel like the end of something, it felt like the beginning. I walked away wanting to{" "}
  <span className="font-semibold text-accent">
    build more
  </span>
  , and that's exactly what I've been doing.
</p>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Data Projects" },
                { value: "1+", label: "ML Models Built" },
                { value: "100%", label: "Data-Driven" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group rounded-xl border border-border bg-card/50 p-4 text-center transition-all duration-500 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="font-serif text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110 md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
