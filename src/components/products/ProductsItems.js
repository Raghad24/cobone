import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import {FlatList} from 'react-native-gesture-handler';

const ProductsItems = ({datas, rows}) => {
  const renderProductsItems = ({item}) => {
    return <ProductCard item={item} />;
  };
  const numColumns = Math.ceil(datas.length / 2);

  return (
    <View style={styles.root}>
      {rows ? (
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 20}}
          pagingEnabled>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={datas}
            renderItem={(item, index) => renderProductsItems(item, index)}
          />
        </ScrollView>
      ) : (
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          key={'flatlist'}
          data={datas}
          renderItem={(item, index) => renderProductsItems(item, index)}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ProductsItems;

const styles = StyleSheet.create({
  root: {},
});
