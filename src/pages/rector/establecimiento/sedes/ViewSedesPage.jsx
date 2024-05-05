import React from "react";
import AccionesSedesComponent from "../../../../components/rector/establecimiento/sedes/AccionesSedesComponent";
import DataTableSedesComponent from "../../../../components/rector/establecimiento/sedes/DataTableSedesComponent";
import FormSedeComponent from "../../../../components/rector/establecimiento/sedes/FormSedeComponent";
import useSede from "../../../../hooks/rector/establecimiento/useSede";
import ContenedorSinBorde from "../../../../utils/contenedores/ContenedorSinBorde";
import VentanaModal from "../../../../utils/ventanaModal/VentanaModal";

export default function ViewSedesPage() {
  const { estadoModal, toggleModal, tituloModal } = useSede();

  return (
    <ContenedorSinBorde>
      <AccionesSedesComponent abrirModal={toggleModal} />
      <DataTableSedesComponent />
      <VentanaModal cerrarModal={toggleModal} estadoModal={estadoModal} titulo={tituloModal}>
        <FormSedeComponent cerrarModal={toggleModal} />
      </VentanaModal>
    </ContenedorSinBorde>
  );
}
