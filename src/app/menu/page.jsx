import Image from "next/image";
import { burguers } from "../../data";

export default function MenuPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {burguers.map((burguer) => (
          <div key={burguer.id} className=" bg-transparent  rounded-lg">
            <Image
              className="rounded-t-lg"
              src={burguer.image}
              alt="burguer"
            />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-black font-marker">
                {burguer.title}
              </h5>
              <p className="mb-3 text-black font-ubuntoSans font-semibold">
                {burguer.description}
              </p>
              <p className="text-black font-poetsenOne">Precio: {burguer.price}€</p>
            </div>
          </div>
      ))}
    </div>
  );
}