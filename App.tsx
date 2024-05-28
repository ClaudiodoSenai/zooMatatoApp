import React from "react";
import { Text, View } from "react-native";
import CadastroAnimais from "./src/screens/CadastroAnimais";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListagemAnimais from "./src/screens/ListagemAnimais";
import EditarAnimais from "./src/screens/EditarAnimais";

function App(): JSX.Element {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name={'Listagem'} component={ListagemAnimais}
          options={{ headerShown: false }} />


        <Stack.Screen name={'Cadastro'} component={CadastroAnimais}
          options={{ headerShown: false }} />



        <Stack.Screen name={'EditarAnimais'} component={EditarAnimais}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;