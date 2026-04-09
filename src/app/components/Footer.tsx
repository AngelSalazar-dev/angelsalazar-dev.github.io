"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t, EMAIL, WHATSAPP } from "@/i18n/translations";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-normal tracking-wide text-foreground">
            angel<span className="text-gold">.</span>salazar
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-light">
            {t(lang, "footer.tagline")}
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AngelSalazar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-gold transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/angel-salazar-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-gold transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-muted-foreground/50 hover:text-gold transition-colors duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Ángel, vi tu portafolio.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-gold transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Z"/></svg>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground font-light">
            {t(lang, "footer.rights").replace("{year}", String(new Date().getFullYear()))}
          </p>
          <p className="text-[10px] text-muted-foreground mt-2 font-mono uppercase tracking-wider">
            {t(lang, "footer.tech")}
          </p>
        </div>
      </div>
    </footer>
  );
}
