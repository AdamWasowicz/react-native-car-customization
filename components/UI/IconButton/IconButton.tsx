import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


interface IconButtonProps {
    onPress: () => void,
    size: number, 
    color: string, 
    name: typeof Ionicons.defaultProps,
    rootStyle?: {}
}


const IconButton: React.FC<IconButtonProps> = (props) => {

    return (
        <Pressable 
            onPress={props.onPress}
            style={({pressed}) => [pressed && style.pressed]}
        >
            <View style={[style.buttonContainer, props.rootStyle]}>
                <Ionicons
                    name={props.name}
                    size={props.size}
                    color={props.color}
                />
            </View>
        </Pressable>
    )
};

const style = StyleSheet.create({
    buttonContainer: {
        padding: 8,
    },

    pressed: {
        opacity: 0.75,
    },
});

export default IconButton;