"use client";

import Swal from "sweetalert2";
import { useState } from "react";

export default function contactoPage() {

  //PARA EL FORMULARIO DE SUGERENCIAS
  const alertButtonSuggest = (e) => {
    e.preventDefault();
    if (!dataSuggest.firstName) {
      Swal.fire({
        title: "Error!",
        text: "El campo nombre es obligatorio!",
        icon: "error",
      });
    } else if (!dataSuggest.email) {
      Swal.fire({
        title: "Error!",
        text: "El campo email es obligatorio!",
        icon: "error",
      });
    } else if (!dataSuggest.phone) {
      Swal.fire({
        title: "Error!",
        text: "El campo teléfono es obligatorio!",
        icon: "error",
      });
    } else if (!dataSuggest.message) {
      Swal.fire({
        title: "Error!",
        text: "Debes escribir un mensaje para saber la sugencia",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Sugerencia enviada!",
        text: "Gracias por enviar todas vuestras propuestas!",
        icon: "success",
      });
    }
  };

  //Para el formulario trabaja con nosotros
  const alertButtonWork = (e) => {
    e.preventDefault();
    if (!dataWork.firstName) {
      Swal.fire({
        title: "Error!",
        text: "El campo nombre es obligatorio!",
        icon: "error",
      });
    } else if (!dataWork.email) {
      Swal.fire({
        title: "Error!",
        text: "El campo email es obligatorio!",
        icon: "error",
      });
    } else if (!dataWork.phone) {
      Swal.fire({
        title: "Error!",
        text: "El campo teléfono es obligatorio!",
        icon: "error",
      });
    } else if (!dataWork.file) {
      Swal.fire({
        title: "Error!",
        text: "Debes subir tu CV",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Solicitud enviada!",
        text: "En unos días le daremos una respuesta en su correo electrónico",
        icon: "success",
      });
    }
  };

  //PARA EL FORMULARIO DE SUGERENCIAS
  const handleChangeSuggest = (e) => {
    setDataSuggest({
      ...dataSuggest,
      [e.target.name]: e.target.value,
    });
  };

  const [dataSuggest, setDataSuggest] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  //Para el form de trabaja con nosotros
  const handleChangeWorkd = (e) => {
    setDataWork({
      ...dataWork,
      [e.target.name]: e.target.value,
    });
  };

  const [dataWork, setDataWork] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    file: "",
  })

  return (
    <div className="flex flex-col justify-center items-center p-10 sm:grid sm:grid-cols-2 sm:justify-evenly sm:items-center sm:grow">
      <h1 className="text-xl sm:text-3xl font-poetsenOne text-black text-center p-3 mb-4">
        ¿QUIERES TRABAJAR CON NOSOTROS?
      </h1>
      <div className="w-full mb-10">
        <form>
          <div className="mb-5">
            <input
              type="text"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="NOMBRE Y APELLIDOS"
              name="firstName"
              required
              value={dataWork.firstName}
              onChange={handleChangeWorkd}
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="CORREO ELECTRONICO"
              name="email"
              required
              value={dataWork.email}
              onChange={handleChangeWorkd}
            />
          </div>
          <div className="mb-5">
            <input
              type="phone"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="TELEFONO"
              name="phone"
              required
              value={dataWork.phone}
              onChange={handleChangeWorkd}
            />
          </div>
          <div className="mb-5">
            <textarea
              type="message"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="CUENTANOS ALGO MAS SOBRE TI.."
              name="message"
              required
              value={dataWork.message}
              onChange={handleChangeWorkd}
            ></textarea>
          </div>
          <div className="mb-5">
            <input
              className="block w-full font-ubuntoSans font-semibold text-sm p-2.5 text-slate-400 rounded-lg cursor-pointer bg-white"
              name="file"
              type="file"
              value={dataWork.file}
              onChange={handleChangeWorkd}
            />
          </div>
          <div className="sm:flex sm:justify-center">
            <button
            onClick={alertButtonWork}
              type="submit"
              className="bg-orange-600 hover:bg-orange-400 rounded-lg text-black w-full px-5 py-2.5 font-ubuntoSans font-semibold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-xl sm:text-3xl font-poetsenOne text-black text-center p-3 mb-4">
        ¿IDEAS, SUGERENCIAS, PROPUESTAS? TE ESCUCHAMOS
      </h1>
      <div className="w-full">
        <form>
          <div className="mb-5">
            <input
              type="text"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="NOMBRE Y APELLIDOS"
              name="firstName"
              required
              value={dataSuggest.firstName}
              onChange={handleChangeSuggest}
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="CORREO ELECTRONICO"
              name="email"
              required
              value={dataSuggest.email}
              onChange={handleChangeSuggest}
            />
          </div>
          <div className="mb-5">
            <input
              type="phone"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="TELEFONO"
              name="phone"
              required
              value={dataSuggest.phone}
              onChange={handleChangeSuggest}
            />
          </div>
          <div className="mb-5">
            <textarea
              type="message"
              className="text-gray-900 font-ubuntoSans font-semibold rounded-lg block w-full p-2.5"
              placeholder="MENSAJE"
              name="message"
              required
              value={dataSuggest.message}
              onChange={handleChangeSuggest}
            ></textarea>
          </div>
          <div className="sm:flex sm:justify-center">
            <button
              onClick={alertButtonSuggest}
              type="submit"
              className="bg-orange-600 hover:bg-orange-400 rounded-lg text-black w-full px-5 py-2.5 font-ubuntoSans font-semibold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
