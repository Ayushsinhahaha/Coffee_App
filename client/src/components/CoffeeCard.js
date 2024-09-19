import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AddToCartButton from './AddToCartButton';
import {useRoute} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const {width} = Dimensions.get('window');

const CoffeeCard = ({onPress, image, rating, coffeeName, price, data}) => {
  const route = useRoute();
  const myProduct=useSelector(state=>state.prodcut);


  return (
    <View style={{width: width / 2 - 17, padding: 5, left: 5, bottom: 20}}>
      <View
        style={{
          padding: 8,
          backgroundColor: 'lightgrey',
          borderRadius: 20,
          bottom: 10,
          flex: 1,
          top: 20,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{width: '100%', height: 150}}>
          <Image
            source={image}
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
          <IonIcons name="star" size={20} color={'#00704a'} style={{left: 3}} />
          <Text style={{fontSize: 16, fontWeight: 600, left: 6}}>{rating}</Text>
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
          {coffeeName}
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
              marginLeft: 3,
              color: 'grey',
              fontWeight: 600,
            }}>
            ₹ {price}
          </Text>
          <AddToCartButton/>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;