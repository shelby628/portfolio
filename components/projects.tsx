"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image: string;
  color: "primary" | "accent";
};

const projects: Project[] = [
  {
    title: "SmartExpense",
    description:
      "A full-stack fraud detection system I built solo — employees submit transactions, and the system automatically flags suspicious ones using a trained ML model and rule-based risk scoring. I hit a wall finding the right dataset, so I wrote Python scripts to synthesize one from scratch. Built with React, Django, and Scikit-learn, with separate portals for employees and admins. Live and deployed.",
    tags: ["Python", "Django", "React", "Scikit-learn", "Fraud Detection", "Full-Stack", "PostgreSQL"],
    github: "https://github.com/shelby628/Smart_Expense_Fraud_dashboard",
    live: "https://smart-expense-fraud-dashboard.vercel.app/",
    image: "/images/smartexpense.png",
    color: "primary",
  },
  {
    title: "Sales Analysis & Forecasting",
    description:
      "Analyzes inventory, sales, and purchase data to identify trends and support business decisions. Covers stock management, vendor performance, and sales strategy — built to give non-technical stakeholders a clear picture of what the numbers are saying.",
    tags: ["Python", "Pandas", "Power BI", "Forecasting", "Data Visualization"],
    github: "https://github.com/shelby628/SALES-ANALYSIS-AND-FORECASTING.git",
    image: "/images/sales-analysis.png",
    color: "accent",
  },
  {
    title: "Naivas Supermarket Analysis",
    description:
      "Dug into a full year of Naivas supermarket sales data to find what's actually driving revenue, how customers shop across outlets, and where inventory decisions could be smarter. Built for a real Kenyan retail context.",
    tags: ["Data Analysis", "Power BI", "SQL", "Business Intelligence", "Sales Optimization"],
    github: "https://github.com/shelby628/NAIVAS-DATA-ANALYSIS.git",
    image: "/images/naivas.png",
    color: "primary",
  },
  {
    title: "University Parlour",
    description:
      "A frontend project where I designed and built a responsive university website from scratch — structured sections, a mobile-friendly nav menu, and a clean interface using custom CSS and Google Fonts. My first project where I went from a design idea to something fully functional in the browser.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Google Fonts"],
    github: "https://github.com/shelby628/University",
    live: "https://shelby628.github.io/University/",
    image: "/images/university-parlour.png",
    color: "accent",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-6 py-28 md:py-36"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">

        <div
          className={`mb-16 transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Data & ML <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A few things I've built — each one started with a real problem and ended with something I could actually show people.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 200}ms` }}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-0 lg:flex-row">

                <div className="relative h-56 w-full overflow-hidden lg:h-auto lg:w-2/5 lg:min-h-[280px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} dashboard screenshot`}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm">
                    <span className="font-serif text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          project.color === "primary"
                            ? "border-primary/20 bg-primary/5 text-primary"
                            : "border-accent/20 bg-accent/5 text-accent"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                    >
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
