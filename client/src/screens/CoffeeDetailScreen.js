import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import coffees from '../config/coffees';
console.log('coffeeimage::::', coffees[6].image);

const {width, height} = Dimensions.get('window');

const CoffeeDetailScreen = ({coffee}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView>
        <ImageBackground
          source={coffee.image}
          style={{
            height: height / 2 + 50,
            width: width,
            borderRadius: 40,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              margin: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                margin: 10,
                backgroundColor: '#00a36c',
                height: 40,
                width: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IonIcons name="arrow-back" size={28} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
                height: 40,
                width: 40,
              }}>
              <IonIcons name="cart" size={28} color={'#00a36c'} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:8,top:50}}>
            <Text style={{color:'#00a36c',fontSize:20,fontWeight:600}}>{coffees[5].name}</Text>
            <View style={{flexDirection:'row',right:10,backgroundColor:'lightgrey',padding:6,borderRadius:12}}>
                <IonIcons name='star' size={20} color={'#00c36a'} style={{}}/>
                <Text style={{left:2}}>{coffees[5].rating}</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CoffeeDetailScreen;

const styles = StyleSheet.create({});
