import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from './MainContainer.js';
import {Provider} from 'react-redux';
import AppNavigator from './AppNavigator.js';
import {MyStore} from './src/reduxtoolkit/MyStore.js';
import Toast from 'react-native-toast-message';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  console.log('object',process.env.SP_KEY)
  return (
    <Provider store={MyStore}>
      {/* <Toast> */}
      <AppNavigator />

      <Toast />
      {/* </Toast> */}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
