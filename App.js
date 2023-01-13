import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomingScreen from './src/screens/WelcomingScreen';
import DisplayScreen from './src/screens/DisplayScreen';
import LoginScreen from './src/screens/LoginScreen'
import CredentialScreen from './src/screens/CredentialScreen';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <View style={styles.container}>
    <NavigationContainer >

      <Stack.Navigator initialRouteName="User Credential">

        <Stack.Screen
        name="Home"
        component={HomeScreen}
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
          name="User Credential"
          component={CredentialScreen} />


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

