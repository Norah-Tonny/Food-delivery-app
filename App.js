import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomingScreen from './src/screens/WelcomingScreen';
import DisplayScreen from './src/screens/DisplayScreen';
import LoginScreen from './src/screens/LoginScreen'
import PhoneScreen from './src/screens/PhoneScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import InitialScreen from './src/screens/InitialScreen';
import SingleScreen from './src/screens/SingleScreen';
import { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <View style={styles.container}>

      <NavigationContainer >

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
      />
        <Stack.Screen
        name="Welcome"
        component={WelcomingScreen}
      />
          <Stack.Screen
          name="Display"
          component={DisplayScreen}
        />
   
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen} />
        

        <Stack.Screen
          name="Login"
          component={LoginScreen} />
        
        <Stack.Screen
          name="User"
          component={PhoneScreen} />
        
        <Stack.Screen
          name="Single"
          component={SingleScreen}
        />

<Stack.Screen
          name="Initial"
          component={InitialScreen}
        />


            </Stack.Navigator>

      </NavigationContainer>
    

  );
};


export default App;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
  },
  heading: {
    color: 'maroon',
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: 12,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    gap: 3,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // btn{

  // }
});

