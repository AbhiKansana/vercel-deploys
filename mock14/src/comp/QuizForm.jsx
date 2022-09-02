import { Box, Button, Checkbox, CheckboxGroup, Flex, Input, Radio, RadioGroup, Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useContext } from 'react'
import { MyContext } from '../useContext/MainContext'
import { useNavigate } from 'react-router-dom'

const QuizForm = () => {

    const nav = useNavigate()
    const data = useContext(MyContext)
    // console.log("data",data)

    const[category,setCategory] = useState()
    const[difficulty,setDifficulty] = useState("easy")
    const[questionCount,setQuestionCount] = useState(5)

    function handleCategory(e){
        // console.log(e.target.value)
        setCategory(e.target.value)
    }

    function handleDifficulty(e){
       setDifficulty(e)
    }

    function handleSubmit(){
        let obj = {category,difficulty,questionCount}
        if(category && difficulty && questionCount){
            // console.log(obj)
            localStorage.setItem("Masai_quiz_obj",JSON.stringify(obj))
            data.handleVal(obj)
            nav('/quiz')


        }
        else{
            alert("Fill Proper Info")
        }
    }

  

  return (
    <Box>

        <Box border={'1px solid blue'} w='500px' p='1rem' m='2rem auto'>
            <Text textAlign={'center'} fontSize='2rem' mb='20px'> Set up your Quiz! </Text>
             <Flex my='10px' alignItems={'center'}>
               <Text fontSize={'1.25rem'} mr='30px'>Categories</Text> 
             <Select onChange={(e)=>{handleCategory(e)}} w='200px' placeholder='Select option'>
                <option value='gk'>General Knowledge</option>
                <option   value='spt'>Sports</option>
                <option value='geo'>Geography</option>
            </Select>
             </Flex>

            <Flex my='10px'>
                <Text  fontSize={'1.25rem'} mr='30px' >Difficulty</Text>
                <RadioGroup onChange={(e)=>handleDifficulty(e)} value={difficulty}>
                    <Stack direction='row'>
                        <Radio value='easy'>Easy</Radio>
                        <Radio value='medium'>Medium</Radio>
                        <Radio value='hard'>Hard</Radio>
                    </Stack>
                    </RadioGroup>
            </Flex>

            <Flex my='10px'>
                <Text  fontSize={'1.25rem'} mr='30px' >No. of questions</Text>
                <Input type={'number'} onChange={(e)=>setQuestionCount(e.target.value)} value={questionCount} textAlign={'center'} w='60px'></Input>
            </Flex>

            <Box>
                <Button onClick={handleSubmit} w='100%' fontSize={'18px'}> Start</Button>
            </Box>

        </Box>

    </Box>
  )
}

export default QuizForm