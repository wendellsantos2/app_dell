import React, { useState, useEffect } from 'react';
import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Link,
  useToast,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
 
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { fazerLogin } from './servicos/AutenticacaoServico';
import { Botao } from './componentes/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

// Define the expected structure of your decoded token
interface DecodedToken {
  id: string;
  // ... (other properties from your token)
}

export default function Login({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(true);


  const toast = useToast();
  const logout = async () => {
    await AsyncStorage.removeItem('token'); // Remove the token from storage
    // Navigate to the login screen or another appropriate screen
    navigation.replace('Login'); // Use 'Login' or the route name you have for the login screen
  };

  useEffect(() => {
    async function verificarLogin() {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          // O token está indefinido, lide com isso adequadamente
          console.error('Token está indefinido');
        }
      } catch (error) {
        // Lide com erros de promessa rejeitada
        console.error('Erro ao obter o token:', error);
      }
      setCarregando(false);
    }
  
    verificarLogin(); // Chame a função diretamente
  }, [navigation]);
  
  const handleCadastro = async () => {
    // Verifique se os campos não estão vazios
    if (!nome || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Estrutura do objeto a ser enviado
    const usuario = {
      nome,
      email,
      password,
    };

    try {
      // Aqui você pode fazer a chamada para o seu backend. Exemplo:
      const response = await fetch('http://192.168.0.145:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      // Trate a resposta do servidor conforme necessário
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode redirecionar para a tela de login ou fazer login automaticamente
      } else {
        // Trate erros de resposta (como email já existente)
        alert('Erro no cadastro: ' + data.mensagem);
      }
    } catch (error) {
      // Trate erros de rede
      alert('Erro ao conectar com o servidor: ' + error.message);
    }
  };
  
  async function login() {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
  
    if (!trimmedUsername || !trimmedPassword) {
      // Tratamento de erro se o username ou senha estiverem em branco
      toast.show({
        title: "Erro no login",
        description: "Username e senha são obrigatórios",
        backgroundColor: "red.500",
      });
      return;
    }
  
    try {
      const resultado = await fazerLogin({
        username: trimmedUsername,
        password: trimmedPassword,
      });
      console.log(resultado);
  
      // Certifique-se de que o token é uma string válida
      if (typeof resultado.accessToken === "string") {
        // Armazene o token no AsyncStorage
        await AsyncStorage.setItem('token', resultado.accessToken);
  
        // Continuar com o código
        const tokenString = await AsyncStorage.getItem('token');
  
        if (!tokenString) {
          // Tratamento de erro se o token não for encontrado
          console.log('Nenhum token encontrado. Usuário não está logado.');
          toast.show({
            title: "Erro de autenticação",
            description: "Não foi possível autenticar o usuário.",
            backgroundColor: "red.500",
          });
          return;
        }
  
        // Decodifique o token JWT
        const decodedToken = jwtDecode(tokenString);
        // Obtenha a função (role) do usuário a partir do token decodificado
        const role = decodedToken.sub.role;
        console.log('Role:', role);
        // Realize a navegação com base na função (role) do usuário
        switch (role) {
          case 'admin':
            // Faça algo específico para o papel de admin aqui
            break;
          case 'cliente':
            navigation.replace('Tabs');
            break;
          case 'cozinha':
            // Faça algo específico para o papel de cozinha aqui
            break;
          default:
            // Tratamento de erro se a função (role) for desconhecida
            console.log('Papel de usuário desconhecido:', role);
            toast.show({
              title: "Erro de autenticação",
              description: "Papel de usuário desconhecido. Não foi possível determinar o redirecionamento.",
              backgroundColor: "red.500",
            });
            return;
        }
  
        // Agora você tem a função (role) do usuário e pode realizar ações com base nela
      } else {
        // Tratamento de erro se o token for inválido
        console.error('Token inválido:', resultado.accessToken);
        toast.show({
          title: "Erro de autenticação",
          description: "Token inválido. Não foi possível autenticar o usuário.",
          backgroundColor: "red.500",
        });
      }
    } catch (error) {
      // Tratamento de erro para outras exceções
      console.error('Erro durante o login:', error);
  
      toast.show({
        title: "Erro de conexão",
        description: "Ocorreu um erro durante o login. Verifique sua conexão com a internet e tente novamente.",
        backgroundColor: "red.500",
      });
    }
  }
  
  
  
  if (carregando) {
    return null;
  }

  return (
   <VStack flex={1} alignItems="center" p={5}>
      {/* Botões para alternar entre Login e Cadastro */}
      <Box flexDirection="row" justifyContent="center" mb={5}>
  <Text
    onPress={() => setMostrarCadastro(false)}
    fontSize="md"
    fontWeight={ !mostrarCadastro ? "bold" : "normal" }
    color={!mostrarCadastro ? "blue.500" : "gray.400"}
    mr={5}
    mt={20}
  >
    Login
  </Text>
  <Text
    onPress={() => setMostrarCadastro(true)}
    fontSize="md"
    mt={20}
    fontWeight={mostrarCadastro ? "bold" : "normal"}
    color={mostrarCadastro ? "blue.500" : "gray.400"}
     
  >
    Cadastro
  </Text>
</Box>

      {/* Formulário de Cadastro ou Login */}
      {mostrarCadastro ? (
        <>
          <Titulo color="blue.500">Cadastre-se</Titulo>
          <Box>
            <EntradaTexto label='Nome' placeholder='Insira seu nome' value={nome} onChangeText={setNome} />
            <EntradaTexto label='Email' placeholder='Insira seu endereço de email' value={email} onChangeText={setEmail} />
            <EntradaTexto label='Senha' placeholder='Insira sua senha' secureTextEntry={!showPassword} value={password} onChangeText={setSenha} />
          </Box>
          <Botao w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={handleCadastro}>
            Cadastrar
          </Botao>
        </>
      ) : (
        <>
          <Titulo color="blue.500">Login</Titulo>
          <Box>
            <EntradaTexto label='Username' placeholder='Insira seu email' value={username} onChangeText={setUsername} />
            <EntradaTexto label='Senha' placeholder='Insira sua senha' secureTextEntry={!showPassword} value={password} onChangeText={setSenha} />
          </Box>
          <Botao w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={login}>
            Entrar
          </Botao>
        </>
      )}
    </VStack>
  );
}
