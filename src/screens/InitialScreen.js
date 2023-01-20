import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {data} from './data';

const InitialScreen = ({navigation, route}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Single', {item})}>
            <Text style={{color: 'black'}}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
    // <View>
    //     <Text>gffffffhf</Text>
    //     {data.map(orders => {
    //             return (

    //         <View>
    //                 <TouchableOpacity onPress={()=>navigation.navigate('Single')}>
    //             <Text>{ orders.category }</Text>
    //             <Text><Image source={orders.image} /></Text>
    //             <Text> { orders.name }</Text>
    //             <Text>  { orders.price }</Text>

    //                 </TouchableOpacity>
    //                 </View>
    //             )
    //         })

    //  }

    // </View>
  );
};
export default InitialScreen;
