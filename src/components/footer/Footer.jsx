import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Paidy Nikhil
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
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
      <div className="footer__copyright">
        <small>&copy; Paidy Nikhil. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
