import "./EstadoAdopcionPage.css";
import React, { useEffect, useState } from "react";
import Searcher from "../../components/Searcher/Searcher";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdoptStateFilter from "../../components/AdoptStateFilter/AdoptStateFilter";

const EstadoAdopcionPage = (props) => {
  const [animales, setAnimales] = useState([]);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/animales").then((res) => {
      setAnimales(res.data);
    });
  }, []);

  const handleSearcher = (e) => {
    const inputValue = e.target.value.trim();
    setSearch(inputValue);
    setShowAll(inputValue === "");
  };

  const animalesFiltrados = animales.filter((animal) => {
    const nombreMatches = animal.datos.nombre
      .toLowerCase()
      .includes(search.toLowerCase());
    const especieMatches = animal.datos.especie
      .toLowerCase()
      .includes(search.toLowerCase());
    return showAll || nombreMatches || especieMatches;
  });

  const navigate = useNavigate();

  const handleApplyFilter = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };
  
  return (
    <>
      <div className="padre">
        <div className="SearcherDiv">
          <div>
            <img
              onClick={() => navigate("/adopt")}
              className="back"
              src="../../assets/img/logo/back.png"
              alt="back"
            />{" "}
          </div>{" "}
          <div>
            <Searcher search={search} handleSearcher={handleSearcher} />
          </div>{" "}
          <div>
            {" "}
            <img
              className="back"
              src="../../assets/img/logo/filtro.png"
              alt="filter"
              onClick={() => setShowModal(true)}
            />
          </div>{" "}
        </div>
        {showModal && (
          <div className="modal" onClick={props.onApply}>
            <AdoptStateFilter onApply={handleApplyFilter} />
          </div>
        )}
        {animalesFiltrados.length === 0 ? (
          <p className="noresultados">No se encontraron resultados</p>
        ) : (
          animalesFiltrados.map((animal, index) => (
            <div className="padre__hijo" key={index}>
              <div className="padre__hijo--top">
                <h2 className="padre__hijo--top--h2">
                  Adopción de {animal.datos.nombre}
                </h2>
                <p className="padre__hijo--top--p">"Estado de adopción"</p>
              </div>
              <div className="padre__hijo--bot">
                <img
                  className="padre__hijo--bot--img"
                  src={animal.datos.imagen}
                  alt={animal.datos.nombre}
                ></img>
                <ul className="padre__hijo--bot--clave">
                  <li>Nombre</li>
                  <li>Especie</li>
                  <li>Sexo</li>
                </ul>
                <ul className="padre__hijo--bot--valor">
                  <li>{animal.datos.nombre}</li>
                  <li>{animal.datos.especie}</li>
                  <li>{animal.datos.sexo}</li>
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default EstadoAdopcionPage;
