import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ColorsApp, filtering} from '../../constants';
const {height, width} = Dimensions.get('window');

const TypeBox = ({
  active,
  item,
  setCat,
}: {
  active: string;
  item: string;
  setCat: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
        },
        item == active
          ? {backgroundColor: ColorsApp.purple}
          : {borderColor: '#F0EFF7', borderWidth: 1},
      ]}>
      <Text
        style={[
          {fontSize: 12, color: ColorsApp.gray, fontWeight: '600'},
          item == active && {color: 'white'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [category, setCategory] = useState('Birlikte İyi Gider');
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: ColorsApp.white,
        height: height * 0.072,
        flexDirection: 'row',
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {filtering.map(item => (
        <TypeBox setCat={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default TypeFiltering;

const styles = StyleSheet.create({});
