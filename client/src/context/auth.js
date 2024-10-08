import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [state,setState]=useState({
        user: null,
        token: "",
    });

useEffect(()=>{
    const loadFromAsycStorage = async () => {
        let data=await AsyncStorage.getItem("auth-rn");
        const parsed=JSON.parse(data);
        setState({...state,user: parsed.user,token: parsed.token});
    }
    loadFromAsycStorage();
},[]);

return (
    <AuthContext.Provider value={[state,setState]}>
        {children}
    </AuthContext.Provider>
)
}

export {AuthContext,AuthProvider};