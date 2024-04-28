import React from "react";
import {
  FcBusinessman,
  FcFinePrint,
  FcGraduationCap,
  FcHome,
  FcIdea,
  FcNews,
  FcOrganization,
  FcSettings,
  FcTimeline,
} from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { PATHS, RUTASRECTOR } from "../../models/rutasModels";

export function Sidebar() {
  // const menuOptions = [
  //   {
  //     name: "Inicio",
  //     path: PATHS.RECTOR + "/" + RUTASRECTOR.INICIO,
  //     icon: <FcHome />,
  //     activateBg: "bg-red-400 text-white",
  //   },
  // ];
  const location = useLocation();
  
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-2 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-3 font-medium">
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.HOME}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-red-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.HOME
                  ? "bg-red-400 text-white"
                  : ""
              }`}
            >
              <FcHome className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.ESTABLECIMIENTO}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-cyan-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname.substring(1).split("/")[1] ===
                RUTASRECTOR.ESTABLECIMIENTO
                  ? "bg-cyan-400 text-white"
                  : ""
              }`}
            >
              <FcOrganization className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Establecimiento</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.PERSONAL}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-yellow-300 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.PERSONAL
                  ? "bg-yellow-300 text-white"
                  : ""
              }`}
            >
              <FcBusinessman className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Personal</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.MATRICULA}
              className={`flex items-center p-2 text-sky-950 rounded-lg dark:text-white hover:bg-blue-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.MATRICULA
                  ? "bg-blue-400 text-white"
                  : ""
              }`}
            >
              <FcGraduationCap className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Matrícula</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.SEGUIMIENTO}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-teal-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.SEGUIMIENTO
                  ? "bg-teal-400 text-white"
                  : ""
              }`}
            >
              <FcFinePrint className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Seguimiento</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.PLANEACION}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-amber-300 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.PLANEACION
                  ? "bg-amber-300 text-white"
                  : ""
              }`}
            >
              <FcIdea className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Planeación</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.EVALUACION}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-rose-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.EVALUACION
                  ? "bg-rose-400 text-white"
                  : ""
              }`}
            >
              <FcNews className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Evaluación</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.PROMOCION}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-indigo-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.PROMOCION
                  ? "bg-indigo-400 text-white"
                  : ""
              }`}
            >
              <FcTimeline className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Promoción</span>
            </Link>
          </li>
          <li>
            <Link
              to={PATHS.RECTOR + "/" + RUTASRECTOR.HERRAMIENTA}
              className={`flex items-center p-2 text-cyan-950 rounded-lg dark:text-white hover:bg-slate-400 hover:text-white dark:hover:bg-gray-700 group ${
                location.pathname ===
                "/" + PATHS.RECTOR + "/" + RUTASRECTOR.HERRAMIENTA
                  ? "bg-slate-400 text-white"
                  : ""
              }`}
            >
              <FcSettings className="flex-shrink-0 w-6 h-6" />
              <span className="ms-2">Herramientas</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
