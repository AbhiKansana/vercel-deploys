import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ name, img }) => {
    const capsName = name.toUpperCase()
    const nav = useNavigate()
  return (
    <Flex bg={'lavender'} w="500px" m="1rem auto"  alignItems={'center'} p="1rem" justifyContent={"space-between"}>
      <Text fontSize={'1.35rem'}>{capsName}</Text>
      <Button onClick={()=>{nav('/followers')}}>Followers</Button>

      <Box>
        <Img w="100px" src={img} />
      </Box>
    </Flex>
  );
};

export default UserInfo;
