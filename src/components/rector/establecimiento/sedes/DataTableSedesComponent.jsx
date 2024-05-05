import React from 'react';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RUTASRECTOR } from '../../../../models/rutasModels';

export default function DataTableSedesComponent() {

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
                    <Link to={RUTASRECTOR.RUTASESTABLECIMIENTO.RUTASEDES.EDITARSEDE}>
                        <button className="w-8 h-8 text-blue-600 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200">
                            <MdEdit className="w-6 h-6 ml-1" />
                        </button>
                    </Link>
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
        <div className="flex flex-col items-end bg-white border border-gray-200 rounded-lg shadow w-full dark:border-gray-700 dark:bg-gray-800 transform transition-transform">
            <DataTable
                columns={columns}
                data={data}
                noDataComponent={<div className='flex justify-center font-bold my-20 text-gray-500'>Sin areas</div>}
                // progressPending={loading}
                pagination
            />
        </div>
    )
}
