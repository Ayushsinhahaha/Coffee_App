import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {PaymentSheet, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';

const PaymentCard = () => {
  const stripe = useStripe();
  const [amount, setAmount] = useState(60000);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://10.0.2.2:5000';

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        amount:amount
      })
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
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

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  const subscribe = async () => {
    try {
      console.log('object');
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong!!!');
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TextInput
        value={amount}
        onChangeText={txt => setAmount(txt)}
        placeholder="Amount"
        style={{width: 300, fontSize: 20, padding: 10, borderWidth: 1}}
      />
      {/* <Button title="Pay Now" onPress={async ()=>{
        await initializePaymentSheet().then(async ()=>{
          await openPaymentSheet()
        })
      }} /> */}
      <TouchableOpacity onPress={async ()=>{
        await initializePaymentSheet().then(async ()=>{
          await openPaymentSheet()
        })
      }}>
        <Text style={{fontSize: 20,}}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;
