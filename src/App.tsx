import { Header } from './components/Header';
import { TemplateGrid } from './components/TemplateGrid';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <TemplateGrid />
      </div>
    </div>
  );
};

export default App;