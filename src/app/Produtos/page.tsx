import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardProduto from "@/components/card-produto";
import BarraDePesquisa from "@/components/barra-de-pesquisa";



export default function ProductsPage() {
  const produtos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Cash Over Feelings Oversized",
    price: 159.9,
    img: "/placeholder.png",
  }));

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center items-center justify-center">
      <div className="bg-white bg-opacity-90">
      <section className="max-w-6xl mt-20 mx-auto px-1 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <BarraDePesquisa />
        <button className="flex items-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-100 transition">
          Filtros
        </button>
      </section>

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