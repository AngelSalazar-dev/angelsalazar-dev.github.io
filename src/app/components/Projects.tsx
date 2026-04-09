"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
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

export default function Projects() {
  const { lang } = useLanguage();

  const projectsData: Record<string, { title: string; desc: string; tech: string[]; github: string; live: string; featured: boolean }[]> = {
    es: [
      {
        title: "NutriFlow",
        desc: "Plataforma completa de nutrición y bienestar con 18 tablas de base de datos, autenticación JWT, registro de comidas, seguimiento de ejercicios, consumo de agua, integración con chat de IA, sistema de suscripción y gamificación XP. Construido con Next.js 15, desplegado en Vercel con TiDB Cloud (MySQL).",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS", "TiDB"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "WonderAI",
        desc: "Aplicación web impulsada por IA que aprovecha APIs modernas para ofrecer funciones inteligentes. Diseñada para escalabilidad y una experiencia de usuario limpia.",
        tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/WonderAI",
        live: "#",
        featured: false,
      },
      {
        title: "Sitio Web Portafolio",
        desc: "Este mismo sitio — construido con Next.js, TypeScript y Tailwind CSS. Diseño limpio y profesional con soporte para modo oscuro, animaciones suaves y partículas interactivas.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
        live: "#",
        featured: false,
      },
      {
        title: "Proyecto Scratch CS50",
        desc: "Mi primer proyecto de programación del curso CS50 de Harvard — una introducción al pensamiento computacional y la resolución de problemas.",
        tech: ["Scratch", "CS50", "Algoritmos"],
        github: "https://github.com/AngelSalazar-dev/Problem-Set-0-Angel-Salazar",
        live: "#",
        featured: false,
      },
    ],
    en: [
      {
        title: "NutriFlow",
        desc: "Complete nutrition and wellness platform with 18 database tables, JWT authentication, meal tracking, exercise monitoring, water intake, AI chat integration, subscription system and XP gamification. Built with Next.js 15, deployed on Vercel with TiDB Cloud (MySQL).",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS", "TiDB"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "WonderAI",
        desc: "AI-powered web application leveraging modern APIs to deliver intelligent features. Designed for scalability and a clean user experience.",
        tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/WonderAI",
        live: "#",
        featured: false,
      },
      {
        title: "Portfolio Website",
        desc: "This very site — built with Next.js, TypeScript and Tailwind CSS. Clean, professional design with dark mode support, smooth animations and interactive particles.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
        live: "#",
        featured: false,
      },
      {
        title: "CS50 Scratch Project",
        desc: "My first programming project from Harvard's CS50 course — an introduction to computational thinking and problem solving.",
        tech: ["Scratch", "CS50", "Algorithms"],
        github: "https://github.com/AngelSalazar-dev/Problem-Set-0-Angel-Salazar",
        live: "#",
        featured: false,
      },
    ],
    pt: [
      {
        title: "NutriFlow",
        desc: "Plataforma completa de nutrição e bem-estar com 18 tabelas de banco de dados, autenticação JWT, registro de refeições, acompanhamento de exercícios, consumo de água, integração com chat de IA, sistema de assinaturas e gamificação XP.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS", "TiDB"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "WonderAI",
        desc: "Aplicação web impulsionada por IA que aproveita APIs modernas para oferecer funções inteligentes. Projetada para escalabilidade e uma experiência de usuário limpa.",
        tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/WonderAI",
        live: "#",
        featured: false,
      },
      {
        title: "Site Portfólio",
        desc: "Este mesmo site — construído com Next.js, TypeScript e Tailwind CSS. Design limpo e profissional com suporte para modo escuro, animações suaves e partículas interativas.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
        live: "#",
        featured: false,
      },
      {
        title: "Projeto Scratch CS50",
        desc: "Meu primeiro projeto de programação do curso CS50 de Harvard — uma introdução ao pensamento computacional e resolução de problemas.",
        tech: ["Scratch", "CS50", "Algoritmos"],
        github: "https://github.com/AngelSalazar-dev/Problem-Set-0-Angel-Salazar",
        live: "#",
        featured: false,
      },
    ],
    fr: [
      {
        title: "NutriFlow",
        desc: "Plateforme complète de nutrition et bien-être avec 18 tables de base de données, authentification JWT, suivi des repas, exercices, consommation d'eau, intégration chat IA, système d'abonnement et gamification XP.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS", "TiDB"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "WonderAI",
        desc: "Application web alimentée par l'IA exploitant des APIs modernes pour offrir des fonctionnalités intelligentes. Conçue pour l'évolutivité et une expérience utilisateur propre.",
        tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/WonderAI",
        live: "#",
        featured: false,
      },
      {
        title: "Site Portfolio",
        desc: "Ce site même — construit avec Next.js, TypeScript et Tailwind CSS. Design propre et professionnel avec support du mode sombre, animations fluides et particules interactives.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
        live: "#",
        featured: false,
      },
      {
        title: "Projet Scratch CS50",
        desc: "Mon premier projet de programmation du cours CS50 de Harvard — une introduction à la pensée computationnelle et à la résolution de problèmes.",
        tech: ["Scratch", "CS50", "Algorithmes"],
        github: "https://github.com/AngelSalazar-dev/Problem-Set-0-Angel-Salazar",
        live: "#",
        featured: false,
      },
    ],
  };

  const projects = projectsData[lang] || projectsData.es;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">{t(lang, "projects.label")}</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground" dangerouslySetInnerHTML={{
              __html: t(lang, "projects.title").replace("<bold>", '<span class="font-bold">').replace("</bold>", "</span>")
            }} />
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500 hover-lift"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{t(lang, "projects.featured")}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-sm font-light">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-3 py-1 border border-border text-muted-foreground uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
