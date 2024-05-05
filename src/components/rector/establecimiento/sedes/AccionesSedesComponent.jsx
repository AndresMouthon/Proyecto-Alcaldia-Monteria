import React from 'react'
import { TbPlaylistAdd, TbReportSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function AccionesSedesComponent({ abrirModal }) {
    return (
        <div className="flex items-center justify-between flex-col sm:flex-row w-full px-4 py-2 my-4">
            <h1>Sedes</h1>
            <div className="inline-flex rounded-md shadow-sm">
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-l-lg hover:bg-white hover:text-amber-500">
                    <TbReportSearch className="mr-2 w-6 h-6" />
                    Informe
                </button>
                <Link onClick={abrirModal} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-r-lg hover:bg-white hover:text-green-600">
                    <TbPlaylistAdd className="mr-2 w-6 h-6" />
                    Nueva sede
                </Link>
            </div>
        </div>
    )
}
