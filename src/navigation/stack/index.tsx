import { createStackNavigator } from '@react-navigation/stack';
import { APP, SECONDARY } from '../name_screen';
import App from '../../screens/App';
import Secondary from '../../screens/Secondary';

const MyStack = createStackNavigator();

const Stack = () => {
    return (
        <MyStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={APP}>
            <MyStack.Screen name={APP} component={App} />
            <MyStack.Screen name={SECONDARY} component={Secondary} />
        </MyStack.Navigator>
    )
};

export default Stack;