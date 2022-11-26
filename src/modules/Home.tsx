import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React from "react";
import Layouty from "../components/Layout";

const Home = () => {
  return (
    <Layouty>
      <ChakraProvider>
        
          <Box>
            hello 
          </Box>
        
      </ChakraProvider>
    </Layouty>
  );
};

export default Home;