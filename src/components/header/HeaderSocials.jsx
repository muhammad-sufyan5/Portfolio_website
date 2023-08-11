import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <Roll>
        <a
          href="https://www.linkedin.com/in/muhammad-sufyan-11598b208/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/muhammad-sufyan5" target="_blank">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.facebook.com/sufyanjutt.jutt.336?mibextid=LQQJ4d"
          target="_blank"
        >
          <BiLogoFacebookSquare />
        </a>
      </Roll>
    </div>
  );
};

export default HeaderSocials;
