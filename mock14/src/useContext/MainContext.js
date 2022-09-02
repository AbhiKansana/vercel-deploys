import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext({})

const MainContext = (props) => {


    
   const [val, setVal] = useState({})
   function handleVal(obj){
    setVal({...obj})
   }

   useEffect(()=>{
    const obj = JSON.parse(localStorage.getItem("Masai_quiz_obj"))
    // console.log("from local storage",obj)
    setVal(obj)
   },[])

   return(
    <MyContext.Provider value={{val,handleVal}}>
        {props.children}
    </MyContext.Provider>
   )
}

export default MainContext

