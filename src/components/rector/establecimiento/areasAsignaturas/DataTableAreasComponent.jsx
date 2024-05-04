import React from "react";
import DataTable from "react-data-table-component";
import { PiEye } from "react-icons/pi";
import { PiEyeClosedThin } from "react-icons/pi";

export default function DataTableAreasComponent({listadoAreas, location}) {
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
  return (
    <div className={`flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow w-full dark:border-gray-700 dark:bg-gray-800 transform transition-transform 
    ${location.hash === "#areas" || location.hash === "" ? "scale-x-100" : "scale-x-0 fixed duration-0"}`}>
      <DataTable
        columns={columns}
        data={listadoAreas}
        noDataComponent={<div className='flex justify-center font-bold my-20 text-gray-500'>Sin areas</div>}
        // progressPending={loading}
        pagination
      />
    </div>
  );
}
