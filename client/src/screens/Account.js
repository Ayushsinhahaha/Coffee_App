import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Account = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* Header */}
      <View>

      </View>
      {/* profile Picture */}
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{width:200,height:200,backgroundColor:'#00704A',borderRadius:126}}>
        <View style={{width:180,height:180,backgroundColor:'lightgrey',borderRadius:110,margin:10}}>

        </View>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({})