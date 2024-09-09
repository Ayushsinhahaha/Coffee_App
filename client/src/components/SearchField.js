import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={{flexDirection:'row',top:25,marginLeft:5,borderWidth:1,marginBottom:15,marginTop:5,borderRadius:20}}>
    <View style={{alignItems:'center',justifyContent:'center',}}>
        <IonIcons name='search'  size={20} style={{marginLeft:20}} />
    </View>
        <TextInput placeholder='Find Your Coffee' style={{fontSize:18,marginLeft:20}}/>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
