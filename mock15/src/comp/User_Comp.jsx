import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { Box,Input,VStack, Flex, Radio, Text, Stack, RadioGroup,Button, Select, option } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/BaseUrl'


const User_Comp = () => {
    const[gender,setGender] = useState("")
    const[name,setName] = useState("")
    const[age,setAge] = useState("")
    const[country,setCountry] = useState("")
    const[profession,setProfession] = useState("")
    const toast = useToast()

    const nav = useNavigate()

    function handleSumbit(){
        const obj = {gender,name,age,country,profession}
        if(gender && age && name && country && profession){
            console.log(obj)
            axios.post(`${BASE_URL}/users`,obj)
            .then(res=>{
                // console.log(res)
            })
            .catch(err=>{
                console.log("error",err)
            })

            toast({
                title: 'Form Submitted Successfully',
                status: 'success',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
        }

        else{
            toast({
                title: 'Fill Proper Credentials',
                status: 'error',
                duration: 1000,
                position: 'top',
                isClosable: true,
              })

        }
    }
  return (
    <VStack gap='35px' w='500px' mt='3rem' mx='auto' p='1.5rem'>
        <Text textAlign='center' color='blue.800' textDecoration='underline' fontSize='2.35rem'>Form</Text>
        <Input w='300px' onChange={(e)=>setName(e.target.value)} placeholder="Name" type='text'></Input>
        <Input w='300px'  onChange={(e)=>setAge(e.target.value)} placeholder="Age" type='number'></Input>
        <Flex gap='20px'>
            <Text>Gender</Text>
            <Box>
            <RadioGroup onChange={(e)=>{setGender(e)}} value={gender}>
            <Stack direction='row'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
                <Radio value='other'>Other</Radio>
            </Stack>
            </RadioGroup>
            </Box>
        </Flex>
        <Input w='300px'  onChange={(e)=>setCountry(e.target.value)} placeholder="Country" type='text'></Input>
        <Select w='300px'  onChange={(e)=>setProfession(e.target.value)}   placeholder='Select Profession'>
            <option value='student'>Student</option>
            <option value='employed'>Employed</option>
            <option value='none'>None</option>
        </Select>
        <Button onClick={handleSumbit} colorScheme='blue' w='300px'>Submit</Button>
        <Button  onClick={()=>nav('/')} colorScheme='yellow' w='300px'>Home Page</Button>
        
    </VStack>

  )
}

export default User_Comp