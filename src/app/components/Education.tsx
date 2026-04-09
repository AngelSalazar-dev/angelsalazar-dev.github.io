"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Monitor, GraduationCap } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Virtual del Estado de Guanajuato (UVEG)",
    year: "En curso",
    description:
      "Formación académica centrada en el desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas. Mantengo un promedio de excelencia equilibrando la teoría con la práctica profesional.",
  },
  {
    icon: Monitor,
    title: "Desarrollo Web Full-Stack",
    institution: "Aprendizaje Autodidacta Enfocado",
    year: "2024 - Presente",
    description:
      "Dominio avanzado de Next.js, TypeScript y Tailwind CSS. Especialización en backend escalable con MySQL (TiDB) y sistemas de autenticación robustos como JWT.",
  },
  {
    icon: Award,
    title: "Certificaciones & Retos",
    institution: "CS50 Harvard & Proyectos Reales",
    year: "2024",
    description:
      "Completado con éxito el set de problemas de CS50 de Harvard, sentando las bases del pensamiento computacional. He desarrollado y desplegado múltiples aplicaciones listas para producción.",
  },
];

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
  return (
    <section id="education" className="py-32 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">Formación</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Educación <span className="font-bold">y trayectoria</span>
            </h2>
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <div className="space-y-12 pl-8 border-l border-border">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-2 border-gold bg-background" />
                
                <div className="mb-4">
                  <time className="text-xs uppercase tracking-[0.2em] text-gold font-medium">{item.year}</time>
                  <h3 className="text-lg font-normal text-foreground mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
