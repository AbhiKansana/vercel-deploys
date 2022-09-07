import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

const MessageBoxInput = () => {
  return (
    <Box bg={'whiteAlpha.800'}>
        <InputGroup>
        <Input position={'relative'} p='2rem'  type={'text'} placeholder='Enter your message'/>
        <InputRightElement w='80px'>
        <Button position={'absolute'} top='13px'  w='100%'>Send</Button>
        </InputRightElement>
        </InputGroup>
    </Box>
  )
}

export default MessageBoxInput