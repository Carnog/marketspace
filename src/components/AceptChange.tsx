import { Switch, Text } from "native-base";

type Props = {
    onToggle: () => void,
    value: boolean
}

export function AceptChange({ onToggle, value }: Props) {
    return (
        <>
            <Text
                fontFamily='marketspace_heading'
                fontSize='sm'
                color='marketspace.gray.2'
                mb={3}
            >
                Aceita Troca?
            </Text>
            <Switch
                alignSelf='flex-start'
                marginBottom={6}
                size='lg'
                onTrackColor='marketspace.blue_light'
                onThumbColor='marketspace.gray.7'
                offThumbColor='marketspace.gray.7'
                onToggle={onToggle}
                value={value}
            />
        </>
    );
}