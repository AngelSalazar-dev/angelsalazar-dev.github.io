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
        desc: "Plataforma integral de gestión nutricional y bienestar. Permite el seguimiento de planes alimenticios y el monitoreo de indicadores de salud mediante una interfaz moderna y funcional. Construido con Next.js y TypeScript.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "GroCode",
        desc: "Plataforma colaborativa diseñada para la comunidad de desarrolladores, enfocada en el aprendizaje conjunto, el intercambio de conocimientos y el crecimiento profesional.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/GroCode",
        live: "https://grocode.vercel.app/",
        featured: true,
      },
      {
        title: "ServiceTrack",
        desc: "Sistema de gestión y seguimiento de actividades y objetivos personales. Diseñado para ayudar a los usuarios a organizar tareas, monitorear el progreso y mantener un registro estructurado de metas productivas.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/ServiceTrack",
        live: "https://servicetrack-web.vercel.app/",
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
    ],
    en: [
      {
        title: "NutriFlow",
        desc: "Comprehensive nutrition and wellness management platform. It allows tracking of meal plans and monitoring of health indicators through a modern and functional interface. Built with Next.js and TypeScript.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "GroCode",
        desc: "Collaborative platform designed for the developer community, focused on shared learning, knowledge exchange, and professional growth.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/GroCode",
        live: "https://grocode.vercel.app/",
        featured: true,
      },
      {
        title: "ServiceTrack",
        desc: "Personal activity and goal tracking management system. Designed to help users organize tasks, monitor progress, and maintain a structured record of productive goals.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/ServiceTrack",
        live: "https://servicetrack-web.vercel.app/",
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
    ],
    pt: [
      {
        title: "NutriFlow",
        desc: "Plataforma abrangente de gestão nutricional e bem-estar. Permite o acompanhamento de planos alimentares e o monitoramento de indicadores de saúde por meio de uma interface moderna e funcional.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "GroCode",
        desc: "Plataforma colaborativa projetada para a comunidade de desenvolvedores, focada no aprendizado conjunto, troca de conhecimento e crescimento profissional.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/GroCode",
        live: "https://grocode.vercel.app/",
        featured: true,
      },
      {
        title: "ServiceTrack",
        desc: "Sistema de gestão e acompanhamento de atividades e objetivos pessoais. Projetado para ajudar os usuários a organizar tarefas e monitorar o progresso de metas produtivas.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/ServiceTrack",
        live: "https://servicetrack-web.vercel.app/",
        featured: false,
      },
      {
        title: "Site Portfólio",
        desc: "Este mesmo site — construído com Next.js, TypeScript e Tailwind CSS. Design limpo e profissional com suporte para modo escuro e animações suaves.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
        live: "#",
        featured: false,
      },
    ],
    fr: [
      {
        title: "NutriFlow",
        desc: "Plateforme complète de gestion de la nutrition et du bien-être. Permet le suivi des plans alimentaires et des indicateurs de santé via une interface moderne et fonctionnelle.",
        tech: ["Next.js", "TypeScript", "MySQL", "JWT Auth", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/NutriFlow_official",
        live: "https://nutriflow-official.vercel.app",
        featured: true,
      },
      {
        title: "GroCode",
        desc: "Plateforme collaborative conçue pour la communauté des développeurs, axée sur l'apprentissage partagé, l'échange de connaissances et la croissance professionnelle.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/GroCode",
        live: "https://grocode.vercel.app/",
        featured: true,
      },
      {
        title: "ServiceTrack",
        desc: "Système de gestion et de suivi des activités et objectifs personnels. Conçu pour aider les utilisateurs à organiser leurs tâches et à suivre leurs progrès vers des objectifs productifs.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
        github: "https://github.com/AngelSalazar-dev/ServiceTrack",
        live: "https://servicetrack-web.vercel.app/",
        featured: false,
      },
      {
        title: "Site Portfolio",
        desc: "Ce site même — construit avec Next.js, TypeScript et Tailwind CSS. Design propre et professionnel avec support du mode sombre et animations fluides.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/AngelSalazar-dev/angelsalazar.github.io",
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
