import { useSelector } from "react-redux";
import "./MiPerfilPage.scss";
import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const MiPerfilPage = () => {
  const [cookies] = useCookies(["user"]);

  const userInfo = cookies.user;
  

  return (
    <div className="padreMI">
      <Link className='linkImg' to="/profile"><img className='imageNP' src='../../../assets/img/logo/back.png' alt='atras'></img></Link>
      <h1 className="padreMI__title">Perfil</h1>
      <div className="padreMI__hijo">
          <img className="padreMI__hijo--img" src={userInfo.imagen}></img>
          <div className="padreMI__hijo--info">
            <p className="padreMI__hijo--info--p">Nombre: {userInfo.name}</p>
            <p className="padreMI__hijo--info--p">Apellido: {userInfo.surname}</p>
            <p className="padreMI__hijo--info--p">Email: {userInfo.email}</p>
          </div>
      </div>
    </div>
  );
};

export default MiPerfilPage;
