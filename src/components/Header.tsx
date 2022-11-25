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
import { HamburgerIcon } from '@chakra-ui/icons';
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
						<Box display={{ base: 'flex', md: 'none' }}>
							<ButtonGroup gap="2" marginRight="10px">
								<IconButton
									aria-label={'HamburgerIcon'}
									icon={<HamburgerIcon />}
									colorScheme="teal"
									fontSize="20pt"
									variant="outline"
									background="white"
								/>
							</ButtonGroup>
						</Box>

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

							<Link href="/About">
								<Text
									mr="8px"
									color="#FFFFFF"
									cursor="pointer"
									marginLeft="12px"
								>
									Quem Sou
								</Text>
							</Link>

							<Link href="/WasMade">
								<Text color="#FFFFFF" cursor="pointer" marginLeft="12px">
									Como foi feito
								</Text>
							</Link>

							<Link href="/Answers">
								<Text color="#FFFFFF" cursor="pointer" marginLeft="12px">
									Naturalidades Brasileiras
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
