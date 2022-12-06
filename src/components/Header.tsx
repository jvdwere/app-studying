import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
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
	useMergeRefs,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { EmailIcon, HamburgerIcon } from '@chakra-ui/icons';
import { GiBrazil } from 'react-icons/gi';


function WithAction() {
	const toast = useToast();
	const route = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

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
				<Flex h="70px" alignItems="center" p="0 20px" m="auto">
					<Flex alignItems="center" padding="12px">


						<ButtonGroup gap="2" marginRight="10px" ref={btnRef} colorScheme='teal' onClick={onOpen}>
							<IconButton
								aria-label={'HamburgerIcon'}
								icon={<HamburgerIcon />}
								colorScheme="teal"
								fontSize="20pt"
								variant="outline"
								color="white"
							/>
						</ButtonGroup>
						<Drawer
							isOpen={isOpen}
							placement='left'
							onClose={onClose}
							finalFocusRef={btnRef}
						>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton />
								<DrawerHeader>Paginas</DrawerHeader>

								<DrawerBody>
									<Link href="/answers" >
										<Text cursor="pointer" marginLeft="12px">
											<Button leftIcon={<GiBrazil />}> Naturalidades Brasileiras </Button>
										</Text>
									</Link>
									
									<Link href="/answers" >
										<Text cursor="pointer" marginLeft="12px">
											<Button leftIcon={<GiBrazil />}> Carros </Button>
										</Text>
									</Link>
								</DrawerBody>
								<DrawerFooter>

								</DrawerFooter>
							</DrawerContent>
						</Drawer>


						<Flex display={{ base: 'none', md: 'flex' }}>
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

							<Link href="/about">
								<Text
									mr="8px"
									color="#FFFFFF"
									cursor="pointer"
									marginLeft="12px"
								>
									Quem Sou
								</Text>
							</Link>

							<Link href="/wasMade">
								<Text color="#FFFFFF" cursor="pointer" marginLeft="12px">
									Como foi feito
								</Text>
							</Link>


						</Flex>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default WithAction;
