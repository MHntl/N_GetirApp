import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './styles';
import styles from './styles';
import HeaderMain from '../../components/HeaderMain';
import BannerCarousel from '../../components/BannerCarousel';
import {ColorsApp} from '../../constants';
import MainCategories from '../../components/MainCategories';

const HomeScreen = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{backgroundColor: ColorsApp.mainBG}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;
