import "./Footer.css";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import AllenImg from "../Photos/Allen.png"
import YashuImg from "../Photos/Yashu.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer>
        <div className="Demo12">
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
              <Link to="https://www.linkedin.com/in/allen-benny038/" target="_blank">
                <SiLinkedin />
              </Link>
              <Link to="https://github.com/allenhack638" target="_blank">
                <GoMarkGithub />
              </Link>
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
              <Link to="https://www.linkedin.com/in/yashu-goel/" target="_blank">
                <SiLinkedin />
              </Link>
              <Link to="https://github.com/Yashu-Goel" target="_blank">
                <GoMarkGithub />
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
