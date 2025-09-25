export default function Hero() {
  return (
    <section className="relative bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-center py-16 px-4 text-center">
        <h1 className="text-8xl text-center md:text-5xl font-thin leading-normal cursor-default hover:scale-115 transition-transform duration-300">
          Vista a <br /><span className="font-bold italic">FORÇA</span><br />do estilo.
        </h1>
        <img src="/assets/Hercules-logo2.png" alt="Hércules" className="w-150" />
      </div>
    </section>
  );
}