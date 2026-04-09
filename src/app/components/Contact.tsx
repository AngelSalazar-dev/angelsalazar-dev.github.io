"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, EMAIL, WHATSAPP } from "@/i18n/translations";

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
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">
              {t(lang, "contact.label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              {t(lang, "contact.title").replace("<bold>", '<span className="font-bold">').replace("</bold>", "</span>")}
            </h2>
            <div className="h-px w-16 bg-gold/50 mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12 max-w-2xl">
            {t(lang, "contact.desc")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <FadeIn delay={0.3}>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-6 p-8 border border-border bg-card hover:border-gold/30 transition-all duration-300"
            >
              <div className="p-3 bg-muted/50 text-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-foreground mb-2 flex items-center gap-2">
                  {t(lang, "contact.email")}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground font-light break-all">{EMAIL}</p>
              </div>
            </a>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.4}>
            <div className="flex items-start gap-6 p-8 border border-border bg-card">
              <div className="p-3 bg-muted/50 text-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-foreground mb-2">
                  {t(lang, "contact.location")}
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  {t(lang, "contact.location_val")}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* WhatsApp */}
          <FadeIn delay={0.5}>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 p-8 border border-border bg-card hover:border-gold/30 transition-all duration-300"
            >
              <div className="p-3 bg-muted/50 text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Z"/></svg>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-foreground mb-2 flex items-center gap-2">
                  {t(lang, "contact.whatsapp")}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground font-light">+52 667 574 8905</p>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-14 items-center px-12 bg-foreground text-background font-medium tracking-wide hover:bg-gold hover:text-black transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 mr-3" />
            {t(lang, "contact.cta")}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
