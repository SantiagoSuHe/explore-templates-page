import { createContext, useContext, ReactNode } from 'react';

type LanguageContextType = {
  language: 'es' | 'en';
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 