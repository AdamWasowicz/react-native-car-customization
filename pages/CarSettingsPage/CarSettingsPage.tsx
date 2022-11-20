import React from 'react';
import style from './style';
import useCarSettingsPage from './utils';
import SliderWithCaption from '../../components/UI/SliderWithCaption';
import { ScrollView} from 'react-native';
import Button from '../../components/UI/Button';


const CarSettingsPage: React.FC = () => {

    const {
        renderContent
    } = useCarSettingsPage();

    
    return (
        <ScrollView style={style.root}>
            {
                renderContent()
            }
        </ScrollView>
    )
}

export default CarSettingsPage;