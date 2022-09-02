import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Home';
import Quest from './Quest';
import Score from './Score';


const All_Routes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quest/>}/>
        <Route path='/results' element={<Score/>}/>
    </Routes>
    </>
  )
}

export default All_Routes