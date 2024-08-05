import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar =() =>{
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const navigate = useNavigate();
  
  return (
    <div className="Sidebar">
         <ul>
              <li>
              <div className="item" onClick={() => navigate('/')} onMouseEnter={() => setIsHovered(true)}onMouseLeave={() => setIsHovered(false)} ><img src={isHovered ? "./img/home1.png" : "./img/home2.png"}alt="" /></div>
              </li>
              <li>
              <div className="item" onClick={() => navigate('/skill')} onMouseEnter={() => setIsHovered1(true)}onMouseLeave={() => setIsHovered1(false)} ><img src={isHovered1 ? "./img/skill1.png" : "./img/skill2.png"}alt="" /></div>
              </li>
              <li>
              <div className="item" onClick={() => navigate('/project')} onMouseEnter={() => setIsHovered2(true)}onMouseLeave={() => setIsHovered2(false)} ><img src={isHovered2 ? "./img/project1.png" : "./img/project2.png"}alt="" /></div>
              </li>
              <li>
              <div className="item" onClick={() => navigate('/message me')} onMouseEnter={() => setIsHovered3(true)}onMouseLeave={() => setIsHovered3(false)} ><img src={isHovered3 ? "./img/msg1.png" : "./img/msg2.png"}alt="" /></div>
              </li>
              <li>
              <div className="item" onClick={() => navigate('/admin')} onMouseEnter={() => setIsHovered4(true)}onMouseLeave={() => setIsHovered4(false)} ><img src={isHovered4 ? "./img/admin1.png" : "./img/admin2.png"}alt="" /></div>
              </li>
          </ul>
       
    </div>
  );
}

export default Sidebar;
