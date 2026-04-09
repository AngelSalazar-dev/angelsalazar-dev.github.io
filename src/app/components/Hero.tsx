"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />

      <div className="max-w-4xl text-center relative z-10">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] uppercase text-gold font-medium mb-8"
        >
          Portafolio Profesional
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl font-light text-foreground mb-4 leading-tight"
        >
          Ángel Salazar
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="w-8 h-px bg-gold/40" />
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6 font-light"
        >
          Desarrollador Full Stack
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed font-light mb-12"
        >
          Experiencias digitales con{" "}
          <span className="text-foreground font-normal">Next.js</span>,
          <span className="text-foreground font-normal"> TypeScript</span> y{" "}
          <span className="text-foreground font-normal">código limpio</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-foreground text-background text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:border-gold/50 hover:text-foreground transition-all duration-300"
          >
            Contactar
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center gap-8 mb-16"
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/AngelSalazar-dev",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/angel-salazar-dev/",
            },
            {
              label: "Email",
              href: "mailto:angelsalazar.dev@gmail.com",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/526675748905",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 text-[10px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/40">
            Descubrir
          </span>
          <ArrowDown className="w-3 h-3 text-muted-foreground/40" />
        </motion.div>
      </div>
    </section>
  );
}
