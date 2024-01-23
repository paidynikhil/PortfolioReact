import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/paidy-nikhil-4b7027243">
        <BsLinkedin />
      </a>
      <a href="https://github.com/paidynikhil">
        <FaGithub />
      </a>
      <a href="www.linkedin.com/in/paidy-nikhil-4b7027243">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
