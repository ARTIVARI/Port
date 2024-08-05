import React, {useState} from 'react'
import './Skill.css'
import Title from '../Title/Title';
import Card from '../Skillcard/Card';
import { SKILLS } from '../../utility/data';
import Cardinfo from '../Skillinfo/Cardinfo';

const Skill=() =>{

  const [selectedSkill , setSelcetedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelcetedSkill(data)
  };


  return (
    <>
      <div>
        <Title title = "Skill"/>
      </div>
      <div className="skill">
          <div className='skills'>
                        {SKILLS.map((item)=> (
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
            <div className="skillsinfo">
              <Cardinfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills}/>
            </div>
      </div>
      
    </>
    
  );
}

export default Skill