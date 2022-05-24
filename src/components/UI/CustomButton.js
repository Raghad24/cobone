import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

function CustomButton({children, color, onPress, style}) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                {backgroundColor: color},
                styles.pressed,
              ]
            : [styles.buttonInnerContainer, {backgroundColor: color}]
        }
        onPress={onPress}
        android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
