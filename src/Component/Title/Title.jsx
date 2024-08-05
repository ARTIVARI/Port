import React from 'react'
import './Title.css'

const  Title = (props) =>{
    
  return (
    <div className='header'>{props.title}
       <div className="line"></div>
    </div>
  )
}

export default Title