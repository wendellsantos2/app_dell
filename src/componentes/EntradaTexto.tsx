import { Input, FormControl } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

export function EntradaTexto ({ 
  label, 
  placeholder, 
  secureTextEntry = false
} : InputProps) : JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label color="white">{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="transparent"
        borderColor="white" 
        secureTextEntry={secureTextEntry}
      />
    </FormControl>
  );
};
