import React from "react";
import { useLocation } from "react-router-dom";
import OpcionesVistaAreasAsignaturasComponent from "../../../../components/rector/establecimiento/areasAsignaturas/OpcionesVistaAreasAsignaturasComponent";
import useArea from "../../../../hooks/rector/establecimiento/useArea";
import useAsignatura from "../../../../hooks/rector/establecimiento/useAsignatura";
import ContenedorSinBorde from "../../../../utils/contenedores/ContenedorSinBorde";
import MenuAreasComponent from "../../../../components/rector/establecimiento/areasAsignaturas/MenuAreasComponent";
import MenuAsignaturasComponent from "../../../../components/rector/establecimiento/areasAsignaturas/MenuAsignaturasComponent";
import DataTableAreasComponent from "../../../../components/rector/establecimiento/areasAsignaturas/DataTableAreasComponent";
import DataTableAsignaturasComponent from "../../../../components/rector/establecimiento/areasAsignaturas/DataTableAsignaturasComponent";

export default function ViewAreasAsignaturasPage() {
  const { listadoAsignaturas } = useAsignatura();
  const { listadoAreas } = useArea();
  const location = useLocation();
  return (
    <ContenedorSinBorde>
      <OpcionesVistaAreasAsignaturasComponent />
      <div className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform ${location.hash === "#areas" || location.hash === "" ? "scale-x-100" : "scale-x-0 fixed duration-0"}`} >
        <MenuAreasComponent />
        <DataTableAreasComponent listadoAreas={listadoAreas} location={location} />
      </div>
      <div className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-2 transform transition-transform ${location.hash === "#asignaturas" ? "scale-x-100" : "scale-x-0 fixed duration-0"}`} >
        <MenuAsignaturasComponent />
        <DataTableAsignaturasComponent listadoAsignaturas={listadoAsignaturas} location={location} />
      </div>
    </ContenedorSinBorde>
  );
}