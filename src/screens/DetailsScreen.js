import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart, increment} from '../redux/features/cart/cartSlice';
import dealsData from '../../assets/deals';
import foodData from '../../assets/food';
import newAddedData from '../../assets/newAdded';
import bestSellers from '../../assets/bestSellers';
import subBestSellers from '../../assets/subBestSellers';
import Colors from '../constants/Colors';
import Slider from '../components/UI/Slider';
import TagsText from '../components/UI/TagsText';
import React from 'react';
import CustomButton from '../components/UI/CustomButton';
import IconButton from '../components/UI/IconButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/common/Header';

const Details = () => {
  const {goBack, navigate} = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const id = route.params.id;
  const allProducts = [
    ...dealsData,
    ...foodData,
    ...newAddedData,
    ...bestSellers,
    ...subBestSellers,
  ];
  const productDetails = allProducts.find(item => item.id == id);

  const goToCart = () => {
    dispatch(addToCart(productDetails));
    navigate('Cart');
  };

  return (
    <>
      <Header
        headerIcon="chevron-back"
        onPressMenu={() => goBack()}
        color={Colors.primary}
        backgroundColor={'white'}
        onPressCart={() => navigate('Cart')}
      />
      <ScrollView style={styles.app}>
        <View style={styles.padding}>
          <Text style={styles.title}>{productDetails.title}</Text>
          <Text style={styles.description}>{productDetails.description}</Text>
        </View>
        <Slider images={productDetails.image} />
        <View style={styles.labelsContainer}>
          <Text style={{opacity: 0}}>
            <Icon
              name={productDetails.isfav ? 'heart' : 'heart-outline'}
              size={40}
            />
          </Text>
          <View style={styles.centerLabels}>
            <Text style={styles.limitedLabel}>For a limited time only</Text>
            <Text style={styles.boughtLabel}>
              <Icon name={'checkmark-circle'} size={15} />
              <Text>{productDetails.bought} Bought</Text>
            </Text>
          </View>
          <Text style={styles.favLabel}>
            <Icon
              name={productDetails.isfav ? 'heart' : 'heart'}
              size={40}
              color={productDetails.isfav ? 'orange' : 'gray'}
            />
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.optionsLabel}>
            <Icon name={'ios-list-sharp'} size={15} />
            Choose your option
          </Text>
          {productDetails.options.map((item, index) => (
            <View key={index} style={styles.optionsContainer}>
              <Text style={styles.textS}>
                Option {index + 1} : {item.name}
              </Text>
              <View style={styles.options}>
                <Text style={styles.textS}>Quantinty</Text>
                <Text style={styles.textBold}>AED {item.price}</Text>
              </View>
              <View style={styles.options}>
                <View style={{flexDirection: 'row'}}>
                  <IconButton icon={'minuscircleo'} color={Colors.primary} />
                  <Text style={{marginHorizontal: 10}}>0</Text>
                  <IconButton icon={'pluscircleo'} color={Colors.primary} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.discountLabel}>{item.discount}%</Text>
                  <Text
                    style={[
                      styles.textS,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    AED {item.prevPrice}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.hr}></View>
        {productDetails.notes.map((item, index) => (
          <View key={index} style={styles.padding}>
            <Text style={styles.tagsLabel}>{item.title}</Text>
            {item.desc.map((notes, index) => (
              <TagsText key={index} text={notes} />
            ))}
          </View>
        ))}
        <View style={styles.hr}></View>
        <View style={[styles.companyContainer, styles.padding]}>
          <Text style={[styles.textSM, {color: Colors.gray500}]}>
            The Company
          </Text>
          <Text style={styles.tagsLabel}>{productDetails.company.name}</Text>
          <View style={styles.companyDetails}>
            <Text style={styles.textSM}>{productDetails.company.name}</Text>
            <Text style={[styles.textSM, {color: Colors.gray500}]}>
              {productDetails.company.city}
            </Text>
            <Text style={styles.textSM}>{productDetails.company.phone}</Text>
            <Text style={[styles.textSM, {color: Colors.gray500}]}>
              {productDetails.company.place}
            </Text>
          </View>
        </View>
      </ScrollView>
      <CustomButton onPress={goToCart} color={Colors.primary}>
        Add to cart
      </CustomButton>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
  },
  padding: {
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 13,
    marginVertical: 20,
  },
  textSM: {
    lineHeight: 20,
    fontSize: 12,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.gray,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  centerLabels: {
    textAlign: 'center',
    marginVertical: 5,
  },
  limitedLabel: {
    color: Colors.primary,
    marginBottom: 5,
  },
  boughtLabel: {
    borderWidth: 1,
    borderColor: Colors.navyBlue,
    color: Colors.navyBlue,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
  },
  optionsLabel: {
    textTransform: 'uppercase',
    marginVertical: 5,
    color: Colors.gray500,
  },
  optionsContainer: {
    marginVertical: 5,
    paddingHorizontal: 7,
    borderLeftWidth: 3,
    borderLeftColor: Colors.gray500,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  hr: {
    marginVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: Colors.gray,
  },
  tagsLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 7,
  },
  indicator: {
    marginRight: 7,
  },
  companyDetails: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  textS: {
    fontSize: 15,
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  discountLabel: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    paddingTop: 1,
    paddingBottom: 3,
    paddingHorizontal: 5,
    color: 'white',
    marginHorizontal: 10,
  },
});
