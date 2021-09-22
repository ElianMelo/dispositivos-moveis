import React from 'react';
import LampApp from './src/exercises/lamp-app/components/LampApp';
import LampDetail from './src/exercises/lamp-app/components/LampDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Produtos" component={LampApp} options={{ title: 'Loja de luminárias' }}/>        
        <Stack.Screen name="Detalhes" component={LampDetail} options={{ title: 'Detalhes' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;