import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CardProduto from "@/components/card-produto";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getIdentities } from "../lib/api/get-mvv";

export default async function Home() {
  const produtos = [
    { id: 1, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
    { id: 2, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
    { id: 3, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
  ];

  let identitiesContent;
  try {
    const data = await getIdentities();
    identitiesContent = data.map((item: { id: number; title: string; text: string }) => (
      <div key={item.id} className="flex flex-col items-center justify-center">
        <h3 className="text-base sm:text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-xs sm:text-sm opacity-80">{item.text}</p>
      </div>
    ));
  } catch (error) {
    console.log("Error fetching identities:", error);
    identitiesContent = (
      <div className="col-span-3 text-center">
        <p>Ocorreu um erro ao carregar os dados</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />

      <section className="mx-auto w-full px-2 sm:px-4 py-8 sm:py-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">Mais Vendidos</h2>
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6 cursor-pointer">
          <div className="flex justify-center w-full gap-4 px-4">

            <button className="hidden md:block hover:scale-110 transition-transform">
              <FaChevronLeft />
            </button>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full justify-center">
              {produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
            <button className="hidden md:block hover:scale-110 transition-transform">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full shadow h-2"></div>

      <section className="max-w-6xl mx-auto w-full px-2 sm:px-4 py-8 sm:py-12">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">Confira a NOVA COLEÇÃO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {produtos.concat(produtos).map((produto, idx) => (
            <CardProduto key={idx} produto={produto} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {produtos.concat(produtos).map((produto, idx) => (
            <CardProduto key={idx + produtos.length} produto={produto} />
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