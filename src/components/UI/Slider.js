import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../../constants/Colors';

const Slider = ({images}) => {
  return (
    <SliderBox
      images={images}
      dotColor={Colors.primary}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
    />
  );
};

export default Slider;
