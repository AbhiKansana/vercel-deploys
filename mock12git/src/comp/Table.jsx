import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  Box,
  Flex,
  Text,
  Image,
  Select,
  Spinner,
  Center,
  color,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const RepoTable = ({ data }) => {
    console.log(data)
    const nav= useNavigate()
    const arr = data.map((ele) => {
    let date = new Date(ele.created_at);

    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    // console.log(day)

    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    // console.log(month)

    let year = date.getFullYear();
    year = year.toString();
    year = year[2] + year[3];
    // console.log(year)

    let now = `${day}/${month}/${year}`
    return (
      <Tr key={ele.id}  >
       <Link  to={`/followers/${ele.id}`}>
        <Td _hover={{color:'blue.600'}}>{ele.name}</Td>
     </Link>
        <Td>{now}</Td>
        <Td>{ele.private === false ? "True" : "False"} </Td>
        <Td >{ele.description || "Empty"}</Td>
      </Tr>
    );
  });

  return (
    <div>
      {data.length>0 && <Box marginTop={"2rem"} border={"2px solid #777"}>
        <TableContainer>
          <Table w={"100%"} variant="simple">
            <Thead>
              <Tr>
                <Th> Name</Th>
                <Th>Creation Time</Th>
                <Th>Public</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>{arr}</Tbody>
          </Table>
        </TableContainer>
      </Box>}
    </div>
  );
};

export default RepoTable;
