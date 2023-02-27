import { Center, Spinner } from "native-base";

export function Loading(){
    return (
        <Center flex={1} bg="marketspace.gray.6">
            <Spinner color="marketspace.blue_light"/>
        </Center>
    );
}