import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSearch}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.gettyimages.com/vectors/large-image-of-the-united-arab-emirates-flag-vector-id472330093?s=2048x2048',
          }}
        />
        <Text>Search Country</Text>
      </View>
      <Icon name="search" size={22} color={Colors.primary} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  leftSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});
