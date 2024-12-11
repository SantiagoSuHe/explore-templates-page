import { templates } from '../../data/templates';
import { TemplateCard } from '../TemplateCard';

export const TemplateGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          title={template.title}
          description={template.description}
          imageUrl={template.imageUrl}
          demoUrl={template.demoUrl}
        />
      ))}
    </div>
  );
};