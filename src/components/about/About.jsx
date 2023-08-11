import React from "react";
import "./about.css";
import ME from "../../assets/pic.jpeg";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";

const about = () => {
  return (
    <section id="about">
      <Bounce top duration={1800}>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Bounce>
      <div className="container about__container">
        <Bounce left duration={1800}>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me Image" />
            </div>
          </div>
        </Bounce>
        <div className="about__content">
          <div className="about__cards">
            <Zoom duration={1800}>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>6+ Months Working</small>
              </article>
              <article className="about__card">
                <AiOutlineUsergroupDelete className="about__icon" />
                <h5>Clients</h5>
                <small>6+ clients based MERN Projects </small>
              </article>
              <article className="about__card">
                <BsFolder2Open className="about__icon" />
                <h5>Projects</h5>
                <small>27+ Projects Completed</small>
              </article>
            </Zoom>
          </div>
          <Bounce right duration={1800}>
            <p>
              Hello, I'm <i>M.Sufyan</i>, a passionate <i>web developer</i> with
              a keen eye for detail and a love for creating beautiful and
              functional websites. Ever since I built my first website I've been
              captivated by the art of web development. I specialize in{" "}
              <i>front-end development</i>, utilizing technologies such as HTML,
              CSS, JavaScript, and React to craft responsive and user-friendly
              interfaces. Additionally, I have experience with back-end
              technologies like Node.js and Express, allowing me to create
              seamless MERN based full-stack applications.
            </p>
          </Bounce>
          <Zoom>
            <a href="#contact" className="btn btn-primary">
              Let's Talks
            </a>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default about;
