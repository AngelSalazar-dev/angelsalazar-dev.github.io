"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon, Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { languages, t, Language } from "@/i18n/translations";

const navLinks = (lang: Language) => [
  { name: t(lang, "nav.about"), href: "#about" },
  { name: t(lang, "nav.skills"), href: "#skills" },
  { name: t(lang, "nav.ai"), href: "#ai" },
  { name: t(lang, "nav.projects"), href: "#projects" },
  { name: t(lang, "nav.education"), href: "#education" },
  { name: t(lang, "nav.contact"), href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl flex items-center justify-between px-8 py-4 pointer-events-auto transition-all duration-500 ${
          scrolled ? "glass-subtle shadow-sm" : "bg-transparent"
        }`}
      >
        <a href="#" className="text-lg font-normal tracking-wide text-foreground">
          angel<span className="text-gold">.</span>salazar
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks(lang).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 px-2 py-1 hover:bg-muted transition-colors duration-300 rounded"
              aria-label="Language selector"
            >
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-[10px] tracking-wide text-muted-foreground uppercase font-medium">
                {languages.find((l) => l.code === lang)?.flag}
              </span>
              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${langDropdown ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 glass-subtle rounded p-1 min-w-[80px] z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs tracking-wide uppercase transition-colors duration-200 rounded ${
                        lang === l.code
                          ? "text-gold bg-gold/10 font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {l.flag} {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-px h-3 bg-border" />
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-6 top-24 z-50 glass-subtle p-6 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks(lang).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile language selector */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-border">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 text-[10px] tracking-wider uppercase transition-colors rounded ${
                      lang === l.code
                        ? "text-gold bg-gold/10 font-medium"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
