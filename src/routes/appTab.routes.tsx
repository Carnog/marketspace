import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, SignOut, Tag } from "phosphor-react-native";


import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { Icon, useTheme } from "native-base";
import { Platform } from "react-native";
import { LogOut } from "@screens/LogOut";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    const { colors } = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.marketspace.gray[1],
                tabBarInactiveTintColor: colors.marketspace.gray[5],
                tabBarStyle: {
                    backgroundColor: colors.marketspace.gray[7],
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? 72 : 72,
                }
            }}
        >
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon as={House({ weight: focused ? 'bold' : 'regular', color: color })} />
                    )
                }}
            />
            <Screen
                name='myAds'
                component={MyAds}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon as={Tag({ weight: focused ? 'bold' : 'regular', color: color })} />
                    )
                }}
            />
            <Screen
                name='logout'
                component={LogOut}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon as={SignOut({ weight: focused ? 'bold' : 'regular', color: colors.marketspace.red_light })} />
                    )
                }}
            />
        </Navigator>
    );
}