import React from 'react'
import './Contect.css'
import Title from '../Title/Title';

function Contect() {
  return (
    <>
    <div>
      <Title title = "Contect"/>
    </div>
    <div className="cont">
      <div className="content">
       <img className = "imges " src="./img/cont.png" alt="" />
      </div>
      <div className="photo">
        <img className = "imges " src="./img/man.jpeg" alt="" />
      </div>
    </div>
    
    </>
    
  )
}

export default Contect