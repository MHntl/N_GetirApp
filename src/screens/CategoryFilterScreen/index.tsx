import {StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryFiltering from '../../components/CategoryFiltering';
import {useRoute} from '@react-navigation/native';
import TypeFiltering from '../../components/TypeFiltering';
import ProductContainer from '../../components/ProductContainer';

const CategoryFilterScreen = () => {
  const route = useRoute();
  //@ts-ignore
  const {category} = route.params;
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;

const styles = StyleSheet.create({});
