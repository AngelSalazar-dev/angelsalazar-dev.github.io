"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Ángel Salazar
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6">
            Student & Junior Developer.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Passionate about full-stack development, clean architecture, and turning
            ideas into functional digital experiences. Currently building apps with
            Next.js, TypeScript, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/AngelSalazar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-3.32a8 8 0 0 0 5.29-1.38l-1.71-1.71a5.56 5.56 0 0 1-2.18.35 5.32 5.32 0 0 0-3.4-.72V22"/><path d="M9 22V12.32a3.32 3.32 0 0 0-3.31 3.32V22"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h1.09a6.9 6.9 0 0 1 .36-2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2.09a6.9 6.9 0 0 1 .36 2H19a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10.9 14.6c-.7-.2-1.4-.6-1.9-1.1-.5-.5-.9-1.2-1.1-1.9"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1ngel-salazar-undefined-47567a320/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
