import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {data} from './data';
import {NavigationContainer} from '@react-navigation/native';
const SingleScreen = ({navigation, route}) => {
    const {item}=route.params
  return (
    <ScrollView>
          <View>
        <Text>{item.category}</Text>
        <Image source={item.image} style={styles.singleImage} />
          <Text>{item.name}</Text>
            <Text>{item.price}</Text>
      </View>
    </ScrollView>
  );
};
export default SingleScreen;


// const styles = styles.create{
  
// }
