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

const Home = ({navigation}) => {
  const [name, setName] = useState('Ayush Sinha');
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  // console.log('coffeePrice:::::', coffees.price);

  return (
    <SafeAreaView style={{flex: 1, margin: 8}}>
      <ScrollView
        style={{padding: 5, marginBottom: 60}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
        <View style={{top: 20, marginLeft: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 800, color: 'grey'}}>
              Good Morning!
            </Text>
            <TouchableOpacity>
              <IonIcons
                name="notifications-outline"
                color={'#00704a'}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 26, fontWeight: 800, color: '#00704a'}}>
            {name}
          </Text>
        </View>
        <SearchField />
        <Categories onChange={id => setActiveCategoryId(id)} />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {coffees
            .filter(coffee => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map(coffee => (
              <View
                key={coffee.id}
                style={{width: width / 2 - 17, padding: 5, left: 5}}>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: 'lightgrey',
                    borderRadius: 20,
                    bottom: 10,
                  }}>
                  {/* onPress={()=>navigation.navigate('CoffeeDetails')} */}
                  <TouchableOpacity style={{width: '100%', height: 150}}>
                    <Image
                      source={coffee.image}
                      style={{height: '100%', width: '100%', borderRadius: 10}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      flexDirection: 'row',
                      backgroundColor: 'lightgrey',
                      height: 30,
                      width: 50,
                      margin: 8,
                      borderBottomLeftRadius: 10,
                    }}>
                    <IonIcons
                      name="star"
                      size={20}
                      color={'#00704a'}
                      style={{left: 3}}
                    />
                    <Text style={{fontSize: 16, fontWeight: 600, left: 6}}>
                      {coffee.rating}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: 22,
                      left: 6,
                      // marginBottom: 10,
                      // bottom: 30,
                    }}>
                    {coffee.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 8,
                        color: 'grey',
                        fontWeight: 600,
                      }}>
                      ₹ {coffee.price}
                    </Text>
                    <TouchableOpacity
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: '#00a36c',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                      }}>
                      <IonIcons name="add" size={24} style={{}} />
                    </TouchableOpacity>
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
