import { Box, HStack, Image, Text } from "native-base";

import avatar from '@assets/Avatar.png';

import { Button } from "./Button";

export function HomeHeader() {
    const avatarSize = 12;
    const name = 'Carlos';

    return (
        <HStack>
            <HStack flex={3}>
                <Image
                    source={avatar}
                    alt='Avatar do usuário'
                    height={avatarSize}
                    width={avatarSize}
                    mr={3}
                />
                <Box flex={1}>
                    <Text fontFamily="marketspace_body" fontSize='md'>
                        Boas vindas,
                    </Text>
                    <Box></Box>
                    <Text numberOfLines={1} fontFamily='marketspace_heading' fontSize='md' pr={1}>
                        {name}!
                    </Text>
                </Box>
            </HStack>


            <Button flex={2} title="Criar anúncio" variant='secondary' icon='plus' />
        </HStack>
    );
}