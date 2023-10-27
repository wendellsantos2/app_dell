import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Text, HStack, FlatList, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Titulo } from '../componentes/Titulo';
import { SearchBar } from '../componentes/Search';
import { CardProduto } from '../componentes/CardProduto';
import { produtos } from '../utils/mock';

import Carrinho from '../assets/shopping-cart.png';
import Vector from '../assets/Vector.png';

export default function Principal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  const navigation = useNavigation();

  const exibirCarrinho = () => {
    navigation.navigate('Carrinho');
};

  return (
    <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
      <HStack justifyContent="space-between" width="100%">
        <TouchableOpacity>
          <Image
            source={Vector}
            size="6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Titulo color="black">Bastilha BarMarket!</Titulo>
        <TouchableOpacity onPress={exibirCarrinho}>
  <Image
    source={Carrinho}
    alt="Carrinho de Compras"
    size="6"
    resizeMode="contain"
    right="11"
    top="1"
  />
</TouchableOpacity>
      </HStack>
      <Text mt={3} bold>Escolha sua comida aqui !</Text>
      <HStack space={5} marginTop={0}>
        <SearchBar />
      </HStack>
      <HStack space={4} marginTop={5}>
        {produtos.map((categoria, index) => (
          <Text
            marginTop={3}
            key={index}
            onPress={() => setActiveIndex(index)} // Define o estado ativo ao clicar
            fontSize={17}
            marginLeft={2}
            fontWeight={activeIndex === index ? 'bold' : 'normal'}
            color={activeIndex === index ? 'orange.500' : 'gray.500'} // Use 'gray.500' para cinza
            paddingRight={4}
            borderBottomWidth={1}
            borderBottomColor={activeIndex === index ? 'orange.500' : 'transparent'}
          >
            {categoria.categoria}
          </Text>
        ))}
      </HStack>
      <FlatList
        data={produtos[activeIndex]?.items || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardProduto
            titulo={item.titulo}
            imageUrl={item.imageUrl}
            preco={item.preco}
            rating={item.rating}
            promotion={item.promotion}
            onAdicionarProduto={undefined}
          />
        )}
      />
    </VStack>
  );
}
