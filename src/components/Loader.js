import React from 'react';
import { ANIMATION } from '../constants/images';
import AnimatedLottieView from 'lottie-react-native';
import { Modal } from 'react-native';

const Loader = ({ visible }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={false}
      presentationStyle={'fullScreen'}
    >
      <AnimatedLottieView
        source={ANIMATION.loader} loop autoPlay />
    </Modal>
  );
}

export default Loader
