import React from "react";
import DataTable from "react-data-table-component";
import { FaBookBookmark } from "react-icons/fa6";
import { PiEye } from "react-icons/pi";
import { RiHealthBookLine } from "react-icons/ri";
import { PiEyeClosedThin } from "react-icons/pi";
import { VscSaveAs } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";

export default function ViewAreasAsignaturasComponent() {
  const dataAreas = [
    {
      codigo: "10",
      area: "CIENCIAS NATURALES Y EDUCATIVAS",
      abreviatura: "C. NAT. Y EDU.",
    },
    {
      codigo: "10",
      area: "CIENCIAS NATURALES Y EDUCATIVAS",
      abreviatura: "C. NAT. Y EDU.",
    },
  ];

  const columns = [
    {
      name: "Vista asignatura",
      selector: (row) => (
        <div className="cellAction">
          {/* <button
            className="w-8 h-8 text-red-600 cursor-pointer hover:bg-red-600 rounded-full hover:text-white"
            // onClick={() => eliminarDocente(row.id)}
          >
            <PiEyeClosedThin className="w-6 h-6 ml-1" />
          </button> */}
          {/* <Link to={`/teacher/new/${row.id}`}> */}
          {/* <Link to={RUTASRECTOR.RUTASESTABLECIMIENTO.RUTASEDES.EDITARSEDE}> */}
          <button className="w-8 h-8 text-green-600 rounded-full cursor-pointer hover:bg-green-600 hover:text-white ml-6">
            <PiEye className="w-6 h-6 ml-1" />
          </button>
          {/* </Link> */}
          {/* </Link> */}
        </div>
      ),
      sortable: true,
      width: "200px",
    },
    {
      name: "Código",
      selector: (row) => row.codigo,
      sortable: true,
      width: "200px",
    },
    {
      name: "Area",
      selector: (row) => row.area,
      sortable: true,
      width: "300px",
    },
    {
      name: "Abreviatura",
      selector: (row) => row.abreviatura,
      sortable: true,
      width: "210px",
    },
  ];

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
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform
        ${
          location.hash === "#areas" || location.hash === ""
            ? "scale-x-100"
            : "scale-x-0 fixed duration-0"
        }`}
      >
        <div className="flex flex-col justify-between items-center md:flex-col lg:flex-row max-w-full">
          <h1>Areas</h1>
          <div className="inline-flex rounded-md shadow-sm sm:mb-2 lg:mb-0" role="group">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-s-lg hover:bg-white hover:text-amber-500"
            >
              <VscSaveAs className="mr-2 w-6 h-6" />
              Guardar
            </button>
            <Link
            // to={
            //   RUTASRECTOR.RUTASESTABLECIMIENTO.RUTAINSTITUCION
            //     .ADMINISTRARINSTITUCION
            // }
            >
              <button
                // onClick={abrirModal}
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-e-lg hover:bg-white hover:text-green-600"
              >
                <RiHealthBookLine className="mr-2 w-6 h-6" />
                Nueva
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow max-w-full dark:border-gray-700 dark:bg-gray-800 mt-2">
          <DataTable
            columns={columns}
            data={dataAreas}
            // progressPending={loading}
            pagination
          />
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform
        ${
          location.hash === "#asignaturas"
            ? "scale-x-100"
            : "scale-x-0 fixed duration-0"
        }`}
      >
        <div className="flex flex-col justify-between items-center md:flex-col lg:flex-row max-w-full">
          <h1>Asignaturas</h1>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-s-lg hover:bg-white hover:text-amber-500"
            >
              <VscSaveAs className="mr-2 w-6 h-6" />
              Guardar
            </button>
            <Link
            // to={
            //   RUTASRECTOR.RUTASESTABLECIMIENTO.RUTAINSTITUCION
            //     .ADMINISTRARINSTITUCION
            // }
            >
              <button
                // onClick={abrirModal}
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-e-lg hover:bg-white hover:text-green-600"
              >
                <RiHealthBookLine className="mr-2 w-6 h-6" />
                Nueva
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow max-w-full dark:border-gray-700 dark:bg-gray-800 mt-2">
          <h1>Todas las asignaturas</h1>
        </div>
      </div>
    </>
  );
}