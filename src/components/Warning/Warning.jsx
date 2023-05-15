import React from "react";
import "./Warning.css";
import { Link } from "react-router-dom";

const Warning = (props) => {
  return (
    <div className="padreW">
      <div className="padreW__hijo">
        <h2 className="padreW__hijo--title">Solicitud de adopción</h2>
        <p className="padreW__hijo--info">
          Adoptar es un acto de amor, pero sobre todo una responsabilidad de por
          vida
        </p>
        <p className="padreW__hijo--info">
          Por éste motivo es importante que veas el siguiente vídeo donde te
          explicamos cómo va a ser todo el proceso de adopción
        </p>
        <img className="padreW__hijo--img" src="./assets/img/imagenes/chica_video.png" alt=""/>
        <h4 className="padreW__hijo--h4">
          ¿Quieres continuar con el proceso de adopción?
        </h4>
        <div className="padreW__hijo--botones">
          <Link to="/perfilanimal">
          <button className="padreW__hijo--botones--1">
            Cancelar
          </button>
          </Link>
          <Link to="/form">
          <button className="padreW__hijo--botones--2">
            Continuar
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Warning;
