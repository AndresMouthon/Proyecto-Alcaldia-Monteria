import React from "react";
import DataTable from "react-data-table-component";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbPlaylistAdd, TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RUTASRECTOR } from "../../../../models/rutasModels";

export default function ViewSedesComponent({ abrirModal }) {
  const data = [
    {
      nombre: "ESC RUR SIMON BOLIVAR",
      abreviatura: "E.R SIMON BOLIVAR",
      dane: "223001007806",
      direccion: "VDA LA F MUNDO NVO",
      telefono: "3022125226",
      email: "andresdomingomouthon541@gmail.com",
      grupo: "12",
      matriculados: "10",
      noMatriculados: "2",
    },
    {
      nombre: "Sede 1",
      abreviatura: "Sede 1",
      dane: "123456789",
      direccion: "Calle 1",
      telefono: "123456789",
      email: "andresdomingomouthon541@gmail.com",
      grupo: "12",
      matriculados: "10",
      noMatriculados: "2",
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
          <Link to={RUTASRECTOR.RUTASESTABLECIMIENTO.RUTASEDES.EDITARSEDE}>
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
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      width: "220px",
    },
    {
      name: "Abreviatura",
      selector: (row) => row.abreviatura,
      sortable: true,
      width: "200px",
    },
    {
      name: "Dane",
      selector: (row) => row.dane,
      sortable: true,
      width: "180px",
    },
    {
      name: "Direccion",
      selector: (row) => row.direccion,
      sortable: true,
      width: "180px",
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
      sortable: true,
      width: "180px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "320px",
    },
    {
      name: "Grupos",
      selector: (row) => row.grupo,
      sortable: true,
      width: "140px",
    },
    {
      name: "Matriculados",
      selector: (row) => row.matriculados,
      sortable: true,
      width: "140px",
    },
    {
      name: "No matriculados",
      selector: (row) => row.noMatriculados,
      sortable: true,
      width: "140px",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
      <div className="flex flex-col justify-between items-center md:flex-col lg:flex-row max-w-full">
        <h1>Sedes</h1>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-yellow-600 rounded-s-lg hover:bg-white hover:text-yellow-600 transition-all duration-200"
          >
            <TbReportSearch className="mr-2 w-6 h-6" />
            Informe
          </button>
          <Link
          // to={
          //   RUTASRECTOR.RUTASESTABLECIMIENTO.RUTAINSTITUCION
          //     .ADMINISTRARINSTITUCION
          // }
          >
            <button
              onClick={abrirModal}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-e-lg hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              <TbPlaylistAdd className="mr-2 w-6 h-6" />
              Crear sede
            </button>
          </Link>
        </div>
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
  );
}
