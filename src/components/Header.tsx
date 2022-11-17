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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
          <Flex>
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

            <Link href="/customers">
              <Text mr="8px" color="#FFFFFF" cursor="pointer">
                Quem Sou
              </Text>
            </Link>

            <Link href="/calendar">
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
