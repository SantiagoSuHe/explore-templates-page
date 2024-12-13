import { Layout } from 'lucide-react';

export const Header = () => {
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
      </div>
      <p className="text-sm md:text-base text-gray-300 text-center mt-2">
        Explora nuestras plantillas de muestra, diseñadas para verse increíbles en web y móvil.
      </p>
    </header>
  );
};