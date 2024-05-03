"use client";

import Swal from "sweetalert2";
import { useState } from "react";

export default function reservaPage() {
  const alertButton = (e) => {
    e.preventDefault();
    if (!data.firstName) {
      Swal.fire({
        title: "Error!",
        text: "El campo nombre es obligatorio!",
        icon: "error",
      });
    } else if (!data.lastName) {
      Swal.fire({
        title: "Error!",
        text: "El campo apellido es obligatorio!",
        icon: "error",
      });
    } else if (!data.email) {
      Swal.fire({
        title: "Error!",
        text: "El campo email es obligatorio!",
        icon: "error",
      });
    } else if (!data.phone) {
      Swal.fire({
        title: "Error!",
        text: "El campo teléfono es obligatorio!",
        icon: "error",
      });
    } else if (!data.people) {
      Swal.fire({
        title: "Error!",
        text: "Debe seleccionar el número de personas que asistirán al restaurante!",
        icon: "error",
      });
    }else if (!data.date) {
      Swal.fire({
        title: "Error!",
        text: "El campo date es obligatorio!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Reserva Realizada!",
        text: "Os hemos mandado un mail para que confirmeis la asistencia!",
        icon: "success",
      });
    }
  };

  const handleChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    people: "",
    date: "",
    message: "",
  });

  return (
    <form className="flex justify-center sm:flex sm:justify-center sm:m-0">
      <div className="bg-gradient-to-r from-lime-200 to-yellow-200 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-7 my-9">
        <h1 className="text-3xl mb-5 text-center text-black font-semibold font-poetsenOne">
          RESERVA ONLINE
        </h1>
        <div className="mb-5 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Nombre*
          </label>
          <input
            type="text"
            className="bg-gray-100 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5"
            placeholder="Nombre"
            name="firstName"
            value={data.firstName}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="apellidos"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Apellidos*
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5 "
            placeholder="Apellidos"
            name="lastName"
            value={data.lastName}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Email*
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5  "
            placeholder="lavacadicemuu@gmail.com"
            name="email"
            value={data.email}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Teléfono*
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5 "
            placeholder="teléfono"
            name="phone"
            value={data.phone}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="mb-5">
        <label
            htmlFor="name"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Número de personas*
          </label>
          <select
            name="people"
            id="people"
            value={data.people}
            onChange={handleChangeInput}
            className="bg-gray-50 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5"
          >
            <option value="comensales">Personas</option>
            <option value="person">1 Persona</option>
            <option value="people">2 personas</option>
            <option value="people">3 personas</option>
            <option value="people">4 personas</option>
            <option value="people">Más de 5 personas</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="llegada"
            className="block mb-2 text-sm text-black font-ubuntoSans font-bold"
          >
            Fecha y hora de la reserva*
          </label>
          <input
            type="datetime-local"
            id="llegada"
            name="date"
            value={data.date}
            onChange={handleChangeInput}
            className="bg-gray-50 border border-gray-300 text-gray-900 font-ubuntoSans font-bold text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm text-black font-ubuntoSans font-bold">
            Información adicional
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-ubuntoSans font-bold"
            placeholder="Posibles alergias, intolerancias, celiacos, etc.."
            name="message"
            value={data.message}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={alertButton}
            type="submit"
            className="text-white bg-orange-600 hover:bg-orange-400 rounded-lg font-ubuntoSans font-semibold text-sm w-full sm:w-[60%] px-5 py-2.5"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
