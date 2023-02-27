import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    return (
        <Box bg='marketspace.gray.6' flex={1}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </Box>
    );
}