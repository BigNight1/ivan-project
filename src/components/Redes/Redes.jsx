import React from "react";
import "./redes.css";
import FAQ from "./FAQ/FAQ";

const Redes = () => {
  return (
    <div>
      <div className="Box_Redes">
        <div className="Logo-Description">
          <img
            src="https://taplink.st/a/8/2/3/8/b75e4c.jpg?3"
            alt="Logo"
            className="img-logo"
          />
          <div className="sub-description">
          <h3 className="color-titulo">SAMYS POP</h3>
          <span>Funko Pops en porcelana fria</span>
          <span>Lima - Peru</span>
          </div>
          
        </div>
        <div className="box-redes">
          <div className="caja-redes">
            <a href="#" className="redes">
              INTAGRAM
            </a>
          </div>
          <div className="caja-redes">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B51924548268&text&type=phone_number&app_absent=0"
              target="__BLANK"
              className="redes"
            >
              WHATSAPP
            </a>
          </div>
        </div>
        {/* PREGUNTAS Y RESPUESTAS  */}
        <FAQ />
      </div>
    </div>
  );
};

export default Redes;
