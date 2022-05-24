import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cartTotalSelector} from '../../redux/selectors';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const Header = ({
  headerIcon,
  onPressCart,
  onPressMenu,
  color,
  backgroundColor,
  logo,
  noCart,
}) => {
  const total = useSelector(cartTotalSelector);
  return (
    <>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.menu} onPress={onPressMenu}>
            <Text>
              <Icon name={headerIcon} size={30} color={color} />
            </Text>
          </TouchableOpacity>
          {logo && (
            <Image
              style={styles.logo}
              source={require('../../../assets/logo.jpg')}
            />
          )}
        </View>
        {!noCart && (
          <View>
            <TouchableOpacity
              style={styles.cartContainer}
              onPress={onPressCart}>
              <Text>
                <Icon name="md-cart-outline" size={30} color={color} />
              </Text>
              <Text style={[styles.total, {color: 'white'}]}>{total}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}></View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    marginRight: 20,
  },
  logoWrapper: {},
  logo: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  cartContainer: {
    flexDirection: 'row',
  },
  total: {
    fontSize: 12,
    borderRadius: 10,
    height: 20,
    position: 'absolute',
    top: 0,
    left: 22,
    width: 20,
    textAlign: 'center',
    backgroundColor: Colors.navyBlue,
  },
});
