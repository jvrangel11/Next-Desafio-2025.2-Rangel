import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductCard from "@/components/cardProduto";

export default function Home() {
  const products = [
    { id: 1, name: "Cash Over Feelings Oversized", price: 159.90, img: "" },
    { id: 2, name: "Cash Over Feelings Oversized", price: 159.90, img: "" },
    { id: 3, name: "Cash Over Feelings Oversized", price: 159.90, img: "" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Mais Vendidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Confira a NOVA COLEÇÃO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.concat(products).map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#1F2B5E] to-[#000B1E] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Missão ❤️</h3>
            <p className="text-sm opacity-80">Nossa missão é trazer roupas que unem estilo e força.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visão 👁️</h3>
            <p className="text-sm opacity-80">Ser referência em moda urbana com identidade marcante.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Valores ✨</h3>
            <p className="text-sm opacity-80">Autenticidade, qualidade e confiança em cada peça.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}