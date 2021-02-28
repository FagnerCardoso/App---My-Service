import React, { useState } from 'react';
import {  View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Home from './Screens/Home';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

}

