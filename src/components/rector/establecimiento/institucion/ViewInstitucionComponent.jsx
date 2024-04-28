import React from "react";
import {
  LiaCitySolid,
  LiaFileDownloadSolid,
  LiaImageSolid,
  LiaLocationArrowSolid,
  LiaMapMarkerAltSolid,
  LiaMapSolid,
  LiaTagSolid,
  LiaUniversitySolid,
} from "react-icons/lia";
import { VscSaveAs, VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { RUTASRECTOR } from "../../../../models/rutasModels";
export function ViewInstitucionComponent() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
      <div className="flex flex-col justify-between items-center md:flex-col lg:flex-row max-w-full">
        <h1>Institucón</h1>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-500 border border-amber-500 rounded-s-lg hover:bg-white hover:text-amber-500 transition-all duration-200"
          >
            <VscSaveAs className="mr-2 w-6 h-6" />
            Guardar cambios
          </button>
          <Link
            to={
              RUTASRECTOR.RUTASESTABLECIMIENTO.RUTAINSTITUCION
                .ADMINISTRARINSTITUCION
            }
          >
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-yellow-600 rounded-e-lg hover:bg-white hover:text-yellow-600 transition-all duration-200"
            >
              <VscSettings className="mr-2 w-6 h-6" />
              Admin. Institución
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col lg:flex-row max-w-full dark:border-gray-700 dark:bg-gray-800 mt-2">
        <img
          className="object-fit w-full md:mt-2 lg:mt-2 m-2 rounded-t-lg h-96 md:h-auto md:w-56 md:rounded-none md:rounded-s-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-6">
            <div className="flex flex-col w-full">
              <label
                htmlFor="input-group-3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Establecimiento
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaUniversitySolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-3"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="Institucion Educativa Santo Domingo Vidal"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col md:w-80">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Abreviatura
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaTagSolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="INESAD"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="input-group-3"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccionar imagen ( 1000 x 1000 )
            </label>
            <div className="relative">
              <form>
                <label
                  form="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Imagen...
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <LiaImageSolid className="w-6 h-6 text-sky-950" />
                  </div>
                  <input
                    type="file"
                    className="block w-full ps-16 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-gray-200"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    className="w-28 h-9 text-white absolute end-1 bottom-1 bg-sky-950 hover:bg-white hover:border hover:border-sky-950 hover:border-solid hover:text-sky-950 font-medium rounded-lg text-sm px-4 py-2 duration-200"
                  >
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <LiaFileDownloadSolid className="w-6 h-6 ml-1" />
                    </div>
                    <span className="ps-5">Cargar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col lg:flex-row max-w-full dark:border-gray-700 dark:bg-gray-800 mt-5">
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-6 justify-items-center max-w-full">
            <div className="w-full">
              <label
                htmlFor="input-group-3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ciudad
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaCitySolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-3"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="Montería"
                  disabled
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="input-group-3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Departamento
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaMapSolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-3"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="Córdoba"
                  disabled
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Zona
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaMapMarkerAltSolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="Rural"
                  disabled
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sector
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <LiaLocationArrowSolid className="w-6 h-6 text-sky-950" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  aria-label="disabled input"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-not-allowed"
                  value="Oficial"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
