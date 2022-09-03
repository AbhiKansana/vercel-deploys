import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Report_Comp = ({obj}) => {
    console.log(obj)
  return (
    <Box>
        <Text textAlign={'center'} fontSize='2rem' mb='40px'>Reports</Text>
        <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Age Group</Th>
        <Th>Peoples</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>13-18</Td>
        <Td>{obj.first}</Td>
      
      </Tr>
      <Tr>
        <Td>18-25</Td>
        <Td>{obj.second}</Td>
       
      </Tr>
      <Tr>
        <Td>25++</Td>
        <Td>{obj.third}</Td>
       
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

    </Box>
  )
}

export default Report_Comp