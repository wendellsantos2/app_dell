import { Box, ScrollView, Flex, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import { Botao } from './componentes/Botao';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';
import { EntradaTextoCadastro } from './componentes/EntradaTextoCadastro';
import { FotoPerfil } from './componentes/FotoPerfil';
import { EntradaTexto } from './componentes/EntradaTexto';

type NavigationProps = {
  navigation: StackNavigationProp<any>;
};

export default function Cadastro({ navigation }: NavigationProps) {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    } else {
      voltarTela();
    }
  }

  function voltarTela() {
    navigation.goBack();
  }

  function finalizarCadastro() {
    // Coloque a lógica aqui quando o usuário finalizar o cadastro.
    console.log("Cadastro finalizado");
    // Por exemplo, você pode navegar para outra tela:
    // navigation.navigate('NomeDaTelaDesejada');
  }

  return (
    <VStack flex={1}>
      
      <Flex direction="row" backgroundColor="white" p={4} alignItems="center">
  {numSecao > 0 ? (
    <TouchableOpacity onPress={voltarSecao}>
      <AntDesign name="left" size={25} mr={2} color="black" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={voltarTela}>
      <AntDesign name="left" size={25} mr={2} color="black" />
    </TouchableOpacity>
  )}
  
  <Titulo style={{ marginBottom: 15,marginLeft:13 }}>{secoes[numSecao].titulo}</Titulo>
</Flex>

      
      <ScrollView 
        flex={1} 
        backgroundColor="gray.100"
        p={5}
      > 
       
        
        {numSecao === 0 && <FotoPerfil defaultImageUri="https://via.placeholder.com/150" size={150} />
}  
        <Box>
          {
            secoes[numSecao]?.entradaTexto?.map(entrada => {
              return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
            })
          }
        </Box>
       
        {
          numSecao === secoes.length - 1 ? (
            <Botao onPress={finalizarCadastro} mt={4} mb={20} backgroundColor={'#FF8A00'}>Finalizar</Botao>
          ) : (
            <Botao onPress={avancarSecao} mt={4} mb={20} backgroundColor={'#FF8A00'}>Avançar</Botao>
          )
        }
      </ScrollView>
    </VStack>
  );
}
