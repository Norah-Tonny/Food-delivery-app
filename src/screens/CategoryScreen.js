import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { data } from "./data";


const CategoryScreen = ({ navigation, route }) => {
    const { filteredData } = route.params
    console.log(filteredData)

    return (
        <View>
            {

                filteredData.map(item => {
                    return (

                            <TouchableOpacity onPress={()=>navigation.navigate('Single', { item })}>
                        <View>

                                <Text>{item.category}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>


                        </View>
                            </TouchableOpacity>




                    )



                })




            }


        </View>

    )







}

export default CategoryScreen