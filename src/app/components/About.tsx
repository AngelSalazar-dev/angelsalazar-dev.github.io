"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

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

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I&apos;m a developer who started with curiosity about how websites work and
            quickly fell in love with the craft of building things. What began as
            small HTML experiments turned into full-stack applications with
            databases, authentication, and real-world functionality.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I&apos;ve been working with <span className="text-foreground font-medium">Next.js, TypeScript, React, Node.js, and SQL</span>,
            building projects that solve real problems. I care about writing clean,
            maintainable code and creating interfaces that feel intuitive to use.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Right now, I&apos;m looking for my <span className="text-foreground font-medium">first professional opportunity</span> where
            I can contribute to a team, learn from experienced developers, and grow
            into a well-rounded engineer. I bring dedication, consistency, and a
            genuine passion for problem-solving through code.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-muted-foreground leading-relaxed">
            Currently studying <span className="text-foreground font-medium">Software Engineering at UVEG</span>,
            combining my academic training with real-world projects. When I&apos;m not
            coding, I study official documentation, experiment with new technologies,
            and look for ways to grow as a developer.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
