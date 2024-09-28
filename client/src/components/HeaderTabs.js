import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcons from 'react-native-vector-icons/Ionicons';

const HeaderTabs = () => {
  const [state, setState] = useContext(AuthContext);

  const signOut = async () => {
    setState({token: '', user: null});
    await AsyncStorage.removeItem('auth-rn');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={signOut}>
        <IonIcons name="log-out-outline" size={25} color={'darkmagenta'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderTabs;
