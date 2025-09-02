type Product = {
  id?: number;
  name: string;
  price: number;
  img: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-center">{product.name}</h3>
      <p className="text-gray-700 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
    </div>
  );
}
