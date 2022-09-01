import { Box, Button, Center, Flex, Icon, Text } from '@chakra-ui/react'
import axios from 'axios'
import { BsFillBookmarkFill} from 'react-icons/bs'
import { BsBookmark} from 'react-icons/bs'
import { JSON_BASE_URL } from '../utils/url'


const NoteCard = ({data,cnt,setCnt}) => {


    const icon = data.bookmarked

    function handleDelete(){
        axios.delete(`${JSON_BASE_URL}/notes/${data.id}`)
        .then(res=>{
            // console.log(res)
            setCnt(cnt+1)
        })
        .catch(err=>{
            console.log("err",err)
        })
    }

    // function handleBookmark(){
    //     axios.patch(`${JSON_BASE_URL}/notes/${data.id}`,{bookmarked:!data.bookmarked})
    //     .then(res=>{
    //         console.log(res.data.bookmarked)
    //         setCnt(cnt+1)
    //     })
    //     .catch(err=>{
    //         console.log("err",err)
    //     })


    //     axios.post(`${JSON_BASE_URL}/bookmarks`,data)
    //     .then(res=>{
    //         console.log("last",res)
    //     })
    //     .catch(err=>{
    //         console.log("err",err)
    //     })
    // }


    const handleBookmark = async()=>{

        try{

            let first = await axios.patch(`${JSON_BASE_URL}/notes/${data.id}`,{bookmarked:!data.bookmarked})
            setCnt(cnt+1)

            if(!data.bookmarked){
                let second = await axios.post(`${JSON_BASE_URL}/bookmarks`,data)
                // console.log(second)
                setCnt(cnt+1)
            }
            else{
                let second = await axios.delete(`${JSON_BASE_URL}/bookmarks/${data.id}`,data)
                console.log(second)
                setCnt(cnt+1)
            }

        }

        catch(err){
                console.log("error",err) 
        }
    }
    



  return (
    <Flex flexDirection={'column'} justifyContent='space-between' bg='#c7f9cc' w='350px' minH='250px' p='1rem' m='auto' borderRadius={'5px'} 
    boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
    >
        <Box>
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
        </Box>

         <Flex justifyContent={'space-between'}>
            <Box><Icon onClick={handleBookmark} cursor={'pointer'} color={'blue.400'} fontSize='2rem' as={icon===true? BsFillBookmarkFill : BsBookmark }/></Box>
            <Button onClick={handleDelete} colorScheme={'red'} >Delete</Button>    
        </Flex>  

    </Flex>
  )
}

export default NoteCard

