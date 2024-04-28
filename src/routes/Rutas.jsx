import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Maqueta } from "../components/layouts/Maqueta";
import { PATHS, PUBLICRUTAS, RUTASRECTOR } from "../models/rutasModels";
import { LoginPage } from "../pages/login/LoginPage";
import { EstablecimientoPage } from "../pages/rector/establecimiento/EstablecimientoPage";
import ViewAreasAsignaturasPage from "../pages/rector/establecimiento/areasAsignaturas/ViewAreasAsignaturasPage";
import AdministrarInstitucionPage from "../pages/rector/establecimiento/institucion/AdministrarInstitucionPage";
import { ViewInstitucionPage } from "../pages/rector/establecimiento/institucion/ViewInstitucionPage";
import EditSedePage from "../pages/rector/establecimiento/sedes/EditSedePage";
import ViewSedesPage from "../pages/rector/establecimiento/sedes/ViewSedesPage";
import { EvaluacionPage } from "../pages/rector/evaluacion/EvaluacionPage";
import { HerramientaPage } from "../pages/rector/herramienta/HerramientaPage";
import { InicioPage } from "../pages/rector/inicio/InicioPage";
import { MatriculaPage } from "../pages/rector/matricula/MatriculaPage";
import { PersonalPage } from "../pages/rector/personal/PersonalPage";
import { PlaneacionPage } from "../pages/rector/planeacion/PlaneacionPage";
import { PromocionPage } from "../pages/rector/promocion/PromocionPage";
import { SeguimientoPage } from "../pages/rector/seguimiento/SeguimientoPage";

export function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PUBLICRUTAS.LOGIN} element={<LoginPage />} />
        <Route element={<Maqueta />}>
          {/* RUTAS DEL RECTOR */}
          <Route path={PATHS.RECTOR}>
            {/* RUTAS DEL RECTOR EN LA PARTE DE INICIO */}
            <Route path={RUTASRECTOR.HOME} element={<InicioPage />} />
            {/* RUTAS DEL RECTOR EN LA PARTE DE ESTABLECIMIENTO */}
            <Route
              path={RUTASRECTOR.ESTABLECIMIENTO}
              element={<EstablecimientoPage />}
            />
            {/* RUTAS DEL RECTOR EN LA PARTE DE ESTABLECIMIENTO => FUNCIONALIDAES DE ESTABLECIMIENTO */}
            <Route path={RUTASRECTOR.ESTABLECIMIENTO}>
              {/* RUTAS DEL RECTOR DENTRO DE ESTABLECIMIENTO => INSTITUCION */}
              <Route
                path={RUTASRECTOR.RUTASESTABLECIMIENTO.INSTITUCION}
                element={<ViewInstitucionPage />}
              />
              {/* RUTAS DEL RECTOR DENTRO DE ESTABLECIMIENTO => INSTITUCION => FUNCIONALIDAES DE INSTITUCION */}
              <Route path={RUTASRECTOR.RUTASESTABLECIMIENTO.INSTITUCION}>
                <Route
                  path={
                    RUTASRECTOR.RUTASESTABLECIMIENTO.RUTAINSTITUCION
                      .ADMINISTRARINSTITUCION
                  }
                  element={<AdministrarInstitucionPage />}
                />
              </Route>
              {/* RUTAS DEL RECTOR DENTRO DE ESTABLECIMIENTO => SEDES */}
              <Route
                path={RUTASRECTOR.RUTASESTABLECIMIENTO.SEDES}
                element={<ViewSedesPage />}
              />
              {/* RUTAS DEL RECTOR DENTRO DE ESTABLECIMIENTO => SEDES => FUNCIONALIDAES DE SEDES */}
              <Route path={RUTASRECTOR.RUTASESTABLECIMIENTO.SEDES}>
                <Route
                  path={RUTASRECTOR.RUTASESTABLECIMIENTO.RUTASEDES.EDITARSEDE}
                  element={<EditSedePage />}
                />
              </Route>
              {/* RUTAS DEL RECTOR DENTRO DE ESTABLECIMIENTO => AREAS Y ASIGNATURAS */}
              <Route
                path={RUTASRECTOR.RUTASESTABLECIMIENTO.AREASASIGNATURAS}
                element={<ViewAreasAsignaturasPage />}
              />
            </Route>
            <Route path={RUTASRECTOR.PERSONAL} element={<PersonalPage />} />
            <Route path={RUTASRECTOR.MATRICULA} element={<MatriculaPage />} />
            <Route
              path={RUTASRECTOR.SEGUIMIENTO}
              element={<SeguimientoPage />}
            />
            <Route
              path={RUTASRECTOR.HERRAMIENTA}
              element={<HerramientaPage />}
            />
            <Route path={RUTASRECTOR.PLANEACION} element={<PlaneacionPage />} />
            <Route path={RUTASRECTOR.EVALUACION} element={<EvaluacionPage />} />
            <Route path={RUTASRECTOR.PROMOCION} element={<PromocionPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
