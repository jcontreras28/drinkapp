import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import MainScreen from './src/screens/MainScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loggedOutFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        Home: createStackNavigator({
            Main: MainScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
        History: HistoryScreen,
        Friends: FriendsScreen

    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
    );
};

