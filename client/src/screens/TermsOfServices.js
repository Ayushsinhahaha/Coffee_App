import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

const TermsOfServices = ({navigation}) => {
  return (
    <>
        <Header
        image={require('../assets/logo/logo1.png')}
        title={'T&C'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Home')}
        backIcon={'arrow-back'}
        cartIcon={'home'}
      />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coffee App Terms of Service</Text>
      </View>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        Welcome to the Coffee App! By using our app, you agree to comply with
        our terms and conditions. This app offers information on coffee
        products, allows for purchases, and provides user account management.
      </Text>

      <Text style={styles.sectionTitle}>2. User Account</Text>
      <Text style={styles.paragraph}>
        Users are responsible for maintaining the security of their account and
        agree not to share login credentials.
      </Text>

      <Text style={styles.sectionTitle}>3. Purchase Policy</Text>
      <Text style={styles.paragraph}>
        All coffee purchases are final and non-refundable, unless an issue
        arises due to the quality of the product or technical difficulties.
      </Text>

      <Text style={styles.sectionTitle}>4. Liability</Text>
      <Text style={styles.paragraph}>
        The Coffee App is not responsible for any loss or damage related to the
        use of the app.
      </Text>

      {/* Add more sections as needed */}

      <Button
        title="Accept Terms"
        onPress={() => navigation.navigate('Home')} // Navigate to home or main coffee menu
        color="#4CAF50"
        
        />
    </ScrollView>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    marginBottom:30
  },
});

export default TermsOfServices;
