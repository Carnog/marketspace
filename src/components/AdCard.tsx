import { Box, Image, Text, useTheme, VStack } from "native-base";

import mockImage from '@assets/Image.png'
import avatar from '@assets/Avatar.png';
import { CardTag } from "./CardTag";
import { TouchableOpacity } from "react-native";

type Props = {
    isActive?: boolean,
    showUserAvatar?: boolean
}

export function AdCard({ isActive = true, showUserAvatar = true }: Props) {
    const hexBackgroundOpacity = '73'; //45%

    const gray1 = '#1A181B'+ hexBackgroundOpacity;

    const avatarSize = 6;

    return (
        <VStack
            w='48%'
            pb={6}
        >
            <TouchableOpacity>
                <Box position='relative'>
                    {showUserAvatar ?
                        <Image
                            source={avatar}
                            alt='Imagem do vendedor'
                            borderRadius='full'
                            position='absolute'
                            zIndex={1}
                            w={avatarSize}
                            h={avatarSize}
                            top={1}
                            left={1}
                        />
                        :
                        <></>
                    }
                    <CardTag
                        position='absolute'
                        top={1}
                        right={1}
                        zIndex={1}
                        is_new={false}
                    />
                    <Image
                        source={mockImage}
                        alt='Imagem do produto'
                        borderRadius='lg'
                        h='24'
                        pb='1'
                        resizeMode='contain'
                    />
                    {
                        isActive ? <></> : <>
                            <Box
                                position='absolute'
                                borderRadius='lg'
                                width='full'
                                height='full'
                                bg='marketspace.gray_1_op_45'
                                zIndex={2}
                            >
                            </Box>
                            <Text
                                fontFamily='marketspace_heading'
                                fontSize='sm'
                                color='marketspace.gray.7'
                                position='absolute'
                                bottom={2}
                                left={2}
                                zIndex={3}
                            >
                                ANÚNCIO DESATIVADO
                            </Text>
                        </>
                    }
                </Box>


                <Text
                    fontFamily='marketspace_body'
                    fontSize='sm'
                    color={isActive ? 'marketspace.gray.2' : 'marketspace.gray.4'}
                >
                    Bicicleta
                </Text>
                <Box></Box>
                <Text
                    fontFamily='marketspace_heading'
                    fontSize='md'
                    color={isActive ? 'marketspace.gray.1' : 'marketspace.gray.4'}
                >
                    R$ 120,00
                </Text>
            </TouchableOpacity>
        </VStack>
    );
}