"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language } from "@/i18n/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && ["es", "en", "pt", "fr"].includes(saved)) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
