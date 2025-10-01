"use client";
import { useState } from 'react';
import { getProduto } from "@/actions/home/actions";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaCreditCard } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";

const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

import { type Produto as Product } from '@/types/home/home';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProduto(parseInt(params.id));
      if (result.success && result.data) {
        setProduct({
          id: result.data.id,
          title: result.data.title,
          price: result.data.price,
          description: result.data.description,
          imageUrl: result.data.imageUrl
        });
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Carregando produto...</p>
        </div>
        <Footer />
      </main>
    );
  }

  const priceWithInterest = product.price * 1.15;
  const installmentValue = priceWithInterest / 6;

  return (
    <main className="bg-gray-100 text-gray-800 bg-[url('/assets/bg1.png')] pt-25 bg-no-repeat bg-cover bg-center flex flex-col gap-10">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-[#fafafa] relative px-10 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          
          <div className="w-full flex justify-center items-center bg-gray-200 aspect-square rounded-lg hover:animate-pulse">
            <img 
              src={product.imageUrl || "/assets/Camisa.png"} 
              alt={product.title}
              className="w-full h-full object-contain p-4"
            />
          </div>

          <div className='flex flex-col gap-10 items-center justify-center'>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-3xl font-regular tracking-tight">{product.title}</h1>
              <div className="flex gap-10 items-center justify-center mt-10">
                <div id='pix' className="flex items-center gap-3">
                  <img src="/assets/pix.png" alt="" width={40} />
                  <div id='preco' className='flex flex-col'>
                    <span className="text-base bp-840:text-lg text-gray-900">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    <span className='font-thin text-sm text-gray-400'>Pagamento no PIX</span>
                  </div>
                </div>
                <div id='cartao' className="flex items-center gap-3">
                  <FaCreditCard className='text-3xl ml-5' />
                  <div id='preco' className='flex flex-col'>
                    <span className="text-base bp-840:text-lg text-gray-900">R$ {priceWithInterest.toFixed(2).replace('.', ',')}</span>
                    <span className='font-thin text-sm text-gray-400'>ou 6x de R$ {installmentValue.toFixed(2).replace('.', ',')} s/ juros</span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="mt-4 flex flex-col align-center justify-center">
              <h3 className="text-sm font-thin text-gray-900 mb-2 text-center">Tamanhos Disponíveis:</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-2 border rounded-md font-semibold transition-colors cursor-pointer
                      ${selectedSize === size
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button 
                className={`w-full bg-[#311848] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg transform 
                  ${selectedSize ? 'hover:bg-[#5c377e] hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!selectedSize}
              >
                <span>Adicionar ao Carrinho  ㅤ|</span>
                <FaCartPlus className="h-6 w-6" />
              </button>
              {!selectedSize && (
                <p className="text-red-500 text-sm mt-2 text-center">Selecione um tamanho para continuar</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full shadow h-2"></div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Descrição</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {product.description}
          </p>
          <img src="/assets/tabela-de-medidfas.jpeg" alt="Tabela de Medidas" className="mt-8 mx-auto" />
        </div>
      </div>
      <Footer />
    </main>
  );
}