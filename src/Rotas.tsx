import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Tab = createNativeStackNavigator();
import Login from "./Login";
import Tabs from "./Tabs";
import Carrinho from "./Tabs/Carrinho";

export default function Rotas(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Login" component={Login} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Tabs" component={Tabs} options={{ headerShown: false }}
        />
        <Tab.Screen 
    name="Carrinho" 
    component={Carrinho}
/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}