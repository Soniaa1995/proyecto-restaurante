import Image from "next/image";
import burguers from "@/public/img-section-uno.jpg";
import burguer from "@/public/prueba.jpg"
import twins from "@/public/img-section-dos.jpg"

export default function Main() {
  return (
    <>
      <main className="grow space-y-8">
        <section className="relative inline-block">
          <Image
            src={burguers}
            alt="img"
            className="block w-full h-auto sm:h-none sm:max-w-none"
          />
          <div className="absolute top-[90%] left-2/4 translate-x-[-50%] translate-y-[-50%] text-white font-semibold sm:top-[85%] text-sm md:text-2xl lg:text-4xl">
            <h1>Las mejores hamburguesas</h1>
            <p>Solo para los más atrevidos</p>
          </div>
        </section>
        <section className="relative inline-block">
          <Image
            src={burguer}
            alt="img"
            className="block w-full h-auto sm:h-none sm:max-w-none"
          />
          <div className="absolute top-[20%] left-[60%] translate-x-[-30%] translate-y-[-50%] text-white font-semibold sm:top-[20%] text-sm md:text-2xl lg:text-3xl text-center">
            <h1 className="">¿Te atreves a probar nuestra carta?</h1>
            <button className="border w-32 h-6 mt-4 sm:w-48 sm:h-12 rounded-md sm:mt-8">
              Ver carta
            </button>
          </div>
        </section>

        <section className="relative inline-block">
          <Image
            src={twins}
            alt="img"
            className="block w-full h-auto sm:h-none sm:max-w-none"
          />
          <div className="absolute top-[10%] left-[60%] translate-x-[-30%] translate-y-[-50%] text-white font-semibold sm:top-[20%] text-sm md:text-2xl lg:text-3xl text-center">
            <h1 className="">Conoce todas nuestras promociones</h1>
            <button className="border w-32 h-6 mt-2 sm:w-48 sm:h-12 rounded-md sm:mt-8">
              Promociones
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
