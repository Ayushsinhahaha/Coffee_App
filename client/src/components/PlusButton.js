import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';

const PlusButton = () => {
  return (
    <View>
      <TouchableOpacity
            style={{ 
              height: 30,
              width: 30,
              backgroundColor: '#00a36c',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <IonIcons name="add" size={24} />
          </TouchableOpacity>
    </View>
  )
}

export default PlusButton