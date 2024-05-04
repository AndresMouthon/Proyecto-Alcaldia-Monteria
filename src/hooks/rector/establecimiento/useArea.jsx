import { useEffect, useState } from "react";

export default function useArea() {
  const dataAreas = [
    {
      codigo: 1,
      area: "CIENCIAS NATURALES Y EDUCATIVAS",
      abreviatura: "C. NAT. Y EDU.",
    },
    {
      codigo: 2,
      area: "FISICA",
      abreviatura: "FISICA.",
    },
  ];
  const [listadoAreas, setListadoAreas] = useState([]);

  const cargarAreas = () => {
    setListadoAreas(dataAreas);
  };

  useEffect(() => {
    cargarAreas();
  }, []);

  return {
    listadoAreas,
  };
}