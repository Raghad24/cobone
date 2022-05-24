import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

//import header
import Header from '../components/common/Header';
import ProductsContainer from '../components/products/ProductsContainer';
import Colors from '../constants/Colors';
import Search from '../components/home/Search';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.root}>
        <Header
          color={'white'}
          headerIcon={'menu-outline'}
          backgroundColor={Colors.primary}
          onPressMenu={() => navigation.toggleDrawer()}
          onPressCart={() => navigation.navigate('Cart')}
        />
        <Search />
        <ProductsContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  root: {},
});
