import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ColorsApp} from '../../constants';
import Icon from 'react-native-vector-icons/Entypo';
import {Product} from '../../models';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
type productItemType = {
  item: Product;
};
const ProductItem = ({item}: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate('ProductDetails', {product: item})}
      style={{
        width: width * 0.285,
        marginTop: 12,
        height: height * 0.25,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 12,
        marginBottom: 6,
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: width * 0.285,
          height: width * 0.285,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: ColorsApp.gray,
        }}
      />
      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 12, textDecorationLine: 'line-through'}}>
          <Text>{'\u20BA'}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{color: ColorsApp.purple, fontWeight: 'bold', marginLeft: 4}}>
          <Text>{'\u20BA'}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{fontSize: 12, fontWeight: '600', marginTop: 5}}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: ColorsApp.gray2,
          fontWeight: 'bold',
          marginTop: 4,
        }}>
        {item.miktar}
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          shadowRadius: 4,
          shadowOpacity: 0.05,
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: ColorsApp.gray,
          backgroundColor: ColorsApp.white,
          position: 'absolute',
          right: -6,
          top: -6,
          borderRadius: 6,
        }}>
        <Icon name="plus" size={22} color={ColorsApp.purple} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
