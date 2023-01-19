import React from "react";
import { Text, View } from "react-native"

const Item = (props) => {
    return (
        <View>

            <Text>{ props.item.name}</Text>
            <Text>{ props.item.price}</Text>


        </View>

    )
}
export default Item