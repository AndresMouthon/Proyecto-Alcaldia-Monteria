import React from "react";
import ContenedorSinBorde from "../../../../utils/contenedores/ContenedorSinBorde";
import ViewSedesComponent from "../../../../components/rector/establecimiento/sedes/ViewSedesComponent";
import VentanaModal from "../../../../utils/ventanaModal/VentanaModal";
import useSede from "../../../../hooks/rector/establecimiento/useSede";
import FormSedeComponent from "../../../../components/rector/establecimiento/sedes/FormSedeComponent";

export default function ViewSedesPage() {
  const { estadoModal, toggleModal, tituloModal } = useSede();

  return (
    <ContenedorSinBorde>
      <ViewSedesComponent abrirModal={toggleModal} />
      <VentanaModal cerrarModal={toggleModal} estadoModal={estadoModal} titulo={tituloModal}>
        <FormSedeComponent cerrarModal={toggleModal} />
      </VentanaModal>
    </ContenedorSinBorde>
  );
}
