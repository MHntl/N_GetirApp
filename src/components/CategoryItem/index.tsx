import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
import {ColorsApp} from '../../constants';
import {Category} from '../../models';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
type categoriesItemProps = {
  item: Category;
};

const CategoryItem = ({item}: categoriesItemProps) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate('CategoryDetails', {category: item})}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 10}}
        source={{uri: item.src}}
      />
      <Text style={{fontSize: 12, color: ColorsApp.gray, fontWeight: '500'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
