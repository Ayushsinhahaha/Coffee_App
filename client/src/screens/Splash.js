import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Homepage')
        }, 2000);
    },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#00704A'}}>
      <Image source={require('../assets/logo/logo1.png')} width={200} height={200}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})