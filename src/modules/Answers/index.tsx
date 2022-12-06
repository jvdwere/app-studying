import * as React from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import {
	Box,
	Button,
	ChakraProvider,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Container,
	Heading,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
} from '@chakra-ui/react';
import { statesList } from '../../helpers/states';

function Respostas() {
	const [estado, setEstado] = useState('');

	const [estadoSelecionado, setEstadoSelecionado] = useState('');

	const handleClick = () => {
		if (estado) {
			if (estado === 'SP') {
				setEstadoSelecionado('Você é Paulista!');
			}
			if (estado === 'RJ') {
				setEstadoSelecionado('Você é Carioca!');
			}
			if (estado === 'RS') {
				setEstadoSelecionado('Você é Gaúcho!');
			}
			if (estado === 'AM') {
				setEstadoSelecionado('Você é Amazonense!');
			}
			if (estado === 'AC') {
				setEstadoSelecionado('Você é Acriano!');
			}
			if (estado === 'AL') {
				setEstadoSelecionado('Você é Alagoano!');
			}
			if (estado === 'AP') {
				setEstadoSelecionado('Você é Amapaense!');
			}
			if (estado === 'BA') {
				setEstadoSelecionado('Você é Baiano!');
			}
			if (estado === 'CE') {
				setEstadoSelecionado('Você é Cearense!');
			}
			if (estado === 'DF') {
				setEstadoSelecionado('Você é Brasiliense!');
			}
			if (estado === 'ES') {
				setEstadoSelecionado('Você é Capixaba!');
			}
			if (estado === 'GO') {
				setEstadoSelecionado('Você é Goiano!');
			}
			if (estado === 'MA') {
				setEstadoSelecionado('Você é Maranhense!');
			}
			if (estado === 'MT') {
				setEstadoSelecionado('Você é Mato-grossense!');
			}
			if (estado === 'MS') {
				setEstadoSelecionado('Você é Sul-mato-grossense');
			}
			if (estado === 'MG') {
				setEstadoSelecionado('Você é Mineiro!');
			}
			if (estado === 'PA') {
				setEstadoSelecionado('Você é Paraense!');
			}
			if (estado === 'PB') {
				setEstadoSelecionado('Você é Paraibano!');
			}
			if (estado === 'PR') {
				setEstadoSelecionado('Você é Paranaense!');
			}
			if (estado === 'PE') {
				setEstadoSelecionado('Você é Pernambucano!');
			}
			if (estado === 'PI') {
				setEstadoSelecionado('Você é Piauiense!');
			}
			if (estado === 'RN') {
				setEstadoSelecionado('Você é Potiguara!');
			}
			if (estado === 'RO') {
				setEstadoSelecionado('Você é Rondoniano!');
			}
			if (estado === 'RR') {
				setEstadoSelecionado('Você é Roraimense!');
			}
			if (estado === 'SC') {
				setEstadoSelecionado('Você é Catarinense!');
			}
			if (estado === 'SE') {
				setEstadoSelecionado('Você é Sergipano!');
			}
			if (estado === 'TO') {
				setEstadoSelecionado('Você é Tocantinense!');
			}
		} else {
			alert('[ERRO] Selecione um estado!');
			setEstadoSelecionado('');
		}
	};

	return (
		<>
			<Layout>
				<Box w="100%" textAlign="center" fontSize="22pt">
					Respostas Obvias Para Perguntas que Ninguem Fez.
				</Box>
				<Box w="100%">
					<Box>
						<FormLabel>

							<Box p="16px" fontSize="18pt" textAlign='center' >
								Naturalidades do Brasil.
							</Box>

							<Card w='650px' align='center' bg='#00AEAE' marginLeft="315px">
								<CardHeader>
									<Box bg="white" w='280px' textAlign='center' borderRadius='10px'>
										<Heading size='md'>Em que estado vc nasceu?</Heading>
									</Box>
								</CardHeader>
								<CardBody>
									<Flex
										flexDirection={{ base: 'column', md: 'row' }}
										justifyContent={{ base: 'none', md: 'space-between' }}
										w={{ base: '100%', md: '600px' }}
									>

										<Flex alignItems="center">
											<Select
												w="250px"
												bgColor="white"
												name="select"
												placeholder="Selecione um Estado"
												onChange={(event) => setEstado(event.target.value)}
											>
												{statesList.map((s) => (
													<>
														<option key={s.state} value={s.stateValue}>
															{s.state}
														</option>
													</>
												))}
											</Select>
										</Flex>

										<Flex mt={{ base: '8px', md: '0px' }} alignItems='center'>
											<Button mr="8px" colorScheme="teal" onClick={handleClick}>
												Verificar
											</Button>
											<Button
												colorScheme="blue"
												onClick={() => setEstadoSelecionado('')}
											>
												Limpar Verificação
											</Button>
										</Flex>

									</Flex>
								</CardBody>
							</Card>
							<Card w='650px' align='center' bg='white' marginLeft="315px">
								<CardBody>
									<FormLabel>
										{estadoSelecionado && <Heading m='8px' bg='white' borderRadius='10px'>{estadoSelecionado}</Heading>}
									</FormLabel>
									<Box boxSize='sm'>
										<Image borderRadius='full'
											w='250px'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQwvNCqW3Vqw5l9Ha_Phutm1QomrEPVseow&usqp=CAU'
											alt='Brasil' />
									</Box>
								</CardBody>
							</Card>
						</FormLabel>
					</Box>
				</Box>
			</Layout>
		</>
	);
}

export default Respostas;
