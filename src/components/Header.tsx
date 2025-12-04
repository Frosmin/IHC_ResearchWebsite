import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'centers' | 'labs' | 'detail' | 'research') => void;
}

function Header({ onNavigate }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent transition-colors"
            >
              Inicio
            </button>
            <button className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent transition-colors">
              Institucional
            </button>
            <button className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent transition-colors">
              Admisión Pregrado
            </button>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center px-3 pt-1 text-base font-bold text-gray-900 bg-gray-50 hover:bg-gray-100 border-b-2 border-gray-900 transition-colors h-full"
              >
                Investigación y Laboratorios
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 shadow-lg z-50">
                  <button
                    onClick={() => {
                      onNavigate('centers');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Centros de Investigación
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('labs');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-50 border-t border-gray-100 transition-colors"
                  >
                    Laboratorios
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('research');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-50 border-t border-gray-100 transition-colors"
                  >
                    Investigaciones Realizadas
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
