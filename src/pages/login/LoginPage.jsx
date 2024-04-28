import React from "react";
import { Link } from "react-router-dom";
import { PATHS, RUTASRECTOR } from "../../models/rutasModels";

export function LoginPage() {
  return (
    <div>
      <h1>Hellow world</h1>
      <Link to={PATHS.RECTOR+"/"+RUTASRECTOR.HOME}>
        <button>
            Enviar
        </button>
      </Link>
    </div>
  );
}
