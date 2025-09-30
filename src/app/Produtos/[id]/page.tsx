"use client";
import { useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaCreditCard } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Image from 'next/image';


const product = {
  name: 'Cash Over Feelings Oversized',
  price: 129.90,
  oldPrice: 173.20,
  installments: 'ou 6x de 28,87 s/ juros',
  sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula sed risus ultricies, non iaculis quam auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rutrum venenatis tempor. Duis quis lacus nisl, non pretium magna. Pellentesque ut pharetra libero. Mauris ac scelerisque eros. Nulla sed tristique purus. Aenean vestibulum lacinialibero. Nam varius egestas quam, eget tempor ligula malesuada auctor. Quisque tincidunt scelerisque eros, a varius turpis pharetra ut. Praesent lobortis at risus sit amet mollis.
    <br/><br/>
    Vivamus vel interdum tellus. Suspendisse potenti. Aliquam fringilla, libero sed egestas consectetur, eros mi luctus lorem, vel consequat felis neque sit amet ipsum. In sed arcu fermentum, viverra risus ac, commodo orci. Nullam risus augue, luctus ut lobortis at, egestas quis nulla. Curabitur placerat eu lectus a aliquet. Nam placerat massa sit amet, eget luctus augue mollis nec. Aenean hendrerit arcu volutpat nisl luctus rhoncus.
  `
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <main className="bg-gray-100 text-gray-800 bg-[url('/assets/bg1.png')] pt-25 bg-no-repeat bg-cover bg-center flex flex-col gap-10">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-[#fafafa] relative px-10 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          
          <div className="w-full flex justify-center items-center bg-gray-200 aspect-square rounded-lg hover:animate-pulse">
            <img src="/assets/Camisa.png" alt="" />
          </div>

          <div className='flex flex-col gap-10 items-center justify-center'><div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-3xl font-regular tracking-tight">{product.name}</h1>
            <div className="flex gap-10 items-center justify-center mt-10">
              <div id='pix' className="flex items-center gap-3">
              <img src="/assets/pix.png" alt="" width={40} />
              <div id='preco' className='flex flex-col'>
                <span className="text-base bp-840:text-lg text-gray-900">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <span className='font-thin text-sm text-gray-400'>Pagamento no PIX</span>
              </div></div>
              <div id='cartao' className="flex items-center gap-3">
              <FaCreditCard className='text-3xl ml-5' />
              <div id='preco' className='flex flex-col'>
                <span className="text-base bp-840:text-lg text-gray-900">R$ {product.oldPrice.toFixed(2).replace('.', ',')}</span>
                <span className='font-thin text-sm text-gray-400'>{product.installments}</span>
              </div></div>
            </div>
            </div>
          
            <div className="mt-4 flex flex-col align-center justify-center">
              <h3 className="text-sm font-thin text-gray-900 mb-2 text-center">Tamanhos Disponíveis:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
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
              <button className="w-full bg-[#311848] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 hover:bg-[#5c377e] transition-all duration-300 shadow-lg transform hover:scale-105 cursor-pointer">
                <span>Adicionar ao Carrinho  ㅤ|</span>
                <FaCartPlus className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full shadow h-2"></div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Descrição</h2>
          <p 
            className="text-gray-700 leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}