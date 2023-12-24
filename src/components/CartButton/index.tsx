import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {ColorsApp} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const CartButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: height * 0.1,
        backgroundColor: ColorsApp.white,
        paddingTop: 15,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
      }}>
      <View
        style={{
          height: height * 0.06,
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 8,
          backgroundColor: ColorsApp.purple,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: ColorsApp.white,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
