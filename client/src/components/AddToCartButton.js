import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const AddToCartButton = ({onPress}) => {
  const myProduct=useSelector(state=>state.product)
  const cartProduct=useSelector(state=>state.cart);
  console.log('Cart',cartProduct.length)
  return (
    <View>
      
    </View>
  )
}

export default AddToCartButton