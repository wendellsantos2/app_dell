import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Login";
import Tabs from "./Tabs";
import Carrinho from "./Tabs/Carrinho";
import QRCodeComponent from './Tabs/QrCode';

const Stack = createNativeStackNavigator();

export default function Rotas(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Carrinho" 
          component={Carrinho}
        />
        <Stack.Screen 
          name="QRCodePage" 
          component={QRCodeComponent} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
