type Produto = {
  id?: number;
  name: string;
  price: number;
  img: string;
};

export default function cardProduto({ produto }: { produto: Produto }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform" >
      <img src={produto.img} alt={produto.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-center">{produto.name}</h3>
      <p className="text-gray-700 font-bold mt-2">R$ {produto.price.toFixed(2)}</p>
    </div>
  );
}
