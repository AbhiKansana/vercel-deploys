import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdVideocam } from 'react-icons/md'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'

const MessageBoxNavbar = () => {
  return (
    <Flex bg='#0077b6' h='66px' color={'white'} w='100%' p='1rem' justifyContent={'space-between'}>
        <Text fontSize={'18px'}>Kohil</Text>
        <Flex gap={'12px'}>
            <Icon fontSize={'20px'} as={MdVideocam}/>
            <Icon fontSize={'20px'} as={BsFillPersonPlusFill}/>
            <Icon fontSize={'20px'} as={BsThreeDots}/>
            
        </Flex>
    </Flex>
  )
}

export default MessageBoxNavbar