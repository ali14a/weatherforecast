import React, {Component} from 'react';
import {StyleSheet, Modal, View, ActivityIndicator} from 'react-native';
import { ANIMATION } from '../constants/images';
import AnimatedLottieView from 'lottie-react-native';
const Loader=()=>{
    return (
      <AnimatedLottieView source={ANIMATION.loader} autoPlay />
    );
}

const styles = StyleSheet.create({
  viewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader
