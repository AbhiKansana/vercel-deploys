import React, { useEffect, useState } from 'react'
import  { Box, Text, Center, SimpleGrid, Select, Flex, Spinner} from '@chakra-ui/react'
import Data_Page_Card from '../comp/Data_Page_Card'
import axios from 'axios'
import { BASE_URL } from '../utils/BaseUrl'

const DataPage = () => {

  const [data,setData] = useState([])
  const[gender,setGender] = useState("")
  const[age,setAge] = useState("")
  const[loading,setLoading] = useState(false)

  function handleGender(e){
    setGender(e.target.value)
    axios.get(`${BASE_URL}/users`)
    .then(res=>{
        // console.log(res.data)
        setData(res.data)
        const arr = res.data.filter(ele=> ele.gender===e.target.value)
        setData(arr)
    })
    .catch(err=>{
        console.log("error",err)
    })
    // console.log("arr",arr)
  }

  function handleAge(e){
    if(e.target.value==="l2h"){
       console.log(e.target.value)
      const arr = data.sort((a,b)=>+(a.age) - +(b.age))
      console.log(arr)
      setData(arr)
     }

     else if(e.target.value==="h2l"){
      console.log(e.target.value)
     const arr = data.sort((a,b)=>b.age-a.age)
     console.log(arr)
     setData(arr)
    }
     
  }
   
  useEffect(() => {
    setLoading(true)
    axios.get(`${BASE_URL}/users`)
    .then(res=>{
        // console.log(res.data)
        setData(res.data)
        setLoading(false)
    })
    .catch(err=>{
        console.log("error",err)
    })
  
    
  }, [])

  const arr = data.map(ele=>{
    return (
      <Data_Page_Card key={ele.id} obj={ele} />
    )
  })
  

  return (
    <Box p='2rem'>
      <Center mb='1.5rem'><Text fontSize={'2rem'}> Users Data </Text></Center>
        {loading && <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
/>
        </Center>}
      <Flex justifyContent={'space-between'}>
        <Box w='250px' my='25px'>
        <Select onChange={(e)=>handleGender(e)} placeholder='Sort by Gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </Select>
        </Box>
        <Box w='250px' my='25px'>
        <Select onChange={(e)=>handleAge(e)} placeholder='Sort by Age'>
          <option value='l2h'>Low to high</option>
          <option value='h2l'>High to low</option>
 
        </Select>
        </Box>
      </Flex>
      <SimpleGrid minChildWidth='250px' gap='40px'>
        {arr}
      </SimpleGrid>
    </Box>
  )
}

export default DataPage