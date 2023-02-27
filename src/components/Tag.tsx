import { Box, HStack, IBoxProps, Text, useTheme } from "native-base";
import { XCircle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = IBoxProps & {
    title: string,
    isActive: boolean,
    onPress: () => void,
}

export function Tag({ isActive, title, onPress, ...rest }: Props) {
    const { colors } = useTheme();

    return (
        <Box
            {...rest}
        >
            <TouchableOpacity onPress={onPress}>
                <HStack
                    borderRadius='3xl'
                    alignItems='center'
                    justifyContent='center'
                    py={1}
                    px={4}
                    backgroundColor={isActive ? 'marketspace.blue_light' : 'marketspace.gray.5'}

                >
                    <Text
                        color={isActive ? 'white' : 'marketspace.gray.3'}
                        fontFamily='marketspace_heading'
                        fontSize='xs'

                    >
                        {title}
                    </Text>
                    {
                        isActive ?
                            <Box
                                borderRadius='full'
                                paddingLeft={1}
                            >
                                <XCircle weight='fill' size={16} color={colors.marketspace.gray[6]} />
                            </Box>
                            : <></>
                    }
                </HStack>
            </TouchableOpacity>
        </Box>
    );
}