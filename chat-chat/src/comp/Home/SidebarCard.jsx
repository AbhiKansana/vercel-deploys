import { Box, Center,Text, Flex, Img } from '@chakra-ui/react'
import React from 'react'

const SidebarCard = () => {
  return (
    <Flex _hover={{background:'#002855'}} _active={{background:'#002855'}} color='white'  gap={'12px'} p='.5rem .75rem'>
      <Box borderRadius={'50%'} overflow='hidden'>
        <Img w='60px' src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      </Box>
      <Flex flexDirection={'column'} justifyContent='center'>
      <Text cursor={'default'}>Kohil</Text>
      <Text cursor={'default'} fontSize={'13px'}>How are you doin?</Text>

      </Flex>

    </Flex>
  )
}

export default SidebarCard