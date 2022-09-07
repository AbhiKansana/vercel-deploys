import { Box, Center, Flex, Img } from '@chakra-ui/react'
import React from 'react'

const SidebarNav = () => {
  return (
    <Flex bg={'#13315c'} color='white' p='.5rem 1rem' gap={'15px'}>
        <Box borderRadius={'50%'} overflow='hidden'>
       <Img w='50px' src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
       </Box> 
        <Center>Rene</Center>
    </Flex>
  )
}

export default SidebarNav