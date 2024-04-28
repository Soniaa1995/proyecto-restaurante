import Image from "next/image";
import promo1 from "@/public/img-promo1.jpg";
import promo2 from "@/public/img-promo2.jpg";


export default function promoPage() {
  return (
    <div className="p-5">
      <h1 className="text-center text-xl mt-5 sm:text-2xl md:text-4xl">
        DISFRUTA DE TODAS NUESTRAS PROMOCIONES
      </h1>
      <div className="">
        <section className="mb-4 p-6">
          <h3 className="text-center font-semibold text-xl mb-4 sm:text-2xl lg:text-3xl">2x1 Todos los miércoles</h3>
          <Image src={promo1} className="mb-5" 
         />
          <p className="text-lg sm:text-xl md:text-center lg:text-3xl">
            Dos burguers al precio de una, incluye patatas y bebida.
          </p>
        </section>
        <section className="mb-5 p-6">
          <h3 className="text-center font-semibold text-xl mb-4 sm:text-2xl md:text-4xl">La Tennessee</h3>
          <Image src={promo2} className="mb-7"
           height={1080}
           width={1920}/>
          <p className="text-lg mb-3 sm:text-xl md:text-center lg:text-3xl">
            Todos los meses podrás disfrutar de una hamburguesa única, diferente
            al resto por tan solo 12€.
          </p>
          <p className="text-lg sm:text-xl md:text-center lg:text-3xl">
            Ingredientes: Pan brioche, vaca rubia gallega 200g, cebolla
            caramelizada, cheddar ahumado y mermelada de bacon.
          </p>
        </section>
      </div>
    </div>
  );
}
