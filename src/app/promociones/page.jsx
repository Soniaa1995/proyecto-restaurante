import Image from "next/image";
import promo1 from "@/public/img-promo1.jpg";
import promo2 from "@/public/img-promo2.jpg";

export default function PromoPage() {
  return (
    <div className="p-5">
      <h1 className="text-center mt-5 mb-6 text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poetsenOne text-black font-semibold">
        DISFRUTA DE TODAS NUESTRAS PROMOCIONES
      </h1>
      <section className="mb-4 p-6">
        <h3 className="text-center font-semibold text-2xl mb-4 sm:text-3xl lg:text-4xl font-poetsenOne text-black">
          2x1 Todos los miércoles
        </h3>
        <Image src={promo1} className="mb-5" />
        <p className=" text-center text-lg sm:text-xl lg:text-3xl font-ubuntoSans text-black font-semibold">
          Dos burguers al precio de una, incluye patatas y bebida.
        </p>
      </section>
      <section className="mb-5 p-6">
        <h3 className="text-center font-semibold text-3xl mb-4 sm:text-4xl md:text-5xl font-poetsenOne text-black">
          La Tennessee
        </h3>
        <Image src={promo2} className="mb-7" height={1080} width={1920} />
        <p className="text-lg mb-3 sm:text-xl text-center lg:text-3xl font-ubuntoSans text-black font-semibold">
          Todos los meses podrás disfrutar de una hamburguesa única, diferente
          al resto por tan solo 12€.
        </p>
        <p className="text-lg sm:text-xl text-center lg:text-3xl font-ubuntoSans text-black font-semibold">
          Pan brioche, vaca rubia gallega 200g, cebolla
          caramelizada, cheddar ahumado y mermelada de bacon.
        </p>
      </section>
    </div>
  );
}
