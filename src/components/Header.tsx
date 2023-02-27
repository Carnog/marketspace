import { Box, HStack, Text } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { ArrowLeft, PencilSimpleLine, Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = IHStackProps & {
    title?: string
    showBackButton?: boolean,
    rightButton?: 'none' | 'edit' | 'create',
    handleBackButtonPress?: () => void,
    handleRightButtonPress?: () => void,
}

export function Header({
    title = '',
    showBackButton = false,
    rightButton = 'none',
    handleBackButtonPress,
    handleRightButtonPress,
    ...rest
}: Props) {
    const iconSize = 24;

    return (
        <HStack
            alignItems='center'
            justifyContent='space-between'
            {...rest}
        >
            {
                showBackButton ?
                    <TouchableOpacity onPress={handleBackButtonPress}>
                        <ArrowLeft size={iconSize} />
                    </TouchableOpacity>
                    :
                    <Box width={6}></Box>
            }
            <Text
                fontFamily='marketspace_heading'
                fontSize='xl'
            >
                {title}
            </Text>
            {
                rightButton === 'edit' ?
                    <TouchableOpacity onPress={handleRightButtonPress}>
                        <PencilSimpleLine size={iconSize} />
                    </TouchableOpacity>
                    :
                    rightButton === 'create' ?
                        <TouchableOpacity onPress={handleRightButtonPress}>
                            <Plus size={iconSize} />
                        </TouchableOpacity>
                        :
                        <Box width={6}></Box>
            }
        </HStack>
    );
}