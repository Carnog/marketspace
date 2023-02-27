import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        marketspace: {
            blue: '#364D9D',
            blue_light: '#647AC7',
            gray: {
                7: '#F7F7F8',
                6: '#EDECEE',
                5: '#D9D8DA',
                4: '#9F9BA1',
                3: '#5F5B62',
                2: '#3E3A40',
                1: '#1A181B',
            },
            gray_1_op_45:'#1A181B73',
            white: '#FFFFFF',
            red_light: '#EE7979',
        }
    },
    fonts: {
        marketspace_body: 'Karla_400Regular',
        marketspace_heading: 'Karla_700Bold',
    },
    fontSizes: {
        maketplace: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            '2xl': 24,
        }
    },
    sizes: {
        14: 56,
        33: 148
    }
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof THEME;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType { }
}