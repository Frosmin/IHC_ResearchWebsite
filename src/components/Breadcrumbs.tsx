import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: string[];
  onNavigate: (view: 'home' | 'centers' | 'labs' | 'detail' | 'research') => void;
}

function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item}</span>
          ) : (
            <button
              onClick={() => {
                if (index === 0) onNavigate('home');
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
