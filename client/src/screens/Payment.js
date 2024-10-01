import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env'
import PaymentCard from '../components/PaymentCard';
// require('dotenv').config()

const Payment = () => {
  return (
    <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentCard/>
    </StripeProvider>
  );
};

export default Payment;

const styles = StyleSheet.create({});
