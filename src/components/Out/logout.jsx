
import "./logout.css";
import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const closeSession = () => {
        dispatch(logoutUser(navigate));
    }

  return (
      <button className="OptContainer" onClick={closeSession}>
        <div className="ProfOptions">
          <img
            className="opt_img"
            src="../../../assets/img/logo/puerta.png"
            alt="Perfil"
          ></img>
          <h3 className="opt_text">Cerrar sesión </h3>
        </div>
        <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
      </button>
  );
};

export default Logout;
