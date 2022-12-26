import { Box, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import Layouty from "../components/Layout";

const Home = () => {
  return (
    <Layouty>
      <ChakraProvider>
        
          <Box>
            Home
          </Box>
        
      </ChakraProvider>
    </Layouty>
  );
};

export default Home;