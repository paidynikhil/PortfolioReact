import React from "react";
import "./header.css";
import CTA from "./CTA";
import Boy1 from "../../assets/Boy1.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Paidy Nikhil</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="nikhil">
          <img src={Boy1} alt="paidy nikhil" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
