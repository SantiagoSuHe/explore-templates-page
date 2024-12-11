import { Header } from './components/Header';
import { TemplateGrid } from './components/TemplateGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <TemplateGrid />
      </div>
    </div>
  );
}

export default App;