"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <FadeIn>
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-muted/30 flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden relative border-2 border-border">
                      <Image
                        src="/profile.jpeg"
                        alt="Ángel Salazar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">Ángel Salazar</h3>
                    <p className="text-xs text-gold font-medium mt-2 uppercase tracking-wide">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">Sobre Mí</p>
                <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                  Creando soluciones <span className="font-bold">digitales</span>
                </h2>
                <div className="h-px w-16 bg-gold/50 mt-6" />
              </div>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  Soy un desarrollador apasionado por entender el "por qué" detrás del código.
                  Lo que comenzó como una curiosidad sobre cómo funcionaban los sitios web se
                  convirtió rápidamente en una carrera dedicada a construir soluciones robustas.
                </p>
                <p>
                  Me especializo en el ecosistema de <span className="text-foreground font-normal">Next.js & TypeScript</span>.
                  Mi enfoque se centra en escribir código limpio, mantenible y escalable,
                  utilizando siempre las mejores prácticas de la industria.
                </p>
                <p>
                  Actualmente curso la carrera de <span className="text-foreground font-normal">Ingeniería de Software en la UVEG</span>,
                  lo que me permite combinar una base académica sólida con la ejecución
                  de proyectos reales de alta complejidad.
                </p>
                
                <div className="pt-10 grid grid-cols-2 gap-6">
                  <div className="pb-6 border-b border-border">
                    <p className="text-3xl font-light text-foreground mb-2">20</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Años de edad</p>
                  </div>
                  <div className="pb-6 border-b border-border">
                    <p className="text-3xl font-light text-foreground mb-2">Tijuana</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ubicación</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
