import React from "react";
import { GrClose } from "react-icons/gr";
import "../../assets/Style/utils/ventanaModal/VentanaModal.css";
export default function VentanaModal({
  children,
  estadoModal,
  cerrarModal,
  titulo,
}) {
  if (estadoModal) {
    return (
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full aparecer-modal">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {titulo}
              </h3>
              <button
                type="button"
                onClick={cerrarModal}
                className="text-red-600 bg-transparent hover:bg-red-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <GrClose className="w-5 h-5" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
