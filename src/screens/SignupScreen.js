import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign Up for Cheers"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
                isSignin={false}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account?  Sign in instead"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
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
    }
});

export default SignupScreen;