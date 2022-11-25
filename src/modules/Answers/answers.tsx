import * as React from "react";
import { useState } from "react";
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



function Respostas() {

  const [estado, setEstado]= useState()
  const [res, setRes]= useState([])
    
  

  const handleClick=()=> {

   
    if (estado === 'SP') {
      res 'Você é Paulista!'
  }
  if (estado === 'RJ') {
      res.innerHTML += 'Você é Carioca!'
  }
  if (estado === 'RS') {
      res.innerHTML += 'Você é Gaúcho!'
  }
  if (estado === 'AM') {
      res.innerHTML += 'Você é Amazonense!'
  }
  if (estado === 'AC') {
      res.innerHTML += 'Você é Acriano!'
  }
  if (estado === 'AL') {
      res.innerHTML += 'Você é Alagoano!'
  }
  if (estado === 'AP') {
      res.innerHTML += 'Você é Amapaense!'
  }
  if (estado === 'BA') {
      res.innerHTML += 'Você é Baiano!'
  }
  if (estado === 'CE') {
      res.innerHTML += 'Você é Cearense!'
  }
  if (estado === 'DF') {
      res.innerHTML += 'Você é Brasiliense!'
  }
  if (estado === 'ES') {
      res.innerHTML += 'Você é Capixaba!'
  }
  if (estado === 'GO') {
      res.innerHTML += 'Você é Goiano!'
  }
  if (estado === 'MA') {
      res.innerHTML += 'Você é Maranhense!'
  }
  if (estado === 'MT') {
      res.innerHTML += 'Você é Mato-grossense!'
  }
  if (estado === 'MS') {
      res.innerHTML += 'Você é Sul-mato-grossense'
  }
  if (estado === 'MG') {
      res.innerHTML += 'Você é Mineiro!'
  }
  if (estado === 'PA') {
      res.innerHTML += 'Você é Paraense!'
  }
  if (estado === 'PB') {
      res.innerHTML += 'Você é Paraibano!'
  }
  if (estado === 'PR') {
      res.innerHTML += 'Você é Paranaense!'
  }
  if (estado === 'PE') {
      res.innerHTML += 'Você é Pernambucano!'
  }
  if (estado === 'PI') {
      res.innerHTML += 'Você é Piauiense!'
  }
  if (estado === 'RN') {
      res.innerHTML += 'Você é Potiguara!'
  }
  if (estado === 'RO') {
      res.innerHTML += 'Você é Rondoniano!'
  }
  if (estado === 'RR') {
      res.innerHTML += 'Você é Roraimense!'
  }
  if (estado === 'SC') {
      res.innerHTML += 'Você é Catarinense!'
  }
  if (estado === 'SE') {
      res.innerHTML += 'Você é Sergipano!'
  }
  if (estado === 'TO') {
      res.innerHTML = 'Você é Tocantinense!'
  } else if(estado === '') {
      alert('[ERRO] Selecione um estado!')
  };
      
  }
  

 


  return (
    <>
      <Layouty>
        <ChakraProvider>
          <Box w="100%" textAlign="center" fontSize="22pt">
            Respostas Obvias Para Perguntas que Ninguem Fez.
          </Box>
          <Box>
            <Box>
              <FormLabel textAlign="center">
                <Box p="16px" fontSize="18pt">
                  Naturalidades do Brasil.
                </Box>
                <FormLabel fontSize="16pt">Em que estado vc nasceu?</FormLabel>
                <Flex>
                  <Flex>
                    <Select name="select" placeholder="Selecione um Estado" onChange= {(e) => {setEstado(e.target.value)}}> 
                    
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
                  <Button onClick={handleClick}>Verificar</Button>
                </Flex>
                
                <FormLabel id='res'/>
                  
                
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
}

export default Respostas;
