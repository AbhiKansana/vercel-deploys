import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Center,
    Spinner,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import  {mainLoginRequest } from '../redux/login/actions'
import { useDispatch, useSelector} from 'react-redux'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function SimpleCard() {

   const nav = useNavigate()
    const toast = useToast()
    const dispatch = useDispatch()
    const state = useSelector(state=>state.login)
    const loading = state.isLoading
    const token = state.token
    
   
    
   
    const[email,setEmail] = useState("eve.holt@reqres.in")
    const[password,setPassword] = useState("cityslicka")

    function handleLogin(){
      if(email && password){
        const obj = {email,password}
        dispatch(mainLoginRequest(obj))

      }

      else{
        alert("Fill proper Credentials")
      }
    }

    return (
      <Box>
      
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          {token && ( <Center><Text borderRadius='8px' p='.5rem' fontSize='1.5rem' bg='green.300'>Logged in Succesfully</Text></Center>)}
        {loading && <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
/>
        </Center>}
            <Heading fontWeight={'500'} fontSize={'3xl'}>Log in </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handleLogin}
                  _hover={{
                    bg: 'blue.500',
                
                  }}>
                  Log in
                </Button>
                <Button onClick={()=>nav('/admin')}>
                   Admin Dashboard
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    );
  }