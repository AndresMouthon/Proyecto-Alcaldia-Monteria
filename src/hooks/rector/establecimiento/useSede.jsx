import React, { useState } from 'react'

export default function useSede() {
  const [estadoModal, setEstadoModal] = useState(false)
  const tituloModal = "Registrar sede"

  const toggleModal = () => {
    setEstadoModal(!estadoModal)
  }

  return {
    estadoModal,
    toggleModal,
    tituloModal
  }
}
