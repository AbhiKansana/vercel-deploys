import { Box, Button, Center, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { MyContext } from "../useContext/MainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const QuestMain = () => {
  const data = useContext(MyContext);
  console.log(data)
  const toast = useToast()

  const nav = useNavigate()

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const[green,setGreen] = useState(false)
  const[wrongVal,setWrongVal] = useState("")
  const[rightTrack,setRightTrack] = useState(0)
  const[submit,setSubmit] = useState(false)
  console.log("questions",questions);

  useEffect(() => {
    console.log("in the effect")
    let cat;
    if(data.val.category==="gk"){
        cat=9
    }
    else if(data.val.category==="geo"){
        cat=22
    }
    else{
      cat = 21
    }

    axios
      .get(
        `https://opentdb.com/api.php?amount=${data.val.questionCount || 5}&category=${cat || 9}&difficulty=${data.val.difficulty || "easy" }&type=multiple`
      )
      .then((res) => {
        console.log(res.data.results)
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  let optionsArr = [];

  if (questions.length > 0) {
    optionsArr = questions[index].incorrect_answers.map((ele, i) => {
      return (
        <Box onClick={() => {
          handleAnswer(ele);
        }}  key={ele}
          
          bg={wrongVal===ele?"red.400":""}
         
          

        >
        <Options
          
         
          ind={i + 1}
          text={ele}
        />
         </Box>
      );
    });

    optionsArr.push(
      <Box  bg={green?"green.400":""} onClick={()=>handleAnswer(questions[index].correct_answer)} key={questions[index].correct_answer}>
        <Options text={questions[index].correct_answer} ind="4" />
      </Box>
    );
  }

  function handleAnswer(ele) {
    //  console.log(ele);
    setTimeout(()=>{
      if(questions[index].correct_answer===ele){
        // console.log("right")
        setGreen(true)
        setRightTrack(rightTrack+1)
        toast({
          title: 'Right Answer.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        
      }

      else{

        setWrongVal(ele)
        setGreen(true)
        toast({
          title: 'Wrong Answer.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
      
    },500)
  }

  function handleNext(){
    // console.log(index,questions.length)
    if(index<questions.length-1){
      setIndex(index+1)
      setGreen(false)
      if(index===questions.length-2){
        setSubmit(true)
      }
    }
   
  }

  function handleSubmit(){
    const obj = data.val
    console.log(obj)
    localStorage.setItem("masia_quiz_score",rightTrack)
    nav('/results')
  }

  return (
    <Box>
      <Box w="600px" p="1rem" m="auto">
        <Text textAlign={"center"} fontSize="1.35rem" m="1rem">
          Quiz Time
        </Text>
        {questions.length===0 && (
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
        {questions.length>0 && (
          <Box
            bg="#d8e2dc"
            boxShadow={
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            }
            p="12px"
          >
            <Text
              textAlign={"left"}
              fontSize={"1.4rem"}
              w="fit-content"
              maxW={"450px"}
              my="15px"
              m="auto"
            >
              {index + 1}. {questions[index].question}
            </Text>
            <Box w="400px" m="auto" py="1rem">
              {optionsArr}
            </Box>
          </Box>
        )}

        {questions.length>0 && !submit && <Flex justifyContent={'space-between'} alignItems='center' p='1rem' my='1rem'>
          <Text>{index+1} of {questions.length} Questions</Text>
          <Button onClick={()=>{handleNext()}}>Next  Question</Button>
        </Flex>}

        { submit && <Center p='1.5rem'> <Button onClick={()=>{handleSubmit()}}>Submit</Button> </Center>}
      </Box>
    </Box>
  );
};

export default QuestMain;

function Options({ text, ind }) {
  return (
    <Text
      mt="12px"
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
      _hover={{ bg: "blue.200" }}
      _active={{ bg: "blue.400" }}
      cursor={"pointer"}
      fontSize={"18px"}
      p="10px 20px"
    >
      {ind}. {text}
    </Text>
  );
}
