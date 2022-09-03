import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

const Home_Comp = () => {
    const nav = useNavigate()
  return (
    <Flex maxW='300px' p='2rem' my='2rem' mx='auto' gap='40px' flexDirection='column'>
        <Button onClick={()=>nav('/user')}>User Section</Button>
        <Button onClick={()=>nav('/admin')}>Admin Section</Button>
    </Flex>
  )
}

export default Home_Comp