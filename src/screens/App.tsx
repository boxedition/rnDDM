import React from 'react';
import { Text, View } from 'react-native';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
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
        </View>
    )
};
export default App;
