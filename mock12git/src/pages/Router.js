import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Home from './Home';
  import Followers from './Followers';
  import { Box, Input } from '@chakra-ui/react';
  import axios from 'axios'
  import UserInfo from '../comp/UserInfo';
import Desc from './Desc';

const Router = () => {
    const [val,setVal] = useState("")
    const [data,setData] = useState([])

    function handleEnter(e){
        if(e.key==="Enter" && val){
            localStorage.setItem("mock12",val)
            axios.get(`https://api.github.com/users/${val}/repos`)
            .then(res=>{
                setData(res.data)
            })
            .catch(err=>{
                console.log("error",err)
            })
        }
      
    }

    useEffect(()=>{
        const name = localStorage.getItem("mock12")
        if(name){
            axios.get(`https://api.github.com/users/${name}/repos`)
            .then(res=>{
                setData(res.data)
            })
            .catch(err=>{
                console.log("error",err)
            })
        }

    },[])

  return (
    <div>
        <Box w='fit-content' m='auto' >
            <Input placeholder='Enter some name...' onChange={e=>setVal(e.target.value)} onKeyDown={e=>handleEnter(e)}  w='300px' border={'2px solid pink'} type={'text'}/>
        </Box>
        {data.length>0 && <UserInfo name={data[0].owner.login} img={data[0].owner?.avatar_url} />}
        <Routes>
            <Route path='/' element={<Home data={data}/>}/>
            <Route path='/followers' element={<Followers data={data} />}/>
            <Route path='/followers/:id' element={<Desc data={data} />}/>
        </Routes>
    </div>
  )
}

export default Router