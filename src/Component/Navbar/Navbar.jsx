import React, { useState } from 'react';
import './Navbar.css';




const Navbar =() =>{

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const facebookClick = () => {
    window.open('https://leetcode.com/u/Arnavativari/')
  }
  const twitterClick = () => {
    window.open('#')
  }
  const linkdenClick = () => {
    window.open('https://www.linkedin.com/in/arnava-tivari-063352292/')
  }
  const whatsappClick = () => {
    window.open('https://github.com/ARTIVARI')
  }
  const phoneClick = () => {
    window.open('#')
  }

  return (
    <nav className="Navbar">
      <div className="social">
        <img  className = "logo" src="./logo1.png" alt="Tr logo" />

        <ul>
          <li>
            <div className="socials" onClick={facebookClick} onMouseEnter={() => setIsHovered(true)}onMouseLeave={() => setIsHovered(false)} ><img src={isHovered ? "./img/facebook y.png" : "./img/facebook.png"}alt="" /></div>
          </li>
          <li>
            <div className="socials" onClick={twitterClick} onMouseEnter={() => setIsHovered1(true)}onMouseLeave={() => setIsHovered1(false)} ><img src={isHovered1 ? "./img/twitter y.png" : "./img/twitter.png"}alt="" /></div>
          </li>
          <li>
             <div className="socials" onClick={linkdenClick} onMouseEnter={() => setIsHovered2(true)}onMouseLeave={() => setIsHovered2(false)} ><img src={isHovered2 ? "./img/linkden y.png" : "./img/linkden.png"}alt="" /></div>
          </li>
          <li>
             <div className="socials" onClick={whatsappClick} onMouseEnter={() => setIsHovered3(true)}onMouseLeave={() => setIsHovered3(false)} ><img src={isHovered3 ? "./img/github y.png" : "./img/github.png"}alt="" /></div>
          </li>
          <li>
             <div className="socials" onClick={phoneClick} onMouseEnter={() => setIsHovered4(true)}onMouseLeave={() => setIsHovered4(false)} ><img src={isHovered4 ? "./img/phone y.png" : "./img/phone.png"}alt="" /></div>
          </li>

        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
