import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../constants/styles';
import { statusBarHeight } from '../util/ResponsiveUI';
const GeneralStatusBar = ({ hidden }) => (
    <>
        {

            hidden ? <StatusBar hidden /> :
                <View style={styles.statusBar}>
                    <StatusBar translucent barStyle={"light-content"} backgroundColor={COLORS.PRIMARY} />
                </View>
        }
    </>
)
export default GeneralStatusBar;

const styles = StyleSheet.create({
    statusBar: {
        height: statusBarHeight(),
        backgroundColor: COLORS.PRIMARY,
        elevation: 4
    }
})