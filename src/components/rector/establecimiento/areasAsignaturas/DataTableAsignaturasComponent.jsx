import React from "react";
import DataTable from "react-data-table-component";
import { IoIosList } from "react-icons/io";

export default function DataTableAsignaturasComponent({ listadoAsignaturas }) {
  const columns = [
    {
      name: "Área",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Asignaturas",
      selector: (row) => row.asignaturas,
      sortable: true,
      wrap: true,
    },
    {
      name: "Ver detalle",
      cell: (row) => (
        <button
          className="w-8 h-8 text-green-600 cursor-pointer hover:bg-green-600 rounded-full hover:text-white"
          // onClick={() => eliminarDocente(row.id)}
        >
          <IoIosList className="w-6 h-6 ml-1" />
        </button>
      ),
      button: true,
    },
  ];

  return (
    <div className="flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow w-full dark:border-gray-700 dark:bg-gray-800">
      <DataTable
        columns={columns}
        data={listadoAsignaturas}
        // progressPending={loading}
        pagination
      />
    </div>
  );
}
