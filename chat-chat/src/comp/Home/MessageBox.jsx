import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import FirstPerson from './FirstPerson'
import MessageBoxInput from './MessageBoxInput'
import MessageBoxNavbar from './MessageBoxNavbar'
import SecondPerson from './SecondPerson'

const MessageBox = () => {
  return (
    <Flex bg='#bfd7ff' flexDirection={'column'} justifyContent='space-between' w='70%'>
      <Box>
      <MessageBoxNavbar/>
      <Box >
        <FirstPerson/>
        <SecondPerson/>
        <FirstPerson/>
        <SecondPerson/>
      </Box>
      </Box>
      <Box>
      <MessageBoxInput/>
      </Box>
    </Flex>
  )
}

export default MessageBox