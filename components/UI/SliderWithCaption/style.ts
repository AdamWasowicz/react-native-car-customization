import { StyleSheet } from "react-native";


const useStyle = () => {
    return StyleSheet.create({
        root: {
            marginBottom: 40,
        },

        center: {
            textAlign: 'center'
        },

        slider: {
            height: 50,
        }

    })
}

export default useStyle;