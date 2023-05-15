import React, { useContext, useEffect, useState } from "react";
import "./FiltersPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAnimalesFiltrados } from "../../redux/actions/filter.actions";
const FiltersPage = () => {
  const [protectoras, setProtectoras] = useState([]);
  const [select, setSelect] = useState("Barcelona");
  const dispatch = useDispatch();
  const [especie, setEspecie] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [sexo, setSexo] = useState("");
  const [protectorasFiltradas, setProtectorasFiltradas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/protectora").then((res) => {
      setProtectoras(res.data);
    });
  }, []);
  useEffect(() => {
    const protectorasFiltradas = protectoras.filter((protectora) => {
      return protectora.city === select;
    });
    setProtectorasFiltradas(protectorasFiltradas);
  }, [protectoras, select]);
  const handleSexo = (value) => {
    setSexo(value);
  };
  const handleTamaño = (value) => {
    setTamaño(value);
  };

  const handleEspecie = (value) => {
    setEspecie(value);
  };
  const handleFilter = () => {
    const animalesFiltrados = [];
    for (const protectora of protectorasFiltradas) {
      for (const animal of protectora.animals) {
        let numAtributos = 0;
        if (sexo) numAtributos++;
        if (tamaño) numAtributos++;
        if (especie) numAtributos++;
        if (numAtributos === 1) {
          if (
            (sexo && animal.datos.sexo === sexo) ||
            (tamaño && animal.datos.tamaño === tamaño) ||
            (especie && animal.datos.especie === especie)
          ) {
            animalesFiltrados.push(animal);
          }
        } else if (numAtributos === 2) {
          if (
            (sexo &&
              tamaño &&
              animal.datos.sexo === sexo &&
              animal.datos.tamaño === tamaño) ||
            (sexo &&
              especie &&
              animal.datos.sexo === sexo &&
              animal.datos.especie === especie) ||
            (tamaño &&
              especie &&
              animal.datos.tamaño === tamaño &&
              animal.datos.especie === especie)
          ) {
            animalesFiltrados.push(animal);
          }
        } else if (numAtributos === 3) {
          if (
            animal.datos.sexo === sexo &&
            animal.datos.tamaño === tamaño &&
            animal.datos.especie === especie
          ) {
            animalesFiltrados.push(animal);
          }
        }
      }
    }
    console.log(animalesFiltrados);
    dispatch(setAnimalesFiltrados(animalesFiltrados));

  };

  const borrar = () => {
    window.location.reload()
  }
  
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header--vacio"></div>
        <div className="main__header--titulo">
          <h2>Filtros</h2>
        </div>
        <div className="main__header--x">
          <Link to="/adopt">
            <img src="./assets/img/logo_seleccionado/x.png" alt="x"></img>
          </Link>
        </div>
      </div>
      <div className="main__body">
        <form className="main__body--form">
          <h2 className="main__body--form--label">Ciudad</h2>
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="main__body--form--select"
          >
            {protectoras.map((protectora, index) => (
              <option
                className="main__body--form--label--select--option"
                key={index}
              >
                {protectora.city}
              </option>
            ))}
          </select>
        </form>
        <div className="main__body--especie">
          <h2 className="main__body--especie--titulo">Especie</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => handleEspecie("Perro")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Perro" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/perro.png"
                  alt="perro"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/perro.png"
                  alt="perro"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Perro
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Gato")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Gato" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/gato.png"
                  alt="gato"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/gato.png"
                  alt="gato"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Gato
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Conejo")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Conejo" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/conejo.png"
                  alt="conejo"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/conejo.png"
                  alt="conejo"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Conejo
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Cobaya")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Cobaya" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/cobaya.png"
                  alt="cobaya"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/cobaya.png"
                  alt="cobaya"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Cobaya
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Pequeño mamifero")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Pequeño mamifero" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pequeño_mamifero.png"
                  alt="pequeño_mamifero"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pequeño_mamifero.png"
                  alt="pequeño_mamifero"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Pequeño<br></br>mamífero
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Huron")}
              value="Huron"
              className="main__body--especie--gallery--button"
            >
              {especie === "Huron" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/huron.png"
                  alt="huron"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/huron.png"
                  alt="huron"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Hurón
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Pez")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Pez" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pez.png"
                  alt="pez"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pez.png"
                  alt="pez"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">Pez</p>
            </button>
            <button
              onClick={() => handleEspecie("Reptil")}
              value="Reptil"
              className="main__body--especie--gallery--button"
            >
              {especie === "Reptil" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/reptil.png"
                  alt="reptil"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/reptil.png"
                  alt="reptil"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Reptil
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Anfibio")}
              className="main__body--especie--gallery--button"
            >
              {especie === "Anfibio" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/anfibio.png"
                  alt="anfibio"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/anfibio.png"
                  alt="anfibio"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Anfibio
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Aracnido o insecto")}
              value="Aracnido o insecto"
              className="main__body--especie--gallery--button"
            >
              {especie === "Aracnido o insecto" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/araña.png"
                  alt="araña"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/araña.png"
                  alt="araña"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Arácnido <br></br>o insecto
              </p>
            </button>
            <button
              onClick={() => handleEspecie("Ave")}
              value="Ave"
              className="main__body--especie--gallery--button"
            >
              {especie === "Ave" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/ave.png"
                  alt="ave"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/ave.png"
                  alt="ave"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">Ave</p>
            </button>
          </div>
          <h2 className="main__body--especie--titulo">Sexo</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => handleSexo("Hembra")}
              className="main__body--especie--gallery--button"
            >
              {sexo === "Hembra" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/female.png"
                  alt="female"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/female.png"
                  alt="female"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Hembra
              </p>
            </button>
            <button
              onClick={() => handleSexo("Macho")}
              className="main__body--especie--gallery--button"
            >
              {sexo === "Macho" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/male.png"
                  alt="male"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/male.png"
                  alt="male"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Macho
              </p>
            </button>
          </div>
          <h2 className="main__body--especie--titulo">Tamaño</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => handleTamaño("Pequeño")}
              className="main__body--especie--gallery--button"
            >
              {tamaño === "Pequeño" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pequeño.png"
                  alt="pequeño"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pequeño.png"
                  alt="pequeño"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Pequeño
              </p>
            </button>
            <button
              onClick={() => handleTamaño("Mediano")}
              className="main__body--especie--gallery--button"
            >
              {tamaño === "Mediano" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/mediano.png"
                  alt="mediano"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/mediano.png"
                  alt="mediano"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Mediano
              </p>
            </button>
            <button
              onClick={() => handleTamaño("Grande")}
              className="main__body--especie--gallery--button"
            >
              {tamaño === "Grande" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/grande.png"
                  alt="grande"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/grande.png"
                  alt="grande"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Grande
              </p>
            </button>
            <div className="main__body--divbotones">
              <button
                className="main__body--aplicar2"
                onClick={borrar}
                >
                  Borrar filtros
              </button>
              <button
                className="main__body--aplicar"
                onClick={() => handleFilter()}
              >
                <Link className="main__body--aplicar--link" to="/filtersResult">
                  Aplicar
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPage;
