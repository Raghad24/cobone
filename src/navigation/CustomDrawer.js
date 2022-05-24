import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/UI/IconButton';

const CustomDrawer = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 40,
            marginTop: 15,
          }}>
          <Text>NAVIGATION</Text>
          <IconButton
            onPress={() => navigation.goBack()}
            icon={'close'}
            color={Colors.gray500}
          />
        </View>
        <TouchableOpacity style={styles.customItem}>
          <Text>New In </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text>Best Sellers </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>Getaways </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>Food </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>Activities </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>Beauty </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>Services </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customItem}>
          <Text onPress={() => {}}>All Deals </Text>
          <Icon name={'chevron-forward-outline'} size={20} />
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customItem: {
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 10,
  },
  customItemSub: {
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.gray500,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginVertical: 10,
  },
});
export default CustomDrawer;
