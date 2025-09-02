import Link from 'next/link';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000b1e] text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Coluna 1: Links e Selos */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/termos" className="hover:text-white transition-colors">
            Termos de uso
          </Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">
            Política de privacidade
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <a href="#">
              <img src="/path/to/google-safe-browsing.png" alt="Google Safe Browsing" className="h-12" />
            </a>
            <a href="#">
              <img src="/path/to/google-reviews.png" alt="Google Avaliações" className="h-12" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/path/to/hercules-logo-circular.png" alt="Hércules Logo" className="h-24 w-24" />
          <p className="text-xl font-semibold tracking-wider">HÉRCULES</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold">Redes Sociais</h3>
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-white transition-colors">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-2xl hover:text-white transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ©{currentYear} Code Jr. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}