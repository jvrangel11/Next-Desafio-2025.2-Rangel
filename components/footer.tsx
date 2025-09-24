import Link from 'next/link';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000b1e] text-gray-300">
      <div className="max-w-7xl items-center justify-center mx-auto py-12 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/termos" className="hover:text-white transition-colors">
            Termos de uso
          </Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">
            Política de privacidade
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <a href="#">
              <img src="/assets/secure-navigation.png" alt="Google Safe Browsing" className="h-12" />
            </a>
            <a href="#">
              <img src="/assets/avaliacoes-verificadas.png" alt="Google Avaliações" className="h-12" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/assets/Herculhes-logo-branca.png" alt="Hércules Logo" className="h-50 w-50" />
          <p className="text-xl font-semibold tracking-wider">HÉRCULES</p>
        </div>

        <div className="flex flex-col items-center justify-center md:items-end gap-4">
          <h3 className="text-lg font-semibold justify-center">Redes Sociais</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-3xl hover:text-white transition-colors">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-3xl hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-3xl hover:text-white transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Instagram" className="text-3xl hover:text-white transition-colors">
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