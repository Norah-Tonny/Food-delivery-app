import { Component } from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CredentialScreen = () => {


    const [Number, setNumber] = useState("");

    const userCredential = () => {
        createUserWithEmailAndPassword(auth, email, password)
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
        


<View>
<Text>Sign In with your phone number</Text>

<TextInput

style={styles.input}
placeholder="Number"
onChangeText={(text) =>setNumber(text)}  

      />

<TouchableOpacity
          style={styles.button}
          onPress={userCredential}>
          <Text>Register</Text>

          </TouchableOpacity>


</View >


    )
}
export default CredentialScreen;

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'orange',
        marginTop: 10,
    }

})
