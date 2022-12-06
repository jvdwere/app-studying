import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React from "react";
import Layouty from "../../components/Layout";

const Cars = () => {
  return (
    <Layouty>
      <ChakraProvider>
        
          <Box>
            cars
          </Box>
        
      </ChakraProvider>
    </Layouty>
  );
};

export default Cars;