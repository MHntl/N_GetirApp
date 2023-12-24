import React, {useState} from 'react';
import {View} from 'react-native';
import TextComponent from './TextComponent';
import {ColorsApp, details} from '../../constants';

function DetailProperty() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: ColorsApp.white,
      }}>
      {details.map((item, index) => (
        <TextComponent
          key={index}
          details={details}
          detail={item}
          index={index}
        />
      ))}
    </View>
  );
}

export default DetailProperty;
