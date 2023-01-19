import { Text, Touchable, TouchableOpacity,ImageBackground, View,TextInput, SafeAreaView,StyleSheet } from "react-native"
import React,{Component} from "react"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const image = { uri: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1600" };

const LoginScreen = ({navigation}) => {

 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    const signin = () => {
       
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
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
            



        <Text style={styles.heading}>Login to fast food delivery</Text>
        <View style={styles.SafeAreaView}>
          
                
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

                
<TextInput

style={styles.input}
placeholder="Password"
onChangeText={(text) =>setConfirmPassword(text)}  

      />

            
          <TouchableOpacity
          style={styles.button}
          onPress={signin}>
          <Text>Login</Text>

          </TouchableOpacity>
          
        </View >
        </ImageBackground>

          
)    }


export default LoginScreen;
      


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

      heading: {
        color: 'orange',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin:3,
        fontWeight: 'bold',
          fontSize: 30,
          marginTop: 6,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      padding: 10,
        borderColor: 'orange',
        marginTop: 10,
    
  },
  SafeAreaView: {
    justifyContent: "center",
    padding: 40,
    marginTop:150,
    }
    

   })
