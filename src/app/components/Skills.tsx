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
  Layers,
  Cpu,
  Globe,
  Settings
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/translations";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Skills() {
  const { lang } = useLanguage();

  const skillCategories = [
    {
      titleKey: "skills.frontend",
      icon: Palette,
      skills: [
        { name: "Next.js", icon: Atom },
        { name: "React", icon: Cpu },
        { name: "TypeScript", icon: Braces },
        { name: "Tailwind CSS", icon: Globe },
      ]
    },
    {
      titleKey: "skills.backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Terminal },
        { name: "MySQL / TiDB", icon: Database },
        { name: "REST APIs", icon: Settings },
        { name: "Auth JWT", icon: Layers },
      ]
    },
    {
      titleKey: "skills.tools",
      icon: Code2,
      skills: [
        { name: "Git / GitHub", icon: GitBranch },
        { name: "Postman", icon: Terminal },
        { name: "Vercel", icon: Globe },
        { name: "Linux Bash", icon: Terminal },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">{t(lang, "skills.label")}</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground" dangerouslySetInnerHTML={{
              __html: t(lang, "skills.title").replace("<bold>", '<span class="font-bold">').replace("</bold>", "</span>")
            }} />
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={t(lang, category.titleKey)} delay={idx * 0.1}>
              <div className="group p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                  <div className="p-3 bg-muted/50 text-foreground">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-foreground">{t(lang, category.titleKey)}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 py-2"
                    >
                      <skill.icon className="w-4 h-4 text-gold" />
                      <span className="text-sm font-light text-muted-foreground">{skill.name}</span>
                    </motion.div>
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
