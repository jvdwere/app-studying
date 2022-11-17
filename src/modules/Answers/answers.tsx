import * as React from "react";
import Layouty from "../../components/Layouty";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const Respostas = () => {
  return (
    <>
      <Layouty>
        <ChakraProvider>
          <Box w="100%" textAlign="center" fontSize="22pt">
            Respostas Obvias Para Perguntas que Ninguem Fez.
          </Box>
          <Box
            bg="#8C7478"
            w="100%"
            h="100vh"
            p={{ base: "40px 20px 0 20px", md: "100px 0 0 0" }}
          >
            <Box
              borderRadius="10px"
              bg="#fff"
              p="20px"
              w={{ base: "100%", md: "400px" }}
              m="0px auto"
            >
              <FormLabel textAlign="center">
                <Box p="16px" fontSize="18pt">
                  Naturalidades do Brasil.
                </Box>
                <FormLabel fontSize="16pt">
                  Em que estado vc nasceu?
                </FormLabel>
                <Flex>
                  <Flex>
                    <Select placeholder="Selecione um Estado" width="200px">
                      <option value="AM">Amazonas</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceara</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espirito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PR">Paraná</option>
                      <option value="PB">Paraíba</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </Select>
                  </Flex>
                  <Button>Verificar</Button>
                </Flex>
                <FormLabel id="res" />
                Foto
              </FormLabel>
            </Box>
            <footer>
              <>&copy; Um dia eu fico bom.</>
            </footer>
          </Box>
        </ChakraProvider>
      </Layouty>
    </>
  );
};

export default Respostas;
