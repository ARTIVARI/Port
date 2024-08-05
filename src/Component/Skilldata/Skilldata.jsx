import React from 'react';
import './Skilldata.css';

const Skilldata = ({ details }) => {
  return (
    <div className="skill-data">
      {details.map((item,index) =>(
                <div className="info">
                    <React.Fragment key = {`skill_${index}`}>
                   <div className="skills-info">
                      <div ><img className='imges' src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt="S" /></div>
                      <div className="data">{item.data}</div>
                   </div>
                </React.Fragment>
                </div>
            ))}
    </div>
  )
}

export default Skilldata
