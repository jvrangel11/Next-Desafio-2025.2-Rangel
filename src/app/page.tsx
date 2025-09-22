import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import CardProduto from "@/components/card-produto";
import BarraPesquisa from "@/components/barra-de-pesquisa";

export default function Home() {
  const produtos = [
    { id: 1, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
    { id: 2, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
    { id: 3, name: "Cash Over Feelings Oversized", price: 159.90, img: "/assets/Camisa.png" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Mais Vendidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Confira a NOVA COLEÇÃO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.concat(produtos).map((produto, idx) => (
            <CardProduto key={idx} produto={produto} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.concat(produtos).map((produto, idx) => (
            <CardProduto key={idx} produto={produto} />
          ))}
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#1F2B5E] to-[#000B1E] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Missão ❤️</h3>
            <p className="text-sm opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visão 👁️</h3>
            <p className="text-sm opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Valores ✨</h3>
            <p className="text-sm opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
