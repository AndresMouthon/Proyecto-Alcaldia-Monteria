import React from "react";
import { BsFillBuildingFill, BsFillClipboardDataFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaFolderOpen,
  FaUniversity,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";
import { FaBookBookmark, FaDatabase, FaLayerGroup } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../../assets/Style/components/rector/establecimiento/EstablecimientoComponent.css";
import { RUTASRECTOR } from "../../../models/rutasModels";

export default function EstablecimientoComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-ml-5 lg:ml-11 mt-3">
      <Link
        to={RUTASRECTOR.RUTASESTABLECIMIENTO.INSTITUCION}
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element animated-element"
      >
        <div className="w-30">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <section className="flex items-center mb-2 text-cyan-600">
              <FaUniversity className="w-10 h-10 mr-2" />
              <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
                Institucion
              </h5>
            </section>
            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
              Información del establecimientos.
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaCalendarAlt className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Calendarios
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400 mr-6">
            Gestionar calendarios academicos.
          </p>
        </div>
      </Link>
      <Link
        to={RUTASRECTOR.RUTASESTABLECIMIENTO.AREASASIGNATURAS}
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaBookBookmark className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Areas y asignaturas
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Gestionar áreas y asignaturas.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <IoSettings className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Config. Académica
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            (Áreas, asignaturas, especialidades).
          </p>
        </div>
      </Link>
      <Link
        to={RUTASRECTOR.RUTASESTABLECIMIENTO.SEDES}
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <BsFillBuildingFill className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Sedes
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Registros de sedes correspondientes.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <IoSettings className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Config. Institucion
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            De la informacion basica.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <MdGroups className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Grupos
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Registros de sedes correspondientes.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaUserCircle className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Usuarios
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Gestion de usuario.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaDatabase className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Copia de seguridad
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Respaldo de la informacion.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaFolderOpen className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Mallas curriculares
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Carga de archivos.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaLayerGroup className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Calculo de puestos
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Configuración de criterios.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <FaUserCog className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Config. Estudiante
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Caracterización del estudiante.
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="overflow-hidden transition duration-300 transform hover:scale-105 animated-element"
      >
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <section className="flex items-center mb-2 text-cyan-600">
            <BsFillClipboardDataFill className="w-10 h-10 mr-2" />
            <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
              Informes
            </h5>
          </section>
          <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Informes del personal.
          </p>
        </div>
      </Link>
    </div>
  );
}