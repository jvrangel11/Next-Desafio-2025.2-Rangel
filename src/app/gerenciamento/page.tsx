import Sidebar from "@/components/sidebar";

export default function GerenciamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // A mágica do background acontece aqui!
    <body className="bg-[url('/assets/bg2.png')] bg-cover bg-center bg-no-repeat"> 
      <div className="flex">
        <Sidebar />
        {/* Adicionamos overflow-auto para caso o conteúdo da tabela seja muito grande */}
        <main className="flex-1 p-8 overflow-auto h-screen">
          {children}
        </main>
      </div>
    </body>
  );
}