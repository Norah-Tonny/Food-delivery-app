import { View,Image,Text,TouchableOpacity,ImageBackground,StyleSheet } from "react-native"
import React,{useState} from "react";
const image = { uri: "https://images.pexels.com/photos/9609865/pexels-photo-9609865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
const WelcomingScreen = ({navigation}) => {
    return (
            <ImageBackground source={image}
                resizeMode="cover"
                style={styles.img}
            >
        <View>
            <Text style={styles.heading}>To Best food at your door step</Text>

            
            <View style={styles.fixToText}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{navigation.navigate("Start")}}>
                <Text  style={styles.btn}>Skip</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
            style={styles.button}
            onPress={()=>{navigation.navigate("Start")}}>
            <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
            

            </View>

            </View>
            </ImageBackground>
    )
}
export default WelcomingScreen

const styles = StyleSheet.create({
    img: {
        flex: 1,
        position:"relative"
    },

    heading: {
        color: 'orange',
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: 30,
        fontWeight: 'bold',
        fontSize:30,
    },

    fixToText: {
        width:400,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:"absolute",
        top: 600,
    }, 

    button: {
        padding: 3,
        width:90,
        height:50,
        borderWidth: 2,
        margin: 3,
        borderColor:'orange',
        backgroundColor: 'transparent',
        borderRadius: 10,
        
      
        
    },
    
    btn:{
        fontSize: 20,
        textAlign:"center",
        color:'orange',
    }
})