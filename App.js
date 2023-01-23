import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomingScreen from './src/screens/WelcomingScreen';
import DisplayScreen from './src/screens/DisplayScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhoneScreen from './src/screens/PhoneScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import InitialScreen from './src/screens/InitialScreen';
import SingleScreen from './src/screens/SingleScreen';
import StartScreen from './src/screens/StartScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MyTab = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Starto" component={MyDrawer} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Welcome" component={WelcomingScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="User" component={PhoneScreen} />
      <Stack.Screen name="Single" component={SingleScreen} />
      <Stack.Screen name="Initial" component={InitialScreen} />
    </Stack.Navigator>

  );
};

  
const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Start" component={StartScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};




const App = () => {
  return (
  
    <NavigationContainer>
    <Tab.Navigator screenOptions={{header:false}}>
    <Tab.Screen name="Starte" component={MyTab} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;
