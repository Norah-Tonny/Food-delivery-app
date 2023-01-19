import { View,Text,Image, ScrollView,TouchableOpacity } from "react-native";
import { data } from "./data";
import { NavigationContainer } from "@react-navigation/native";
const SingleScreen = (navigation,route) => {
    return (

        <ScrollView>
        <View>
            {
                data.map(item => {

                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                        <View>
                            <Image source={item.image} />
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>

                        </View>
                        </TouchableOpacity>

                  )


              })  

    }
    </View>
    </ScrollView>

)   
}
export default SingleScreen