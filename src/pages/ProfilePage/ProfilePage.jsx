import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./ProfilePage.css";

import React, { useState } from "react";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const ProfilePage = () => {
  
  const [imageUrl, setImageUrl] = useState(null);
  const [cookies] = useCookies(["user"])
  const id = cookies.user._id;
  console.log(id);
  
  const handleImageChange = (element) => {
    const file = element.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    console.log(element.target.value)
    axios.put(`http://localhost:5000/user/update/${id} ,${formData.file}}`).then(res => {
      console.log(res);
    })
    

  }

  return (
    <div className="ProfileHolePage">
      <div className="ProfContainer">
        <div className="Img_Center">
          {!imageUrl && <img
            className="ImageProf"
            src="../../../assets/img/logo/userBlue.png"
            alt="profileIMG"
          ></img>}
          {imageUrl && <img className="ImageProf" src={imageUrl} alt="Imagen seleccionada" />}
          {!imageUrl && <div className="file-select" id="src-file1">
            <input name="src-file1" aria-label="Archivo" onChange={(e) => handleImageChange(e)} type="file"></input>
          </div>}
        </div>
        <Link to="/userprofile" className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/chicaBlue.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Mi Perfil </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </Link>
        <div className="OptContainer">
          <Link className="map" to="/map">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/localizationBlue.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Direcciones </h3>
          <img
            className="arrow2"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/favoritosCopy.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Favoritos </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
        <div className="OptContainer">
        <Link className="notification" to="/notification">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/notificaciones.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Notificaciones </h3>
          <img
            className="arrow_notification"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="space"></div>
        <div className="OptContainer">
        <Link className="Status" to="/status">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo/mascota.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Estado de adopción </h3>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
          <Link className="Apadrinar" to="/Apadrinar">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/apadrina.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Apadrinar </h3>
          <img
            className="arrow_apadrinar"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
        <Link className="Donar" to="/donation">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/donar.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Donar </h3>
          <img
            className="arrow_donation"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        
      </div>
      <NavBar></NavBar>
    </div>
    
  );
};

export default ProfilePage;
