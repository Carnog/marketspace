import { Box, IBoxProps, Text } from "native-base";

type Props = IBoxProps & {
    is_new: boolean,
}

export function CardTag({ is_new, ...rest }: Props) {
    return (
        <Box
            borderRadius='full'
            py={1}
            px={2}
            backgroundColor={is_new ? 'marketspace.blue' : 'marketspace.gray.2'}
            {...rest}
        >
            <Text
                color='white'
                fontFamily='marketspace_heading'
                fontSize='2xs'
            >
                {is_new ? 'NOVO' : 'USADO'}
            </Text>
        </Box>
    );
}