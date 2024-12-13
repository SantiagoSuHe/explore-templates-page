import { ExternalLink } from 'lucide-react';
import type { TemplateCardProps } from './types';

export const TemplateCard = ({ imageUrl, demoUrl }: TemplateCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative group">
        <img 
          src={imageUrl} 
          alt="Template preview" 
          className="w-full h-96 object-cover object-top"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30 transition-all duration-300 flex items-end md:items-center justify-center pb-6 md:pb-0">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            Explorar <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};