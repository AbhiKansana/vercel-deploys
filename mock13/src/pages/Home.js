import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import AddNoteBtn from "../comp/BackBtn";
import BookMarkBtn from "../comp/BookmarkBtn";
import NoteCard from "../comp/NoteCard";
import axios from "axios";
import { JSON_BASE_URL } from "../utils/url";
import AddNote from "../comp/AddNote";

const Home = () => {
  const [data, setData] = useState([]);
  const [cnt,setCnt] = useState(0)
  // console.log(cnt)


  useEffect(() => {
    axios
      .get(`${JSON_BASE_URL}/notes`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [cnt]);

  const arr = data.map((e) => {
    return <NoteCard cnt={cnt} setCnt={setCnt} key={e.id} data={e} />;
  });

  return (
    <Box>
      <Flex maxW={"400px"} m="auto" p="1rem" justifyContent={"space-between"}>
 
        <AddNote setCnt={setCnt} cnt={cnt}/>
   
        <BookMarkBtn />
   

      </Flex>
      {data.length===0 && <Text textAlign={'center'}>Loading</Text>}
      <Text textAlign={"center"} fontSize="1.5rem">
        Notes
      </Text>
      <SimpleGrid minChildWidth="340px" spacing="40px" p="1rem">
        {arr}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
