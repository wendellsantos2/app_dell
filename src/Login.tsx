import React from 'react';
import { VStack, Image, Text, Box, Link, Flex, View, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/LogoDell.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
 
import { SocialIcon } from 'react-native-elements'; // Importe o SocialIcon
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone do Twitter

// Importe as bibliotecas de autenticação social
import * as GoogleAuthentication from 'expo-google-app-auth';
import * as FacebookAuthentication from 'expo-facebook';

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

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} backgroundColor="#FF8A00">
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login em sua conta</Titulo>

      <Box>
        <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" />
      </Box>

      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <HStack space={2} marginTop={11} justifyContent="center">
  <TouchableOpacity onPress={loginWithGoogle}>
    <SocialIcon
      button
      type="google"
      onPress={loginWithGoogle}
      iconSize={36}
      style={{ borderRadius: 100, width: 60, height: 60 }}
    />
  </TouchableOpacity>

  <TouchableOpacity onPress={loginWithFacebook}>
    <SocialIcon
      button
      type="facebook"
      onPress={loginWithFacebook}
      iconSize={36}
      style={{ borderRadius: 100, width: 60, height: 60 }}
    />
  </TouchableOpacity>

  <TouchableOpacity onPress={loginWithTwitter}>
    <View
      style={{
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
      }}
    >
      <Icon
    
        name="twitter"
        size={36}
        color="#1DA1F2"
      />
    </View>
  </TouchableOpacity>
</HStack>



      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

      <Link href='https://www.alura.com.br' mt={2}>Esqueceu sua senha?</Link>
    </VStack>
  );
}
