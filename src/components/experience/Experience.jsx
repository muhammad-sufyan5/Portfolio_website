import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";
const experience = () => {
  return (
    <section id="experience">
      <Bounce top duration={1800}>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </Bounce>

      <div className="container experience__container">
        <div className="experience__frontend">
          <Zoom duration={1800}>
            <h3>Frontend Development</h3>
          </Zoom>
          <div className="experience__content">
            <Bounce left duration={1800}>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>VueJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JQuery</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </Bounce>
          </div>
        </div>

        {/* end of frontend */}
        <div className="experience__backend">
          <Zoom duration={1800}>
          <h3>Backend Development</h3>
          </Zoom>
         
          <div className="experience__content">
            <Bounce right duration={1800}>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MySql</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Laravel</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Laravel Authentication</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>RESTful API Development</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Event Broadcasting</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
