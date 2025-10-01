"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CardProduto from "@/components/card-produto";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { type Produto, type MVVItem } from '@/types/home/home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type HomePageProps = {
  produtos: Produto[];
  produtosNovaColecao: Produto[];
  mvvData: MVVItem[];
};

export default function HomePage({ produtos, produtosNovaColecao, mvvData }: HomePageProps) {
  const identitiesContent = mvvData.map((item) => (
    <div key={item.id} className="flex flex-col items-center gap-2">
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-sm text-gray-300">{item.text}</p>
    </div>
  ));
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <section className="mx-auto w-full px-2 sm:px-4 py-8 sm:py-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">Mais Vendidos</h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id}>
                <CardProduto 
                  produto={produto}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors">
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors">
            <FaChevronRight className="text-gray-800" />
          </button>
        </div>
      </section>

      <div className="w-full shadow h-2"></div>

      <section className="max-w-6xl mx-auto w-full px-2 sm:px-4 py-8 sm:py-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">Confira a NOVA COLEÇÃO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {produtosNovaColecao.map((produto) => (
            <CardProduto 
              key={produto.id} 
              produto={produto} 
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#1F2B5E] to-[#000B1E] text-white py-10 sm:py-16 w-full">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3">
          {identitiesContent}
        </div>
      </section>

      <Footer />
    </main>
  );
}