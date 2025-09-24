export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center">
      <div className="bg-white/90 p-8 rounded-2xl shadow-lg flex justify-center items-center gap-8">
        <img src="/assets/HERCULES-LOGO-semfundo.png" width={300} alt="" />
        <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/100"
              placeholder="seuemail@email.com"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-[300px] rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/100"
              placeholder="***********"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
      