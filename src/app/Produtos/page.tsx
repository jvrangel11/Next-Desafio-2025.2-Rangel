"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardProduto from "@/components/card-produto";
import BarraDePesquisa from "@/components/barra-de-pesquisa";
import { FaAngleDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from "react";




export default function ProductsPage() {
  const produtos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Cash Over Feelings Oversized",
    price: 159.9,
    img: "/placeholder.png",
  }));
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center items-center justify-center">
      <div className="bg-white bg-opacity-90">
      <section className="max-w-6xl mt-20 mx-auto px-1 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <BarraDePesquisa />
        <button className="flex items-center gap-2 border-b rounded-md px-4 py-2 hover:bg-gray-50/90 transition-colors duration-400" onClick={() => setShowSidebar(true)}>
          Filtros
        </button>
      </section>

      <div className="w-full h-full absolute bottom-0 z-999 backdrop-blur-xs flex justify-start items-start hidden" onClick={() => setShowSidebar(false)}>
        <div className="pt-10  h-full bg-linear-to-t from-[#424242] to-[#272727] text-white flex flex-col justify-between ">
          <div className="gap-10 flex flex-col">
          <button className="text-xl ml-5 cursor-pointer hover:text-white/80" onClick={() => setShowSidebar(false)}><FaArrowLeft /></button>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between px-20 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2">
              <h2 className="">Categorias</h2>
              <button><FaAngleDown /></button>
            </div>
            <div id="categorias" className="hidden">
              <div className="flex flex-col gap-1 justify-center items-center">
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Masculino</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Feminino</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Regular</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Oversized</h1>
              <FaCheck className="text-xs hidden" />
              </div>
            </div>
            </div>
            <div className="flex justify-between px-20 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2">
              <h2 className="">Tamanhos</h2>
              <button><FaAngleDown /></button>
            </div>
            <div id="tamanhos" className="hidden">
              <div className="flex flex-col gap-1 justify-center items-center">
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">PP</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">P</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">M</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">G</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">GG</h1>
              <FaCheck className="text-xs hidden" />
              </div>
            </div>
            </div>
            
            <div className="flex justify-between px-20 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2">
              <h2 className="">Cores</h2>
              <button><FaAngleDown /></button>
            </div>
            <div id="cores" className="hidden">
              <div className="flex flex-col gap-1 justify-center items-center">
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Off-white</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Preto</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Marrom</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              <div className="flex flex-row">
              <h1 className="font-thin cursor-pointer">Vinho</h1>
              <FaCheck className="text-xs hidden" />
              </div>
              </div>
            </div>
           </div> 
            
          </div>
          <div className="flex justify-center items-center w-full bg-[#311848] cursor-pointer shadow-sm hover:bg-[#5c377e] transition-colors duration-400">
            <button type="submit" className="text-white px-4 py-7 w-full h-full cursor-pointer">Aplicar</button>
          </div>
          
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((p) => (
            <CardProduto key={p.id} produto={p} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer">…</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer">6</button>
          </div>
        </div>
      </section>
      </div>
    </div>
      <Footer />
    </main>
  );
}