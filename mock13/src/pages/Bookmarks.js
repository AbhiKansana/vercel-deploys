import  {Box, Center, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'
import BackToNotes from '../comp/BackBtn'
import  { useEffect, useState } from "react";
import AddNoteBtn from "../comp/BackBtn";
import BookMarkBtn from "../comp/BookmarkBtn";
import NoteCard from "../comp/NoteCard";
import axios from "axios";
import { JSON_BASE_URL } from "../utils/url";
import AddNote from "../comp/AddNote";
import Card2 from '../comp/Card2';

const Bookmarks = () => {

  const [data, setData] = useState([]);
  const [cnt,setCnt] = useState(0)

  useEffect(() => {
    axios
      .get(`${JSON_BASE_URL}/bookmarks`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [cnt]);

  const arr = data.map((e) => {
    return <Card2 cnt={cnt} setCnt={setCnt} key={e.id} data={e} />;
  });


  return (
    <Box p='1rem'>
      <Center mb='1.5rem'>
      <BackToNotes/>
      </Center>
    { data.length===0 &&<Text textAlign={'center'}>Empty...</Text>}
      <SimpleGrid minChildWidth="340px" spacing="40px" p="1rem">
        {arr}
      </SimpleGrid>

    </Box>
  )
}

export default Bookmarks