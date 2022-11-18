import React from 'react';
import {
  Box,
  Flex,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useToast,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HamburgerIcon, } from '@chakra-ui/icons';
function WithAction() {
  const toast = useToast();
  const route = useRouter();

  return (
    <>
      <Box
        position="fixed"
        zIndex="999"
        top="0"
        left="0"
        right="0"
        background="teal"
        w="100%"
        color="#fff"
       
      >
        <Flex
          h="70px"
          alignItems="center"
          p="0 20px"
          m="auto"
          justifyContent="space-between"
        >
          <Flex padding='12px'>
            <ButtonGroup gap='2' marginRight='10px'>
            <IconButton aria-label={'HamburgerIcon'} icon={<HamburgerIcon/>} colorScheme='teal' fontSize='20pt' variant='outline' background='teal' />
            </ButtonGroup> 
           
            <Link href="/">

              <Text
                color="#FFFFFF"
                size="lg"
                fontWeight="bold"
                cursor="pointer"
                mr="30px"
              >
                Meu Inestimável App
              </Text>
            </Link>

            <Link href="/">
              <Text mr="8px" color="#FFFFFF" cursor="pointer">
                Quem Sou
              </Text>
            </Link>

            <Link href="/">
              <Text color="#FFFFFF" cursor="pointer">
                Como foi feito
              </Text>
            </Link>
          </Flex>
          <Flex>
            <Menu>
              
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default WithAction;
