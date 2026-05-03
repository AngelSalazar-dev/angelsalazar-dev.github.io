"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Code2, Sparkles, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, Language } from "@/i18n/translations";

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
  const { lang } = useLanguage();

  const aiSkills = [
    {
      icon: MessageSquare,
      titleKey: "chat_title",
      descKey: "chat_desc",
    },
    {
      icon: Code2,
      titleKey: "dev_title",
      descKey: "dev_desc",
    },
    {
      icon: Brain,
      titleKey: "prompt_title",
      descKey: "prompt_desc",
    },
    {
      icon: Sparkles,
      titleKey: "api_title",
      descKey: "api_desc",
    },
    {
      icon: Zap,
      titleKey: "auto_title",
      descKey: "auto_desc",
    },
    {
      icon: Shield,
      titleKey: "ethic_title",
      descKey: "ethic_desc",
    },
  ];

  const aiTranslations: Record<Language, Record<string, string>> = {
    es: {
      ai_chat_title: "Integración de Chat IA",
      ai_chat_desc: "Implementación de APIs de inteligencia artificial para chat conversacional en NutriFlow, con control de cuotas y gestión de suscripciones PRO.",
      ai_dev_title: "Desarrollo Asistido por IA",
      ai_dev_desc: "Uso avanzado de herramientas como Claude, GitHub Copilot, Cursor y Qwen para acelerar el desarrollo, mejorar la calidad del código y reducir tiempos de entrega.",
      ai_prompt_title: "Prompt Engineering",
      ai_prompt_desc: "Diseño de prompts efectivos para obtener resultados precisos de LLMs como Claude y GPT, optimizando respuestas y reduciendo alucinaciones en aplicaciones web.",
      ai_api_title: "APIs y Modelos de IA",
      ai_api_desc: "Experiencia integrando modelos de lenguaje (Claude, OpenAI) y ejecución local con Ollama y herramientas como OpenClaw para soluciones personalizadas.",
      ai_auto_title: "Automatización Inteligente",
      ai_auto_desc: "Creación de flujos automatizados que combinan IA con lógica de negocio para generar contenido, análisis de datos y respuestas contextuales.",
      ai_ethic_title: "Ética y Uso Responsable",
      ai_ethic_desc: "Conciencia sobre límites de la IA, verificación de resultados, y mantenimiento de la transparencia con usuarios sobre el uso de IA.",
    },
    en: {
      ai_chat_title: "AI Chat Integration",
      ai_chat_desc: "Implementation of AI APIs for conversational chat in NutriFlow, with quota control and PRO subscription management.",
      ai_dev_title: "AI-Assisted Development",
      ai_dev_desc: "Advanced use of tools like Claude, GitHub Copilot, Cursor, and Qwen to speed up development, improve code quality, and reduce delivery times.",
      ai_prompt_title: "Prompt Engineering",
      ai_prompt_desc: "Design of effective prompts to get precise results from LLMs like Claude and GPT, optimizing responses and reducing hallucinations in web apps.",
      ai_api_title: "AI APIs & Models",
      ai_api_desc: "Experience integrating language models (Claude, OpenAI) and local execution with Ollama and tools like OpenClaw for custom solutions.",
      ai_auto_title: "Smart Automation",
      ai_auto_desc: "Creating automated workflows that combine AI with business logic to generate content, data analysis, and contextual responses.",
      ai_ethic_title: "Ethics & Responsible Use",
      ai_ethic_desc: "Awareness of AI limits, result verification, and maintaining transparency with users about AI usage.",
    },
    pt: {
      ai_chat_title: "Integração de Chat IA",
      ai_chat_desc: "Implementação de APIs de inteligência artificial para chat conversacional no NutriFlow, com controle de cotas e gestão de assinaturas PRO.",
      ai_dev_title: "Desenvolvimento Assistido por IA",
      ai_dev_desc: "Uso avançado de ferramentas como Claude, GitHub Copilot, Cursor e Qwen para acelerar o desenvolvimento e melhorar a qualidade do código.",
      ai_prompt_title: "Engenharia de Prompt",
      ai_prompt_desc: "Design de prompts eficazes para obter resultados precisos de LLMs como Claude e GPT, otimizando respostas e reduzindo alucinações.",
      ai_api_title: "APIs e Modelos de IA",
      ai_api_desc: "Experiência integrando modelos (Claude, OpenAI) e execução local com Ollama e ferramentas como OpenClaw para soluções personalizadas.",
      ai_auto_title: "Automação Inteligente",
      ai_auto_desc: "Criação de fluxos automatizados que combinam IA com lógica de negócio para gerar conteúdo e análise de dados.",
      ai_ethic_title: "Ética e Uso Responsable",
      ai_ethic_desc: "Consciência sobre limites da IA, verificação de resultados e transparência com usuários sobre o uso de IA.",
    },
    fr: {
      ai_chat_title: "Intégration Chat IA",
      ai_chat_desc: "Implémentation d'APIs d'intelligence artificielle pour chat conversationnel dans NutriFlow, avec contrôle des quotas et gestion des abonnements PRO.",
      ai_dev_title: "Développement Assisté par IA",
      ai_dev_desc: "Utilisation avancée d'outils comme Claude, GitHub Copilot, Cursor et Qwen pour accélérer le développement et améliorer la qualité du code.",
      ai_prompt_title: "Ingénierie de Prompt",
      ai_prompt_desc: "Conception de prompts efficaces pour obtenir des résultats précis des LLMs comme Claude et GPT, optimisant les réponses et réduisant les hallucinations.",
      ai_api_title: "APIs et Modèles IA",
      ai_api_desc: "Expérience dans l'intégration de modèles (Claude, OpenAI) et exécution locale avec Ollama et des outils comme OpenClaw pour des solutions sur mesure.",
      ai_auto_title: "Automatización Inteligente",
      ai_auto_desc: "Création de flux automatisés combinant IA et logique métier pour générer du contenu et analyser des données.",
      ai_ethic_title: "Éthique et Usage Responsable",
      ai_ethic_desc: "Conscience des limites de l'IA, vérification des résultats et maintien de la transparence avec les utilisateurs sur l'utilisation de l'IA.",
    },
  };

  function getAIText(key: string): string {
    return aiTranslations[lang]?.[key] || aiTranslations.es[key] || "";
  }

  return (
    <section id="ai" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">{t(lang, "ai.label")}</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground" dangerouslySetInnerHTML={{
              __html: t(lang, "ai.title").replace("<bold>", '<span class="font-bold">').replace("</bold>", "</span>")
            }} />
            <div className="h-px w-16 bg-gold/50 mt-6" />
            <p className="text-muted-foreground max-w-2xl mt-6 text-base leading-relaxed font-light">
              {t(lang, "ai.description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSkills.map((skill, idx) => (
            <FadeIn key={skill.titleKey} delay={idx * 0.08}>
              <div className="group p-6 border border-border bg-card hover:border-gold/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-muted/50 text-foreground flex-shrink-0">
                    <skill.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground leading-tight pt-1">
                    {getAIText(`ai_${skill.titleKey}`)}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {getAIText(`ai_${skill.descKey}`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.6}>
          <div className="mt-12 p-6 border border-gold/20 bg-gold/5">
            <p className="text-gold text-sm font-medium mb-1">{t(lang, "ai.stance_title")}</p>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              {t(lang, "ai.stance_text")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
