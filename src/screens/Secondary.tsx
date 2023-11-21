import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ISecondaryProps {
}

const Secondary: React.FunctionComponent<ISecondaryProps> = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            borderColor: 'orange',
            borderWidth: 1,
            justifyContent: 'center',

        }}>
            <Text style={{
                borderColor: 'green',
                borderWidth: 1
            }}>Secondary Screen.</Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
};
export default Secondary;
