import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import productsGetir from '../../../assets/productsGetir';
import CartItem from '../../components/CartItem';
import {ColorsApp} from '../../constants';
import ProductItem from '../../components/ProductItem';
const {width, height} = Dimensions.get('window');

const CartScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={productsGetir}
        renderItem={item => <CartItem product={item.item} />}
      />
      <Text
        style={{
          textAlign: 'center',
          color: ColorsApp.purple,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Önerilenler
      </Text>
      <ScrollView
        style={{height: height * 0.45}}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces>
        {productsGetir.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>
      <View
        style={{
          shadowColor: 'lightgray',
          shadowOpacity: 1,
          height: height * 0.12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          backgroundColor: '#fefefe',
        }}>
        <TouchableOpacity
          style={{
            shadowColor: 'lightgray',
            shadowOpacity: 1,
            height: height * 0.06,
            flex: 3,
            backgroundColor: ColorsApp.purple,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            shadowColor: 'lightgray',
            shadowOpacity: 1,
            flex: 1,
            marginTop: -10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: ColorsApp.white,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <Text style={{fontWeight: 'bold', color: ColorsApp.purple}}>
            {'\u20BA'}24.00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
