"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Monitor } from "lucide-react";

const items = [
  {
    icon: Monitor,
    title: "BSc in Software Engineering",
    institution: "Universidad Virtual del Estado de Guanajuato (UVEG)",
    year: "In progress",
    description:
      "Studying software engineering with a focus on application development, databases, algorithms, and systems architecture. Combining academic training with practical web development projects.",
  },
  {
    icon: BookOpen,
    title: "Full-Stack Web Development",
    institution: "Self-Directed Learning",
    year: "2025 - Present",
    description:
      "Learned Next.js, TypeScript, Tailwind CSS, MySQL/TiDB, JWT authentication, and REST API design through building real applications like NutriFlow — a production-deployed nutrition tracking app.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    institution: "Documentation, Tutorials & Building",
    year: "2025",
    description:
      "Consistent study of official documentation (Next.js, React, TypeScript), online tutorials, and hands-on project development. Focused on clean architecture, security best practices, and production-ready code.",
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

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-2">Education & Learning</h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-light shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    </div>
                    <p className="text-sm text-accent mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
