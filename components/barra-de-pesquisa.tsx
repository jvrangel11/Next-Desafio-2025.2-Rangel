export default function BarraDePesquisa() {
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