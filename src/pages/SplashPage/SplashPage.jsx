import { Link } from "react-router-dom";
import "./SplashPage.css";
import React from "react";

const SplashPage = () => {
  return (
    <Link to="onboarding">
      <div className="padreS">
        <img
          className="padreS__logo"
          src="/assets/img/logo/lucky_logo.png"
          alt="logo"
        ></img>
        <img
          className="padreS__titulo"
          src="/assets/img/logo/lucky_titulo.png"
          alt="titulo"
        ></img>
      </div>
    </Link>
  );
};

export default SplashPage;
