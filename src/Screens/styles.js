import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/styles";
import {
  hp,
  wp
} from "../util/ResponsiveUI";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMsgText: {
    fontSize: hp(50),
    width: wp(300),
    color: COLORS.TEXT,
    marginBottom: hp(160),
    fontFamily: FONTS.GOOGLESANS_REGULAR,
  },
  retryBtn: {
    borderColor: COLORS.TEXT,
    borderWidth: hp(1)
  },
  btnText: {
    color: COLORS.Text,
    fontSize: hp(20),
    fontFamily: FONTS.GOOGLESANS_REGULAR,
    paddingHorizontal: wp(20),
    paddingVertical: hp(10)
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentTempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentTempText: {
    fontSize: wp(80),
    fontFamily: FONTS.GOOGLESANS_REGULAR
  },
  currentTempIcon: {
    height: hp(60),
    width: wp(60)
  },
  dailyTempIcon: {
    height: hp(30),
    width: wp(30)
  },
  cityText: {
    fontSize: wp(40),
    fontFamily: FONTS.GOOGLESANS_REGULAR
  },
  forecastContainer: {
    flex: 1,
    borderTopColor: COLORS.TEXT,
    borderTopWidth: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(40),
  },
  forecastText: {
    color: COLORS.GREY,
    fontSize: wp(20)
  }
})
