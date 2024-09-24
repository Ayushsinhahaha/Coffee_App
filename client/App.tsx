import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from './MainContainer.js';
import {Provider} from 'react-redux';
import AppNavigator from './AppNavigator.js';
import {MyStore} from './src/reduxtoolkit/MyStore.js';
import Toast from 'react-native-toast-message';

const App = () => {
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
