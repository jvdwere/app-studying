import * as React from 'react';
import { useState } from 'react';
import Layouty from '../../components/Layouty';
import {
	Box,
	Button,
	ChakraProvider,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react';

function Respostas() {
	const [estado, setEstado] = useState();
	const [res, setRes] = useState([]);

  const [estadoSelecionado, setEstadoSelecionado] = useState('')

	const handleClick = () => {
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
			setEstadoSelecionado ('Você é Amazonense!');
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
		} else if (estado === '') {
			alert('[ERRO] Selecione um estado!');
		}
	};

	return (
		<>
			<Layouty>
				<ChakraProvider>
					<Box w="100%" textAlign="center" fontSize="22pt">
						Respostas Obvias Para Perguntas que Ninguem Fez.
					</Box>
					<Box>
						<Box>
							<FormLabel textAlign="center">
								<Box p="16px" fontSize="18pt">
									Naturalidades do Brasil.
								</Box>
								<FormLabel fontSize="16pt">Em que estado vc nasceu?</FormLabel>
								<Flex>
									<Flex>
										<Select
											name="select"
											placeholder="Selecione um Estado"
                      onChange= {(e) => {setEstado(e.target.value)}}
											
										>
											<option value="AM">Amazonas</option>
											<option value="AC">Acre</option>
											<option value="AL">Alagoas</option>
											<option value="AP">Amapá</option>
											<option value="BA">Bahia</option>
											<option value="CE">Ceara</option>
											<option value="DF">Distrito Federal</option>
											<option value="ES">Espirito Santo</option>
											<option value="GO">Goiás</option>
											<option value="MA">Maranhão</option>
											<option value="MT">Mato Grosso</option>
											<option value="MG">Minas Gerais</option>
											<option value="PA">Pará</option>
											<option value="PR">Paraná</option>
											<option value="PB">Paraíba</option>
											<option value="PE">Pernambuco</option>
											<option value="PI">Piauí</option>
											<option value="RJ">Rio de Janeiro</option>
											<option value="RS">Rio Grande do Sul</option>
											<option value="RN">Rio Grande do Norte</option>
											<option value="RO">Rondônia</option>
											<option value="RR">Roraima</option>
											<option value="SC">Santa Catarina</option>
											<option value="SP">São Paulo</option>
											<option value="SE">Sergipe</option>
											<option value="TO">Tocantins</option>
										</Select>
									</Flex>
									<Button onClick={handleClick}>Verificar</Button>
                  <Button onClick={() => setEstadoSelecionado('')}>Limpar Verificação</Button>
                  
								</Flex>
								<FormLabel>{estadoSelecionado && estadoSelecionado}</FormLabel>
							
							</FormLabel>
						</Box>
						<footer>
							<>&copy; Um dia eu fico bom.</>
						</footer>
					</Box>
				</ChakraProvider>
			</Layouty>
		</>
	);
}

export default Respostas;