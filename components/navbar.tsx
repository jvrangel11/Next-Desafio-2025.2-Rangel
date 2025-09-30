"use client";
import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#000b1e]/20
        shadow-md
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold tracking-wider">
              HÉRCULES
            </Link>
          </div>

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


          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
              Login
            </Link>
            <button className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
              <ShoppingBagIcon className="h-6 w-6" />
            </button>

            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>


      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex flex-col">
          <div className="flex justify-end p-6">
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-10">
            <Link href="/" className="text-white text-xl" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/contato" className="text-white text-xl" onClick={() => setMenuOpen(false)}>
              Contato
            </Link>
            <Link href="/produtos" className="text-white text-xl" onClick={() => setMenuOpen(false)}>
              Produtos
            </Link>
            <Link href="/gerenciamento" className="text-white text-xl" onClick={() => setMenuOpen(false)}>
              Gerenciamento
            </Link>
            <Link href="/login" className="text-white text-xl" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}