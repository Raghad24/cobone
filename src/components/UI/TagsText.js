import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TagsText = ({text, notPoint, options}) => {
  return (
    <View style={styles.tagsContainer}>
      {!notPoint && (
        <Text style={styles.indicator}>
          <Icon name={'chevron-forward'} size={13} />
        </Text>
      )}
      {!options && <Text style={styles.textSM}>{text}</Text>}
      {options && (
        <View>
          <Text style={styles.textSM}>Choose from the options below</Text>
          <Text style={styles.textSM}>{text}</Text>
        </View>
      )}
    </View>
  );
};
export default TagsText;

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 7,
    paddingRight: 20,
  },
  indicator: {
    marginRight: 7,
    marginTop: 3,
  },
  textSM: {
    fontSize: 13,
  },
});
