import React from "react";
import DataTable from "react-data-table-component";

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
