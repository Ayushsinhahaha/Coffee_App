import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import HomePage from './Homepage';
import Getstarted from './Getstarted';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Wallet from './Wallet';
import Cart from './Cart';
import Account from './Account';
import Notification from './Notification';
import EditProfile from './EditProfile';
import Orders from './ContactUs';
import CoffeeDetailScreen from './CoffeeDetailScreen';
import Payment from './Payment';
import {AuthContext} from '../context/auth';
import HeaderTabs from '../components/HeaderTabs';
import TabNavigator from './TabNavigator';
import PaymentCard from '../components/PaymentCard';
import ErrorPage from './ErrorPage';
import SuccessPage from './SuccessPage';
import TermsOfServices from './TermsOfServices';
import MethodsPayment from './MethodsPayment';

const Stack = createNativeStackNavigator();

const NavigationScreen = ({navigation}) => {
  const [state, setState] = useContext(AuthContext);
  const authenticated = state && state.user !== null && state.token !== '';
  return (
    <Stack.Navigator initialRouteName="Splash">
      {authenticated ? (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          {/* bottom tab pages */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CoffeeDetails"
            component={CoffeeDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ErrorPage"
            component={ErrorPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccessPage"
            component={SuccessPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TermsOfServices"
            component={TermsOfServices}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MethodsPayment"
            component={MethodsPayment}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GetStarted"
            component={Getstarted}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavigationScreen;
