import { Dispatch, SetStateAction } from "react";
import { Checkbox, Text, useTheme } from "native-base";


type Props = {
    paymentMethodsValue: string[],
    onchange: Dispatch<SetStateAction<never[]>>
}

export function PaymentMethods({ paymentMethodsValue, onchange }: Props) {
    const { colors } = useTheme();

    return (
        <>
            <Text
                fontFamily='marketspace_heading'
                fontSize='sm'
                color='marketspace.gray.2'
                mb={3}
            >
                Meios de pagamento aceitos
            </Text>
            <Checkbox.Group onChange={onchange} value={paymentMethodsValue} mb={16}>
                <Checkbox
                    value="boleto"
                    borderColor='marketspace.gray.4'
                    mb={2}
                    _checked={{
                        style: {
                            backgroundColor: colors.marketspace.blue_light,
                            borderColor: colors.marketspace.blue_light
                        }
                    }}
                >
                    Boleto
                </Checkbox>
                <Checkbox
                    value="pix"
                    borderColor='marketspace.gray.4'
                    mb={2}
                    _checked={{
                        style: {
                            backgroundColor: colors.marketspace.blue_light,
                            borderColor: colors.marketspace.blue_light
                        }
                    }}
                >
                    Pix
                </Checkbox>
                <Checkbox
                    value="cash"
                    borderColor='marketspace.gray.4'
                    mb={2}
                    _checked={{
                        style: {
                            backgroundColor: colors.marketspace.blue_light,
                            borderColor: colors.marketspace.blue_light
                        }
                    }}
                >
                    Dinheiro
                </Checkbox>
                <Checkbox
                    value="card"
                    borderColor='marketspace.gray.4'
                    mb={2}
                    _checked={{
                        style: {
                            backgroundColor: colors.marketspace.blue_light,
                            borderColor: colors.marketspace.blue_light
                        }
                    }}
                >
                    Cartão de Crédito
                </Checkbox>
                <Checkbox
                    value="deposit"
                    borderColor='marketspace.gray.4'
                    mb={2}
                    _checked={{
                        style: {
                            backgroundColor: colors.marketspace.blue_light,
                            borderColor: colors.marketspace.blue_light
                        }
                    }}
                >
                    Deposito Bancário
                </Checkbox>
            </Checkbox.Group>
        </>
    );
}