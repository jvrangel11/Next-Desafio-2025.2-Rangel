import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';


export default function Header() {
  return (
    <header 
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-gray-900/70
        backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold tracking-wider">
              HÉRCULES
            </Link>
          </div>

          {/* Links de Navegação */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/contato" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contato
            </Link>
            <Link href="/produtos" className="text-gray-300 hover:text-white transition-colors duration-200">
              Produtos
            </Link>
            <Link href="/gerenciamento" className="text-gray-300 hover:text-white transition-colors duration-200">
              Gerenciamento
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
              Login
            </Link>
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <ShoppingBagIcon className="h-6 w-6" /> 
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

