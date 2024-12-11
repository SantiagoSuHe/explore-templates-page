import { ExternalLink } from 'lucide-react';
import type { TemplateCardProps } from './types';

export const TemplateCard = ({ title, description, imageUrl, demoUrl }: TemplateCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-medium">
            Click to explore
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Explore <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};