import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp as hp, widthToDp as wp } from '../util/ResponsiveUI'
import { COLORS, FONTS } from '../constants/styles'

const CustomHeader = ({ title, headerRight }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.goBack()}
            >
                <FontAwesome
                    name="angle-left"
                    style={styles.backIcon}
                />
            </Pressable>
            <Text style={styles.title}>{title}</Text>

            {headerRight ?
                headerRight
                : <View></View>}
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.PRIMARY,
        paddingVertical: hp(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(16),
        elevation: 5
    },
    backIcon: {
        fontSize: hp(36),
        color: COLORS.WHITE,

    },
    title: {
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_MEDIUM,
        fontSize: hp(16)
    }
})
