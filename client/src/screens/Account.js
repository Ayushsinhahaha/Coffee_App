import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Account = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center',}}>
      {/* Header */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',bottom:20,margin:10}}>
        {/* back button */}
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{bottom:10}}>
            <IonIcons name='arrow-back' size={35} />
          </TouchableOpacity>
        {/* logo */}
        <Image source={require('../assets/logo/logo1.png')} style={{width:150,height:150,bottom:10}}/>
        {/* notification */}
          <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{bottom:10}}>
            <IonIcons name='notifications-outline' size={35} />
          </TouchableOpacity>
      </View>
      {/* profile Picture */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          // marginTop: 20,
          bottom: 50,
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
        <Text style={{fontSize: 30,fontWeight:800,color:'grey',marginBottom:30,bottom:25}}>Hi <Text style={{color:'#00704A'}}>Ayush</Text></Text>
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20,bottom:30}}>
          <Text style={{fontSize:20,fontWeight:800}} >Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Orders')} style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20,bottom:30}}>
          <Text style={{fontSize:20,fontWeight:800}}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20,bottom:30}}>
          <Text style={{fontSize:20,fontWeight:800}}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20,bottom:30}}>
          <Text style={{fontSize:20,fontWeight:800}}>Terms of Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:'90%',justifyContent:'center',alignItems:'center',margin:12,borderWidth:1,borderRadius:20,bottom:30,backgroundColor:'#00704A'}}>
          <Text style={{fontSize:20,fontWeight:800}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
