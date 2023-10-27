import { Input, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export function SearchBar(props) {
  return (
    <HStack
      width="100%"
      borderWidth={1}
      borderRadius={25} // Ajustado para deixar mais redondo
      borderColor="gray.300"
      alignItems="center"
      paddingLeft={2}
      {...props} // Espalhe props para permitir propriedades adicionais como marginTop, etc.
    >
      <Icon name="search" size={20} color="gray" />
      <Input
        flex={1}  // Faz com que o Input ocupe todo o espaço disponível
        placeholder="Pesquisar..."
        paddingLeft={2}
        variant="unstyled" // Remove o estilo padrão para se misturar com o contêiner
      />
    </HStack>
  );
}
