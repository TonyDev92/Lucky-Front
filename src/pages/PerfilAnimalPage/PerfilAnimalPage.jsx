import "./PerfilAnimalPage.css";
import moment from "moment"; // para fecha
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Warning from "../../components/Warning/Warning";

const PerfilAnimalPage = ({ animal },props) => {
  const [vista, setVista] = useState("datos");
  const [showModal, setShowModal] = useState(false);

  const cambiarVista = (nuevaVista) => {
    setVista(nuevaVista);
  };

  const DatosAnimal = () => {
    return (
      <div>
        <div className="principal">
          <div className="principal__hijo">
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Nombre</p>
              <p className="principal__hijo--linea--valor">
                {animal.datos.nombre}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Especie</p>
              <p className="principal__hijo--linea--valor">
                {animal.datos.especie}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">
                Fecha de nacimiento
              </p>
              <p className="principal__hijo--linea--valor">
                {moment(animal.datos.fechaNacimiento).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Sexo</p>
              <p className="principal__hijo--linea--valor">
                {animal.datos.sexo}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Tamaño</p>
              <p className="principal__hijo--linea--valor">
                {animal.datos.tamaño}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Peso</p>
              <p className="principal__hijo--linea--valor">
                {animal.datos.peso}
              </p>
            </div>
          </div>
          <div className="principal__personalidad">
            <h2 className="principal__personalidad--titulo">Personalidad</h2>
            <p className="principal__personalidad--dato">
              {animal.datos.personalidad}
            </p>
          </div>
          <div className="principal__historia">
            <h2 className="principal__historia--titulo">Historia</h2>
            <p className="principal__historia--datos">
              {animal.datos.historia}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const SaludAnimal = () => {
    return (
      <div>
        <div className="principal">
          <div className="principal__hijo">
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Vacunado</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.vacunado ? "Sí" : "No"}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Desparasitado</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.desparasitado ? "Sí" : "No"}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Sano</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.sano ? "Sí" : "No"}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Esterilizado</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.esterilizado ? "Sí" : "No"}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Identificado</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.identificado ? "Sí" : "No"}
              </p>
            </div>
            <div className="principal__hijo--linea">
              <p className="principal__hijo--linea--clave">Microchip</p>
              <p className="principal__hijo--linea--valor">
                {animal.salud.microchip ? "Sí" : "No"}
              </p>
            </div>
          </div>
          <div className="principal__info">
            <p className="principal__info--text">Tienes que saber que...</p>
          </div>
        </div>
      </div>
    );
  };

  const AdopcionAnimal = () => {
    return (
      <div>
        <div className="principal">
          <div className="principal__caja">
            <h3 className="principal__caja--titulo">Requisitos adopción</h3>
            <p className="principal__caja--dato">
              {animal.adopcion.requisitos}
            </p>
          </div>
          <div className="principal__caja">
            <h3 className="principal__caja--titulo">Tasa de adopción</h3>
            <p className="principal__caja--dato">
              {animal.adopcion.tasaAdopcion}
            </p>
          </div>
          <div className="principal__caja">
            <h3 className="principal__caja--titulo">
              ¿Se envía a otra ciudad?
            </h3>
            <p className="principal__caja--dato">
              {animal.adopcion.envioOtraCiudad ? "Sí" : "No"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ImagenAnimal = () => {
    return (
      <div className="imagen">
      
        <img
          className="imagen__img"
          key={animal._id}
          src={animal.datos.imagen}
          alt="imagen-animal"
        ></img>
      </div>
    );
  };

  return (
    <div className="mainPage">
      <div className="mainPage__header">
      <Link to={"/adopt"}><img className="IMG_possition_abosolute" src="../../../assets/img/logo/back.png" alt=""></img></Link>
        <ImagenAnimal></ImagenAnimal>
      </div>
      <div className="mainPage__menu">
        <button
          className={
            vista === "datos"
              ? "mainPage__menu--botonActive"
              : "mainPage__menu--boton"
          }
          onClick={() => cambiarVista("datos")}
        >
          Datos
        </button>

        <button
          className={
            vista === "salud"
              ? "mainPage__menu--botonActive"
              : "mainPage__menu--boton"
          }
          onClick={() => cambiarVista("salud")}
        >
          Salud
        </button>
        <button
          className={
            vista === "adopcion"
              ? "mainPage__menu--botonActive"
              : "mainPage__menu--boton"
          }
          onClick={() => cambiarVista("adopcion")}
        >
          Adopción
        </button>
      </div>

      <div className="mainPage__comp">
        {vista === "datos" && <DatosAnimal />}
        {vista === "salud" && <SaludAnimal />}
        {vista === "adopcion" && <AdopcionAnimal />}
        <div className="mainPage__button">
        <Link to={"/Apadrinar"}><button
            className="mainPage__button--apa"
            
          >
            Apadrinar
          </button></Link>
          <button
            className="mainPage__button--adop"
            onClick={() => setShowModal(true)}
          >
            Adoptar
          </button>
        </div>
        {showModal && (
          <div className="modal" onClick={props.onApply}>
            <Warning />
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilAnimalPage;
