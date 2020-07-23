import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import CubeScreen from './screens/CubeScreen';
import EarthScreen from './screens/EarthScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Cube" component={CubeScreen} />
        <Stack.Screen name="Earth" component={EarthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;