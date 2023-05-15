import "./FormConfirm.css";
import { Link } from "react-router-dom";
import React from "react";

const FormConfirm = (props)=> {
  return (
    <div className="confirm-padre">
      <div className="confirm-content">
      <Link className="close" to="/status">x</Link>
        <h3 className="title-confirm">¡Enviado!</h3>
        <div className="confirm-info">
          <div>
            <p>
            Hemos enviado tu formulario a la protectora. Si quieres ponerte en
            contacto con ellos puedes hacerlo vía email o whatsapp
            </p>
          </div>
          <div>
            <p>
            Recuerda que la protectora se pondrá en contacto contigo para poder
            hacer la entrevista personal
            </p>
          </div>
        </div>
        <img
          src="../../assets/img/imagenes/gato_planta.png"
          alt="gato_planta"
        ></img>
      </div>
    </div>
  );
};

export default FormConfirm;
