import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Home';
import User from './User';
import  Admin  from './Admin'
import Login from './Login';
import Private_Data from './Private_Data';
import Private_Report from './Private_Report';

const All_Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/data' element={<Private_Data/>}/>
            <Route path='/reports' element={<Private_Report/>}/>
        </Routes>
    </div>
  )
}

export default All_Routes