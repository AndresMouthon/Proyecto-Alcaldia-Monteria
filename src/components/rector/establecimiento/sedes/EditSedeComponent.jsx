import React from "react";
import DataTable from "react-data-table-component";
import { BsBookmarksFill, BsFillBuildingFill } from "react-icons/bs";
import { FaPhoneAlt, FaSearch, FaUser } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { MdDelete, MdEdit, MdEditLocationAlt, MdEmail } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { VscSaveAs } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";

export default function EditSedeComponent() {
  const data = [
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
    {
      grupo: "0001",
      jornada: "UNICA",
      directorGrupo: "ANDRES DOMINGO MOUTHON MANCERA",
      sistemaEvaluacion: "Especial para preescolar",
      estado: "Abíerto",
    },
  ];

  const columns = [
    {
      name: "Acciones",
      selector: (row) => (
        <div className="cellAction">
          <button
            className="w-8 h-8 text-red-600 cursor-pointer hover:bg-red-600 rounded-full hover:text-white transition-all duration-200"
            // onClick={() => eliminarDocente(row.id)}
          >
            <MdDelete className="w-6 h-6 ml-1" />
          </button>
          {/* <Link to={`/teacher/new/${row.id}`}> */}
          <Link to="#">
            <button className="w-8 h-8 text-blue-600 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200">
              <MdEdit className="w-6 h-6 ml-1" />
            </button>
          </Link>
          {/* </Link> */}
        </div>
      ),
      sortable: true,
      width: "110px",
    },
    {
      name: "Grupo",
      selector: (row) => row.grupo,
      sortable: true,
      width: "100px",
    },
    {
      name: "Jornada",
      selector: (row) => row.jornada,
      sortable: true,
      width: "100px",
    },
    {
      name: "Director grupo",
      selector: (row) => row.directorGrupo,
      sortable: true,
      width: "300px",
    },
    {
      name: "Sistema de evaluación",
      selector: (row) => row.sistemaEvaluacion,
      sortable: true,
      width: "250px",
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
      width: "150px",
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
          <option value="#edicion">&#x1F449; Seleccione una opcion...</option>
          <option value="#edicion">&#x1F589; Editar sede</option>
          <option value="#informacion">&#x1F4DD; Informacion adicional</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:text-gray-400 w-full">
        <li className="w-full focus-within:z-10">
          <a
            href="#edicion"
            className={`inline-flex items-center justify-center text-lg w-full h-full p-4 bg-white border-r border-gray-200 hover:bg-blue-200 transition-all duration-200
        ${
          location.hash === "#edicion" || location.hash === ""
            ? "md:bg-cyan-600 text-white md:hover:bg-cyan-600"
            : ""
        }`}
          >
            <MdEdit className="w-6 h-6 mr-2" /> Editar sede
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#informacion"
            className={`inline-flex items-center justify-center text-lg w-full p-4 bg-white border-r border-gray-200 hover:bg-blue-200 transition-all duration-200
        ${
          location.hash === "#informacion"
            ? "md:bg-cyan-600 text-white md:hover:bg-cyan-600"
            : ""
        }`}
          >
            <TbReportSearch className="w-6 h-6 mr-2" /> Informacion adicional
          </a>
        </li>
      </ul>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform
        ${
          location.hash === "#edicion" || location.hash === ""
            ? "scale-x-100"
            : "scale-x-0 fixed duration-0"
        }`}
      >
        <div className="w-full mx-auto p-8 mt-2 bg-white border border-gray-200 rounded-lg shadow max-w-full dark:border-gray-700 dark:bg-gray-800">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                aria-label="disabled input"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer cursor-not-allowed"
                placeholder=" "
                value="Sede principal"
                disabled
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-green-500 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <BsFillBuildingFill className="w-6 h-6 -mt-1" />
                Sede
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                aria-label="disabled input"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer cursor-not-allowed"
                placeholder=" "
                value="Sede principal"
                disabled
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-green-500 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <IoPricetag className="w-6 h-6 -mt-1" />
                Abreviatura
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-violet-500 appearance-none dark:text-white dark:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-500 peer"
                placeholder=""
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-violet-500 dark:text-violet-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-500 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <FaMapLocation className="w-6 h-6 -mt-1 mr-1" />
                Dirección
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-violet-500 appearance-none dark:text-white dark:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-500 peer"
                placeholder=" "
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-violet-500 dark:text-violet-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-500 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <FaPhoneAlt className="w-6 h-6 mr-1" />
                Teléfono
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-teal-500 appearance-none dark:text-white dark:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                placeholder=" "
                required
              />
              <label
                form="floating_first_name"
                className="flex peer-focus:font-medium absolute text-sm text-teal-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <BsBookmarksFill className="w-6 h-6 -mt-1" />
                Dane
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <select
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-teal-500 appearance-none dark:text-white dark:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
                placeholder=""
                required
              >
                <option value="">Seleccione una opcion...</option>
                <option value="option1">Opción 1</option>
                <option value="option2">Opción 2</option>
                <option value="option3">Opción 3</option>
              </select>
              <label
                htmlFor="floating_last_name"
                className="flex peer-focus:font-medium absolute text-sm text-teal-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <MdEditLocationAlt className="w-6 h-6 -mt-1" />
                Zona
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <FaUser className="w-6 h-6 mr-1 -mt-0.5" />
                Coordinador
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white dark:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
              />
              <label
                form="floating_email"
                className="flex peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <MdEmail className="w-6 h-6 mr-1 -mt-0.5" />
                Email
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type=""
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-white dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
            />
            <label
              form="floating_email"
              className="flex peer-focus:font-medium absolute text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <FaSearch className="w-6 h-6 mr-1 -mt-0.5" />
              Observación
            </label>
          </div>
          <div className="relative z-0 w-full group flex justify-between items-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-lg hover:bg-white hover:text-amber-500 transition-all duration-200"
            >
              <VscSaveAs className="mr-2 w-6 h-6" />
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform
        ${
          location.hash === "#informacion"
            ? "scale-x-100"
            : "scale-x-0 fixed duration-0"
        }`}
      >
        <div className="flex flex-col justify-start items-center md:flex-col lg:flex-row max-w-full">
          <h1>Información adicional de la sede</h1>
        </div>
        <div className="flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow max-w-full dark:border-gray-700 dark:bg-gray-800 mt-2">
          <DataTable
            columns={columns}
            data={data}
            // progressPending={loading}
            pagination
          />
        </div>
      </div>
    </>
  );
}