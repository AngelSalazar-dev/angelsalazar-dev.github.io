"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            I&apos;m currently looking for my first professional opportunity as a junior
            developer. If you think I&apos;d be a good fit for your team, I&apos;d love to hear
            from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href="mailto:angelsalazar.dev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="mailto:angelsalazar.dev@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">angelsalazar.dev@gmail.com</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://github.com/AngelSalazar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-3.32a8 8 0 0 0 5.29-1.38l-1.71-1.71a5.56 5.56 0 0 1-2.18.35 5.32 5.32 0 0 0-3.4-.72V22"/><path d="M9 22V12.32a3.32 3.32 0 0 0-3.31 3.32V22"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h1.09a6.9 6.9 0 0 1 .36-2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2.09a6.9 6.9 0 0 1 .36 2H19a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10.9 14.6c-.7-.2-1.4-.6-1.9-1.1-.5-.5-.9-1.2-1.1-1.9"/></svg>
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/angel-salazar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Guanajuato, Mexico</span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
