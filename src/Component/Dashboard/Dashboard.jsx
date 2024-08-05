import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Homes from '../Homes/Homes';
import Skill from '../Skill/Skill';
import Project from '../Projectss/Project';
import Contect from '../Contect/Contect';
import Admin from '../Admin/Admin';


const Dashboard =() =>{
  return (
    <div className="Dashboard">
      <Navbar/>
      <Router>
      <div className="side">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Homes/>}></Route>
            <Route path='/skill' element={<Skill/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/message me' element={<Contect/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default Dashboard;
