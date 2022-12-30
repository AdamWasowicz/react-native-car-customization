import React from 'react';
import style from './style';
import useCarSettingsPage from './utils';
import { ScrollView} from 'react-native';


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