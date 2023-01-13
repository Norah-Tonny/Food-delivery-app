import { Text, Touchable, TouchableOpacity,ImageBackground, View,TextInput, SafeAreaView,StyleSheet } from "react-native"
import React,{Component} from "react"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const image = { uri: "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80" };


const SignUpScreen = ({navigation}) => {

  const [name, setName] =useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const newUser = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Login')
          // ...
        })
        .catch((error) => {
          console.log(error)
        });
     
    }

    return (

      <ImageBackground source={image}
    resizeMode="cover"
    style={styles.img}
>
        <View style={styles.SafeAreaView}>
          
        <TextInput

style={styles.input}
placeholder="Name"
onChangeText={(text) =>setName(text)}  

      />

    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={(text) =>setEmail(text)}  
              />
              
    <TextInput

      style={styles.input}
      placeholder="Password"
      onChangeText={(text) =>setPassword(text)}  
      
            />


            
          <TouchableOpacity
          style={styles.button}
          onPress={newUser}>
          <Text>Sign Up</Text>

          </TouchableOpacity>
          
        </View >
        </ImageBackground>

          
    )
  
}
      
export default SignUpScreen;

const styles = StyleSheet.create({
    button: {
        height: 40,
        width:100,
        margin: 3,
        borderWidth:1,
        padding: 3,
        marginTop: 50,
        alignItems: 'center',
    marginLeft: 130,
       borderColor:'orange',
    },
    
      img: {
          flex: 1,
          position:"relative",
      
      },

    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      padding: 10,
      borderColor: 'orange',
    
  },
  SafeAreaView: {
    justifyContent: "center",
    padding: 40,
    marginTop:200,
    }
    

   })