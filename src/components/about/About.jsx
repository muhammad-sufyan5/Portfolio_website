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
                <small>1+ Years Working</small>
              </article>
              <article className="about__card">
                <AiOutlineUsergroupDelete className="about__icon" />
                <h5>Clients</h5>
                <small>10+ clients based LARAVEL/PHP Projects </small>
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
              Hello, I'm <i>Muhammad Sufyan</i>, a passionate <i>web developer</i> with
              a focus on <i>backend development</i>. My expertise lies in{" "}
              <i>Laravel/PHP</i>, where I excel at building robust and scalable
              web applications. Over the years, I've developed a strong
              foundation in creating efficient and secure backend systems,
              complemented by my skills in HTML, CSS, JavaScript, Bootstrap and jQuery.
              Additionally, I have experience with Vue.js, which enhances my
              ability to deliver seamless and dynamic user experiences. My
              journey in web development has been driven by a fascination with
              technology and a commitment to delivering high-quality, functional
              websites.
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
