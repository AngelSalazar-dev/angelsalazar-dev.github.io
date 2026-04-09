"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Code2, Sparkles, Zap, Shield } from "lucide-react";

const aiSkills = [
  {
    icon: MessageSquare,
    title: "Integración de Chat IA",
    description: "Implementación de APIs de inteligencia artificial para chat conversacional en NutriFlow, con control de cuotas y gestión de suscripciones PRO.",
  },
  {
    icon: Code2,
    title: "Desarrollo Asistido por IA",
    description: "Uso de herramientas como GitHub Copilot, Cursor y Qwen Code para acelerar el desarrollo, mejorar la calidad del código y reducir tiempos de entrega.",
  },
  {
    icon: Brain,
    title: "Prompt Engineering",
    description: "Diseño de prompts efectivos para obtener resultados precisos de LLMs, optimizando respuestas y reduciendo alucinaciones en aplicaciones web.",
  },
  {
    icon: Sparkles,
    title: "APIs de IA",
    description: "Experiencia integrando modelos de lenguaje y visión en aplicaciones web, con manejo de rate limits, streaming y procesamiento de respuestas.",
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description: "Creación de flujos automatizados que combinan IA con lógica de negocio para generar contenido, análisis de datos y respuestas contextuales.",
  },
  {
    icon: Shield,
    title: "Ética y Uso Responsable",
    description: "Conciencia sobre límites de la IA, verificación de resultados, y mantenimiento de la transparencia con usuarios sobre el uso de IA.",
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

export default function AI() {
  return (
    <section id="ai" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">Inteligencia Artificial</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              IA como <span className="font-bold">herramienta</span>
            </h2>
            <div className="h-px w-16 bg-gold/50 mt-6" />
            <p className="text-muted-foreground max-w-2xl mt-6 text-base leading-relaxed font-light">
              No solo construyo aplicaciones — uso IA para hacerlas mejores, más rápidas y más inteligentes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSkills.map((skill, idx) => (
            <FadeIn key={skill.title} delay={idx * 0.08}>
              <div className="group p-6 border border-border bg-card hover:border-gold/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-muted/50 text-foreground flex-shrink-0">
                    <skill.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground leading-tight pt-1">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{skill.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.6}>
          <div className="mt-12 p-6 border border-gold/20 bg-gold/5">
            <p className="text-gold text-sm font-medium mb-1">Mi postura sobre la IA</p>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              La IA es una herramienta poderosa, pero no reemplaza el pensamiento crítico ni la experiencia. 
              La uso para acelerar mi flujo de trabajo, explorar soluciones más rápido y automatizar tareas repetitivas — 
              siempre verificando, siempre aprendiendo, siempre manteniendo la calidad del código por encima de la velocidad.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
