import React from "react";
import { Outlet } from "react-router-dom";
import { ContenedorContenido } from "./ContenedorContenido";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Maqueta() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContenedorContenido>
        <Outlet />
      </ContenedorContenido>
    </>
  );
}
