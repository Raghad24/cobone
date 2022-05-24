import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React from 'react';
import dealsData from '../../../assets/deals';
import foodData from '../../../assets/food';
import newAddedData from '../../../assets/newAdded';
import bestSellers from '../../../assets/bestSellers';
import subBestSellers from '../../../assets/subBestSellers';
import bannerData from '../../../assets/bannerData';
import ProductsItems from './ProductsItems';
import TitleNames from '../UI/TitleNames';
import Banner from '../UI/Banner';

const ProductsContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Banner data={bannerData} />
        <TitleNames>Deals of the day</TitleNames>
        <ProductsItems datas={dealsData} />
        <TitleNames view>New In</TitleNames>
        <ProductsItems rows datas={newAddedData} />
        <TitleNames view>Best sellers</TitleNames>
        <ProductsItems rows datas={bestSellers} />
        <TitleNames view>Food</TitleNames>
        <ProductsItems datas={foodData} />
        <TitleNames view>Need More Deals - Best sellers</TitleNames>
        <ProductsItems datas={subBestSellers} />
      </ScrollView>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});
