import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Report_Comp from '../comp/Report_Comp'
import { BASE_URL } from '../utils/BaseUrl'

const Reports = () => {

  const [data,setData] = useState([])

  let first = 0
  let second = 0
  let third = 0

  data.forEach(ele=>{
    let age = ele.age
    age = +age
    if(age>=13 && age<=18){
      first++
    }
    else if(age>18 && age<=25){
      second++
    }
    else{
      third++
    }
  })

  const obj = {first,second,third}

  useEffect(() => {
    
    axios.get(`${BASE_URL}/users`)
    .then(res=>{
        console.log(res.data)
        setData(res.data)
    })
    .catch(err=>{
        console.log("error",err)
    })
  
    
  }, [])
  return (
    <Box p='2rem' mt='40px' w='600px' mx='auto'>
      <Report_Comp obj={obj} />
    </Box>
  )
}

export default Reports