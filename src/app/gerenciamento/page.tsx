"use client";
import Sidebar from "@/components/sidebar";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";

type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  createdAt: string;
};

type PaginatedResponse = {
  produtos: Produto[];
  totalPages: number;
  currentPage: number;
  total: number;
};

async function fetchProdutos(page: number = 1) {
  const res = await fetch(`/api/produtos?page=${page}&limit=5`, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json() as Promise<PaginatedResponse>;
}

async function addProduto(data: FormData) {
  const res = await fetch("/api/produtos", {
    method: "POST",
    body: JSON.stringify({
      title: data.get("title"),
      price: data.get("price"),
      description: data.get("description"),
      imageUrl: data.get("imageUrl") || "/assets/Camisa.png"
    })
  });
  if (!res.ok) throw new Error("Erro ao adicionar produto");
  return res.json();
}

async function updateProduto(id: number, data: FormData) {
  const res = await fetch("/api/produtos", {
    method: "PUT",
    body: JSON.stringify({
      id,
      title: data.get("title"),
      price: data.get("price"),
      description: data.get("description"),
      imageUrl: data.get("imageUrl")
    })
  });
  if (!res.ok) throw new Error("Erro ao atualizar produto");
  return res.json();
}

async function deleteProduto(id: number) {
  const res = await fetch("/api/produtos", {
    method: "DELETE",
    body: JSON.stringify({ id })
  });
  if (!res.ok) throw new Error("Erro ao excluir produto");
  return res.json();
}

export default function Gerenciamento({ children }: { children: React.ReactNode }) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modal, setModal] = useState<null | "add" | "view" | "edit" | "delete">(null);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadProdutos = async (page: number = currentPage) => {
    try {
      const data = await fetchProdutos(page);
      setProdutos(data.produtos);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      setProdutos([]);
      setTotalPages(1);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    loadProdutos(1);
  }, []);

  function openModal(type: "add" | "view" | "edit" | "delete", produto?: any) {
    setSelectedProduto(produto || null);
    setModal(type);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModal(null);
    setSelectedProduto(null);
    document.body.style.overflow = "";
  }

  return (
    <body className="bg-[url('/assets/bg2.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <main className="flex-1 py-20 overflow-auto h-full px-2 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <h1 className="text-3xl md:text-4xl font-jost font-light text-white text-center md:text-left">Gerenciamento de Produtos</h1>
              <button
                className="bg-[#311848] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:bg-[#5c377e] transition-colors duration-300"
                onClick={() => openModal("add")}
              >
                <FaPlus className="text-white font-thin text-2xl" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 min-w-[600px]">
                <thead>
                  <tr className="bg-[#0C2340] text-white text-base md:text-lg">
                    <th className="py-3 px-2 md:py-4 md:px-6 font-normal text-left">Nome</th>
                    <th className="py-3 px-2 md:py-4 md:px-6 font-normal text-left">Preço</th>
                    <th className="py-3 px-2 md:py-4 md:px-6 font-normal text-left">Descrição</th>
                    <th className="py-3 px-2 md:py-4 md:px-6 font-normal text-left">Imagem</th>
                    <th className="py-3 px-2 md:py-4 md:px-6 font-normal text-left">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {produtos.map((produto) => (
                    <tr key={produto.id} className="bg-[#1B2251] text-white text-base md:text-lg hover:bg-[#222955] transition-colors duration-400 mb-10">
                      <td className="py-4 px-2 md:py-6 md:px-6 font-bold break-words max-w-[180px]">{produto.title}</td>
                      <td className="py-4 px-2 md:py-6 md:px-6">R$ {produto.price.toFixed(2)}</td>
                      <td className="py-4 px-2 md:py-6 md:px-6 break-words max-w-[120px]">{produto.description}</td>
                      <td className="py-4 px-2 md:py-6 md:px-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center">
                          {produto.imageUrl ? (
                            <img src={produto.imageUrl} alt={produto.title} className="w-full h-full object-cover rounded-md" />
                          ) : (
                            <div className="w-full h-full bg-[url('/assets/transparent.png')] bg-contain bg-center bg-no-repeat rounded-md" />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-2 md:py-6 md:px-6">
                        <div className="flex gap-2 md:gap-4">
                          <button className="hover:scale-110 transition-transform" title="Visualizar" onClick={() => openModal("view", produto)}>
                            <FaEye className="text-white text-xl md:text-2xl" />
                          </button>
                          <button className="hover:scale-110 transition-transform" title="Editar" onClick={() => openModal("edit", produto)}>
                            <FaEdit className="text-white text-xl md:text-2xl" />
                          </button>
                          <button className="hover:scale-110 transition-transform" title="Excluir" onClick={() => openModal("delete", produto)}>
                            <FaTrash className="text-white text-xl md:text-2xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center mt-8 gap-2 md:gap-3 text-white text-lg md:text-xl">
              <button
                className={`transition-transform ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-125'}`}
                onClick={() => currentPage > 1 && loadProdutos(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => loadProdutos(page)}
                  className={`transition-transform hover:scale-125 ${
                    currentPage === page
                      ? 'text-blue-400 font-bold'
                      : ''
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                className={`transition-transform ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-125'}`}
                onClick={() => currentPage < totalPages && loadProdutos(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
          {children}

          {modal && (
            <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-2">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 w-full max-w-[90vw] bp-840:max-w-[400px] mx-auto relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                  onClick={closeModal}
                  aria-label="Fechar"
                >
                  ×
                </button>
                {/* Adicionar Produto */}
                {modal === "add" && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#311848]">Adicionar Produto</h2>
                    <form className="flex flex-col gap-4" onSubmit={async (e) => {
                      e.preventDefault();
                      setIsLoading(true);
                      try {
                        const formData = new FormData(e.currentTarget);
                        await addProduto(formData);
                        await loadProdutos(1);
                        closeModal();
                      } catch (error) {
                        alert("Erro ao adicionar produto");
                      }
                      setIsLoading(false);
                    }}>
                      <input
                        name="title"
                        type="text"
                        required
                        placeholder="Nome do produto"
                        className="border rounded px-3 py-2"
                      />
                      <input
                        name="price"
                        type="number"
                        required
                        step="0.01"
                        min="0"
                        placeholder="Preço"
                        className="border rounded px-3 py-2"
                      />
                      <textarea
                        name="description"
                        required
                        placeholder="Descrição"
                        className="border rounded px-3 py-2 min-h-[100px]"
                      />
                      <input
                        name="imageUrl"
                        type="text"
                        placeholder="URL da imagem"
                        className="border rounded px-3 py-2"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#311848] text-white px-4 py-2 rounded hover:bg-[#5c377e] transition-colors disabled:opacity-50"
                      >
                        {isLoading ? "Salvando..." : "Salvar"}
                      </button>
                    </form>
                  </div>
                )}
                {/* Visualizar Produto */}
                {modal === "view" && selectedProduto && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#311848]">Visualizar Produto</h2>
                    <div className="flex flex-col gap-2">
                      <span><strong>Nome:</strong> {selectedProduto.title}</span>
                      <span><strong>Preço:</strong> R$ {selectedProduto.price.toFixed(2)}</span>
                      <span><strong>Descrição:</strong> {selectedProduto.description}</span>
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center mt-2">
                        <img
                          src={selectedProduto.imageUrl}
                          alt={selectedProduto.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {/* Editar Produto */}
                {modal === "edit" && selectedProduto && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#311848]">Editar Produto</h2>
                    <form className="flex flex-col gap-4" onSubmit={async (e) => {
                      e.preventDefault();
                      setIsLoading(true);
                      try {
                        const formData = new FormData(e.currentTarget);
                        await updateProduto(selectedProduto.id, formData);
                        await loadProdutos(currentPage);
                        closeModal();
                      } catch (error) {
                        alert("Erro ao atualizar produto");
                      }
                      setIsLoading(false);
                    }}>
                      <input
                        name="title"
                        type="text"
                        required
                        defaultValue={selectedProduto.title}
                        className="border rounded px-3 py-2"
                      />
                      <input
                        name="price"
                        type="number"
                        required
                        step="0.01"
                        min="0"
                        defaultValue={selectedProduto.price}
                        className="border rounded px-3 py-2"
                      />
                      <textarea
                        name="description"
                        required
                        defaultValue={selectedProduto.description}
                        className="border rounded px-3 py-2 min-h-[100px]"
                      />
                      <input
                        name="imageUrl"
                        type="text"
                        defaultValue={selectedProduto.imageUrl}
                        className="border rounded px-3 py-2"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#311848] text-white px-4 py-2 rounded hover:bg-[#5c377e] transition-colors disabled:opacity-50"
                      >
                        {isLoading ? "Salvando..." : "Salvar Alterações"}
                      </button>
                    </form>
                  </div>
                )}
                {/* Excluir Produto */}
                {modal === "delete" && selectedProduto && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#311848]">Excluir Produto</h2>
                    <p>Tem certeza que deseja excluir <strong>{selectedProduto.title}</strong>?</p>
                    <div className="flex gap-2 md:gap-4 mt-6">
                      <button
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                        onClick={closeModal}
                      >
                        Cancelar
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                        onClick={async () => {
                          setIsLoading(true);
                          try {
                            await deleteProduto(selectedProduto.id);
                            await loadProdutos(1);
                            closeModal();
                          } catch (error) {
                            alert("Erro ao excluir produto");
                          }
                          setIsLoading(false);
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? "Excluindo..." : "Excluir"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </body>
  );
}