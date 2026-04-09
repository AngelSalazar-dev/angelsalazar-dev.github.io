"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, MessageSquare } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              ¿Tienes un <span className="font-bold">proyecto</span> en mente?
            </h2>
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12 max-w-2xl">
            Actualmente estoy buscando mi primera oportunidad profesional como desarrollador junior.
            Si crees que mi perfil encaja con tu equipo o tienes una idea interesante, me encantaría charlar contigo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.3}>
            <a
              href="mailto:angelsalazar.dev@gmail.com"
              className="group flex items-start gap-6 p-8 border border-border bg-card hover:border-gold/30 transition-all duration-300"
            >
              <div className="p-3 bg-muted/50 text-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-foreground mb-2 flex items-center gap-2">
                  Email
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground font-light">angelsalazar.dev@gmail.com</p>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-start gap-6 p-8 border border-border bg-card">
              <div className="p-3 bg-muted/50 text-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-foreground mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground font-light">Tijuana, BC, México</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <a
            href="mailto:angelsalazar.dev@gmail.com"
            className="inline-flex h-14 items-center px-12 bg-primary text-white font-medium tracking-wide hover:bg-foreground transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 mr-3" />
            Enviar Mensaje
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
