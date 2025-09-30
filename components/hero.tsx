export default function Hero() {
  return (
    <section className="relative bg-[url('/assets/bg1.png')] bg-no-repeat bg-cover bg-center text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-10 sm:py-16 px-2 sm:px-4 text-center gap-6 lg:flex-row lg:px-0 lg:mx-0 lg:max-w-1000 lg:pl-20 lg:flex-row-reverse">
        <img
          src="/assets/Hercules-logo2.png"
          alt="Hércules"
          className="w-150"
        />
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center font-thin leading-tight sm:leading-normal cursor-default hover:scale-105 transition-transform duration-300">
          Vista a <br />
          <span className="font-bold italic">FORÇA</span>
          <br />
          do estilo.
        </h1>
      </div>
    </section>
  );
}