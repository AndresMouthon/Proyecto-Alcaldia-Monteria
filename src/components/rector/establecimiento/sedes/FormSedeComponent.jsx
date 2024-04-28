import React from "react";
import { BsBookmarksFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaKeyboard, FaMapLocation } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { MdCancelPresentation, MdEmail } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";

export default function FormSedeComponent({ cerrarModal }) {
  return (
    <div className="max-w-md mx-auto md">
      <div className="grid md:grid-cols-2 mt-3 md:gap-6">
        <div className="max-w-sm mx-auto mb-3">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaKeyboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre de la sede..."
            />
          </div>
        </div>
        <div className="max-w-sm mx-auto mb-3">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Abreviatura
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <IoPricetag className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Abreviatura de la sede..."
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="max-w-sm mx-auto mb-3">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dane
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <BsBookmarksFill className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Dane de la sede..."
            />
          </div>
        </div>
        <div className="max-w-sm mx-auto">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dirección
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaMapLocation className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Direccion de la sede..."
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mb-3 md:gap-6">
        <div className="max-w-sm mx-auto mb-3">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Teléfono
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaPhoneAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Contacto de la sede..."
            />
          </div>
        </div>
        <div className="max-w-sm mx-auto">
          <label
            form="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="email"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Correo de la sede..."
            />
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <div
          className="inline-flex rounded-md shadow-sm md:-ml-12"
          role="group"
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-s-lg hover:bg-white hover:text-green-600 transition-all duration-200"
          >
            <VscSaveAs className="mr-1 w-6 h-6" />
            Guardar
          </button>
          <button
            onClick={cerrarModal}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-e-lg hover:bg-white hover:text-red-600 transition-all duration-200"
          >
            <MdCancelPresentation className="mr-1 w-6 h-6" />
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}