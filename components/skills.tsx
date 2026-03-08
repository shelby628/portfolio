"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  BarChart3,
  Database,
  Brain,
  MessageSquare,
  Lightbulb,
  Target,
  Users,
  Clock,
  Wrench,
} from "lucide-react";

const technicalSkills = {
  "Data Analysis": {
    icon: BarChart3,
    items: ["Python (Pandas, NumPy)", "Statistical Analysis", "Data Cleaning & Wrangling", "Exploratory Data Analysis", "Data Visualization"],
  },
  "Machine Learning": {
    icon: Brain,
    items: ["Scikit-learn", "Classification & Regression", "Feature Engineering", "Model Evaluation", "Fraud Detection"],
  },
  "Power BI": {
    icon: BarChart3,
    items: ["Dashboard Design", "DAX Queries", "Data Modeling", "Report Automation", "Business Intelligence"],
  },
  "MySQL & Databases": {
    icon: Database,
    items: ["Database Design", "Query Optimization", "Stored Procedures", "Data Management", "SQL Analytics"],
  },
  Frontend: {
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  Backend: {
    icon: Server,
    items: ["Python", "Node.js", "Java", "PHP"],
  },
};

const softSkills = [
  { icon: MessageSquare, label: "Communication" },
  
  { icon: Target, label: "Problem Solving" },
 
  { icon: Clock, label: "Time Management" },
 
];

const tools = [
  "Jupyter Notebook",
  "Power BI",
  "Git",
  "GitHub",
  "VS Code",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "Excel",
  "Canva",
  "Figma",
  "Postman",
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
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
            Expertise
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Data & <span className="text-primary">ML Skills</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            My toolkit is built around the full data analysis and machine learning pipeline, from raw data to actionable business intelligence.
          </p>
        </div>

        {/* Technical Skills */}
        <div
          className={`mb-16 transition-all delay-200 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h3 className="mb-8 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Technical Skills
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(technicalSkills).map(
              ([category, { icon: Icon, items }], i) => (
                <div
                  key={category}
                  className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="absolute right-4 top-4 text-primary/10 transition-all duration-500 group-hover:text-primary/25 group-hover:scale-125 group-hover:rotate-12">
                    <Icon className="h-12 w-12" />
                  </div>
                  <h4 className="mb-4 font-serif text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Soft Skills */}
        <div
          className={`mb-16 transition-all delay-400 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h3 className="mb-8 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {softSkills.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`group flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-5 text-center transition-all duration-500 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${500 + i * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors duration-300 group-hover:text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div
          className={`transition-all delay-500 duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h3 className="mb-8 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className={`group cursor-default rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${600 + i * 40}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
