import React from 'react'
import './Cardinfo.css'

const Cardinfo = ({ skills}) => {
  return (
    

        <div className="skill-info-content">
            {skills.map((item,index) =>(
                <div className="info">
                    <React.Fragment key = {`skill_${index}`}>
                   <div className="skill-info">
                    <p>{item.skill}</p>
                    <p className="percentage">{item.percentage}</p>
                   </div>

                   <div className="skill-progress-bg">
                     <div className="skill-progress" style={{width: item.percentage}}/>
                   </div>
                </React.Fragment>
                </div>
            ))}
        </div>
    
  )
}

export default Cardinfo