import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './styles';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {ColorsApp, address} from '../../constants';
const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              marginLeft: 6,
              marginRight: 1,
            }}>
            {address.ev.type}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 11.5,
              color: ColorsApp.gray,
              paddingLeft: 5,
            }}>
            {address.ev.address}
          </Text>
          <Icon name="chevron-right" size={22} color={ColorsApp.purple} />
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{
              fontSize: 10,
              color: ColorsApp.purple,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            TVS
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: ColorsApp.purple,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            13
            <Text
              style={{
                fontSize: 16,
                color: ColorsApp.purple,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              dk
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;
