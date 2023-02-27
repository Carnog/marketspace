import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input as NativeBaseInput, IInputProps, Box, useTheme, FormControl } from "native-base";
import { Eye } from "phosphor-react-native";

type inputTypes = 'text' | 'password';

type Props = IInputProps & {
    errorMessage?: string
}

export function Input({ type, errorMessage, isInvalid, ...rest }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const { colors } = useTheme();

    const invalid = !!errorMessage || isInvalid;

    function handlePasswordView() {
        setShowPassword(!showPassword);
        console.log(showPassword);
    }

    return (
        <FormControl isInvalid={invalid}>
            <Box
                w='full'
                alignItems='center'
                justifyContent='center'
                position='relative'
            >

                <NativeBaseInput
                    bg='marketspace.gray.7'
                    borderWidth='0'
                    px='4'
                    h='12'
                    fontFamily='marketspace_body'
                    fontSize='md'
                    placeholderTextColor='marketspace.gray.4'
                    color='marketspace.gray.1'
                    isInvalid={invalid}
                    _invalid={{
                        borderColor: 'marketspace.red_light',
                        borderWidth: 1
                    }}
                    _focus={{
                        bg: 'marketspace.gray.7',
                        borderWidth: 1,
                        borderColor: 'marketspace.gray.1',
                    }}
                    type={type === 'password' && !showPassword ? 'password' : 'text'}
                    {...rest}
                />
                {
                    type === 'password' ?
                        <TouchableOpacity
                            onPress={handlePasswordView}
                            style={{
                                position: 'absolute',
                                right: 16,
                                alignSelf: "center",
                                justifyContent: 'center'
                            }}
                        >
                            <Eye color={colors.marketspace.gray[3]} size='20' />
                        </TouchableOpacity>
                        :
                        <></>
                }

            </Box>
            <FormControl.ErrorMessage paddingLeft={4} mt={1} color='marketspace.red_light'>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}