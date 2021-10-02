import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LampApp from './src/LampApp';
import LampDetail from './src/LampDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Produtos" component={LampApp} options={{ title: 'Loja de luminárias' }}/>        
        <Stack.Screen name="Detalhes" component={LampDetail} options={{ title: 'Detalhes' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
