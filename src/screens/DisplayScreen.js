import { View,Image,Text,TouchableOpacity,StyleSheet, ImageBackground } from "react-native"
import React,{useState} from "react";

const image = { uri: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg" };
const DisplayScreen = ({navigation}) => {
    return (
<ImageBackground source={image}
    resizeMode="cover"
    style={styles.img}
>
       
            <Text style={styles.heading}>Best Salad in the world!</Text>

            
           <View style={styles.fixToText}>
            
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.btn}>Skip</Text>
                
        </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("WelcomigScreen") }}>
                    <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
            
                </View>
           
            </ImageBackground>
    )
}

export default DisplayScreen

const styles = StyleSheet.create({
    img: {
        flex: 1,
        position:"relative",
    
    },
    
    button: {
        padding: 3,
        width:90,
        height:50,
        borderWidth: 2,
        margin: 3,
        borderColor:'orange',
        backgroundColor: 'transparent',
        borderRadius:10,
      
        
    },
    heading: {
        color: 'orange',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: 12,
        fontSize:30,
        fontWeight: 'bold',
    },
    fixToText: {
        width:400,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:"absolute",
        bottom: 0,
    },
    btn:{
        fontSize: 20,
        textAlign:"center",
        color:'orange',
    }
})