import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {cartTotalPriceSelector} from '../redux/selectors';
import Header from '../components/common/Header';
import Colors from '../constants/Colors';
import CustomButton from '../components/UI/CustomButton';
import CartContainer from '../components/cart/CartContainer';

const CartScreen = ({navigation: {goBack}}) => {
  const cart = useSelector(state => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        headerIcon="chevron-back"
        noCart
        onPressMenu={() => goBack()}
        color={'gray'}
        backgroundColor={'white'}
        onPressCart={() => navigation.navigate('Cart')}
      />

      <CartContainer />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
        }}>
        {cart.length === 0 ? null : (
          <View style={{paddingHorizontal: 0}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: Colors.gray,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <View style={{flex: 2}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total</Text>
                <Text style={styles.checkoutText}>
                  All prices shown are iclusive of VAT whre applicable
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'black',
                  flex: 1,
                }}>
                AED {totalPrice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 7,
              }}>
              <CustomButton
                style={{width: '50%', borderRadius: 20}}
                color={Colors.navyBlue}
                onPress={() => {
                  // dispatch(checkout());
                }}>
                NEXT
              </CustomButton>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  footerStyle: {
    height: 170,
  },
  productItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  productItemImg: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
  },
  productItemImage: {
    width: '100%',
    height: '100%',
  },
  productItemInfo: {
    width: '70%',
    padding: 10,
  },
  productItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productItemPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  addToCart: {
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemRemove: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
