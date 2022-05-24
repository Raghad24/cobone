import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
const windowWidth = Dimensions.get('window').width;

const ProductCard = ({item}) => {
  const {navigate} = useNavigation();

  const cardStyle1 = (
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {id: item.id});
      }}>
      <View style={styles.productItem}>
        <View style={styles.productItemImg}>
          <Image
            style={styles.productItemImage}
            source={{uri: item.image[0]}}
          />
        </View>
        <View style={styles.productItemInfo}>
          <Text style={styles.productItemTitle}>{item.title}</Text>
          <Text style={styles.productItemTitle}>{item?.rating}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.productItemPrice}>AED</Text>
            <Text style={[styles.textS, {textDecorationLine: 'line-through'}]}>
              {item.prevPrice}
            </Text>
            <Text style={styles.productItemPrice}>{item.price}</Text>
            <Text style={styles.discountLabel}>{item.discount}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const cardStyle2 = (
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {id: item.id});
      }}>
      <View style={styles.productItem2}>
        <View style={styles.productItemImg2}>
          <Image
            style={styles.productItemImage2}
            source={{uri: item.image[0]}}
          />
        </View>
        <View style={styles.productItemInfo2}>
          <View style={styles.head}>
            <Text style={styles.productItemSubTitle2}>
              {item.company.place}
            </Text>
            <Text style={styles.productItemSubTitle2}>
              {item.bought} Bought
            </Text>
          </View>
          <Text style={styles.productItemTitle2}>{item.title}</Text>
          <Text style={styles.productItemTitle2}>{item?.rating}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.productItemPrice2}>AED</Text>
            <Text style={[styles.textS, {textDecorationLine: 'line-through'}]}>
              {item.prevPrice}
            </Text>
            <Text style={styles.productItemPrice2}>{item.price}</Text>
            <Text style={styles.discountLabel}>{item.discount}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const cardStyle3 = (
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {id: item.id});
      }}>
      <View style={styles.productItem3}>
        <View style={styles.productItemImg3}>
          <Image
            style={styles.productItemImage3}
            source={{uri: item.image[0]}}
          />
        </View>
        <View style={[styles.productItemInfo3, {backgroundColor: item.color}]}>
          <Text style={styles.productItemTitle3}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.productItemPrice3}>AED</Text>
            <Text style={styles.productItemPrice3}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {item.category == 'food'
        ? cardStyle2
        : item.category == 'subBestSellers'
        ? cardStyle3
        : cardStyle1}
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    height: 120,
    width: windowWidth - 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  prevPrice: {
    color: 'gray',
    textDecorationLine: 'line-through',
    fontSize: 15,
  },
  textS: {
    fontSize: 15,
  },
  productItemImg: {
    width: '50%',
  },
  productItemImage: {
    width: '100%',
    height: '100%',
  },
  productItemInfo: {
    width: '50%',
    padding: 10,
    justifyContent: 'space-between',
  },
  productItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  productItemPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 5,
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

  productItem2: {
    height: 220,
    width: windowWidth - 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  prevPrice2: {
    color: 'gray',
    textDecorationLine: 'line-through',
    fontSize: 15,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textS: {
    fontSize: 15,
  },
  productItemImg2: {
    width: '100%',
  },
  productItemImage2: {
    width: '100%',
    height: 110,
  },
  productItemInfo2: {
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
  },
  productItemTitle2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  productItemSubTitle2: {
    fontSize: 12,
    marginVertical: 9,
  },
  productItemPrice2: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 5,
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

  productItem3: {
    height: 220,
    width: windowWidth - 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  prevPrice3: {
    color: 'gray',
    textDecorationLine: 'line-through',
    fontSize: 15,
  },
  productItemImg3: {
    width: '100%',
  },
  productItemImage3: {
    width: '100%',
    height: 130,
  },
  productItemInfo3: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItemTitle3: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  productItemSubTitle3: {
    fontSize: 12,
    marginVertical: 9,
  },
  productItemPrice3: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});
