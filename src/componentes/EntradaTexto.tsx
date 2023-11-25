import React from "react";
import { FormControl, Input as NativeBaseInput } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  value: string; // Adicionando propriedade value
  onChangeText: (text: string) => void; // Adicionando propriedade onChangeText
  secureTextEntry?: boolean;
}

export function EntradaTexto({ 
  label, 
  placeholder,
  value, // Recebendo value
  onChangeText, // Recebendo onChangeText
  secureTextEntry = false
}: InputProps): JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label color="white">{label}</FormControl.Label>}
      <NativeBaseInput
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius={0}
        borderWidth={0}
        color="gray"
        _focus={{ borderBottomColor: "black", color: "black" }}
        _hover={{ borderBottomColor: "black", color: "black" }}
        style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
        secureTextEntry={secureTextEntry}
        value={value} // Definindo o valor do input
        onChangeText={onChangeText} // Definindo a função para manipular mudanças de texto
      />
    </FormControl>
  );
}
