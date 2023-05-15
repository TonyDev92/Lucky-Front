import axios from "axios";
import "./ProtectorasPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProtectorasPage = () => {
  const [protectoras, setProtectoras] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/protectora").then((res) => {
      setProtectoras(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="padreProtectoras">
      <div className="padreProtectoras__divTop">
        <Link to="/more">
        <img
          className="padreProtectoras__divTop--img"
          src="../../../assets/img/logo/back.png"
          alt="atras"
        ></img>
        </Link>
      </div>
      <h1 className="padreProtectoras__titulo">Protectoras</h1>
      {protectoras.map((protectora, index) => (
        <div key={index} className="padreProtectoras__hijo">
          <div className="padreProtectoras__hijo--body">
            <h2 className="padreProtectoras__hijo--body--name">
              {protectora.name}
            </h2>
            <div className="padreProtectoras__hijo--body--info">
              <div className="padreProtectoras__hijo--body--info--textos">
                <p className="padreProtectoras__hijo--body--info--textos--p">
                  {protectora.city}
                </p>
                <p className="padreProtectoras__hijo--body--info--textos--p">
                  {protectora.direction}
                </p>
                <p className="padreProtectoras__hijo--body--info--textos--p">
                  {protectora.email}
                </p>
                <p className="padreProtectoras__hijo--body--info--textos--p">
                  {protectora.telephone}
                </p>
              </div>
              <img
                className="padreProtectoras__hijo--body--info--img"
                src={protectora.image}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProtectorasPage;
