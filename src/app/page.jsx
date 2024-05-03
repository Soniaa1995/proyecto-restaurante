import Image from "next/image";
import Link from "next/link";
import burguers from "@/public/img-section-uno.jpg";
import burguer from "@/public/prueba.jpg";
import twins from "@/public/img-section-dos.jpg";

export default function Page() {
  return (
    <main className="grow space-y-8">
      <section className="relative inline-block">
        <Image
          src={burguers}
          alt="img"
          className="block w-full h-auto sm:h-none sm:max-w-none"
        />
        <div className="absolute top-[90%] left-2/4 translate-x-[-50%] translate-y-[-50%] text-white font-semibold sm:top-[85%] text-xs sm:text-sm md:text-2xl lg:text-4xl font-ubuntoSans">
          <p>Las mejores hamburguesas</p>
          <p>Solo para los más atrevidos</p>
        </div>
      </section>
      <section className="relative inline-block">
        <Image
          src={burguer}
          alt="img"
          className="block w-full h-auto sm:h-none sm:max-w-none"
        />
        <div className="absolute top-[30%] left-[60%] translate-x-[-30%] translate-y-[-50%] text-white font-semibold sm:top-[20%] text-xs sm:text-sm md:text-2xl lg:text-3xl text-center font-ubuntoSans">
          <h1 className="">¿Te atreves a probar nuestra carta?</h1>
          <button className="border w-24 h-5 mt-3 sm:w-48 sm:h-12 rounded-md sm:mt-8">
            <Link href="/menu">Ver carta</Link>
          </button>
        </div>
      </section>

      <section className="relative inline-block">
        <Image
          src={twins}
          alt="img"
          className="block w-full h-auto sm:h-none sm:max-w-none"
        />
        <div className="absolute top-[20%] left-[60%] translate-x-[-30%] translate-y-[-50%] text-white font-semibold sm:top-[20%] text-xs sm:text-sm md:text-2xl lg:text-3xl text-center font-ubuntoSans">
          <h1>Conoce todas nuestras promociones</h1>
          <button className="border w-24 h-6 mt-2 sm:w-48 sm:h-12 rounded-md sm:mt-8">
            <Link href="/promociones">Promociones</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
