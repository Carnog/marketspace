import { Box, Center, Image, ScrollView, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import bigLogo from '@assets/BigLogo.png';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

const outerPaddingX = "12";
export function LogIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoToSignIn() {
        navigation.navigate('signIn');
    }

    return (
        <VStack flex={1} bg='white'>
            <ScrollView flex={1} height='full' contentContainerStyle={{ flexGrow: 1 }}>
                <VStack
                    flex={1}
                    flexGrow={1}
                    height='full'
                    bg='marketspace.gray.6'
                    paddingX={outerPaddingX}
                    paddingBottom="16"
                    borderBottomRightRadius="3xl"
                    borderBottomLeftRadius="3xl"
                    alignContent="center"
                >
                    <Center>
                        <Image
                            source={bigLogo}
                            alt='logo'
                            mt='16'
                        />
                        <Text
                            fontFamily='marketspace_body'
                            fontSize='sm'
                            textAlign='center'
                            color='marketspace.gray.2'
                            mt='16'
                            mb='4'
                        >
                            Acesse sua conta
                        </Text>

                        <Box mb='4'>
                            <Input
                                placeholder='E-mail'
                            />
                        </Box>
                        <Box mb='4'>
                            <Input
                                placeholder='Senha'
                                type='password'
                            />
                        </Box>
                        <Button title='Entrar' variant='primary' mt='4' onPress={handleGoToSignIn}/>
                    </Center>
                </VStack>
                <VStack
                    paddingTop="12"
                    paddingBottom="12"
                    paddingX={outerPaddingX}
                    bg="white"
                >
                    <Center>
                        <Text
                            color="marketspace.gray.2"
                            fontFamily="marketspace_body"
                            fontSize="sm"
                            marginBottom="4"
                        >
                            Ainda não tem acesso?
                        </Text>
                        <Button title='Criar uma conta' variant='cancel' />
                    </Center>
                </VStack>
            </ScrollView>
        </VStack>
    );
}