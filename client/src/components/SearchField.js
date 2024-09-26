import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import {useSelector} from 'react-redux';

const SearchField = ({navigation}) => {
  const [search, setSearch] = useState('');
  const myProduct = useSelector(state => state.product);
  const [oldData, setOldData] = useState(
    myProduct.map(item => {
      return item;
    }),
  );
  const [searchedList, setSearchedList] = useState([]);
  // console.log('product data', oldData);

  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    console.log('newdata', newData);
    setSearchedList(newData);
  };
  return (
    <SafeAreaView>
      <Header
        title={'Find Your Coffee'}
        backIcon={'arrow-back'}
        cartIcon={'cart'}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('Cart')}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            top: 20,
            marginLeft: 5,
            borderWidth: 1,
            marginBottom: 15,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <IonIcons
              name="search"
              color={'#00704a'}
              size={28}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              value={search}
              onChangeText={txt => {
                setSearch(txt);
                filterData(txt);
              }}
              placeholder="Find Your Coffee"
              placeholderTextColor={'grey'}
              style={{
                fontSize: 18,
                marginLeft: 20,
                color: 'grey',
                fontWeight: 500,
                width: '62%',
              }}
            />

            {search !== '' && (
              <TouchableOpacity
                onPress={() => setSearch('')}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <IonIcons
                  name="close"
                  color={'#00704a'}
                  size={28}
                  style={{marginLeft: 45}}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={searchedList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CoffeeDetails', {data: item})
                  }
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: Dimensions.get('window').width,
                    height: 70,
                    marginTop: 20,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flex: 1,
                    marginRight: 5,
                    borderRadius: 20,
                  }}>
                  {/* For Image */}
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        height: 50,
                        width: 50,
                        left: 10,
                        borderRadius: 20,
                      }}
                    />
                  </View>
                  {/* For name and price */}
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontSize: 20,
                        fontWeight: 800,
                        marginLeft: 20,
                      }}>
                      {item.name.length > 25
                        ? item.name.substring(0, 25)
                        : item.name}
                    </Text>
                    <Text
                      style={{color: 'grey', fontSize: 18, fontWeight: 600}}>
                      ₹{item.price}
                    </Text>
                  </View>
                  {/* For Description */}
                  <View style={{width: '50%', right: 10}}>
                    <Text
                      style={{
                        marginLeft: 25,
                        color: 'grey',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 600,
                      }}>
                      {item.description.length > 55
                        ? item.description.substring(0, 55)
                        : item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
