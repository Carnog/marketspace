import { Box, HStack, Text, useTheme } from "native-base";
import { ArrowRight, Tag } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export function MyAdsInfo() {
    const { colors } = useTheme();
    const hexBackgroundOpacity = '1A'; //10%
    const numberActiveAds = 4;

    return (
        <HStack
            bg={colors.marketspace.blue_light.valueOf() + hexBackgroundOpacity}
            paddingY={3}
            justifyContent='space-around'
            borderRadius='md'
        >
            <HStack>
                <HStack alignItems='center' justifyContent='center'>
                    <Tag weight='regular' color={colors.marketspace.blue} size={22} />
                    <Box marginLeft={4}>
                        <Text
                            fontFamily='marketspace_heading'
                            fontSize='xl'
                            color='marketspace.gray.2'
                        >
                            {numberActiveAds}
                        </Text>
                        <Box></Box>
                        <Text
                            fontFamily='marketspace_body'
                            fontSize='xs'
                            color='marketspace.gray.2'
                        >
                            anúncios ativos
                        </Text>
                    </Box>
                </HStack>
            </HStack>


            <HStack alignItems='center' justifyContent='flex-end' justifyItems='flex-end'>
                <TouchableOpacity>
                    <HStack alignItems='center'>
                        <Text
                            fontFamily='marketspace_heading'
                            fontSize='xs'
                            color='marketspace.blue'
                            marginRight={4}
                        >
                            Meus anúncios
                        </Text>
                        <ArrowRight weight='regular' size={16} color={colors.marketspace.blue} />
                    </HStack>
                </TouchableOpacity>
            </HStack>
        </HStack>
    );
}