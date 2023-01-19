import { View,Text,Image, ScrollView,TouchableOpacity } from "react-native";
import { data } from "./data";
const SingleScreen = () => {
    return (

        <ScrollView>
        <View>
            {
                data.map(item => {

                    return (
                        <TouchableOpacity onPress={()=>Navigation.navigate('HomeScreen')}>
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