import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import coffees from '../config/coffees';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  deleteCartItem,
  removeProductFromCart,
} from '../reduxtoolkit/CartSlice';
import {decreaseQuantity, increaseQuantity} from '../reduxtoolkit/ProductSlice';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [name, setName] = useState('Ayush Sinha');
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  //redux toolkit
  const dispatch = useDispatch();
  const myProduct = useSelector(state => state.product);
  const cartProduct = useSelector(state => state.cart);
  console.log('Products in HomePage----', myProduct);
  console.log('Items in cart in Homepage----', cartProduct);
  console.log('No of Items in cart(HOMEPAGE)----', cartProduct.length);

  const totalItems = () => {
    let itemsInCart = 0;
    cartProduct.map(coffee => {
      itemsInCart = itemsInCart + coffee.quantity;
    });
    return itemsInCart;
  };
  console.log('ItemINCART:::', totalItems());

  //wishing related
  const getTime = () => {
    var currTime = '';
    var curHr = new Date().getHours();
    if (curHr < 12) currTime = 'Good Morning';
    else if (curHr < 17) currTime = 'Good Afternoon';
    else currTime = 'Good Evening';
    return currTime;
  };

  // searchbar
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(
    myProduct.map(item => {
      return (item = item);
    }),
  );
  const [searchedList, setSearchedList] = useState([]);
  console.log('product data', oldData);

  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    console.log('newdata', newData);
    setSearchedList(newData);
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView style={{margin: 5, flex: 1, marginBottom: 60}}>
        <View style={{top: 10, marginLeft: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 800, color: 'grey'}}>
              {getTime()}
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', left: 10}}
              onPress={() => navigation.navigate('Cart')}>
              <IonIcons name="cart" color={'#00704a'} size={45} />
              <View
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: '#00a36c',
                  borderRadius: 20,
                  right: 20,
                  bottom: 3,
                  borderWidth: 1,
                  borderColor: '#00704a',
                }}>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  {totalItems()}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#00704a',
              bottom: 10,
            }}>
            {name}
          </Text>
        </View>
        {/* Search Field */}

        {/* <SearchField /> */}
        
        <View></View>
        {/* <Categories onChange={id => setActiveCategoryId(id)} /> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 5,
            top: 5,
            // bottom: 10,
          }}>
          {myProduct.map(coffee => (
            <View key={coffee.id}>
              <View
                style={{
                  width: width / 2 - 10,
                  padding: 5,
                  bottom: 20,
                }}>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: 'lightgrey',
                    borderRadius: 20,
                    bottom: 10,
                    flex: 1,
                    top: 20,
                    borderWidth: 2,
                    borderColor: '#00704a',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CoffeeDetails', {data: coffee})
                    }
                    style={{width: '100%', height: 150}}>
                    <Image
                      source={coffee.image}
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      flexDirection: 'row',
                      backgroundColor: 'lightgrey',
                      height: 30,
                      width: 50,
                      margin: 8,
                      borderBottomLeftRadius: 10,
                      alignItems: 'center',
                    }}>
                    <IonIcons
                      name="star"
                      size={20}
                      color={'#00704a'}
                      style={{left: 3}}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        left: 6,
                        color: '#000',
                        fontWeight: 700,
                      }}>
                      {coffee.rating}
                    </Text>
                  </View>
                  {/* //name and price */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 5,
                      // padding:3
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: 17,
                        // left: 6,
                        // marginBottom: 10,
                        // bottom: 30,
                      }}>
                      {coffee.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 3,
                        color: 'grey',
                        fontWeight: 600,
                      }}>
                      ₹{coffee.price}
                    </Text>
                  </View>
                  {/* //first */}
                  {coffee.quantity == 0 ? (
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(addProductToCart(coffee));
                          dispatch(increaseQuantity(coffee.id));
                        }}
                        style={{
                          height: 30,
                          width: 95,
                          backgroundColor: '#00a36c',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 8,
                          borderColor: '#00704a',
                          borderWidth: 1,
                        }}>
                        <Text style={{fontWeight: 500}}>Add To Cart</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                  {/* Other */}
                  <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                      {coffee.quantity == 0 ? null : (
                        <TouchableOpacity
                          onPress={() => {
                            // dispatch(removeProductFromCart(coffee))
                            // dispatch(decreaseQuantity(coffee.id))
                            if (coffee.quantity > 1) {
                              dispatch(removeProductFromCart(coffee));
                              dispatch(decreaseQuantity(coffee.id));
                            } else {
                              dispatch(deleteCartItem(coffee.id));
                              dispatch(decreaseQuantity(coffee.id));
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
                      {coffee.quantity == 0 ? null : (
                        <Text
                          style={{
                            padding: 5,
                            color: '#000',
                            fontSize: 15,
                            fontWeight: 500,
                          }}>
                          {coffee.quantity}
                        </Text>
                      )}
                      {coffee.quantity == 0 ? null : (
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(addProductToCart(coffee));
                            dispatch(increaseQuantity(coffee.id));
                          }}
                          style={{
                            width: 30,
                            borderColor: '#00704a',
                            borderWidth: 1,
                            height: 30,
                            justifyContent: 'center',
                            borderRadius: 10,
                            backgroundColor: '#00a36c',
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
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
