"use client";
import Link from "next/link";
import { type Produto } from '@/types/home/home';

export default function cardProduto({ produto }: { produto: Produto }) {
  return (
    <Link href={`/produtos/${produto.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform h-fit">
        <img src={produto.imageUrl} alt={produto.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <h3 className="font-semibold text-center">{produto.title}</h3>
        <p className="text-gray-700 font-semibold mt-1">R$ {produto.price.toFixed(2)}</p>
        <p className="text-gray-700 font-thin text-sm">ou 6x R$ {(produto.price / 6).toFixed(2)} s/ juros</p>
      </div>
    </Link>
  );
}
