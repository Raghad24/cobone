import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

function IconButton({icon, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Text style={{color: color}}>
        <Icon name={icon} size={20} />
      </Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
