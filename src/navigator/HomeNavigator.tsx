import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {ColorsApp} from '../constants';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import {useNavigation} from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
const HomeNavigator = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: ColorsApp.purple2},
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{height: 30, width: 70}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: ColorsApp.white,
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: ColorsApp.purple2},
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CartScreen')}
              style={{
                width: width * 0.22,
                marginRight: width * 0.03,
                borderRadius: 9,
                height: 33,
                backgroundColor: ColorsApp.white,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 23, marginLeft: 6, height: 23}}
                source={require('../../assets/cart.png')}
              />
              <View style={{height: 33, width: 4, backgroundColor: 'white'}} />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: '#f3effe',
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: ColorsApp.purple,
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  <Text>{'\u20BA'}</Text>24.00
                </Text>
              </View>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: ColorsApp.white,
              }}>
              Ürünler
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
