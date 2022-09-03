import React from 'react'
import {Box, Flex, Button, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Admin_Comp = () => {
    const nav = useNavigate()
  return (
    <Box>
    <Text mt='2rem' textAlign='center' fontSize='2rem'>Admin Dashboard</Text>
    <Flex gap='30px' w='400px' m='2rem auto' p='1rem' justifyContent='space-between'>
        <Button onClick={()=>nav('/data')}>Data</Button>
        <Button onClick={()=>nav('/reports')}>Reports</Button>
        <Button onClick={()=>nav('/login')}>Login</Button>
        {/* <Button>Logout</Button> */}
    </Flex>
    </Box>
  )
}

export default Admin_Comp