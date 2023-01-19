import { View,Text,Image, TouchableOpacity } from "react-native"
import { data } from "./data";

const InitialScreen =(navigation,route) => {
    return (
        <View>
            {
                
                data.map(orders => {
                    return (

                        <TouchableOpacity onPress={()=>navigation.navigate('SingleScreen')}>
                <View>
                    <Text>{ orders.category }</Text>
                    <Text><Image source={orders.image} /></Text>
                    <Text> { orders.name }</Text>
                    <Text>  { orders.price }</Text>
                            </View>
                            </TouchableOpacity>
                    )
                })


         }   

    </View>

)
}
export default InitialScreen