import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
} from 'react-native';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, isSignin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('');
        return (
            <View style={styles.authForm}>
                <Text style={styles.header}>
                    {headerText}
                </Text>
                {isSignin ? null : <TextInput 
                    style={styles.textinput}
                    placeholder="username"
                    placeholderTextColor = "#aaaaaa"
                    underlineColorAndroid={'transparent'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Username" 
                    value={username} 
                    onChangeText={setUsername}
                />}
                <TextInput 
                    style={styles.textinput}
                    placeholder="Your email"
                    placeholderTextColor = "#aaaaaa"
                    underlineColorAndroid={'transparent'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.textinput}
                    placeholder="Your password"
                    placeholderTextColor = "#aaaaaa"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Password" 
                    value={password}
                    onChangeText={setPassword}
                />
                {isSignin ? null : <TextInput 
                    style={styles.textinput}
                    placeholder="Verify password"
                    placeholderTextColor = "#aaaaaa"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="VerifyPassword" 
                    value={verifyPassword}
                    onChangeText={setVerifyPassword}
                />}
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        console.log('Im pressed');
                        onSubmit({ email, password, verifyPassword, username, isSignin })}
                    }
                >
                    <Text style={styles.btntext}>{submitButtonText}</Text>
                </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
    authForm: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#ffffff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm