import { Link } from "react-router-dom";
import "./MapPage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const MapPage = () => {
  return (
    <>
    <div className="disculpa">
      <Link className="disculpa__link" to="/home">
        <img
          className="disculpa__link--img"
          src="../../assets/img/imagenes/construccion.jpg"
          alt="contruccion"
        ></img>
      </Link>
    </div>
    <NavBar></NavBar>
    </>
  );
};

export default MapPage;
