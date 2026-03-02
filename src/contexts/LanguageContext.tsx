import { createContext, useContext, useState, type ReactNode } from "react";
import type { Language } from "../assets/localization";

interface LanguageContextType {
  language: Language;
  toggleLanguage: (language: Language) => void;
}

const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  function toggleLanguage(language: Language) {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}