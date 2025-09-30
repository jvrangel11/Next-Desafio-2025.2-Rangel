import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="bg-[url('/assets/bg2.png')] bg-no-repeat bg-cover bg-center min-h-screen">
      <Link
        href="/"
        className="text-gray-300 hover:text-white transition-colors duration-200 absolute top-6 left-6"
      >
        <button className="hover:scale-110 transition-transform text-xl">
          <FaArrowLeft />
        </button>
      </Link>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/80 py-8 px-6 md:py-12 md:px-12 rounded-2xl shadow-[0_0_8px_#a259ff,0_0_16px_#a259ff80] flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-3xl">
          <img
            src="/assets/HERCULES-LOGO-semfundo.png"
            width={200}
            className="mb-6 md:mb-0 md:w-[300px]"
            alt=""
          />
          <div className="w-full max-w-md">
            <form className="space-y-5 font-jost">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white font-normal"
                  placeholder="seuemail@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full border border-gray-300 rounded-xl shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white font-normal"
                  placeholder="***********"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#311848] text-white px-4 py-2 rounded-xl cursor-pointer shadow-sm hover:bg-[#5c377e] transition-colors duration-200">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}