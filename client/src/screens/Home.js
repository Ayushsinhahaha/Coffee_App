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
import Categories from '../components/categories';
import coffees from '../config/coffees';
import SearchField from '../components/SearchField';

const {width} = Dimensions.get('window');

const Home = () => {
  const [name, setName] = useState('Ayush Sinha');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
    <ScrollView style={{padding:5}} showsVerticalScrollIndicator={false}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}></View>
      <View style={{top: 20, marginLeft: 10}}>
        <Text style={{fontSize: 18, fontWeight: 800}}>Good Morning!</Text>
        <Text style={{fontSize: 26, fontWeight: 800, color: '#00704a'}}>
          {name}
        </Text>
      </View>
      <SearchField />
      <Categories />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {coffees.map(coffee => (
          <View
            key={coffee.id}
            style={{
              width: width / 2 - 20,
              marginBottom: 10,
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <TouchableOpacity style={{height: 150, width: '100%',backgroundColor:'#00704a'}}>
              <Image
                source={coffee.image}
                style={{width: '100%', height: '100%',}}
              />
              <View style={{width:30,height:30,bottom:30}}>
                <IonIcons name='star' size={20}/>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
