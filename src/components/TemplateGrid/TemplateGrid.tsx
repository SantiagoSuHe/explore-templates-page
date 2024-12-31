import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { templates } from '../../data/templates';
import { TemplateCard } from '../TemplateCard';

export const TemplateGrid = () => {
  const { language } = useContext(LanguageContext) as { language: 'en' | 'es' };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto px-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          imageUrl={template.imageUrl[language]}
          demoUrl={template.demoUrl}
        />
      ))}
    </div>
  );
};