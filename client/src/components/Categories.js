import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import categories from '../config/categories';

const Categories = ({onChange}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = id => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item.id}
      contentContainerStyle={{marginVertical: 20}}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{margin: 5, marginRight: 20, alignItems: 'center'}}>
          <Text
            style={[
              {fontSize: 20, fontWeight: 800, color: 'grey'},
              activeCategoryId === item.id && {color: '#00704a'},
            ]}>
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: '#00704a',
                borderRadius: 5,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
