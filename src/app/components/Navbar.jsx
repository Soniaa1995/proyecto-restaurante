'use client'

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    
  return (
    <>
        <header className="sm:flex sm:justify-between bg-black p-4">
        <section className="flex justify-between">
          <h1 className="text-2xl font-semibold">La vaca dice Muu</h1>

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
          <ul className="flex flex-col gap-4 sm:flex-row">
            <li>
              <Link href="#">Inicio</Link>
            </li>
            <li>
              <Link href="#">Carta</Link>
            </li>
            <li>
              <Link href="#">Promociones</Link>
            </li>
            <li>
              <Link href="#">Reserva</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
