import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import Reports from './Reports'

const Private_Report = () => {
    const state = useSelector((state)=>state.login.token)
    if(state){
        return <Reports/>
    }
    
    else{
        return <Login/>
    }
}

export default Private_Report
