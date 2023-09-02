import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    tabletContainer: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    // fontWeight es incompatible con fontFamily, es decir que no puedo usar. al definir en el index pricipal algunos font para mi proyecto debo usar el fontFamily para accionarlos. Sino al usar fontWeight pisaria al fontFamily.
    title: {
        fontSize:  20,
        color: COLORS.text,
        fontFamily: 'Inter-Bold',
    },

    tabletTitle: {
        fontSize:  35,
        color: COLORS.text,
        fontFamily: 'Inter-Bold',
    },
});