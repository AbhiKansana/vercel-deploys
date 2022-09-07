import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import SidebarNav from './SidebarNav'
import SidebarCard from './SidebarCard'

const Sidebar = () => {
  return (
    <Box bg='#023e7d' w='30%' borderRight={'1px solid blue'}>
        <SidebarNav/>
        <Box p='.5rem'>
            <Input color={'white'} type='text'  placeholder='Find a user'/>
        </Box>
        <SidebarCard/>
        <SidebarCard/>
        <SidebarCard/>
    </Box>
  )
}

export default Sidebar