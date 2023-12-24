import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootNavigator from './RootNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ColorsApp} from '../constants';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RootNavigator" component={RootNavigator} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                style={{paddingLeft: 5}}
                name="close"
                size={24}
                color={ColorsApp.white}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Icon
              style={{paddingRight: 10}}
              name="heart"
              size={24}
              color={'#32177a'}
            />
          ),
          headerBackTitleVisible: false,
          headerTintColor: ColorsApp.white,
          headerStyle: {backgroundColor: ColorsApp.purple2},
          headerTitle: () => (
            <Text
              style={{
                fontWeight: 'bold',
                color: ColorsApp.white,
                fontSize: 15,
              }}>
              Ürün Detay
            </Text>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: ColorsApp.purple},
          headerTintColor: ColorsApp.white,
          headerBackTitleVisible: false,
          headerTitle: () => (
            <Text style={{color: ColorsApp.white, fontWeight: 'bold'}}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="close" size={26} color={ColorsApp.white} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="trash" size={26} color={ColorsApp.white} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
