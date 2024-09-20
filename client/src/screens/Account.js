import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const Account = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      {/* Header */}
      <Header
        image={require('../assets/logo/logo1.png')}
        title={'Account'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Notification')}
        backIcon={'arrow-back'}
        cartIcon={'notifications'}
      />
      {/* profile Picture */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 100,
          bottom: 50,
        }}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            // backgroundColor: '#00704A',
            borderRadius: 126,
          }}>
          {/* <View style={{width:180,height:180,backgroundColor:'lightgrey',borderRadius:110,margin:10,alignItems:'center',justifyContent:'center'}}> */}
          <IonIcons
            name="person-circle"
            size={220}
            color="grey"
            style={{bottom: 25, right: 10}}
          />
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            backgroundColor: '#00704A',
            bottom: 75,
            left: 65,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IonIcons name="pencil" size={30} color={'white'} />
        </TouchableOpacity>
        <Text
          style={{fontSize: 30, color: 'grey', marginBottom: 30, bottom: 35}}>
          Hi <Text style={{color: '#00704A', fontWeight: 800}}>Ayush</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            borderWidth: 3,
            borderColor: '#00704a',
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 12,
            borderWidth: 1,
            borderRadius: 20,
            bottom: 45,
          }}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'grey'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Orders')}
          style={{
            borderWidth: 3,
            borderColor: '#00704a',
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 12,
            borderWidth: 1,
            borderRadius: 20,
            bottom: 45,
          }}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'grey'}}>
            Order History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor: '#00704a',
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 12,
            borderWidth: 1,
            borderRadius: 20,
            bottom: 45,
          }}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'grey'}}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor: '#00704a',
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 12,
            borderWidth: 1,
            borderRadius: 20,
            bottom: 45,
          }}>
          <Text style={{fontSize: 20, fontWeight: 800, color: 'grey'}}>
            Terms of Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor: '#00704a',
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 12,
            borderWidth: 1,
            borderRadius: 20,
            bottom: 45,
            backgroundColor: '#2f4858',
          }}>
          <Text style={{fontSize: 20, fontWeight: 800, color: '#fff'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
