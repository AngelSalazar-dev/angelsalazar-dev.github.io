"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code2, level: "Intermediate" },
  { name: "CSS3 / Tailwind", icon: Palette, level: "Intermediate" },
  { name: "TypeScript", icon: Braces, level: "Intermediate" },
  { name: "Next.js", icon: Atom, level: "Intermediate" },
  { name: "Node.js", icon: Server, level: "Intermediate" },
  { name: "MySQL / TiDB", icon: Database, level: "Intermediate" },
  { name: "Git / GitHub", icon: GitBranch, level: "Intermediate" },
  { name: "REST APIs", icon: Terminal, level: "Intermediate" },
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-2">Skills & Technologies</h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05}>
              <div className="group bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-accent transition-colors" />
                <p className="text-sm font-medium text-foreground mb-1">{skill.name}</p>
                <p className="text-xs text-muted-foreground">{skill.level}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
