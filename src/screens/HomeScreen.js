import React, {useMemo, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {data} from './data';
import Item from '../components/Item';

const HomeScreen = () => {
  const [fullData, setFullData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('None');

  const filteredData = useMemo(() => {
    if (selectedCategory === 'None') return fullData;
    return fullData.filter(item => selectedCategory === item.category);
  }, [fullData, selectedCategory]);

  const onClick = select => {
    navigation.navigate('categpories',{filteredData})
    setSelectedCategory(select);
    //   console.log(filteredData)
  };

  return (
    <View style={styles.categories}>
      <Text style={styles.heading}>Welcome to fast food delivery app</Text>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => onClick('snack')}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2878740/pexels-photo-2878740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={{width: 80, height: 80}}
          />
          <Text style={styles.paragraph}>Snacks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => onClick('beverages')}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?cs=srgb&dl=pexels-isabella-mendes-338713.jpg&fm=jpg',
            }}
            style={{width: 80, height: 80}}
          />
          <Text>Beverages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => onClick('burger')}>
          <Image
            source={{
            uri: 'https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg',
                
            }}
            style={{width: 80, height: 80}}
          />
          <Text>Burger</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => onClick('appetizer')}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1893561/pexels-photo-1893561.jpeg',
            }}
            style={{width: 80, height: 80}}
          />
          <Text>Appetizer</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList data={filteredData} renderItem={Item} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'orange',
    fontSize: 30,
  },
  category: {
    borderWith: 2,
      with: 80,
      color: 'orange',
  },

  categories: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space around',
    },
  
    paragraph:{
        color: 'orange',
  }
  
});
