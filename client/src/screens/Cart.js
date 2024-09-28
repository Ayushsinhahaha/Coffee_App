import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  deleteCartItem,
  removeProductFromCart,
} from '../reduxtoolkit/CartSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  removeQuantity,
} from '../reduxtoolkit/ProductSlice';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

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

  var payNow = getTotal();
  console.log('pay', payNow);

  const noOfItems = () => {
    let total = 0;
    {
      cartItems.map(coffee => {
        total = total + coffee.quantity;
      });
    }
    return total;
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

  console.log('Total Number of Items:', noOfItems());
  const itemNumber = noOfItems();
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
          {/* <ImageBackground source={require('../assets/logo/cart.png')} style={{height:200,}}> */}
          <Text style={{color: 'grey', fontSize: 28, fontWeight: 800}}>
            Your cart is empty
          </Text>
          {/* </ImageBackground> */}
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            marginBottom: 60,
            height: '200%',
          }}>
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
                    marginBottom: 10,
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
                          ' X ₹ ' +
                          item.price +
                          ' = ₹ ' +
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
                                dispatch(removeQuantity(item.id));
                                {
                                  itemNumber===0?(
                                    setTimeout(() => {
                                      Toast.show({
                                        type: 'success',
                                        text1: 'Item Deleted',
                                        text2: 'You deleted one item',
                                      });
                                    }, 5)
                                  ):(setTimeout(() => {
                                    Toast.show({
                                      type: 'success',
                                      text1: 'Cart Empty',
                                      text2: 'Items from Cart Deleted',
                                    });
                                  }, 5))
                                }
                                
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
                  height: 150,
                  borderColor: '#00704a',
                  borderWidth: 3,
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: '95%',
                  borderRadius: 10,
                  backgroundColor: 'lightgrey',
                }}>
                {itemNumber > 2 ? (
                  <View>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 16,
                        fontWeight: 700,
                        top: 6,
                      }}>
                      No of Items: {itemNumber}
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 16,
                        fontWeight: 700,
                        top: 6,
                      }}>
                      You got Free Delivery !!!!
                    </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: 700,
                      top: 5,
                    }}>
                    Grand Total: ₹ {getTotal() + '.00 '}{' '}
                  </Text>
                      </View>
                ) : (
                  <View>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 16,
                        fontWeight: 700,
                        top: 6,
                      }}>
                      No of Items: {itemNumber}
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 16,
                        fontWeight: 700,
                        top: 6,
                      }}>
                      Delivery Charges: ₹ {itemNumber * 15}
                    </Text>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 16,
                        fontWeight: 700,
                        marginTop: 8,
                      }}>
                      Grand Total: ₹ {getTotal() + itemNumber * 15 + '.00 '}{' '}
                    </Text>
                  </View>
                )}

                <View
                  style={{
                    width: '90%',
                    justifyContent: 'flex-end',
                    flex: 1,
                    bottom: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Payment')}
                    style={{
                      backgroundColor: '#00704a',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {itemNumber > 2 ? (
                      <Text style={{fontSize: 26, textAlign: 'center'}}>
                        PAY NOW ₹ {payNow}
                      </Text>
                    ) : (
                      <Text style={{fontSize: 26, textAlign: 'center'}}>
                        PAY NOW ₹ {getTotal() + itemNumber * 15 + '.00 '}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
