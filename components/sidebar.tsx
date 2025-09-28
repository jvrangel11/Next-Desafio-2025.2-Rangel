"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaTasks, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/gerenciamento', label: 'Gerenciamento', icon: FaTasks },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>

      {!open && (
        <button
          className="fixed top-6 left-6 z-50 text-white p-3 rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => setOpen(true)}
          aria-label="Abrir Sidebar"
        >
          <FaBars className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}


      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-linear-to-t from-[#272727] to-[#424242] text-gray-300 p-6 flex flex-col justify-center z-50 transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ boxShadow: open ? '0 0 32px #0006' : 'none' }}
      >
        <button
          className="absolute top-6 right-6 text-white cursor-pointer p-2 rounded-full hover:scale-110 transition-transform duration-300"
          onClick={() => setOpen(false)}
          aria-label="Fechar Sidebar"
        >
          <FaTimes className="h-5 w-5" />
        </button>

        <div className="mb-15"></div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-4 p-3 rounded-lg hover:scale-110 transition-transform duration-300 text-white text-xl font-thin`}
                onClick={() => setOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className='bg-white w-full h-px mt-5'></div>
        <div className="mt-auto">
          <Link
            href="/logout"
            className="flex items-center gap-4 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
            onClick={() => setOpen(false)}
          >
            <FaSignOutAlt className="h-5 w-5" />
            <span>Log-out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}