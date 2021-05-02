import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In to Cheers"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
                isSignin={true}
            />
            <NavLink style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}
                routeName="Signup"
                text="Dont have an account?  Sign up instead"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60
    },
    navlink: {
        color: "#dddddd"
    }
});

export default SigninScreen;