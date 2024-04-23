import Image from "next/image";
import { burguers } from "../../data";

export default function MenuPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {burguers.map((burguer) => (
          <div key={burguer.id} className=" bg-white border rounded-lg">
            <Image
              className="rounded-t-lg"
              src={burguer.image}
              alt="burguer"
            />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-black">
                {burguer.title}
              </h5>
              <p className="mb-3 text-gray-700">
                {burguer.description}
              </p>
              <p className="text-black font-semibold">Precio: {burguer.price}€</p>
            </div>
          </div>
      ))}
    </div>
  );
}