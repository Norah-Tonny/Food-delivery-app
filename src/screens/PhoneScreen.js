import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";


const PhoneScreen = () => {

    const phoneNumber = phone();

    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        
        })
        .catch((error) => {
          
        });


    return (
        <View>
            <Text>Sign In with your phone number</Text>
            <TextInput style={styles.input}
                placeholder="Phone Number"
                onChangeText={(text) => setPhone(text)} />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.heading} >Register</Text>
            </TouchableOpacity>
  
        </View>
    )
}


   
export default PhoneScreen;

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'orange',
        marginTop: 10,
    },

    button: {
        height: 40,
        width:100,
        margin: 3,
        borderWidth:1,
        padding: 3,
        marginTop: 50,
        alignItems: 'center',
    marginLeft: 130,
        borderColor: 'orange',
    
    },

    heading:{
        color:'orange',
    }
    

})
