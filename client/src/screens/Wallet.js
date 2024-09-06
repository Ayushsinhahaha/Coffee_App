import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Wallet = () => {
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      {/* header */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* left side text */}
        <View>
          <Text style={{fontSize: 20, fontWeight: 700}}>Wallet</Text>
          <Text>Low Balance</Text>
        </View>
        {/* right side cart */}
        <View>
          <IonIcons name="cart" size={30} />
        </View>
      </View>

      {/* card image */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // bottom: 100,
        }}>
        <View
          style={{
            borderWidth: 2,
            height: '30%',
            width: '95%',
            borderRadius: 30,
          }}>
          {/* <Text>Balance</Text> */}
          <ImageBackground
            source={require('../assets/images/wallet.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-start',
                margin: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 40,
                  opacity: 1,
                }}>
                Balance
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{margin: 20, padding: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 65,
              width: 65,
              backgroundColor: 'lightgrey',
              marginRight: 30,
            }}></TouchableOpacity>
            <Text></Text>
          <TouchableOpacity
            style={{
              height: 65,
              width: 65,
              backgroundColor: 'lightgrey',
              marginRight: 30,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 65,
              width: 65,
              backgroundColor: 'lightgrey',
              marginRight: 30,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 65,
              width: 65,
              backgroundColor: 'lightgrey',
            }}></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
