"use client";

import { motion } from "framer-motion";
import { GraduationCap, Monitor, Award } from "lucide-react";
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

export default function Education() {
  const { lang } = useLanguage();

  const educationData: Record<string, { icon: any; year: string; title: string; institution: string; desc: string }[]> = {
    es: [
      {
        icon: GraduationCap,
        year: "En curso",
        title: "Ingeniería en Sistemas Computacionales",
        institution: "Universidad Virtual del Estado de Guanajuato (UVEG)",
        desc: "Formación académica centrada en el desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas. Mantengo un promedio de excelencia equilibrando la teoría con la práctica profesional.",
      },
      {
        icon: Monitor,
        year: "2024 - Presente",
        title: "Desarrollo Web Full-Stack",
        institution: "Aprendizaje Autodidacta Enfocado",
        desc: "Dominio avanzado de Next.js, TypeScript y Tailwind CSS. Especialización en backend escalable con MySQL (TiDB) y sistemas de autenticación robustos como JWT.",
      },
      {
        icon: Award,
        year: "2024",
        title: "Certificaciones & Retos",
        institution: "CS50 Harvard & Proyectos Reales",
        desc: "Completado con éxito el set de problemas de CS50 de Harvard, sentando las bases del pensamiento computacional. He desarrollado y desplegado múltiples aplicaciones listas para producción.",
      },
    ],
    en: [
      {
        icon: GraduationCap,
        year: "In progress",
        title: "Computer Systems Engineering",
        institution: "Virtual University of the State of Guanajuato (UVEG)",
        desc: "Academic training focused on software development, algorithms, databases and systems architecture. I maintain an excellent average while balancing theory with professional practice.",
      },
      {
        icon: Monitor,
        year: "2024 - Present",
        title: "Full-Stack Web Development",
        institution: "Focused Self-Taught Learning",
        desc: "Advanced mastery of Next.js, TypeScript and Tailwind CSS. Specialization in scalable backend with MySQL (TiDB) and robust authentication systems like JWT.",
      },
      {
        icon: Award,
        year: "2024",
        title: "Certifications & Challenges",
        institution: "Harvard CS50 & Real Projects",
        desc: "Successfully completed Harvard's CS50 problem set, laying the foundations of computational thinking. I have developed and deployed multiple production-ready applications.",
      },
    ],
    pt: [
      {
        icon: GraduationCap,
        year: "Em andamento",
        title: "Engenharia de Sistemas Computacionais",
        institution: "Universidade Virtual do Estado de Guanajuato (UVEG)",
        desc: "Formação acadêmica centrada no desenvolvimento de software, algoritmos, bancos de dados e arquitetura de sistemas. Mantenho uma média excelente equilibrando teoria com prática profissional.",
      },
      {
        icon: Monitor,
        year: "2024 - Presente",
        title: "Desenvolvimento Web Full-Stack",
        institution: "Aprendizagem Autodidata Focada",
        desc: "Domínio avançado de Next.js, TypeScript e Tailwind CSS. Especialização em backend escalável com MySQL (TiDB) e sistemas de autenticação robustos como JWT.",
      },
      {
        icon: Award,
        year: "2024",
        title: "Certificações & Desafios",
        institution: "Harvard CS50 & Projetos Reais",
        desc: "Concluído com sucesso o conjunto de problemas do CS50 de Harvard, estabelecendo as bases do pensamento computacional. Desenvolvi e implantei múltiplas aplicações prontas para produção.",
      },
    ],
    fr: [
      {
        icon: GraduationCap,
        year: "En cours",
        title: "Ingénierie des Systèmes Informatiques",
        institution: "Université Virtuelle de l'État de Guanajuato (UVEG)",
        desc: "Formation académique centrée sur le développement logiciel, les algorithmes, les bases de données et l'architecture des systèmes. Je maintiens une moyenne excellente en équilibrant théorie et pratique professionnelle.",
      },
      {
        icon: Monitor,
        year: "2024 - Présent",
        title: "Développement Web Full-Stack",
        institution: "Apprentissage Autodidacte Ciblé",
        desc: "Maîtrise avancée de Next.js, TypeScript et Tailwind CSS. Spécialisation en backend évolutif avec MySQL (TiDB) et systèmes d'authentification robustes comme JWT.",
      },
      {
        icon: Award,
        year: "2024",
        title: "Certifications & Défis",
        institution: "Harvard CS50 & Projets Réels",
        desc: "Ensemble de problèmes CS50 de Harvard complété avec succès, posant les bases de la pensée computationnelle. J'ai développé et déployé plusieurs applications prêtes pour la production.",
      },
    ],
  };

  const items = educationData[lang] || educationData.es;

  return (
    <section id="education" className="py-32 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">{t(lang, "education.label")}</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground" dangerouslySetInnerHTML={{
              __html: t(lang, "education.title").replace("<bold>", '<span class="font-bold">').replace("</bold>", "</span>")
            }} />
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <div className="space-y-12 pl-8 border-l border-border">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="relative group">
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-2 border-gold bg-background" />
                
                <div className="mb-4">
                  <time className="text-xs uppercase tracking-[0.2em] text-gold font-medium">{item.year}</time>
                  <h3 className="text-lg font-normal text-foreground mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
