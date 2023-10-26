import React, { useState } from 'react';
import { VStack, Image, Text, Box, Link, Flex, View, HStack, Divider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/google21.jpg';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
 
import { SocialIcon } from 'react-native-elements'; // Importe o SocialIcon
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone do Twitter

 

export default function Login({ navigation }: any) {
  // Função para fazer login com o Google
  const loginWithGoogle = async () => {
    // ...
  };

  // Função para fazer login com o Facebook
  const loginWithFacebook = async () => {
    // ...
  };

  // Função para fazer login com o Twitter
  const loginWithTwitter = () => {
    // Adicione aqui a lógica para fazer login com o Twitter
    console.log('Login com o Twitter');
  };
  const [isRegistering, setIsRegistering] = useState(false);
  const toggleRegistrationMode = () => {
    setIsRegistering(!isRegistering);
  };
  const [selectedTab, setSelectedTab] = useState<'login' | 'register'>('login');

  return (
    <VStack flex={1} p={5}>
    <VStack 
        flex={1} 
        alignItems="center" 
        justifyContent="center" 
        backgroundColor="white" 
        borderRadius="40"  // Bordas arredondadas
    >
        <Image source={Logo} alt="Logo Voll" alignSelf="center" />

        <HStack space={4} mt={5} justifyContent="center">
            <TouchableOpacity onPress={() => setSelectedTab('login')}>
                <Text fontSize={24} borderBottomWidth={selectedTab === 'login' ? 2 : 0} borderBottomColor="blue.500">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab('register')}>
                <Text fontSize={24} borderBottomWidth={selectedTab === 'register' ? 2 : 0} borderBottomColor="blue.500">Cadastro</Text>
            </TouchableOpacity>
        </HStack>
    </VStack>
    <Divider mt={3} />

      {selectedTab === 'login' && (
        <Box flex={1} alignItems="center" justifyContent="center">
      
          <Box>
            <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
            <EntradaTexto label="Senha" placeholder="Insira sua senha" />
          </Box>

          <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

         

          <Link href='https://www.alura.com.br' mt={2}>Esqueceu sua senha?</Link>
        </Box>
      )}

      {selectedTab === 'register' && (
        <Box flex={1} alignItems="center" justifyContent="center">
 

          <Box>
            <EntradaTexto label="Nome" placeholder="Insira seu nome completo" />
            <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
            <EntradaTexto label="Senha" placeholder="Insira uma senha" />
          </Box>

          <Botao onPress={() => navigation.navigate('Tabs')}>Cadastrar</Botao>
        </Box>
      )}
    </VStack>
  );
}
