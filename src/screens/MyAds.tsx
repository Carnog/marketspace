import { AdCard } from "@components/AdCard";
import { Header } from "@components/Header";
import { Box, Center, FlatList, Heading, HStack, Select, Text, VStack } from "native-base";
import { useState } from "react";

export function MyAds() {
    const [filterMyAds, setFilterMyAds] = useState('all');
    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    const numberOfAds = 9;


    return (
        <VStack flex={1} paddingX={6} >
            <Header title="Meus anúncios" rightButton="create" mt={16} mb={8} />

            <HStack marginBottom={5} alignItems='center'>
                <Box
                    flex={2}
                    justifyContent='flex-start'
                >
                    <Text
                        fontFamily='marketspace_body'
                        fontSize='sm'
                        color='marketspace.gray.2'
                    >
                        {numberOfAds} anúncios
                    </Text>
                </Box>

                <Select
                    flex={1}
                    placeholder="Todos"
                    selectedValue={filterMyAds}
                    onValueChange={itemValue => setFilterMyAds(itemValue)}
                >
                    <Select.Item label="Todos" value="all" />
                    <Select.Item label="Ativos" value="isActive" />
                    <Select.Item label="Inativos" value="isNotActive" />
                </Select>
            </HStack>

            <FlatList
                flex={1}
                data={data}
                keyExtractor={(item) => item}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={true}
                renderItem={() => (
                    <AdCard showUserAvatar={false} isActive={false} />
                )}
                _contentContainerStyle={{
                    pb: 20
                }}
            />

        </VStack >
    );
}