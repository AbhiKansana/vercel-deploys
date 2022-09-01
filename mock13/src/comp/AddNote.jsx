import { Flex, Textarea, useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    Button,
    FormLabel
  } from '@chakra-ui/react'
  import React,{useState, useEffect} from "react"
  import { AiOutlinePlus } from 'react-icons/ai'
  import { JSON_BASE_URL } from "../utils/url"
  import axios from "axios"



export default function AddNote({setCnt,cnt}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const[title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    const[date,setDate] = useState("")
    const[time,setTime] = useState("")


    function handleSave(){
       if(title && desc && date && time){
            const obj = {title,desc,date,time,bookmarked:false}

            axios.post(`${JSON_BASE_URL}/notes`,obj)
            .then(res=>{
                setCnt(cnt+1)
            })
            .catch(err=>{
                console.log("err",err)
            })
       }
        else{
            alert("Fill Proper information")
        }
    }
  
    return (
      <>
        <Button colorScheme='twitter' onClick={onOpen} leftIcon={<AiOutlinePlus size={'1.25rem'} />}>Add Note</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input onChange={(e)=>setTitle(e.target.value)} ref={initialRef} placeholder={'Coding Assignment'} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea  onChange={(e)=>setDesc(e.target.value)} placeholder='Need to work on google map api with react' />
              </FormControl>

              

           <Flex gap={'25px'}>
              <FormControl mt={4}>
                <FormLabel>Time</FormLabel>
                <Input type='time' onChange={(e)=>setTime(e.target.value)} placeholder='02:24 PM' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input type='date' onChange={(e)=>setDate(e.target.value)} placeholder='01-09-2022' />
              </FormControl>
              </Flex>

            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSave} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }