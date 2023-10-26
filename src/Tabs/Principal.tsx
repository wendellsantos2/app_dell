import React, { useState } from 'react';
import { VStack, Text, HStack, FlatList } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { Titulo } from '../componentes/Titulo';
import { produtos } from '../utils/mock';
import { Botao } from '../componentes/Botao';
import { CardProduto } from '../componentes/CardProduto';

export default function Principal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAdicionarProduto = (produto: { id?: number; titulo: any; preco?: string; imageUrl?: string; rating?: number; promotion?: string; }) => {
    // Faça algo com o produto, como exibir um alerta com o nome do produto
    alert(`Produto adicionado: ${produto.titulo}`);
  };

  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          name={i <= rating ? 'star' : 'star-border'}
          color="yellow"
          size={20}
          key={i}
        />
      );
    }
    return stars;
  };

  return (
    <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
      <Titulo color="black">Bastilha BarMarket!</Titulo>
      <HStack space={4} marginTop={5}>
        {produtos.map((categoria, index) => (
          <Text
            marginTop={15}
            key={index}
            onPress={() => setActiveIndex(index)}
            fontSize={20}
            marginLeft={2}
            fontWeight={activeIndex === index ? "bold" : "normal"}
            borderBottomWidth={activeIndex === index ? 1 : 0}
            borderBottomColor={activeIndex === index ? 'gray.800' : 'transparent'}
            color={activeIndex === index ? 'black' : 'gray.500'}
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
