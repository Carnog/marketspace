import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LogIn } from "@screens/LogIn";
import { SignIn } from "@screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

type AuthRoutes = {
    logIn: undefined,
    signIn: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="logIn"
                component={LogIn}
            />
            <Screen
                name="signIn"
                component={SignIn}
            />
        </Navigator>
    );
}