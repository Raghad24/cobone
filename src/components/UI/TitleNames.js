import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TitleNames = ({children, view}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
      {view && (
        <View style={styles.btn}>
          <Text style={styles.btntext}> View All</Text>
        </View>
      )}
    </View>
  );
};

export default TitleNames;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  btn: {
    backgroundColor: '#d2d4d2',
    color: 'black',
    width: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
  },
  btntext: {
    fontSize: 11,
  },
});
