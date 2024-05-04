import { useEffect, useState } from "react";
import useArea from "./useArea";

export default function useAsignatura() {
  const { listadoAreas } = useArea();
  const asignaturas = [
    { id: 1, name: "Biología", areaId: 1 },
    { id: 2, name: "Física", areaId: 1 },
    { id: 3, name: "Química", areaId: 2 },
    { id: 4, name: "Sociales", areaId: 2 },
  ];
  const [listadoAsignaturas, setListadoAsignaturass] = useState([]);

  const cargarAsignaturas = () => {
    const data = listadoAreas.map((area) => {
      const areaAsignaturas = asignaturas
        .filter((asignatura) => asignatura.areaId === area.codigo)
        .map((asig) => asig.name)
        .join(", ");

      return {
        name: area.area,
        asignaturas: areaAsignaturas,
      };
    });
    console.log(listadoAreas);
    console.log(data);
    setListadoAsignaturass(data);
  };

  useEffect(() => {
    if (listadoAreas.length > 0) {
      cargarAsignaturas();
    }
  }, [listadoAreas]);

  return {
    listadoAsignaturas,
  };
}
