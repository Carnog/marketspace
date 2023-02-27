import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, SignOut, Tag } from "phosphor-react-native";


import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { Icon, useTheme } from "native-base";
import { Platform } from "react-native";
import { AppTabRoutes } from "./appTab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    return (
        <Navigator
            initialRouteName="homeTabNav"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='homeTabNav'
                component={AppTabRoutes}
            />
        </Navigator>
    );
}