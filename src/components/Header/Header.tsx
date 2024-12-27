import { Layout } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const navigate = useNavigate()

  const handleLanguageToggle = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    toggleLanguage()
    navigate(`/${newLang}`)
  }

  const headerText = {
    es: "Explora nuestras plantillas de muestra, diseñadas para verse increíbles en web y móvil.",
    en: "Explore our sample templates, designed to look amazing on web and mobile."
  }

  const languageText = {
    es: "Español",
    en: "English"
  }

  return (
    <header className="flex flex-col items-center justify-center gap-3 mb-12">
      <div className="flex items-center justify-center gap-3">
        <img 
          src="/icon.svg" 
          alt="Menu Now Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          Menu Now
        </h1>
        <button 
          onClick={handleLanguageToggle}
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm"
        >
          {languageText[language]}
        </button>
      </div>
      <p className="text-sm md:text-base text-gray-300 text-center mt-2">
        {headerText[language]}
      </p>
    </header>
  );
};