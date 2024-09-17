import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import coffees from '../config/coffees';
import CoffeeCard from '../components/CoffeeCard';

const Home = ({navigation}) => {
  const [name, setName] = useState('Ayush Sinha');
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  
  var currTime=''
  var curHr = new Date().getHours();
  if (curHr < 12) 
    currTime='Good Morning'
  else if(curHr<17)
    currTime='Good AfterNoon'
  else
    currTime='Good Evening'

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView style={{margin: 5, flex: 1, marginBottom: 60}}>
        <View style={{top: 10, marginLeft: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 800, color: 'grey'}}>
              {currTime}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <IonIcons
                name="notifications"
                color={'#00704a'}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 26, fontWeight: 800, color: '#00704a'}}>
            {name}
          </Text>
        </View>
        <SearchField />
        <Categories onChange={id => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 5,
            bottom: 10,
          }}>
          {coffees
            .filter(coffee => {
              if (activeCategoryId === null) return true;
              return coffee.categoryId === activeCategoryId;
            })
            .map(coffee => (
              <View key={coffee.id}>
                <CoffeeCard
                  onPress={() =>
                    navigation.navigate('CoffeeDetails', {data: coffee})
                  }
                  image={coffee.image}
                  rating={coffee.rating}
                  coffeeName={coffee.name}
                  price={coffee.price}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
