import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Homescreen from '../screens/Homescreen';
import Details from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const Mydrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Lists" component={MyStack} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Mydrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
