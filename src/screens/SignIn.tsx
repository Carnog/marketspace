import { Box, Center, Heading, Image, ScrollView, Text, useTheme, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import smallLogo from '@assets/SmallLogo.png';
import avatar from '@assets/Avatar.png';
import { PencilSimpleLine } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type formDataProps = {
    name: string,
    email: string,
    tel: string,
    password: string,
    confirm_password: string,
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o email.').email('Email invalido.'),
    tel: yup.string().required('Insira um telefone'),
    password: yup.string().required('Infrome a senha.').min(6, 'A senha deve ter pelo menos 6 digitos.'),
    confirm_password: yup.string().required('Confirme a senha.')
        .oneOf([yup.ref('password'),], 'A confirmação da senha não confere'),
});

export function SignIn() {
    const { colors } = useTheme();

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<formDataProps>({
        defaultValues: {
            name: '',
            email: '',
            tel: '',
            password: '',
            confirm_password: '',
        },
        resolver: yupResolver(signUpSchema)
    });

    function handleSignUp(data: formDataProps) {
        console.log('object', data);
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <VStack paddingX={12}>
                    <Center>
                        <>
                            <Image
                                source={smallLogo}
                                alt='Small Logo'
                                mt={16}
                            />
                            <Heading
                                fontFamily='marketspace_heading'
                                fontSize='xl'
                                color='marketspace.gray.1'
                                mt={3}
                            >
                                Boas Vindas!
                            </Heading>
                            <Text
                                fontFamily='marketspace_body'
                                fontSize='sm'
                                color='marketspace.gray.2'
                                textAlign='center'
                                mt={2}
                            >
                                Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                            </Text>
                        </>
                        <Box
                            position='relative'
                            borderRadius='full'
                            borderWidth={3}
                            borderColor='marketspace.blue_light'
                            bg='marketspace.gray.5'
                            width='88'
                            height='88'
                            mt={8}
                        >
                            <Image
                                source={avatar}
                                alt='Avatar'
                            />
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    backgroundColor: colors.marketspace.blue_light,
                                    borderRadius: 100,
                                    padding: 4,
                                    bottom: 0,
                                    right: -8,
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            >
                                <PencilSimpleLine color={colors.marketspace.gray[5]} size='16' />
                            </TouchableOpacity>
                        </Box>

                        <VStack width='full' mt={4}>
                            <Box mb='4'>
                                <Controller
                                    control={control}
                                    name='name'
                                    rules={{
                                        required: 'Insira um nome'
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder='Nome'
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.name?.message}
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb='4'>
                                <Controller
                                    control={control}
                                    name='email'
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder='E-mail'
                                            keyboardType='email-address'
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.email?.message}
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb='4'>
                                <Controller
                                    control={control}
                                    name='tel'
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder='Telefone'
                                            keyboardType='phone-pad'
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.tel?.message}
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb='4'>
                                <Controller
                                    control={control}
                                    name='password'
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder='Senha'
                                            type="password"
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.password?.message}
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb='4'>
                                <Controller
                                    control={control}
                                    name='confirm_password'
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder='Confirmar senha'
                                            type="password"
                                            onChangeText={onChange}
                                            value={value}
                                            onSubmitEditing={handleSubmit(handleSignUp)}
                                            returnKeyType='send'
                                            errorMessage={errors.confirm_password?.message}
                                        />
                                    )}
                                />
                            </Box>

                            <Button title="Criar" variant='secondary' mt={2} onPress={handleSubmit(handleSignUp)} />
                        </VStack>
                    </Center>

                    <Center mt={12}>
                        <Text
                            color="marketspace.gray.2"
                            fontFamily="marketspace_body"
                            fontSize="sm"
                            marginBottom="4"
                        >
                            Já tem uma conta?
                        </Text>
                        <Button title='Ir para o login' variant='cancel' onPress={handleGoBack} />
                    </Center>
                </VStack>
            </ScrollView>
        </VStack>
    );
}