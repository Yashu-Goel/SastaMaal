import React from "react";
import "./Footer.css";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import AllenImg from "./Allen.png"
import YashuImg from "./Yashu.png";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer>
      <div className="Demo">
          <span>Connect with us:</span>
          </div>
        <div className="OuterContainer">
          <div>
          <div className="FooterImageContainer">
            <img src={AllenImg} />
          </div>
          <div className="NameContainer">
          <p>Allen Benny</p>
          </div>

          <div className="SocialMedia">
            <a href="https://www.linkedin.com/in/allen-benny038/" target="_blank">
              <SiLinkedin />
            </a>
            <a href="https://github.com/allenhack638" target="_blank">
              <GoMarkGithub />
            </a>
          </div>
          </div>
          

          <div>
          <div className="FooterImageContainer">
            <img src={YashuImg} />
          </div>
          <div className="NameContainer">
          <p>Yashu Goel</p>
          </div>
          <div className="SocialMedia">
            <a href="https://www.linkedin.com/in/yashu-goel/" target="_blank">
              <SiLinkedin />
            </a>
            <a href="https://github.com/Yashu-Goel" target="_blank">
              <GoMarkGithub />
            </a>
          </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
