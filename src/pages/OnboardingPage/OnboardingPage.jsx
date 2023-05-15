import { Link } from "react-router-dom";
import "./OnboardingPage.css";
import React, { useState } from "react";

const OnboardingPage = () => {
  const [vista, setVista] = useState("1");

  const cambiarVista = (nuevaVista) => {
    setVista(nuevaVista);
  };
  const Onboarding1 = () => {
    return (
      <div className="padreO">
        <div className="padreO__close">
          <Link className="padreO__close--link" to="/loginElection">
            <img
              className="padreO__close--link--img"
              src="../../assets/img/logo_seleccionado/X.png"
              alt="x"
            ></img>
          </Link>
        </div>
        <div className="padreO__top" onClick={() => cambiarVista("2")}>
          <img
            className="padreO__top--img"
            src="../../assets/img/imagenes/chica_perro.png"
            alt="x"
          ></img>
          <h2 className="padreO__top--h2">
            Encuentra todo tipo de servicios que tienes cerca de ti
          </h2>
        </div>
        <div className="padreO__bot">
          <a className="padreO__bot--a" onClick={() => cambiarVista("1")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo_seleccionado/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("2")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("3")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
        </div>
      </div>
    );
  };
  const Onboarding2 = () => {
    return (
      <div className="padreO">
        <div className="padreO__close">
          <Link className="padreO__close--link" to="/loginElection">
            <img
              className="padreO__close--link--img"
              src="../../assets/img/logo_seleccionado/X.png"
              alt="x"
            ></img>
          </Link>
        </div>
        <div className="padreO__top" onClick={() => cambiarVista("3")}>
          <img
            className="padreO__top--img"
            src="../../assets/img/imagenes/chica_pecera.png"
            alt="x"
          ></img>
          <h2 className="padreO__top--h2">Adopta desde tu móvil</h2>
          <p className="padreO__top--p">
            Puedes acceder al perfil de muchos animales que están en adopción y
            filtrarlos para encontrar el que mejor se adapte a ti
          </p>
        </div>
        <div className="padreO__bot">
          <a className="padreO__bot--a" onClick={() => cambiarVista("1")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("2")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo_seleccionado/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("3")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
        </div>
      </div>
    );
  };
  const Onboarding3 = () => {
    return (
      <div className="padreO">
        <div className="padreO__close">
          <Link className="padreO__close--link" to="/loginElection">
            <img
              className="padreO__close--link--img"
              src="../../assets/img/logo_seleccionado/X.png"
              alt="x"
            ></img>
          </Link>
        </div>
        <Link to="/loginElection" className="padreO__top">
            <img
              className="padreO__top--img"
              src="../../assets/img/imagenes/chico_gato.png"
              alt="x"
            ></img>
            <h2 className="padreO__top--h2">
              Si eres una asociación sube a tus peludos para darles más difusión
            </h2>
        </Link>
        <div className="padreO__bot">
          <a className="padreO__bot--a" onClick={() => cambiarVista("1")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("2")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo/circulo.png"
              alt="x"
            ></img>
          </a>
          <a className="padreO__bot--a" onClick={() => cambiarVista("3")}>
            <img
              className="padreO__bot--a--img"
              src="../../assets/img/logo_seleccionado/circulo.png"
              alt="x"
            ></img>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      {vista === "1" && <Onboarding1></Onboarding1>}
      {vista === "2" && <Onboarding2></Onboarding2>}
      {vista === "3" && <Onboarding3></Onboarding3>}
    </div>
  );
};

export default OnboardingPage;
