import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  deleteCartItem,
  removeProductFromCart,
} from '../reduxtoolkit/CartSlice';
import {decreaseQuantity, increaseQuantity} from '../reduxtoolkit/ProductSlice';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cart);
  console.log('items quantity', cartItems.length);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    {
      cartItems.map(coffee => {
        total = total + coffee.quantity * coffee.price;
      });
    }
    return total;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title={'Cart'}
        cartIcon={'home'}
        backIcon={'arrow-back'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Home')}
      />
      {cartItems.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: 'grey', fontSize: 28, fontWeight: 800}}>
            Your cart is empty
          </Text>
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            // marginBottom: 60,
            height: '200%',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 120,
              justifyContent: 'center',
            }}>
            {cartItems.length == 0 ? (
              <View></View>
            ) : (
              <View
                style={{
                  height: 100,
                  borderColor: '#00704a',
                  borderWidth: 3,
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: '95%',
                  borderRadius: 10,
                  backgroundColor: 'lightgrey',
                }}>
                <Text style={{color: 'grey', fontSize: 16, fontWeight: 700,top:4}}>
                  Grand Total: {getTotal() + '.00 '}{' '}
                </Text>

                {/* <View>
                  <Text style={{color: '#000'}}>{getTotal()}</Text>
                </View> */}

                <View
                  style={{
                    width: '90%',
                    justifyContent: 'flex-end',
                    flex: 1,
                    bottom: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#00704a',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 26, textAlign: 'center'}}>
                      PAY NOW
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <FlatList
            data={cartItems}
            keyExtractor={cartItems.id}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'black',
                    height: 120,
                    width: '95%',
                    margin: 10,
                    justifyContent: 'center',
                    // left: 5,
                    borderRadius: 10,
                    // bottom:10
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 10,
                      // marginBottom: 20,
                    }}>
                    {/* //image on left Side */}
                    <Image
                      source={item.image}
                      style={{height: 100, width: 100, borderRadius: 20}}
                    />
                    {/* Coffee title and price in the middle */}
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text
                        style={{
                          color: '#00704a',
                          fontSize: 20,
                          fontWeight: 800,
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{color: '#00704a'}}>
                        {item.quantity +
                          ' X ₹' +
                          item.price +
                          ' = ₹' +
                          item.quantity * item.price}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {/* plus minus buttons */}
                      {item.quantity == 0 ? null : (
                        <TouchableOpacity
                          onPress={() => {
                            if (item.quantity > 1) {
                              dispatch(removeProductFromCart(item));
                              dispatch(decreaseQuantity(item.id));
                            } else {
                              dispatch(deleteCartItem(item.id));
                              dispatch(decreaseQuantity(item.id));
                            }
                          }}
                          style={{
                            width: 30,
                            borderColor: '#00704a',
                            borderWidth: 1,
                            backgroundColor: '#00a36c',
                            height: 30,
                            justifyContent: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fff',
                              fontSize: 18,
                            }}>
                            -
                          </Text>
                        </TouchableOpacity>
                      )}
                      {item.quantity == 0 ? null : (
                        <Text style={{padding: 10, color: 'black'}}>
                          {item.quantity}
                        </Text>
                      )}
                      {item.quantity == 0 ? null : (
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(addProductToCart(item));
                            dispatch(increaseQuantity(item.id));
                          }}
                          style={{
                            width: 30,
                            borderColor: '#00704a',
                            borderWidth: 1,
                            backgroundColor: '#00a36c',
                            height: 30,
                            justifyContent: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fff',
                              fontSize: 18,
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert(
                          'Confirm',
                          'Do You want to delete this item?',
                          [
                            {
                              text: 'No',
                            },
                            {
                              text: 'Yes',
                              onPress: () => {
                                dispatch(deleteCartItem(item.id));
                                dispatch(decreaseQuantity(item.id));
                              },
                            },
                          ],
                        )
                      }
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <IonIcons name="trash" color="red" size={26} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
