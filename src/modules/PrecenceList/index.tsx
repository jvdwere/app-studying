import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Clock from "../../components/Clock"

export default function Presence() {
  const [userRegister, setUserRegister] = useState({
    user: "",
  });

  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    if (userRegister.user) {
      setUserList([...userList, userRegister]);
    } else {
      alert("Preencha os campos determinados.");
    }
    setUserRegister({
      user: "",
    });
  };

  const handleInputChange = (event) => {
    setUserRegister((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (user: any) => {
    setUserList(userList.filter((p) => p.user !== user));
  };

  const filter = (arr: any[]) => arr.filter((f) => f.user.includes(search));

  return (
    <Layout>
      <Box w="100%" textAlign="center" fontSize="22pt">
        La Fiesta
      </Box>
      <Box w="100%">
        <Box>
          <FormLabel>
            <Box p="16px" fontSize="18pt" textAlign="center">
             
            </Box>

            <Card w="650px" align="center" bg="#00AEAE" marginLeft="315px">
              <CardHeader>
                <Box
                             
                  bg="white"
                  w="280px"
                  textAlign="center"
                  borderRadius="10px"
                >
                  <Heading size="md" fontSize="18pt" > Lista de Convidados</Heading>
                </Box>
              </CardHeader>
              <CardBody>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent={{ base: "none", md: "space-between" }}
                  w={{ base: "100%", md: "600px" }}
                >
                  <Flex alignItems="center">
                    <Input
                      name="user"
                      type="text"
                      placeholder="Nome"
                      value={userRegister.user}
                      onChange={handleInputChange}
                      bg="white"
                      
                    />

                    <Flex>
                      <Button type="button" onClick={handleClick} marginLeft='8px'>
                        Cadastrar
                      </Button>

                      <Button type="button" onClick={() => setUserList([])} marginLeft='4px'>
                        Apagar Todos
                      </Button>
                      <Clock />
                    </Flex>
                  </Flex>

                  <Flex
                    mt={{ base: "8px", md: "0px" }}
                    alignItems="center"
                  ></Flex>
                </Flex>
              </CardBody>
            </Card>
            <Card w="650px" align="center" bg="white" marginLeft="315px">
              <CardBody>
                
                  <Flex>
                    <FormLabel htmlFor="findPerson">
                      Buscar
                    </FormLabel>
                    <Input
                      name="findPerson"
                      type="text"
                      id="findPerson"
                      value={search}
                      onChange={handleSearch}
                    />
                  </Flex>
                
                <FormLabel mt='46px' ml='-46px'>
                  <ul>
                    {userList &&
                      filter(userList).map((x) => (
                        <Box>
                          <li>
                            {x.user}                           
                            <Button onClick={() => handleDelete(x.user)} ml='15px' >
                              Apagar
                            </Button>
                            <Box p='10px'><hr /></Box>
                            
                          </li>
                        </Box>
                      ))}
                  </ul>
                </FormLabel>
                <Box boxSize="sm"></Box>
              </CardBody>
            </Card>
          </FormLabel>
        </Box>
      </Box>
    </Layout>
  );
}
