import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MethodsPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePaymentSelection = method => {
    setSelectedMethod(method);
    // Handle navigation or payment logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          styles.option,
          selectedMethod === 'debit-card' && styles.selected,
        ]}
        onPress={() => handlePaymentSelection('debit-card')}>
        <Text>Debit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedMethod === 'credit-card' && styles.selected,
        ]}
        onPress={() => handlePaymentSelection('credit-card')}>
        <Text>Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedMethod === 'upi' && styles.selected]}
        onPress={() => handlePaymentSelection('upi')}>
        <Text>UPI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedMethod === 'pay-on-delivery' && styles.selected,
        ]}
        onPress={() => handlePaymentSelection('pay-on-delivery')}>
        <Text>Pay on Delivery</Text>
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          marginBottom: 30,
        }}>
        <TouchableOpacity
          style={{
            width: 360,
            borderWidth: 1,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#00704a',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 24,
            }}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, marginBottom: 20, color: '#00704a', fontWeight: '800'},
  option: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {backgroundColor: '#e0ffe0', borderColor: '#00b300'},
});

export default MethodsPayment;
