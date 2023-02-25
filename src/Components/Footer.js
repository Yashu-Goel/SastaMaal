import React from 'react'
import './Footer.css'
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

import YashuImg from './Yashu.png'
const Footer = () => {
  return (
    <div className='FooterContainer'>
        <footer>
          <div className='Demo'>
          <span>
              Connect with us:
            </span>
          </div>
            <div className='FooterImageContainer'>
              <img src={YashuImg}/> 
            </div>
            <div className='SocialMedia'>
              <a href='https://www.linkedin.com/in/yashu-goel/' target="_blank"><SiLinkedin/></a>
              <a href='https://github.com/Yashu-Goel' target="_blank"><GoMarkGithub/></a>              
            </div>
            
        </footer>
    </div>
  )
}

export default Footer