import React from "react";
import { View } from 'react-native';
import Slider from '@react-native-community/slider';
import SmallText from "../SmallText";
import MediumText from "../MediumText";
import useStyle from './style';
import useAppColorScheme from "../../../hooks/useAppColorScheme/useAppColorScheme";
import { useAppSelector } from "../../../redux/hooks";


interface SliderWithCaptionProps {
    caption: string,
    sliderCaption: string,
    onValueChange: (value: number) => void,
    minValue: number,
    maxValue: number,
    value: number,
}


const SliderWithCaption: React.FC<SliderWithCaptionProps> = (props) => {
    const appColorScheme = useAppColorScheme();
    const style = useStyle();

    return (
        <View style={style.root}>
            <MediumText style={style.center}>{props.caption}</MediumText>
            <SmallText style={style.center}>{props.sliderCaption}</SmallText>
            <Slider
                minimumValue={props.minValue}
                maximumValue={props.maxValue}
                minimumTrackTintColor={appColorScheme.sliderMin}
                maximumTrackTintColor={appColorScheme.sliderMax}
                thumbTintColor={appColorScheme.sliderThump}
                onValueChange={props.onValueChange}
                value={props.value}
            />
        </View>
    )
}


export default SliderWithCaption;