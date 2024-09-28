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
import Header from '../components/Header';

const Wallet = ({navigation}) => {
  var balance = 400;
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* header */}
      <Header title={'Wallet'}  backIcon={'arrow-back'} onPressLeft={()=>navigation.goBack()} cartIcon={'cart'} onPressRight={()=>navigation.navigate('Cart')}  />

      {/* card image */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          top: 30,
          // bottom: 100,
        }}>
        <Text style={{fontSize: 25, marginBottom: 20,color:'#00a36c',fontWeight:500}}>
          Wallet Balance:{balance}
        </Text>
        <View
          style={{
            borderWidth: 1,
            height: '30%',
            width: '95%',
            // borderRadius: 60,
            borderColor:'#fff'
          }}>
          {/* <Text>Balance</Text> */}
          <ImageBackground
            source={require('../assets/images/card.png')}
            style={{flex: 1, borderRadius: 70,}}
            resizeMode="cover">
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-start',
                margin: 10,
              }}></View>
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
            <Text style={{textAlign: 'center', fontWeight: 800,color:'grey'}}>Add </Text>
            <Text style={{textAlign: 'center', fontWeight: 800,color:'grey'}}>Money</Text>
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
            <IonIcons name="card-outline" size={30} color={'#00704A'} />
            <Text style={{textAlign: 'center', fontWeight: 800,color:'grey'}}>
              Manage Cards
            </Text>
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
            <Text style={{textAlign: 'center', fontWeight: 800,color:'grey'}}>
              Help and FAQs
            </Text>
          </TouchableOpacity>
        </View>

        {/* recent transactions */}
        <Text style={{fontSize: 20, fontWeight: 800,color:'#00a36c'}}>Recent Transactions</Text>
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
