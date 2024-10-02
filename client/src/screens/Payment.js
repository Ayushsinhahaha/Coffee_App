import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import PaymentCard from '../components/PaymentCard';
import { useRoute } from '@react-navigation/native';

// require('dotenv').config()
// console.log('object',payNow)

const Payment = ({payNow}) => {
  const route=useRoute();
  const orderTotal = route.params.data;
  
  console.log('order Total:',orderTotal);

  return (
    <StripeProvider 
    publishableKey={PUBLISHABLE_KEY} 
   >
      <PaymentCard payNow={payNow} />
    </StripeProvider>
  );
};

export default Payment;

const styles = StyleSheet.create({});
