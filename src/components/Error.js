import React from 'react';
import { Modal, View } from 'react-native';
import { COLORS } from '../constants/styles';
import {hp, wp } from '../util/ResponsiveUI';

const Error = ({ visible }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      statusBarTranslucent
      presentationStyle={'overFullScreen'}
    >
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'

      }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: wp(25),
            width: wp(50),
            height: wp(50),
            justifyContent: 'center',
          }}>
          
        </View>
      </View>
    </Modal>
  );
};
export default Error;
