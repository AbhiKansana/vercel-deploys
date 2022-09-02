import React,{ useContext } from 'react'
import { Box, Button, Center, Text } from '@chakra-ui/react'
import { MyContext } from "../useContext/MainContext";
import { useNavigate } from 'react-router-dom';

const ScoreCard = () => {
  const nav = useNavigate()
  const data = useContext(MyContext);
  console.log(data)
  const score = localStorage.getItem("masia_quiz_score")
  
  return (
    <>
    <Box bg='#d8e2dc' p='1.5rem' my='2rem' w='fit-content' mx='auto'>
        <Text>Total Questions {data.val.questionCount || 10}</Text>
        <Text>Correct Answers {score}</Text>
        <Text>Wrong Answers {data.val.questionCount - (+score) || 4}</Text>
        <Text color={'green'} textAlign='center' fontSize={'20px'}  fontWeight={'bold'}>Total Score {score}</Text>
    </Box>
    <Center>
      <Button onClick={()=>nav('/')}>Home</Button>
    </Center>
    </>

  )
}

export default ScoreCard