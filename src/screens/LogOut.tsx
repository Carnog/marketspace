import { AceptChange } from "@components/AceptChange";
import { Button } from "@components/Button";
import { PaymentMethods } from "@components/PaymenMethods";
import { Tag } from "@components/Tag";
import { Box, HStack, Text } from "native-base";
import { X } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function LogOut() {
    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
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

    return (
        <>

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
        </>
    );
}