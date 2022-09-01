import { Box, Button, Center, Flex, Icon, Text } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillBookmarkFill} from 'react-icons/bs'
import { BsBookmark} from 'react-icons/bs'
import { JSON_BASE_URL } from '../utils/url'


const Card2 = ({data,cnt,setCnt}) => {


    const icon = data.bookmarked

    function handleDelete(){
        axios.delete(`${JSON_BASE_URL}/bookmarks/${data.id}`)
        .then(res=>{
            // console.log(res)
            setCnt(cnt+1)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }


    



  return (
    <Box bg='#c7f9cc' w='340px' minH='300px' p='1rem' m='auto' borderRadius={'5px'} 
    boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
    >
        <Flex justifyContent={'space-between'}>
            <Flex alignItems={'center'} w='70%'>
                <Text fontSize={'1.3rem'}>{data.title}</Text>
            </Flex>
            <Box w='30%'>
                <Text  fontSize={'16px'}  textAlign={'right'}>{data.time}</Text>
                <Text  fontSize={'16px'} textAlign={'right'}>{data.date}</Text>
            </Box>
        </Flex>


        <Text my='1.25rem'>{data.desc}</Text>

         <Flex justifyContent={'space-between'}>
            <Button onClick={handleDelete} colorScheme={'red'} >Delete</Button>    
        </Flex>  

    </Box>
  )
}

export default Card2

