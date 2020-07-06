import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose a ThreeJS example!</Text>
      <Button
        title="Go to Cube"
        onPress={() => navigation.navigate('Cube')}
      />
      <Button
        title="Go to Earth"
        onPress={() => navigation.navigate('Earth')}
      />
    </View>
  );
}