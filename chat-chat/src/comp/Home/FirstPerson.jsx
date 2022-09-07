import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const FirstPerson = () => {
  return (
    <Flex gap={'20px'}  p='.5rem 1.5rem' >
        <Flex w='65px' flexDirection={'column'} alignItems='center'>
            <Box w='fit-content'bg={'red'} borderRadius='50px' overflow='hidden'>
                <Img w='40px' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
            </Box>
            <Text>Just Now</Text>
        </Flex>
        <Box maxW={'80%'} p='6px'>
        <Text p='.5rem 1.25rem' borderRadius={'0 15px 15px 15px'} bg='#0582ca' color={'white'}>
             Are you all right bro!
        </Text>
        </Box>
    </Flex>
  )
}

export default FirstPerson