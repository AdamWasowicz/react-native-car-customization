import { colorScheme } from "../../hooks/useAppColorScheme";

const dark = {
    black: '#000000',
    darkGray: '#3a3a3a',
    lightBlueGray: '#3c3e55',
    darkBlueGray: '#1e202a',
    lightGray: '#b0b0b0',
    yellow: '#FFB703',
    orange: '#FB8500',
    white: 'white',
};


const darkColorScheme: colorScheme = {
    primary: dark.black,
    primaryLight: dark.lightGray,
    primaryDark: dark.darkGray,
    accent: dark.yellow,
    accentSecondary: dark.orange,

    textColor: dark.orange,
    background: dark.lightBlueGray,

    buttonTextColor: dark.black,
    button: dark.orange,
    buttonPressed: dark.yellow,

    navigationBackground: dark.darkBlueGray,
    navigationTextColor: dark.orange,
    bottomTabsActive: dark.orange,
    bottomTabsInactive: dark.lightGray,
    bottomTabsBorder: dark.orange,

    sliderMin: dark.orange,
    sliderMax: dark.white,
    sliderThump: dark.orange,
}


export default darkColorScheme;