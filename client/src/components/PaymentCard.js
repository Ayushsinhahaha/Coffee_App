import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {PaymentSheet, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from './Header';
import Toast from 'react-native-toast-message';

const PaymentCard = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const orderTotal = route.params.data;
  const noOfItems = route.params.itemNumber;
  const stripe = useStripe();
  const [amount, setAmount] = useState(Math.floor(orderTotal * 100));
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  console.log('Total Amount', amount);
  console.log('Total Item', noOfItems);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Redirecting',
      text2: 'You are being redirected',
    });
  };

  const API_URL = 'http://10.0.2.2:5000';

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };

    // console.log('payment intent+++++++++++++++++++', paymentIntent);
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Caffeination',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Ayush Sinha',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async (req, res) => {
    const {error} = await presentPaymentSheet();
    // const {paymentIntent, ephemeralKey, customer} =
    //   await fetchPaymentSheetParams();
    // const paymentIntent=req.body;
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      setTimeout(() => {
        navigation.navigate('ErrorPage')
      }, 1000);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');

      setTimeout(() => {
        navigation.navigate('SuccessPage')

      }, 3000);
      // console.log('payment Intent', paymentIntent);
      // console.log('responsesss',response)
      // navigation.navigate('Home');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Check Out'}
        cartIcon={'home'}
        backIcon={'arrow-back'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Home')}
      />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 25, fontWeight: 800, bottom: 20}}>
          Please Pay ₹{amount / 100}.00
        </Text>

        <TouchableOpacity
          onPress={async () => {
            await initializePaymentSheet().then(async () => {
              await openPaymentSheet();
            });
          }}
          style={{
            height: 500,
            width: 310,
            backgroundColor: '#00704a',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
          }}>
          <ImageBackground
            source={require('../assets/images/pay-per-click.png')}
            style={{height: 290, width: 290, borderRadius: 20, top: 30}}>
            <View style={{bottom: 105, flex: 1}}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 40,
                  fontWeight: 900,
                }}>
                Tap Here To Pay
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentCard;
