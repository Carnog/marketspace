import { Box, Checkbox, FlatList, HStack, Modal, ScrollView, Switch, Text, useTheme, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { MyAdsInfo } from "@components/MyAdsInfo";
import { SearchBar } from "@components/SearchBar";
import { AdCard } from "@components/AdCard";
import { useState } from "react";
import { X } from "phosphor-react-native";
import { Button } from "@components/Button";
import { Tag } from "@components/Tag";
import { LogBox, TouchableOpacity } from "react-native";
import { PaymentMethods } from "@components/PaymenMethods";
import { AceptChange } from "@components/AceptChange";

export function Home() {
    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    // const data = [];

    // const { colors } = useTheme();
    const gray4 = '#9F9BA1';

    const [showModal, setShowModal] = useState(false);
    const [filterNew, setFilterNew] = useState(false);
    const [filterUsed, setFilterUsed] = useState(false);
    const [acceptChange, setAcceptChange] = useState(false);
    const [groupValues, setGroupValues] = useState([]);

    function handleShowFilter() {
        setShowModal(true);
    }

    function handleFilterNew() {
        setFilterNew(!filterNew);
    }

    function handleFilterUsed() {
        console.log(groupValues);
        setFilterUsed(!filterUsed);
    }

    function handleToggle() {
        console.log(acceptChange);
        setAcceptChange(!acceptChange);
    }

    LogBox.ignoreLogs([
        "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320",
    ]);

    return (
        <VStack flex={1}>
            <VStack flex={1} paddingX={6} paddingTop={16}>
                <HomeHeader />

                <Text
                    fontFamily='marketspace_body'
                    fontSize='sm'
                    color='marketspace.gray.3'
                    mt={8}
                    mb={3}
                >
                    Seus produtos anunciados para venda
                </Text>
                <MyAdsInfo />

                <Text
                    fontFamily='marketspace_body'
                    fontSize='sm'
                    color='marketspace.gray.3'
                    mt={8}
                    mb={3}
                >
                    Compre produtos variados
                </Text>
                <SearchBar handleFilterPress={handleShowFilter} />

                <FlatList
                    flex={1}
                    data={data}
                    keyExtractor={(item) => item}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={true}
                    renderItem={() => (
                        <AdCard />
                    )}
                    _contentContainerStyle={{
                        pb: 20
                    }}
                />
            </VStack>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size='full'
                justifyContent='flex-end'
                animationPreset="slide"
            >
                <Modal.Content
                    paddingX={6}
                >
                    <HStack justifyContent='space-between' marginBottom={6} marginTop={12}>
                        <Text
                            fontFamily='marketspace_heading'
                            fontSize='xl'
                            color='marketspace.gray.1'
                        >
                            Filtrar anúncios
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <X weight='regular' size={24} color={gray4} />
                        </TouchableOpacity>
                    </HStack>
                    <Text
                        fontFamily='marketspace_heading'
                        fontSize='sm'
                        color='marketspace.gray.2'
                        mb={3}
                    >
                        Condição
                    </Text>
                    <HStack marginBottom={6}>
                        <Tag title="NOVO" isActive={filterNew} pr={2} onPress={handleFilterNew} />
                        <Tag title="USADO" isActive={filterUsed} onPress={handleFilterUsed} />
                    </HStack>


                    <AceptChange onToggle={handleToggle} value={acceptChange} />

                    <PaymentMethods onchange={setGroupValues} paymentMethodsValue={groupValues} />

                    <HStack mb={8}>
                        <HStack flex={1}>
                            <Button title="Resetar filtros" variant='cancel' />
                        </HStack>
                        <Box width={3}></Box>
                        <HStack flex={1}>
                            <Button title="Aplicar filtros" variant='secondary' />
                        </HStack>
                    </HStack>
                </Modal.Content>
            </Modal>

        </VStack>
    );
}