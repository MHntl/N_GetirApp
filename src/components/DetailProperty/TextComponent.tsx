import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ColorsApp} from '../../constants';
type TextComponentType = {
  detail: string;
  index: number;
  details: string[];
};
const TextComponent = ({detail, index, details}: TextComponentType) => {
  return (
    <View
      style={{
        paddingVertical: 12,
        borderBottomWidth: index == details.length - 1 ? 0 : 0.3,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: index == 0 ? ColorsApp.black : ColorsApp.gray2,
          fontWeight: index === 0 ? '400' : '500',
          fontSize: index === 0 ? 10 : 13,
        }}>
        {detail}
      </Text>
      {index !== 0 && (
        <Icon name="chevron-down" size={24} color={ColorsApp.gray} />
      )}
    </View>
  );
};
export default TextComponent;

const styles = StyleSheet.create({});
