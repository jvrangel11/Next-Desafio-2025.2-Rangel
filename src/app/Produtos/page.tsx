import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardProduto from "@/components/card-produto";

function SearchBar() {
  return (
    <div className="relative w-full md:w-1/2">
      <input
        type="text"
        placeholder="O que você está procurando?"
        className="w-full border rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
    </div>
  );
}

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

      <section className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <SearchBar />
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
            <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">…</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">6</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}