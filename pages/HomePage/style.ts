import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    root: {
        padding: 10,
        flex: 1,

        borderTopColor: 'black',
        borderTopWidth: 1,
    },

    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },

    marginBottomSmall: {
        marginBottom: 16,
    },

    marginBottomMedium: {
        marginBottom: 32,
    },

    marginBottomBig: {
        marginBottom: 40,
    }
})

export default style;