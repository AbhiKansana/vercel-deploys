import React from 'react'
import { Box, Flex, Text} from '@chakra-ui/react'

const Data_Page_Card = ({obj}) => {
    // console.log("obj",obj)
  return (
    <Box bg='#bee9e8' maxW='300px'>
       <Unit head={"Name"} text={obj.name}/>
       <Unit head={"Age"} text={obj.age}/>
       <Unit head={"Gender"} text={obj.gender}/>
       <Unit head={"Profession"} text={obj.profession}/>
    </Box>
  )
}

export default Data_Page_Card


function Unit({head,text}){

    return (
    <Flex p='12px' gap='15px'>
        <Text w='60%' fontSize={'21px'}>{head}</Text>
        <Text w='40%' fontSize={'21px'}>{text}</Text>
    </Flex>
    )
}