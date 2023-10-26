import React from 'react';
import { Text, VStack, Image, HStack, Box } from 'native-base'; // Remova o Avatar e a importação não utilizada

import { Botao } from './Botao';

export function CardProduto({
  titulo,
  imageUrl,
  preco,
  rating,
  promotion,
  onAdicionarProduto,
}) {
  return (
    <Box
      w="100%"
      bg="white"
      p={4}
      borderRadius="lg"
      shadow={2}
      mb={4}
      borderColor="gray.200"
      borderWidth={1} // Adicione uma borda para destacar o cartão
    >
      {/* Imagem na parte superior */}
      <Image
        source={{ uri: imageUrl }}
        alt={titulo}
        size="lg"
        borderRadius="lg"
        h={200}
        w="100%"
      />

      {/* Conteúdo do cartão */}
      <VStack mt={4} space={2}>
        <Text fontSize="xl" bold>
          {titulo}
        </Text>
        <Text fontSize="lg" color="green.500">
          {preco}
        </Text>
        <Text fontSize="md" color="gray.500">
          {promotion}
        </Text>
      </VStack>

   
      <HStack justifyContent="flex-start" mt={4}>
      <Botao onPress={onAdicionarProduto} background='#FF8A00' >
          Ver Produto
        </Botao>
        </HStack>
      <HStack justifyContent="flex-start" mt={4}>
  
        <Botao onPress={onAdicionarProduto} background='#FF8A00' mt={3}>
          Adicionar Produto
        </Botao>
      </HStack>
    </Box>
  );
}
