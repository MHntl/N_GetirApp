import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ColorsApp} from '../../constants';
import categoriesGetir from '../../../assets/categoriesGetir';
import {Category} from '../../models';

const CategoryBox = ({item, active}: {item: Category; active: Category}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 9,
        },
        item == active && {
          borderBottomColor: ColorsApp.yellow,
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={{fontSize: 14, color: ColorsApp.white, fontWeight: '600'}}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({category}: {category: Category}) => {
  const {height, width} = Dimensions.get('window');
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: ColorsApp.purple3,
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {categories.map(item => (
        <CategoryBox item={item} key={item.id + '3'} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({});
