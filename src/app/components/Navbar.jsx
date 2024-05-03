'use client'

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    
  return (
    <>
        <header className="sm:flex sm:justify-between text-black bg-gradient-to-r from-amber-500 to-yellow-300 p-4">
        <section className="flex justify-between mb-5">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-5xl font-poetsenOne sm:mt-4 md:mt-3 lg:mt-1">La vaca dice Muu</h1>
          <section className="sm:hidden">
            <button
              className={`${open == false ? "hidden" : ""}`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
            <button
              className={`${open == true ? "hidden" : ""}`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </section>
        </section>

        <nav className={`sm:block sm:my-auto mt-3 ${open == false ? "hidden" : "block"}`}>
          <ul className="flex flex-col gap-4 text-sm  sm:flex-row md:text-xl lg:text-2xl font-poetsenOne">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/menu">Carta</Link>
            </li>
            <li>
              <Link href="/promociones">Promociones</Link>
            </li>
            <li>
              <Link href="/reserva">Reserva</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
