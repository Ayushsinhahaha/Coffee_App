import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import IonIcons from 'react-native-vector-icons/Ionicons';

const Header = ({backIcon,cartIcon,title,onPressLeft,onPressRight,image}) => {
  return (
    <View style={{}}>
      <View
        style={{height: 70, backgroundColor: '#00704a', flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',}}>
        <TouchableOpacity onPress={onPressLeft} style={{margin:10}}>
            <IonIcons name={backIcon} size={30} />
        </TouchableOpacity>
        {/* <Image source={image} style={{width:140,height:140,}} /> */}
        <Text style={{fontSize:20,fontWeight:800}}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}  style={{margin:10}}>
            <IonIcons name={cartIcon} size={30}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
