import { Layout } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 mb-12">
      <div className="flex items-center justify-center gap-3">
        <Layout className="w-8 h-8 text-indigo-600" />
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Select a template to explore
        </h1>
      </div>
      <p className="text-gray-600 text-center mt-2">
        Browse through our collection of beautiful, responsive templates
      </p>
    </header>
  );
};