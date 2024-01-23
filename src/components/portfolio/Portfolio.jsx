import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Bonik.png";
import IMG2 from "../../assets/Family Feast.png";
import IMG3 from "../../assets/eduHome.png";
import IMG4 from "../../assets/links.png";
import IMG5 from "../../assets/movie.png";
import IMG6 from "../../assets/shoes shop.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce Website using Reactjs",
    github: "https://github.com/paidynikhil/bonik",
    demo:"https://bonik-website.netlify.app",

  },
  {
    id: 2,
    image: IMG2,
    title: "Reactjs | FireBase | Food Delivery Website",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Education clone ",
    github: "https://github.com/paidynikhil/Education",
    demo: "https://nikhileducationweb.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: " GAMES | Have fun with you friends",
    github: "",
    demo: "https://link-accessor.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Reactjs | Movie Review clone",
    github: "https://github.com/paidynikhil/BoxOfficeMojo",
    demo: "https://movieweb22.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "JavaScript | HTML | CSS Ecommerce Shoes Shop ",
    github: "https://github.com/paidynikhil/Shoes",
    demo: "https://nike-show.netlify.app",
    
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
