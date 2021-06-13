import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import Dashboard from './screens/Dashboard';
import { CustomStatusBar } from './common';
const Stack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            {/* <CustomStatusBar /> */}
            <Stack.Navigator
                initialRouteName={"Dashboard"}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
