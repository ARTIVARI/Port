import React, { useState} from 'react'
import './Project.css'
import Title from '../Title/Title';
import { PROJECT } from '../../utility/data';
import Card from '../Skillcard/Card';
import Skilldata from '../Skilldata/Skilldata';

const Project=() => {
  const [selectedSkill , setSelcetedSkill] = useState(PROJECT[0]);

  const handleSelectSkill = (data) => {
    setSelcetedSkill(data)
  };

  return (
    <>
      <div>
        <Title title = "Projects"/>
      </div>
      <div className="skill">
          <div className='skills'>
                {PROJECT.map((item)=> (
                    <Card
                        key={item.table}
                        title={item.title}

                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                          handleSelectSkill(item);
                        }}
                    />
                  ))}
            </div>
            <div className="infor">
            <Skilldata
              // heading={selectedSkill.img}
              details={selectedSkill.details}/>
            </div>
      </div>
    </>
    
  )
}

export default Project