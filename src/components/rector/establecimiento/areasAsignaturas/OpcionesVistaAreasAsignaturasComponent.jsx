import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function OpcionesVistaAreasAsignaturasComponent() {
  const location = useLocation();
  return (
    <>
      <div className="sm:hidden w-full">
        <select
          onChange={(e) => (window.location.href = e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        >
          <option value="#areas">&#x1F449; Seleccione una opcion...</option>
          <option value="#areas">&#x1F4D6; Areas</option>
          <option value="#asignaturas">
            &#x1F4DA; Asignaturas seleccionadas 2
          </option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:text-gray-400 w-full">
        <li className="w-full focus-within:z-10">
          <a
            href="#areas"
            className={`inline-flex items-center justify-center text-lg w-full h-full p-4 bg-white border-r border-gray-200 hover:bg-blue-200 transition-all duration-200
            ${
              location.hash === "#areas" || location.hash === ""
                ? "md:bg-cyan-600 text-white md:hover:bg-cyan-600"
                : ""
            }`}
          >
            <FaBookBookmark className="w-6 h-6 mr-2" /> Areas
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#asignaturas"
            className={`inline-flex items-center justify-center text-lg w-full p-4 bg-white border-r border-gray-200 hover:bg-blue-200 transition-all duration-200
            ${
              location.hash === "#asignaturas"
                ? "md:bg-cyan-600 text-white md:hover:bg-cyan-600"
                : ""
            }`}
          >
            <FaBookBookmark className="w-6 h-6 mr-2" /> Asignaturas
            seleccionadas
            <span
              className={`inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-white bg-gray-500 rounded-full 
              ${
                location.hash === "#asignaturas"
                  ? "md:bg-white md:text-cyan-600"
                  : ""
              }`}
            >
              2
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}
