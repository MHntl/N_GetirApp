import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../../models';
import {ColorsApp} from '../../constants';

const DetailBox = ({product}: {product: Product}) => {
  const {fiyat, name, miktar} = product;
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: ColorsApp.white,
      }}>
      <Text
        style={{
          color: ColorsApp.purple,
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 12,
        }}>
        <Text>{'\u20BA'}</Text>
        {fiyat}
      </Text>
      <Text style={{fontWeight: '700', fontSize: 16, marginTop: 12}}>
        {name}
      </Text>
      <Text
        style={{
          color: ColorsApp.gray,
          fontWeight: '600',
          marginTop: 8,
          paddingBottom: 18,
        }}>
        {miktar}
      </Text>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({});
