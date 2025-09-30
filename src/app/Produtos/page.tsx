"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardProduto from "@/components/card-produto";
import BarraDePesquisa from "@/components/barra-de-pesquisa";
import { FaAngleDown, FaCheck, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const produtos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Cash Over Feelings Oversized",
    price: 159.9,
    img: "assets/Camisa.png",
  }));
  const [showFilters, setShowFilters] = useState(false);
  const [openCategorias, setOpenCategorias] = useState(false);
  const [openTamanhos, setOpenTamanhos] = useState(false);
  const [openCores, setOpenCores] = useState(false);

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showFilters]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center items-center justify-center">
        <div className="bg-white bg-opacity-90">
          <section className="max-w-6xl mt-20 mx-auto px-1 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <BarraDePesquisa />
            <button
              className="flex items-center gap-2 border-b rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50/90 transition-colors duration-400"
              onClick={() => setShowFilters(true)}
            >
              Filtros
            </button>
          </section>

          <div>
            <div
              className={`fixed inset-0 z-[999] transition-all duration-300 ${
                showFilters
                  ? "bg-black/30 backdrop-blur-sm opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setShowFilters(false)}
            />
            <aside
              className={`fixed top-0 left-0 h-screen w-[340px] max-w-full z-[1000] bg-gradient-to-t from-[#272727] to-[#424242] text-white flex flex-col transition-transform duration-300 ${
                showFilters ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ boxShadow: showFilters ? "0 0 32px #0006" : "none" }}
            >
              <div className="pt-10 h-full flex flex-col justify-between">
                <div className="gap-10 flex flex-col">
                  <button
                    className="text-xl ml-5 cursor-pointer hover:text-white/80"
                    onClick={() => setShowFilters(false)}
                  >
                    <FaArrowLeft />
                  </button>
                  <div className="flex flex-col gap-4 w-full">
                    <div
                      className="flex justify-between px-8 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2"
                      onClick={() => setOpenCategorias(!openCategorias)}
                    >
                      <h2 className="">Categorias</h2>
                      <button>
                        <FaAngleDown
                          className={`transition-transform duration-200 ${
                            openCategorias ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openCategorias && (
                      <div className="flex flex-col gap-1 justify-center items-center">
                        {["Masculino", "Feminino", "Regular", "Oversized"].map((cat) => (
                          <div className="flex flex-row" key={cat}>
                            <h1 className="font-thin cursor-pointer">{cat}</h1>
                            <FaCheck className="text-xs hidden" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="flex justify-between px-8 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2"
                      onClick={() => setOpenTamanhos(!openTamanhos)}
                    >
                      <h2 className="">Tamanhos</h2>
                      <button>
                        <FaAngleDown
                          className={`transition-transform duration-200 ${
                            openTamanhos ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openTamanhos && (
                      <div className="flex flex-col gap-1 justify-center items-center">
                        {["PP", "P", "M", "G", "GG"].map((size) => (
                          <div className="flex flex-row" key={size} >
                            <h1 className="font-thin cursor-pointer">{size}</h1>
                            <FaCheck className="text-xs hidden" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="flex justify-between px-8 items-center border-b border-white/30 pb-2 cursor-pointer hover:scale-105 transition-transform duration-200 gap-2"
                      onClick={() => setOpenCores(!openCores)}
                    >
                      <h2 className="">Cores</h2>
                      <button>
                        <FaAngleDown
                          className={`transition-transform duration-200 ${
                            openCores ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openCores && (
                      <div className="flex flex-col gap-1 justify-center items-center">
                        {["Off-white", "Preto", "Marrom", "Vinho"].map((cor) => (
                          <div className="flex flex-row" key={cor}>
                            <h1 className="font-thin cursor-pointer">{cor}</h1>
                            <FaCheck className="text-xs hidden" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center w-full bg-[#311848] cursor-pointer shadow-sm hover:bg-[#5c377e] transition-colors duration-400">
                  <button type="submit" className="text-white px-4 py-7 w-full h-full cursor-pointer">
                    Aplicar
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <section className="max-w-6xl mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {produtos.map((p) => (
                <CardProduto key={p.id} produto={p} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">1</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">2</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">3</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">…</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200 transition-colors duration-200 cursor-pointer">6</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}