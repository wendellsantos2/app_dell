import React, { useState } from 'react';
import {
  VStack, Box, Text, Divider, HStack, Image, Spacer, Icon
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import { Titulo } from '../componentes/Titulo';
import { produtos } from '../utils/mock';

export default function Principal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          as={MaterialIcons}
          name={i <= rating ? 'star' : 'star-border'}
          color="yellow.400"
          size="sm"
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
            fontSize="25"
            fontWeight={activeIndex === index ? "bold" : "normal"} // Adicionada esta linha
            borderBottomWidth={activeIndex === index ? 2 : 0}
            borderBottomColor="black"
          >
            {categoria.categoria}
          </Text>
        ))}
      </HStack>


      <Swiper
        loop={false}
        showsButtons={false}  
        showsPagination={false}
        index={activeIndex}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {produtos.map((categoria) => (
          <VStack key={categoria.categoria} space={3} divider={<Divider />} w="100%">
        

            {categoria.items.map((produto) => (
              <Box key={produto.id} w="100%" borderRadius="lg" p={3} bg="gray.50" mb={4}>
                <HStack space={3}>
                  <Image
                    source={{ uri: produto.imageUrl }}
                    alt={produto.titulo}
                    size="sm"
                    borderRadius="lg"
                  />
                  <VStack>
                    <Text color="gray.700" fontWeight="bold" fontSize="lg">
                      {produto.titulo}
                    </Text>
                    <Text color="gray.500" fontSize="md">{produto.preco}</Text>
                    <HStack>
                      {renderStars(produto.rating)}
                      <Spacer />
                      <Text color="green.500">{produto.promotion}</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        ))}
      </Swiper>
    </VStack>
  );
}
