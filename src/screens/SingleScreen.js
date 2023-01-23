import {View, Text, Image, ScrollView, StyleSheet,TouchableOpacity} from 'react-native';
import {data} from './data';
import {NavigationContainer} from '@react-navigation/native';
const SingleScreen = ({navigation, route}) => {
    const {item}=route.params
  return (
    <ScrollView stryle={styles.Single}>
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

const styles = StyleSheet.create = ({
  Single: {
    display: 'flex',
    // justify-content:

},

singleImage: {
  width: 80,
  height: 80

  },

})
