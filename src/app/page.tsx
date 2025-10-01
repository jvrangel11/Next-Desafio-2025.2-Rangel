import { getMaisVendidos, getNovaColecao, getMVV } from "@/actions/home/actions";
import HomePage from "./home-page";
import { type Produto } from "@/types/home/home";

export default async function HomeWrapper() {
  const [maisVendidos, novaColecao, mvv] = await Promise.all([
    getMaisVendidos(),
    getNovaColecao(),
    getMVV()
  ]);

  const produtosList: Produto[] = maisVendidos.success && maisVendidos.data ? maisVendidos.data : [];
  const novaColecaoList: Produto[] = novaColecao.success && novaColecao.data ? novaColecao.data : [];

  return (
    <HomePage 
      produtos={produtosList}
      produtosNovaColecao={novaColecaoList}
      mvvData={mvv.success && mvv.data ? mvv.data : []}
    />
  );
}