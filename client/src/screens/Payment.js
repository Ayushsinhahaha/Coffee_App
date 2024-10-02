import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import PaymentCard from '../components/PaymentCard';

// require('dotenv').config()

const Payment = () => {
  console.log(PUBLISHABLE_KEY)
  return (
    <StripeProvider 
    publishableKey={PUBLISHABLE_KEY} 
   >
      <PaymentCard />
    </StripeProvider>
  );
};

export default Payment;

const styles = StyleSheet.create({});
