import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ISecondaryProps {
    route?: any,
}

const Secondary: React.FunctionComponent<ISecondaryProps> = (props) => {
    const navigation = useNavigation();
    const { name } = props.route.params;

    useEffect(() => {
        console.log("Do i have a name? ", name);
    }, [name]);

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
            {
                /**
                 * Conditional Render
                 */
                name !== "" && (
                    <Text>{name}</Text>
                )
            }
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
};
export default Secondary;
