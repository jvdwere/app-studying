import { Box } from '@chakra-ui/react';
import Header from './Header';
import React from 'react';



function Layout({ children }) {
	return (
		<>
			<Header />
			<Box h='100%' w="100%" mt="70px">
				<Box background="#DDFFE7" h="100%" w="100%">
					{children}
				</Box>
				<Box textAlign='center' w="100%" p="8px" bgColor="#F9E5E1">
					<footer>
						<>&copy; Um dia eu fico bom.</>
					</footer>
				</Box>
			</Box>
		</>
	);
}

export default Layout;
