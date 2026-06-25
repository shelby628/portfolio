"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "BodaCredit",
    description:
      "A full-stack, AI-powered credit underwriting system for SACCO loan officers in Nairobi, built to extend formal credit to 500,000 boda boda riders who earn via M-Pesa but lack credit history. A React/Vite/Tailwind frontend pairs with a FastAPI backend running a calibrated XGBoost and LightGBM ensemble across 54 features — delivering a default probability score, credit tier, and recommended loan amount in under 30 seconds. Includes automatic rider profile detection via National ID, nine fairness checks with rain season protections, a live KPI dashboard, and JWT authentication scoped per SACCO.",
    tags: ["React", "Vite", "FastAPI", "XGBoost", "LightGBM", "Tailwind CSS", "Python", "JWT Auth"],
    github: "https://github.com/shelby628/BODACREDIT",
    live: "https://creditscorebodaboda.vercel.app/",
    image: "/images/bodacredit.png",
    color: "primary" as const,
  },
  {
    title: "SmartExpense",
    description:
      "A full-stack fraud detection system built solo — employees submit transactions and the system automatically flags suspicious ones using a trained ML model and rule-based risk scoring. Hit a wall finding the right dataset, so I wrote Python scripts to synthesize one from scratch. Built with React, Django, and Scikit-learn, with separate portals for employees and admins. Live and deployed.",
    tags: ["Python", "Django", "React", "Scikit-learn", "Fraud Detection", "Full-Stack", "PostgreSQL"],
    github: "https://github.com/shelby628/Smart_Expense_Fraud_dashboard",
    live: "https://smart-expense-fraud-dashboard.vercel.app/",
    image: "/images/smartexpense.png",
    color: "accent" as const,
  },
  {
    title: "Sales Analysis & Forecasting",
    description:
      "This project analyzes inventory, sales, and purchase data to support business decisions, identify trends, and improve operational efficiency. Insights from this analysis help optimize stock management, vendor performance, and overall sales strategy.",
    tags: ["Python", "Pandas", "Power BI", "Forecasting", "Data Visualization"],
    github: "https://github.com/shelby628/SALES-ANALYSIS-AND-FORECASTING.git",
    image: "/images/sales-analysis.png",
    color: "accent" as const,
  },
  {
    title: "Naivas Supermarket Analysis",
    description:
      "This project analyzes one year of Naivas supermarket sales data to identify revenue drivers, customer purchasing patterns, and outlet performance, with the goal of supporting data-driven decisions for sales growth and inventory optimization.",
    tags: ["Data Analysis", "Power BI", "SQL", "Business Intelligence", "Sales Optimization"],
    github: "https://github.com/shelby628/NAIVAS-DATA-ANALYSIS.git",
    image: "/images/naivas.png",
    color: "primary" as const,
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
        {/* Section label */}
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
            Each project showcases my approach to data analysis and machine learning -- from raw data exploration to delivering business-ready insights and models.
          </p>
        </div>

        {/* Project cards */}
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
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-0 lg:flex-row">
                {/* Project screenshot */}
                <div className="relative h-56 w-full overflow-hidden lg:h-auto lg:w-2/5 lg:min-h-[280px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} dashboard screenshot`}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:hidden" />
                  {/* Project number overlay */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm">
                    <span className="font-serif text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
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

                  {/* Links */}
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
                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        <span>Live Demo</span>
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
