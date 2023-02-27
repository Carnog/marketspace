import { Box, Divider, HStack, useTheme } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Input } from "./Input";

type Props = {
    handleFilterPress: (showModal: boolean) => void,
}

export function SearchBar({ handleFilterPress }: Props) {
    const { colors } = useTheme();

    return (
        <Box
            justifyContent='center'
            mb={6}
        >
            <Input
                bg='marketspace.gray.7'
                fontFamily='marketspace_body'
                fontSize='md'
                h='12'
                placeholder="Buscar anúncio"
                placeholderTextColor='marketspace.gray.4'
                paddingRight={24}
            />

            <HStack
                position='absolute'
                right={3}
            >
                <TouchableOpacity style={{ paddingHorizontal: 12 }}>
                    <MagnifyingGlass weight='regular' color={colors.marketspace.gray[2]} size={20} />
                </TouchableOpacity>
                <Divider orientation="vertical" />
                <TouchableOpacity
                    style={{ paddingHorizontal: 12 }}
                    onPress={() => handleFilterPress(true)}
                >
                    <Sliders weight='regular' color={colors.marketspace.gray[2]} size={20} />
                </TouchableOpacity>
            </HStack>
        </Box>
    );
}