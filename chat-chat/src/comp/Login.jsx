import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const nav = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [loading,setLoading] = useState(false)

  function handleLogin() {
    if (email && password) {
      const obj = { email, password };
      
      toast({
        title: 'Account created.',
        description: "You are logged in",
        status: 'success',
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
      console.log(obj)
    } else {
      alert("Fill proper Credentials");
    }
  }

  return (
    <Box>
      <Flex
        // minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            {loading && (
              <Center>
                <Spinner
                  thickness="3px"
                  speed=".5s"
                  color="blue.500"
                  size="lg"
                />
              </Center>
            )}
            <Heading fontWeight={"500"} fontSize={"3xl"}>
              Log in{" "}
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleLogin}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Log in
                </Button>
                <Button onClick={() => nav("/signup")}>Create Account</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
