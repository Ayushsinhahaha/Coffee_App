import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Categories from '../components/Categories';
import coffees from '../config/coffees';
import SearchField from '../components/SearchField';

const {width} = Dimensions.get('window');

const Home = () => {
  const [name, setName] = useState('Ayush Sinha');
  const [searchText, setSearchText] = useState('');
  console.log('coffeePrice:::::', coffees.price);

  return (
    <SafeAreaView style={{flex: 1, margin: 8}}>
      <ScrollView style={{padding: 5}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
        <View style={{top: 20, marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 800,color:'grey'}}>Good Morning!</Text>
          <Text style={{fontSize: 26, fontWeight: 800, color: '#00704a'}}>
            {name}
          </Text>
        </View>
        <SearchField />
        <Categories />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {coffees.map(coffee => (
            <View
              key={coffee.id}
              style={{width: width / 2 - 17, padding: 5, left: 5}}>
              <View
                style={{padding: 8, backgroundColor: 'grey', borderRadius: 20}}>
                <TouchableOpacity style={{width: '100%', height: 250}}>
                  <Image
                    source={coffee.image}
                    style={{height: '80%', width: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 22,
                    left: 6,
                    marginBottom: 10,
                    bottom: 30,
                    // justifyContent:'center'
                    // textAlign:'center'
                  }}>
                  {coffee.name}
                </Text>
                <View>
                  <Text>{coffee.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
