import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../comp/Home/Sidebar'
import MessageBox from '../comp/Home/MessageBox'

const Home = () => {
  return (
    <Flex border={'1px solid blue'} minH='600px'>
      <Sidebar/>
      <MessageBox/>
    </Flex>
  )
}

export default Home