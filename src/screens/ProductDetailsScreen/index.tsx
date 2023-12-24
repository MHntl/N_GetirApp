import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Product} from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import {ColorsApp} from '../../constants';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CartButton from '../../components/CartButton';

//@ts-ignore
const ProductDetailsScreen = ({route}) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(route.params.product);
  }, []);

  if (!product) return <ActivityIndicator color={ColorsApp.purple} />;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageCarousel images={product?.images} />
        <DetailBox product={product} />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: ColorsApp.gray,
            fontWeight: '600',
            fontSize: 14,
          }}>
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CartButton />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
