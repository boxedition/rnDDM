import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SECONDARY } from '../navigation/name_screen';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
    const navigation = useNavigation<any>();

    /**
     * Criar Variavel Name
     * names is expected to be a string
     */
    const [name, setName] = useState<string>("");

    useEffect(() => {
        console.log("[Info] name changed to:", name);
    }, [name])

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',

        }}>
            <Text style={{
                borderColor: 'blue',
                borderWidth: 1
            }}>Welcome to React Native on DDM.</Text>

            <TouchableOpacity onPress={() => navigation.navigate(SECONDARY, { name: name })}>
                <Text>Go to Secondary Screen</Text>
            </TouchableOpacity>

            <View style={{ flex: 1, borderColor: 'yellow' }}>
                <Text>Enter your name:</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    onChangeText={setName}
                    value={name}
                />
            </View>
        </View>
    )
};
export default App;
