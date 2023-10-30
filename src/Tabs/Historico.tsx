import React, { useState } from 'react';
import { VStack, HStack, FlatList, Image  } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Titulo } from '../componentes/Titulo';
import { CardProduto } from '../componentes/CardProduto';
import { produtos } from '../utils/mock';
import { Botao } from '../componentes/Botao';
import { CardHistorico } from '../componentes/CardHistorico';
 

export default function Historico() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  const navigation = useNavigation();

 

  return (
    <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
    <HStack justifyContent="space-between" width="100%">
      <Titulo color="black" mb={10} justifyItems={'center'} >Meu Histórico</Titulo>
    </HStack>

    <FlatList
      marginTop={5}
      data={produtos[activeIndex]?.items || []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <>
          <CardHistorico
            id={item.id}
            titulo={item.titulo}
            imageUrl={item.imageUrl}
            preco={item.preco}
            rating={item.rating}
            promotion={item.promotion}
          />
         
        </>
      )}
    />
  </VStack>
  );
}
