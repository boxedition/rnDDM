import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SECONDARY } from '../navigation/name_screen';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
    const navigation = useNavigation();

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

            <TouchableOpacity onPress={() => navigation.navigate(SECONDARY as never)}>
                <Text>Go to Secondary Screen</Text>
            </TouchableOpacity>
        </View>
    )
};
export default App;
