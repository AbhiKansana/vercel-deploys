import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DescComp = ({ data }) => {
  let { id } = useParams();
  console.log({id})



  let obj;

  data?.forEach((ele) => {
    console.log(ele.id,id)
    if (ele.id === +id) {
      obj = ele;
    }
  });

  console.log(obj);

  return (
    <div>
      <Text fontSize={'2rem'} textAlign='center' mb='2rem'>Description</Text>
      {obj && (
        <Flex gap={'25px'} flexDirection={'column'} alignItems='center' w='400px' m='auto'>
          <Text>Name  {obj.name}</Text>
          <Text>Creation Date {obj.created_at}</Text>
          <Text>Language  {obj.language || "Javascipt"}</Text>
          <Img w='100px' src={obj.owner.avatar_url}/>
        </Flex>
       
      )}
    </div>
  );
};

export default DescComp;
