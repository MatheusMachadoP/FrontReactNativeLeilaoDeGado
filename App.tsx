import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial1 from './TelaInicial1';
import TelaInicial2 from './TelaInicial2';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaBoasVindas from './TelaBoasVindas'; // Importe a nova tela
import "node-libs-expo/globals";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

export type RootStackParamList = {
  Home: undefined;
  TelaInicial: undefined;
  Login: undefined;
  Cadastro: undefined;
  BoasVindas: undefined; // Adicione a nova tela ao stack de navegação
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
          headerTintColor: '#BB86FC',
          headerBackTitleVisible: false,
          headerTitle: '',
        }}
      >
        <Stack.Screen
          name="Home"
          component={TelaInicial1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial2}
        />
        <Stack.Screen
          name="Login"
          component={TelaLogin}
        />
        <Stack.Screen
          name="Cadastro"
          component={TelaCadastro}
        />
        <Stack.Screen
          name="BoasVindas"
          component={TelaBoasVindas} // Adicione a nova tela ao stack de navegação
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
