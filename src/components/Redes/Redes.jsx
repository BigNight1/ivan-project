import React from "react";
import "./redes.css";
import FAQ from "./FAQ/FAQ";

const Redes = () => {
  return (
    <div>
      <div className="Box_Redes">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://taplink.st/a/8/2/3/8/b75e4c.jpg?3"
              alt="Logo"
              className="h-[100px] rounded-full "
            />
          </div>

          <div className="sub-description">
            <h3 className="color-titulo">SAMYS POP</h3>
            <span className="text-[#5d0f26]">Funko Pops en porcelana fria</span>
            <span className="text-[#5d0f26]">Lima - Peru</span>
          </div>
        </div>
        <div className="box-redes">
          <div className="caja-redes">
            {/*  cambie el "#" por la URL de la pagina de instagram  */}
            <a href="#" className="redes">
              INSTAGRAM
            </a>
          </div>
          {/* cambie el numero "924548268" por el de tu primo o la empresa  */}
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
        <footer className="text-center py-2 uppercase text-[14px]">@Created Edu el kchero de ivan</footer>
      </div>
    </div>
  );
};

export default Redes;
