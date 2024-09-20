import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={{flexDirection:'row',top:20,marginLeft:5,borderWidth:1,marginBottom:15,borderRadius:20}}>
    <View style={{alignItems:'center',justifyContent:'center',}}>
        <IonIcons name='search' color={'#00704a'}  size={24} style={{marginLeft:20}} />
    </View>
        <TextInput placeholder='Find Your Coffee'  placeholderTextColor={'grey'} style={{fontSize:15,marginLeft:20,color:'grey',fontWeight:500,width:'90%'}}/>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
