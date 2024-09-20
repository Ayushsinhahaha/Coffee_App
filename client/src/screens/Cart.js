import {
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
import {increaseQuantity} from '../reduxtoolkit/ProductSlice';

const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cart);
  console.log('items quantity', cartItems);
  const dispatch = useDispatch();

  const getTotal=()=>{
    let total=0;
    {cartItems.map(coffee=>{
      total=total+coffee.quantity*coffee.price;
    })}
    return total
  }

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
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            marginBottom: 40,
            height:'200%'
          }}>
          <FlatList
            data={cartItems}
            keyExtractor = {cartItems.id}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'black',
                    height: 130,
                    width: '90%',
                    margin: 10,
                    justifyContent: 'center',
                    left: 10,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 10,
                      marginBottom: 20,
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
                      <Text style={{color: '#00704a'}}>{ item.quantity + ' X ₹'+ item.price+ ' = ₹' + item.quantity*item.price}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {item.quantity == 0 ? null : (
                        <TouchableOpacity
                          onPress={() => {
                            if (item.quantity > 1) {
                              dispatch(removeProductFromCart(item));
                            } else {
                              dispatch(deleteCartItem(item.id));
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
                  </View>
                </View>
              );
            }}
          />
          <View style={{height:130,borderColor:'#00704a',borderWidth:3,alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <View>
            <Text style={{color:'#000'}}>Delivery Charges:</Text>
              </View>
              <View>
            <Text style={{color:'#000'}}>{getTotal()}</Text>
              </View>
            </View>
          </View>
          {/* <View
            style={{ bottom: 15, width: '100%', flex: 1,marginTop:20}}>
            <View
              style={{height: 100,  backgroundColor: 'lightgrey',borderWidth:2,borderColor:'#00704a',borderTopLeftRadius:30,borderTopRightRadius:30}}>
              <Text style={{color: '#000'}}>
                {'Total Items:' + cartItems.length}
              </Text>
            </View>
          </View> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
