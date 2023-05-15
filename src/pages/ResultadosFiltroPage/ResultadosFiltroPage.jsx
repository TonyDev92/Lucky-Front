import { Link, useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Searcher from "../../components/Searcher/Searcher";
import "./ResultadosFiltroPage.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ResultadosFiltroPage = () => {
  const animalesFiltrados = useSelector((state) => state.animalesFiltrados);
  const [search, setSearch] = useState("");
  console.log(animalesFiltrados);
  const navigate = useNavigate();

  const [animales, setAnimales] = useState(animalesFiltrados);

  const handleSearcher = (event) => {
    const busqueda = event.target.value;
    setSearch(busqueda);
    if (animalesFiltrados.length > 0) {
      const filtrado = animalesFiltrados.filter((animal) =>
        animal.datos.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
      setAnimales(filtrado);
    }
  };

  return (
    <div className="Container">
      <div className="SearcherDiv">
        <img
          onClick={() => navigate("/adopt")}
          className="back_results"
          src="../../assets/img/logo/back.png"
          alt="back"
        ></img>
        <Searcher search={search} handleSearcher={handleSearcher} />
        <Link to={"/filters"}>
        <img
          className="filter_results"
          src="../../assets/img/logo/filtro.png"
          alt="filter"
        ></img>
        </Link>
      </div>
      <Gallery animales={animales} />
    </div>
  );
};

export default ResultadosFiltroPage;


