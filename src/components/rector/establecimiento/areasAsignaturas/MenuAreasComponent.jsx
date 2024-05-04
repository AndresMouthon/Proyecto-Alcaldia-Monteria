import React from "react";
import { RiHealthBookLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";

export default function MenuAreasComponent() {
    return (
        <div className="flex items-center justify-between flex-col sm:flex-row w-full px-4 py-2 my-4">
            <h1>Áreas</h1>
            <div className="inline-flex rounded-md shadow-sm">
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-l-lg hover:bg-white hover:text-amber-500">
                    <VscSaveAs className="mr-2 w-6 h-6" />
                    Guardar
                </button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-r-lg hover:bg-white hover:text-green-600">
                    <RiHealthBookLine className="mr-2 w-6 h-6" />
                    Nueva
                </button>
            </div>
        </div>
    );
}