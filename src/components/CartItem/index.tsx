import {Image, Dimensions, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {Product} from '../../models';
import {ColorsApp} from '../../constants';
const {width, height} = Dimensions.get('window');
type CartItemProps = {product: Product};

const CartItem = ({product}: CartItemProps) => {
  return (
    <View style={{width: '100%', backgroundColor: ColorsApp.white}}>
      <View
        style={{
          borderBottomWidth: 0.4,
          width: width * 0.92,
          marginHorizontal: 0.4,
          borderBlockColor: 'lightgray',
          height: height * 0.13,
          paddingHorizontal: width * 0.04,
          backgroundColor: ColorsApp.white,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: height * 0.09, width: height * 0.09}}
            source={{uri: product.image}}
          />
          <View style={{marginLeft: 8}}>
            <Text
              style={{fontSize: 13, fontWeight: '600', maxWidth: width * 0.45}}>
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                fontWeight: '600',
                color: ColorsApp.gray2,
              }}>
              {product.miktar}
            </Text>
            <Text
              style={{
                color: ColorsApp.purple,
                fontWeight: 'bold',
                marginTop: 6,
                fontSize: 15,
              }}>
              {'\u20BA'}
              {product.fiyat}
            </Text>
          </View>
        </View>
        {/* ==================== */}
        <View
          style={{
            //   shadowOpacity: 0.4,
            //   shadowColor: ColorsApp.gray2,
            flexDirection: 'row',
            width: width * 0.21,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            height: height * 0.035,
            borderRadius: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>-</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: ColorsApp.purple,
              height: height * 0.035,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: ColorsApp.white,
                fontSize: 12,
              }}>
              2
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
export default CartItem;
