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
          <TouchableOpacity>
            <IonIcons name="cart" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* card image */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          top: 50,
          // bottom: 100,
        }}>
        <Text>Wallet Balance</Text>
        <View
          style={{
            borderWidth: 2,
            height: '30%',
            width: '95%',
            // borderRadius: 30,
          }}>
          {/* <Text>Balance</Text> */}
          <ImageBackground
            source={require('../assets/images/card.png')}
            style={{flex: 1, borderRadius: 30}}
            resizeMode="cover">
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-start',
                margin: 10,
              }}>
              {/* <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 40,
                  opacity: 1,
                }}>
                Balance
              </Text> */}
            </View>
          </ImageBackground>
        </View>
        <View style={{margin: 20, padding: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              // backgroundColor: 'lightgrey',
              marginRight: 30,
              borderRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons name="wallet" size={30} />
            <Text>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              // backgroundColor: 'lightgrey',
              marginRight: 30,
              borderRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons name="card-outline" size={30} />
            <Text style={{textAlign: 'c'}}>Manage Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              // backgroundColor: 'lightgrey',
              marginRight: 30,
              borderRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons name="wallet" size={30} />
            <Text>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              // backgroundColor: 'lightgrey',
              // marginRight: 30,
              borderRadius: 15,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IonIcons name="wallet" size={30} />
            <Text>Top Up</Text>
          </TouchableOpacity>
        </View>

        {/* recent transactions */}
        <Text style={{fontSize: 20, fontWeight: 800}}>Recent Transactions</Text>
        <TouchableOpacity
          style={{
            height: 80,
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 80,
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
