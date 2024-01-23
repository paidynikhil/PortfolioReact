import React from "react";
import "./about.css";
import Boy2 from "../../assets/Boy2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Boy2} alt="About nikhil image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Tech. Computer Science & Engineering
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                15+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
          Throughout my 6+ months of professional experience, I have successfully led front-end and back-end web development projects, demonstrating my expertise in the MERN stack. I possess a deep understanding of HTML, CSS, and JavaScript, and have leveraged frameworks like React.js and Tailwind CSS to develop responsive and intuitive user interfaces.
          </p>
          <p>
          As a full-stack developer, I am proficient in server-side languages such as Node.js and Express.js. I have hands-on experience in designing and developing APIs. Additionally, I have expertise in working with SQL and MongoDB for efficient data storage and retrieval       
          </p>
          <p>
          Throughout my career, I have acquired solid project management and team Management skills. I am well-organized, customer-focused, and have a track record of meeting deadlines and exceeding client expectations. My analytical mindset enables me to approach problem-solving with precision and efficiency.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
