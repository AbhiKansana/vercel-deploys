import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import  { useState, useEffect } from 'react'


const FollowerComp = ({data}) => {
    // console.log(data[0]?.owner?.followers_url)

    const[followers,setFollowers] = useState([])

    useEffect(()=>{
        axios.get(data[0]?.owner?.followers_url)
        .then(res=>{
            setFollowers(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("err",err)
        })
    },[data])

    const arr = followers.map(ele=>{
        const name = ele.login.toUpperCase()
        return (
            <Box key={ele.login}>
                <Link href={ele.html_url}>
                <Flex w='400px' m='auto' mt='20px' justifyContent={'space-between'} alignItems={'center'}>
                    <Text>{name}</Text>
                    <Img w='100px' src={ele.avatar_url}/>
                </Flex>
                </Link>
            </Box>
        )
    })

  return (
    <Box>
        <Text textAlign={'center'} fontSize='2rem'>Followers Info</Text>
        <Box>
         {arr}
        </Box>
    </Box>
  )
}

export default FollowerComp