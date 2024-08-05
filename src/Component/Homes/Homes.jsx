import React from 'react'
import './Homes.css'

function Homes() {
  return (
    <section className="hero_container">
      <div className="hero_content">
          <h2>Hi ! I am <samp>Arnava Tivari</samp></h2>
          <h3>Crafting Dynamic Web Experiences with MERN Precision</h3>
          <p>Passionate MERN Stack Frontend Developer | Crafting Dynamic Web Experiences with MERN Mastery</p>
      </div>
    
      <div className="hero_img">
          <div>
              <div className="tech_icon">
                <img src="./img/react.png" alt="react" />
              </div>
              <img src="./img/hero1.png" alt="hero" />
          </div>

          <div>
          
            <div className="tech_icon">
                <img src="./img/html1.png" alt="html" />
            </div>
            <div className="tech_icon">
              <img src="./img/css.png" alt="css" />
            </div>
            <div className="tech_icon">
                <img src="./img/js.png" alt="javascript" />
            </div>
            <div className="tech_icon">
                <img src="./img/mongo.png" alt="mongo" />
            </div>
            <div className="tech_icon">
                <img src="./img/node.png" alt="node" />
            </div>
            <div className="tech_icon">
              <img src="./img/python.png" alt="python" />
            </div>
         </div>
            
      </div>

    </section>
  )
}

export default Homes