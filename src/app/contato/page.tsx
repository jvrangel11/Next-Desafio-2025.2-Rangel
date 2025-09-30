"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContatoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { nome, email, assunto, mensagem };
    console.log("Dados do formulário:", formData);
    alert('Obrigado pelo seu contato! (Veja os dados no console do navegador)');
  };

  return (
    <main className="bg-[url('/assets/bg1.png')] bg-cover bg-center bg-no-repeat pt-13">
    <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col gap-12 pt-10">
        
        <section className="bg-white shadow-2xl p-8 md:p-12 text-center mx-3">
          <div className="flex justify-center mb-6">
            <Image 
              src="/assets/HERCULES-LOGO-semfundo.png"
              alt="Hércules Logo"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-2xl font-regular text-[#000b1e] mb-2">Dados para Contato</h2>
          <p className="text-[#000b1e] mb-6 max-w-md mx-auto">
            Lorem Ipsum, 6, Lorem Ipsum Lorem Ipsum. <br /> (32) 4002-8922
          </p>
          <h3 className="text-xl font-thin text-[#000b1e] mb-4">Redes Sociais</h3>
          <div className="flex justify-center space-x-5 text-4xl text-[#000b1e]">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="WhatsApp" className="hover:text-green-500 transition-colors"><FaWhatsapp /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
          </div>
        </section>

        <section className="bg-white shadow-2xl p-8 md:p-12 mx-3">
          <h2 className="text-3xl text-[#000b1e] text-center mb-8">Fale Conosco</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input 
                type="text" 
                id="nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome *"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors text-lg"
              />
            </div>
            <div>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors text-lg"
              />
            </div>
            <div>
              <input 
                type="text" 
                id="assunto" 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Assunto *"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors text-lg"
              />
            </div>
            <div>
              <textarea 
                id="mensagem" 
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Mensagem *"
                required
                rows={5}
                className="w-full bg-transparent border-2 border-gray-300 rounded-lg focus:border-gray-800 focus:ring-0 transition-colors text-lg p-2"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-[#311848] text-white font-bold py-3 px-8 rounded-full hover:bg-[#472468] transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="h-10"></div>
      <Footer />
    </main>
  );
}