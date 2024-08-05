import React from 'react'
import './Card.css'

const Card = ({title , isActive , onClick})  => {
  return (
    <div className="element">
        <div className={`lines ${isActive ? "active" : ""}`}></div>
        <div className={`box`} onClick = {() => onClick()}>
          <div className="title">{title}</div>
       </div>
    </div>
    
  )
}

export default Card