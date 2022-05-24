import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  removeItem,
} from '../../redux/features/cart/cartSlice';
import Colors from '../../constants/Colors';
import IconButton from '../UI/IconButton';

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const renderProductItems = ({item}) => {
    return (
      <View style={styles.productItem}>
        <View style={styles.productItemImg}>
          <Image
            style={styles.productItemImage}
            source={{uri: item.image[0]}}
          />
        </View>
        <View style={styles.productItemInfo}>
          <Text style={styles.productItemTitle}>{item.title}</Text>

          <Text style={{fontSize: 12}}>Select the quantity</Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <View style={{flexDirection: 'row'}}>
                <IconButton
                  onPress={() => {
                    if (item.quantity === 1) {
                      dispatch(removeItem(item.id));
                      return;
                    } else {
                      dispatch(decrement(item.id));
                    }
                  }}
                  icon={'minuscircleo'}
                  color={Colors.primary}
                />
                <Text style={{marginHorizontal: 10}}>{item.quantity}</Text>
                <IconButton
                  onPress={() => {
                    dispatch(increment(item.id));
                  }}
                  icon={'pluscircleo'}
                  color={Colors.primary}
                />
                <Text style={{marginHorizontal: 5}}>Quantity</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.cartItemRemove}>
              <IconButton
                icon={'delete'}
                color={'gray'}
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}></IconButton>
            </View>
            <Text style={styles.productItemPrice}>
              {item.currency} {item.quantity * item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {cart.length === 0 ? (
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
          YOUR CART IS EMPTY !!
        </Text>
      ) : (
        <View>
          <FlatList
            data={cart}
            renderItem={renderProductItems}
            keyExtractor={item => item.id}
            ListFooterComponentStyle={styles.footerStyle}
            ListFooterComponent={() => {
              return <View></View>;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default CartContainer;

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
