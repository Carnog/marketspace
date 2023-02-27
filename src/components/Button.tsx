import { Box, Button as NativeBaseButton, HStack, IButtonProps, Text, useTheme } from "native-base";
import { ArrowLeft, Plus, Power, Tag, TrashSimple, WhatsappLogo } from "phosphor-react-native";

type variantValues = 'primary' | 'secondary' | 'cancel';
type iconTypes = 'none' | 'left' | 'plus' | 'power' | 'tag' | 'trash' | 'whatsapp';

type variantStyles = {
    buttonColor: string,
    textColor: string,
}

type Props = IButtonProps & {
    title: string,
    variant?: variantValues,
    icon?: iconTypes,
};

export function Button({ title, variant = 'primary', icon = 'none', ...rest }: Props) {
    const { colors } = useTheme();
    const styles = setStyle(variant, colors);

    function setStyle(variant: variantValues, colors: any): variantStyles {
        switch (variant) {
            case 'secondary':
                return {
                    buttonColor: colors.marketspace.gray[1],
                    textColor: colors.marketspace.gray[7],
                };
            case 'cancel':
                return {
                    buttonColor: colors.marketspace.gray[5],
                    textColor: colors.marketspace.gray[2],
                };
            case 'primary':
            default:
                return {
                    buttonColor: colors.marketspace.blue_light,
                    textColor: colors.marketspace.gray[7]
                };
        }
    }

    function setIcon(icon: iconTypes) {
        switch (icon) {
            case 'left':
                return (
                    <ArrowLeft color={styles.textColor} size='16' />
                )
            case 'power':
                return (
                    <Power color={styles.textColor} size='16' />
                )
            case 'plus':
                return (
                    <Plus color={styles.textColor} size='16' />
                )
            case 'tag':
                return (
                    <Tag color={styles.textColor} size='16' />
                )
            case 'trash':
                return (
                    <TrashSimple color={styles.textColor} size='16' />
                )
            case 'whatsapp':
                return (
                    <WhatsappLogo color={styles.textColor} size='16' weight="fill" />
                )
            case 'none':
            default:
                return <></>
        }
    }

    return (
        <NativeBaseButton
            w="full"
            bg={styles.buttonColor}
            paddingTop="3"
            paddingBottom="3"
            _pressed={{
                opacity: 75,
                bg: styles.buttonColor
            }}
            {...rest}
        >
            <HStack textAlign='center' justifyContent='center' alignItems='center'>
                <Box mr={icon !== 'none' ? 2 : 0}>
                    {setIcon(icon)}
                </Box>
                <Text
                    fontFamily="marketspace_heading"
                    fontSize="sm"
                    color={styles.textColor}
                >
                    {title}
                </Text>
            </HStack>
        </NativeBaseButton>
    );
}