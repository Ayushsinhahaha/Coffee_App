import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Account = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Header */}
      <View style={{flexDirection:'row'}}>
        {/* back button */}

        {/* logo */}
        <Image source={require('../assets/logo/logo1.png')} style={{width:20,height:20}}/>

        {/* notification */}
      </View>
      {/* profile Picture */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
          top: 50,
        }}>
        

        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#00704A',
            borderRadius: 126,
          }}>
          {/* <View style={{width:180,height:180,backgroundColor:'lightgrey',borderRadius:110,margin:10,alignItems:'center',justifyContent:'center'}}> */}
          <IonIcons
            name="person-circle"
            size={220}
            color="grey"
            style={{bottom: 12, right: 10}}
          />
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'dodgerblue',
            bottom: 50,
            left: 65,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IonIcons name="pencil" size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={{fontSize: 30,fontWeight:800,color:'grey',marginBottom:30}}>Hi <Text style={{color:'#00704A'}}>Ayush</Text></Text>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20}}>
          <Text style={{fontSize:20,fontWeight:800}} >Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20}}>
          <Text style={{fontSize:20,fontWeight:800}}>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20}}>
          <Text style={{fontSize:20,fontWeight:800}}>Your Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20}}>
          <Text style={{fontSize:20,fontWeight:800}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
