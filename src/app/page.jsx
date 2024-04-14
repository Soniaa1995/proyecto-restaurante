export default function Page() {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 ">
        <span className="text-white font-semibold">La vaca dice Muu</span>
        <div className="text-amber-500 font-semibold text-center ">
          <ul className="inline-flex ">
            <li className="mr-10">Inicio</li>
            <li className="mr-10">Carta</li>
            <li className="mr-10">Promociones</li>
            <li className="mr-10">Contacta con nosotros</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
