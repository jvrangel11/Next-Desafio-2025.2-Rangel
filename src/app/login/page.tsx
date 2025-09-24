export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-95% flex justify-center items-center">
        <img src="/assets/Hercules-logo2.png" width={400} alt="" />
        <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder=""
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
      