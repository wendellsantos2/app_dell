import { VStack, Image, Text, Box, Link, Checkbox, ScrollView, Flex } from 'native-base' // Importe o Flex
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';
import { EntradaTextoCadastro } from './componentes/EntradaTextoCadastro';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Flex direction="row"> {/* Coluna à esquerda */}
        <Box>
          <TouchableOpacity onPress={() => voltarSecao()}>
            <AntDesign name="left" size={35} mr={2} color="black" />
            
          </TouchableOpacity>
          
        </Box>
      </Flex>

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTextoCadastro label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
     
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20} backgroundColor={'#FF8A00'}>Avançar</Botao>
    </ScrollView>
  );
}
