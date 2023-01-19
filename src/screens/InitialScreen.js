import { View,Text,Image, TouchableOpacity } from "react-native"
import { data } from "./data";

const InitialScreen =() => {
    return (
        <View>
            {
                
                data.map(orders => {
                    return (

                        <TouchableOpacity onPress={()=>Navigation.navigate('SingleScreen')}>
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