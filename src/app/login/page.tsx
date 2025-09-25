export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/bg2.png')] bg-no-repeat bg-cover bg-center">
      <div className="bg-white/80 py-12.5 px-12.5 rounded-2xl shadow-[0_0_8px_#a259ff,0_0_16px_#a259ff80] flex justify-center items-center gap-8">
        <img src="/assets/HERCULES-LOGO-semfundo.png" width={300} alt="" />
        <div>
        <form className="space-y-5 font-jost">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/100 font-(Jost:400)"
              placeholder="seuemail@email.com"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-[300px] rounded-xl shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/100 font-(Jost:400)"
              placeholder="***********"
            />
          </div>
          <div className="flex items-center justify-center"><button type="submit" className="bg-[#311848] text-white px-4 py-2 rounded-xl cursor-pointer shadow-sm hover:bg-[#5c377e] transform-border">Login</button></div>
        </form>
      </div>
    </div>
    </div>
  );
}
      