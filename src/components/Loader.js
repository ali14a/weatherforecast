import React from 'react';
import { ANIMATION } from '../constants/images';
import AnimatedLottieView from 'lottie-react-native';

const Loader=()=>{
    return (
      <AnimatedLottieView source={ANIMATION.loader} loop autoPlay />
    );
}

export default Loader
