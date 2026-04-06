"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "NutriFlow",
    description:
      "A full-stack nutrition tracking web application with user authentication (JWT), meal logging, exercise tracking, water intake, AI chat integration, and a subscription system. Deployed on Vercel with TiDB Cloud (MySQL) database.",
    tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS", "TiDB"],
    github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
    live: "https://nutriflow-official.vercel.app",
  },
  {
    title: "WonderAI",
    description:
      "An AI-powered web application leveraging modern APIs to deliver intelligent features. Built with Next.js and designed for scalability and clean user experience.",
    tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
    github: "https://github.com/AngelSalazar-dev/WonderAI",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio site — built with Next.js, TypeScript, and Tailwind CSS. Clean, minimal design with dark mode support and smooth scroll animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
    live: "#",
  },
  {
    title: "CS50 Scratch Project",
    description:
      "My first programming project from Harvard's CS50 course — an introduction to computational thinking and problem-solving through Scratch.",
    tech: ["Scratch", "CS50", "Computational Thinking"],
    github: "https://github.com/AngelSalazar-dev/Problem-Set-0-Angel-Salazar",
    live: "#",
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
          <p className="text-muted-foreground mb-12">
            Here are some of the projects I&apos;ve built while learning. Each one taught me
            something new about development, problem-solving, and writing clean code.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-3.32a8 8 0 0 0 5.29-1.38l-1.71-1.71a5.56 5.56 0 0 1-2.18.35 5.32 5.32 0 0 0-3.4-.72V22"/><path d="M9 22V12.32a3.32 3.32 0 0 0-3.31 3.32V22"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h1.09a6.9 6.9 0 0 1 .36-2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2.09a6.9 6.9 0 0 1 .36 2H19a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10.9 14.6c-.7-.2-1.4-.6-1.9-1.1-.5-.5-.9-1.2-1.1-1.9"/></svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-accent-light text-accent rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
