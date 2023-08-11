import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Flip, Bounce } from "react-reveal";
const footer = () => {
  return (
    <Bounce bottom duration={1800}>
      <footer>
        <Flip duration={1800}>
          <a href="" className="footer__logo">
            MS
          </a>
        </Flip>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
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
          <a
            href="https://www.facebook.com/sufyanjutt.jutt.336?mibextid=LQQJ4d"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/sufyan4584422?igshid=MjEwN2IyYWYwYw=="
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a href="https://www.twitter.com/Sufi87455524" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Sufyan: All rights reserved.</small>
        </div>
      </footer>
    </Bounce>
  );
};

export default footer;
