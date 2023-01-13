
import { View,Image,Text,StyleSheet, ImageBackground } from "react-native"
import React,{Component,useState} from "react";

const image = { uri: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg" };

const HomeScreen = ({ navigation }) => {
    return (


        <ImageBackground source={image}
    resizeMode="cover"
    style={styles.img}
>
        <View>


            <Text style={styles.heading}>Welcome to food delivery app</Text>

        </View>
    

        </ImageBackground>
    )
} 

export default HomeScreen;

const styles = StyleSheet.create({
  
    img: {
        flex: 1,
        position: "relative",
    
    },
    heading:{
        textAlign:'center',
        textTransform: "uppercase",
        color: 'orange',
        fontSize:30,
        
    }

   })
