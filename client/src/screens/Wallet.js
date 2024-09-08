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

const Wallet = ({navigation}) => {
  var balance=400
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      {/* header */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* left side text */}
        <View>
          <Text style={{fontSize: 20, fontWeight: 700}}>Wallet</Text>
          {/* <Text style={{fontSize:15,fontWeight:700}}>Low Balance</Text> */}
        </View>
        {/* right side cart */}
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Cart')} >
            <IonIcons name="cart" size={30} color={'#00704A'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* card image */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          top: 30,
          // bottom: 100,
        }}>
        <Text style={{fontSize:25,marginBottom:20}}>Wallet Balance:{balance}</Text>
        <View
          style={{
            borderWidth: 2,
            height: '30%',
            width: '95%',
            // borderRadius: 60,
            // backgroundColor:'#fff'
          }}>
          {/* <Text>Balance</Text> */}
          <ImageBackground
            source={require('../assets/images/card.png')}
            style={{flex: 1, borderRadius: 50}}
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
            <IonIcons name="wallet" size={30} color={'#00704A'} />
            <Text style={{textAlign: 'center',fontWeight:800}}>Top Up</Text>
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
            <IonIcons name="card-outline" size={30} color={'#00704A'}/>
            <Text style={{textAlign: 'center',fontWeight:800}}>Manage Cards</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
            <IonIcons name="document" size={30} color={'#00704A'} />
            <Text style={{textAlign: 'center',fontWeight:800}} >Help and FAQs</Text>
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
