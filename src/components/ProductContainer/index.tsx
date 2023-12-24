import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductItem from '../ProductItem';
import productsGetir from '../../../assets/productsGetir';
import {ColorsApp} from '../../constants';

const ProductContainer = () => {
  return (
    // Main
    <View>
      {/* Two */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: ColorsApp.white,
        }}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id + '1'} item={item} />
        ))}
      </View>
      <Text style={{color: ColorsApp.gray, fontWeight: 'bold', padding: 14}}>
        Çubuk
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: ColorsApp.white,
          flex: 1,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        {productsGetir.slice(2).map(item => (
          <ProductItem key={item.id + '2'} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
