import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorsApp} from '../constants';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomTabBarButton = () => {
  return (
    <View
      style={{
        width: 56,
        height: 56,
        backgroundColor: ColorsApp.purple2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: -8,
        borderWidth: 2,
        borderColor: ColorsApp.white,
      }}>
      <Icon name="list" size={32} color={ColorsApp.yellow} />
    </View>
  );
};

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: ColorsApp.purple2,
        tabBarInactiveTintColor: ColorsApp.gray2,
        headerShown: false,
        tabBarStyle: {height: 80},
      }}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <CustomTabBarButton />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
