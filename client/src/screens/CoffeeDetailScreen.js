import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from '../reduxtoolkit/CartSlice';
// console.log('coffeeimage::::', coffees.id);

const {width, height} = Dimensions.get('window');

const CoffeeDetailScreen = ({coffee, navigation}) => {
  const dispatch = useDispatch();
  const addedItems = useSelector(state => state);
  console.log('Added Items:::::::::::::::::', addedItems);
  const addItem = item => {
    dispatch(addCartItem(item));
  };
  const route = useRoute();
  const item = route.params.data;
  // console.log('item:::::::::', item);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header
          backIcon={'arrow-back'}
          title={route.params.data.name}
          cartIcon={'cart'}
          onPressLeft={() => navigation.goBack()}
          onPressRight={() => navigation.navigate('Cart')}
        />
        <ImageBackground
          source={route.params.data.image}
          style={{
            height: height / 2 + 50,
            width: width,
            borderRadius: 40,
            justifyContent: 'space-between',
            flex: 1,
          }}></ImageBackground>
        {/* Title,Description */}
        <View style={{flex: 1, top: 135, margin: 10}}>
          {/* Title and rating */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 8,
            }}>
            <Text style={{color: '#00a36c', fontSize: 24, fontWeight: 800}}>
              {route.params.data.name}
            </Text>
            {/* Coffee Rating */}
            <View
              style={{
                flexDirection: 'row',
                right: 10,
                backgroundColor: 'lightgrey',
                padding: 6,
                borderRadius: 12,
                alignItems: 'center',
                width: 60,
              }}>
              <IonIcons name="star" size={20} color={'#00c36a'} style={{}} />
              <Text style={{left: 5}}>{route.params.data.rating}</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#00704a',
                left: 9,
                fontSize: 18,
                fontWeight: 700,
              }}>
              Description
            </Text>
            <Text
              style={{
                color: 'grey',
                fontWeight: 600,
                margin: 5,
                textAlign: 'center',
              }}>
              {route.params.data.description}
            </Text>
            {/* bottom buttons :total price and add to cart */}
          </View>
        </View>
        {/* Main view for footer */}
        <View
          style={{
            left: 0,
            right: 0,
            height: 100,
            backgroundColor: '#00704a',
            bottom: 0,
            position: 'fixed',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 8,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                left: 30,
              }}>
              <Text style={{fontSize: 16}}>Price:</Text>
              <Text style={{fontSize: 26, fontWeight: 900}}>
                ₹ {route.params.data.price}.00
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => addItem(item)}
              style={{
                flexDirection: 'row',
                padding: 10,
                margin: 10,
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: '#00704a',
                width: '42%',
                height: 60,
                borderRadius: 20,
                borderColor: 'grey',
                borderWidth: 2,
              }}>
              <IonIcons name="bag-outline" size={20} />
              <Text
                style={{textAlign: 'center', fontSize: 18, fontWeight: 900}}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoffeeDetailScreen;

const styles = StyleSheet.create({});
