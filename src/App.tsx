import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { LanguageContext } from './context/LanguageContext'
import { Header } from './components/Header';
import { TemplateGrid } from './components/TemplateGrid';

export const App = () => {
  // Detectar el idioma del navegador
  const getDefaultLanguage = (): 'es' | 'en' => {
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  };

  const [language, setLanguage] = useState<'es' | 'en'>(getDefaultLanguage())

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={`/${getDefaultLanguage()}`} replace />} />
          <Route path="/:lang" element={
            <div className="min-h-screen bg-gray-900 px-4 py-8">
              <div className="container mx-auto px-4 py-16">
                <Header />
                <TemplateGrid />
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;