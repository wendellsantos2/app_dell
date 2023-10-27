import React, { useState } from 'react';
import { VStack, Text, HStack, FlatList, Icon, Image } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import { produtos } from '../utils/mock';
import { CardProduto } from '../componentes/CardProduto';
import Carrinho from '../assets/shopping-cart.png'
import Vector from '../assets/Vector.png'
import { TouchableOpacity } from 'react-native';
import { SearchBar } from '../componentes/Search';
export default function Principal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAdicionarProduto = (produto: { id?: number; titulo: any; preco?: string; imageUrl?: string; rating?: number; promotion?: string; }) => {
    // Faça algo com o produto, como exibir um alerta com o nome do produto
    alert(`Produto adicionado: ${produto.titulo}`);
  };

   
  return (
    <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>

   <HStack justifyContent="space-between" width="100%">
    <Image
    source={Vector}
   
    size="7"
    resizeMode="contain"
  
  />
  <Titulo color="black">Bastilha BarMarket!</Titulo>

  <TouchableOpacity>
  <Image
    source={Carrinho}
    alt="Carrinho de Compras"
    size="7"
    resizeMode="contain"
    right="10"
    top="1"
  />
  </TouchableOpacity>
</HStack>
<Text mt={10}>Comidas Gostosas aqui </Text>
      <HStack space={5} marginTop={0}>
      <SearchBar/>
      </HStack>
      <HStack space={4} marginTop={5}>
        {produtos.map((categoria, index) => (
          <Text
            marginTop={3}
            key={index}
            onPress={() => setActiveIndex(index)}
            fontSize={17}
            marginLeft={2}
            fontWeight={activeIndex === index ? "bold" : "normal"}
            borderBottomWidth={activeIndex === index ? 1 : 0}
            borderBottomColor={activeIndex === index ? 'orange.500' : 'transparent'}
            color={activeIndex === index ? 'black' : 'orange'}
            paddingRight={4}
            
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
            onAdicionarProduto={() => handleAdicionarProduto(item)}
          />
        )}
      />
    </VStack>
  );
}
