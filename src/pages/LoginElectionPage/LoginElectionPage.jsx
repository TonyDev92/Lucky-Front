import React from "react";
import "./LoginElectionPage.css";
import { Link } from "react-router-dom";

function LoginElectionPage() {
  return (
    <div className='divPadre' style={{backgroundImage: "url(/assets/img/imagenes/mujer_perro.png)"}}>
    <div className="container">
      <div className="title">
        <h2>¿Cómo quieres entrar?</h2>
      </div>
      <div className="Button">
        <Link to="/login">
          <button>Usuario</button>
        </Link>
        <button>Asociación protectora</button>
        <Link to="/home">Registrarse en otro momento</Link>
      </div>
    </div>
    </div>
  );
}

export default LoginElectionPage;
