import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Box,
	Flex,
	Button,
	Text,
	useDisclosure,
	useToast,
	IconButton,
	ButtonGroup,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {  HamburgerIcon } from '@chakra-ui/icons';
import { GiBrazil } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';


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
								<DrawerHeader textAlign='center'>Paginas</DrawerHeader>
								<hr />

								<DrawerBody>
									<Link href="/answers" >
										<Text cursor="pointer" marginLeft="12px">
											<Button
												leftIcon={<GiBrazil />}
												variant='ghost'
											>
												Naturalidades Brasileiras
											</Button>
										</Text>
									</Link>
									<hr />
									<Link href="/cars" >
										<Text cursor="pointer" marginLeft="12px" marginTop='8px' >
											<Button
												leftIcon={<FaCar />}
												variant='ghost'
											>
												Carros
											</Button>
										</Text>
									</Link>
									<hr />
									<Link href="/presence-list" >
										<Text cursor="pointer" marginLeft="12px" marginTop='8px' >
											<Button
												
												variant='ghost'
											>
												Lista de Presença
											</Button>
										</Text>
									</Link>
									<hr />

								</DrawerBody>
								<DrawerFooter>

								</DrawerFooter>
							</DrawerContent>
						</Drawer>


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
						</Flex>
						<Flex display={{ base: 'none', md: 'flex' }}>
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
								<Text
									color="#FFFFFF"
									cursor="pointer"
									marginLeft="12px"
								>
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
