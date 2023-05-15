import "./AdoptarPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searcher from "../../components/Searcher/Searcher";
import NavBar from "../../components/NavBar/NavBar";
import SwiperAdoption from "../../components/SwiperAdoption/SwiperAdoption";
import Gallery from "../../components/Gallery/Gallery";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const AdoptarPage = () => {

  // let info = Cookies.get("user");
  // info = JSON.stringify(info)
  // console.log(info);


  const [animales, setAnimales] = useState([]);
  const [search, setSearch] = useState("");
  const [animalesFiltrados, setAnimalesFiltrados] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/animales").then((res) => {
      setAnimales(res.data);
    });
  }, []);
  const handleSearcher = (event) => {
    const busqueda = event.target.value;
    setSearch(busqueda);
    if (animales.length > 0) {
      const filtrado = animales.filter((animal) =>
        animal.datos.especie.toLowerCase().includes(busqueda.toLowerCase())
      );
      setAnimalesFiltrados(filtrado);
    }
  };
  return (
    <>
      <div className="APpadre">
        <div className="APpadre__top">
          <Searcher search={search} handleSearcher={handleSearcher} />
          <div className="APpadre__top--mascotas">
            <div className="APpadre__top--mascotas--añadir">
              <h2 className="APpadre__top--mascotas--añadir--h2">
                Mis mascotas
              </h2>
            </div>
            <p className="APpadre__top--mascotas--add">
              Accede al perfil de tus mascotas
            </p>
          </div>
          <div>
            <SwiperAdoption></SwiperAdoption>
          </div>
        </div>
        <div className="APpadre__linea"></div>
        <div className="APpadre__bot">
          <div className="APpadre__bot--link">
            <Link className="APpadre__bot--button" to="/status">
              <p className="APpadre__bot--button--p">Estado de adopción</p>
              <img
                className="APpadre__bot--button--img"
                src="/assets/img/logo/front.png"
                alt=""
              ></img>
            </Link>
          </div>
          <div className="APpadre__bot--TG">
            <div className="APpadre__bot--TG--t">
              <h2 className="APpadre__bot--TG--t--h2">Animales en adopción</h2>
              <Link to={"/filters"}>
                <img
                  className="filter_results"
                  src="../../assets/img/logo/filtro.png"
                  alt="filter"
                ></img>
              </Link>
            </div>
            {animalesFiltrados.length > 0 || search === "" ? (
              <div className="APpadre__bot--TG--g">
                <Gallery
                  animales={
                    animalesFiltrados.length > 0 ? animalesFiltrados : animales
                  }
                ></Gallery>
              </div>
            ) : (
              <p className="noresultados">No se encontraron animales</p>
            )}
          </div>
        </div>
        <NavBar></NavBar>
      </div>
    </>
  );
};

export default AdoptarPage;
