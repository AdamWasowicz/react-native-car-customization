import darkColorScheme from "../../constants/style/darkColorScheme";
import lightColorScheme from "../../constants/style/lightColorScheme";
import { useAppSelector } from "../../redux/hooks";


export interface colorScheme {
    primary: string,
    primaryLight: string,
    primaryDark: string,
    accent: string,
    accentSecondary: string,

    textColor: string,
    background: string,

    buttonTextColor: string,
    button: string,
    buttonPressed: string,

    navigationBackground: string,
    navigationTextColor: string,
    bottomTabsActive: string,
    bottomTabsInactive: string,
    bottomTabsBorder: string,

    sliderMin: string,
    sliderMax: string,
    sliderThump: string,
}


const useAppColorScheme = (): colorScheme => {
    const theme = useAppSelector(state => state.app.colorTheme);

    switch (theme) {
        case 'light':
            return lightColorScheme;
        case 'dark':
            return darkColorScheme;
        default:
            return lightColorScheme;
    }
}


export default useAppColorScheme;