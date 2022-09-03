import React from 'react'
import { useSelector } from 'react-redux'
import DataPage from './DataPage'
import Login from './Login'

const Private_Data = () => {
    const state = useSelector((state)=>state.login.token)
    if(state){
        return <DataPage/>
    }
    
    else{
        return <Login/>
    }
}

export default Private_Data