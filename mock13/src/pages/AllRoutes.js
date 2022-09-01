
import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Bookmarks from './Bookmarks';
import Home from './Home';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bookmarks' element={<Bookmarks/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes