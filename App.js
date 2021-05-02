import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import DrinkDetailScreen from './src/screens/DrinkDetailScreen';
import BuyDrinkScreen from './src/screens/BuyDrinkScreen';
import MainScreen from './src/screens/MainScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as DrinksProvider } from './src/context/DrinksContext';

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loggedOutFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        Home: createStackNavigator({
            Main: MainScreen,
            DrinkDetail: DrinkDetailScreen,
            BuyDrink: BuyDrinkScreen
        }),
        Account: AccountScreen,
        History: HistoryScreen,
        Friends: FriendsScreen

    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <DrinksProvider>
            <AuthProvider>
                <App ref={(navigator) => {setNavigator(navigator)}}/>
            </AuthProvider>
        </DrinksProvider>
    );
};

