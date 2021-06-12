import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/styles";
import { 
    height,
     heightToDp as hp,
      width, 
      widthToDp as wp
     } from "../util/ResponsiveUI";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    }
})
